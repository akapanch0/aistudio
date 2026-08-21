const CACHE_NAME = 'baremos-v5.8.39';
const LOCAL_ASSETS = [
  './', 
  './index.html', 
  './styles.css',
  './styles.css?v=5.8.39', 
  './app.js',
  './app.js?v=5.8.39', 
  './db.js',
  './db.js?v=5.8.39',
  './firebase.js',
  './firebase.js?v=5.8.39',
  './firebase-applet-config.json',
  './firebase-applet-config.json?v=5.8.39',
  './baremo.json', 
  './manifest.json',
  './manifest.json?v=5.8.39', 
  './version.json', 
  './VERSION',
  './icons/favicon.png',
  './icons/icon-48.png',
  './icons/icon-48.png?v=5.8.39',
  './icons/icon-72.png',
  './icons/icon-72.png?v=5.8.39',
  './icons/icon-96.png',
  './icons/icon-96.png?v=5.8.39',
  './icons/icon-128.png',
  './icons/icon-128.png?v=5.8.39',
  './icons/icon-144.png',
  './icons/icon-144.png?v=5.8.39',
  './icons/icon-152.png',
  './icons/icon-152.png?v=5.8.39',
  './icons/icon-180.png',
  './icons/icon-180.png?v=5.8.39',
  './icons/icon-192.png',
  './icons/icon-192.png?v=5.8.39', 
  './icons/icon-384.png',
  './icons/icon-384.png?v=5.8.39',
  './icons/icon-512.png',
  './icons/icon-512.png?v=5.8.39',
  './maps/trujui.png',
  './maps/cuartelv.png',
  './maps/moreno.png',
  './maps/gralrodriguez.png',
  './maps/tigre.png',
  './maps/sanmartin.png',
  './maps/olivos.png',
  './maps/pilarescobar.png'
];

const CDN_ASSETS = [
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
  'https://cdn.jsdelivr.net/npm/jspdf-autotable@3.6.0/dist/jspdf.plugin.autotable.min.js',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
  'https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const url of LOCAL_ASSETS) {
        try { await cache.add(url); } catch (err) { console.warn('[SW Local Precache]', url, err); }
      }
      for (const url of CDN_ASSETS) {
        try {
          const r = await fetch(url, { mode: 'cors' });
          if (r.ok) await cache.put(url, r);
        } catch (err) {
          console.warn('[SW CDN Precache]', url, err);
        }
      }
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Navegación (HTML Principal)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(r => {
        if (r.ok) {
          const c = r.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
        }
        return r;
      }).catch(async () => {
        const cached = await caches.match('./index.html') || await caches.match('./') || await caches.match('index.html');
        if (cached) return cached;
        return new Response('<!DOCTYPE html><html><head><meta charset="utf-8"><title>BAREMOS Offline</title></head><body>Modo sin conexión activo - BAREMOS PWA</body></html>', {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      })
    );
    return;
  }

  // Network First para archivos de versión
  if (url.pathname.endsWith('version.json') || url.pathname.endsWith('VERSION')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(async () => {
        const cached = await caches.match(event.request);
        return cached || new Response('{"version":"5.8.39"}', { headers: { 'Content-Type': 'application/json' } });
      })
    );
    return;
  }

  // Cache-First con fallback a red y actualización en segundo plano
  event.respondWith(
    caches.match(event.request).then(async cached => {
      if (cached) {
        // En background si hay red intentamos actualizar
        if (navigator.onLine && (url.origin === location.origin || CDN_ASSETS.includes(event.request.url))) {
          fetch(event.request).then(r => {
            if (r && r.ok) {
              const c = r.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
            }
          }).catch(() => {});
        }
        return cached;
      }

      // Si no coincide exacto, intentar con ignoreSearch
      const looseCached = await caches.match(event.request, { ignoreSearch: true });
      if (looseCached) return looseCached;

      // Fallback a Network
      return fetch(event.request).then(r => {
        if (r.ok && (url.origin === location.origin || CDN_ASSETS.includes(event.request.url))) {
          const c = r.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
        }
        return r;
      }).catch(async err => {
        console.warn('[SW Offline Fallback]', event.request.url);
        // Último intento: buscar coincidencia suelta en caché
        const fallback = await caches.match(event.request, { ignoreSearch: true });
        if (fallback) return fallback;
        throw err;
      });
    })
  );
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }
  
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, tag, data } = event.data;
    event.waitUntil(
      self.registration.showNotification(title || '⚠️ Recordatorio: Cierre de Jornada', {
        body: body || 'Recordá registrar todas tus tareas y cerrar la jornada antes de terminar el día laboral.',
        icon: './icons/icon-192.png?v=5.8.39',
        badge: './icons/icon-192.png?v=5.8.39',
        vibrate: [200, 100, 200],
        tag: tag || 'recordatorio-cierre-jornada',
        renotify: true,
        data: data || { url: './' }
      })
    );
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./');
      }
    })
  );
});

self.addEventListener('push', event => {
  let data = {
    title: '⚠️ Recordatorio: Cierre de Jornada',
    body: 'Recordá registrar todas tus tareas y cerrar la jornada antes de terminar el día laboral.'
  };
  if (event.data) {
    try {
      const parsed = event.data.json();
      data = Object.assign(data, parsed);
    } catch(e) {
      data.body = event.data.text();
    }
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: './icons/icon-192.png?v=5.8.39',
      badge: './icons/icon-192.png?v=5.8.39',
      vibrate: [200, 100, 200],
      tag: 'recordatorio-cierre-jornada',
      renotify: true,
      data: { url: './' }
    })
  );
});
