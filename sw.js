const CACHE_NAME = 'baremos-v5.8.38';
const LOCAL_ASSETS = [
  './', 
  './index.html', 
  './styles.css?v=5.8.38', 
  './app.js?v=5.8.38', 
  './db.js?v=5.8.38',
  './firebase.js?v=5.8.38',
  './baremo.json', 
  './manifest.json?v=5.8.38', 
  './version.json', 
  './VERSION',
  './icons/favicon.png',
  './icons/icon-48.png?v=5.8.38',
  './icons/icon-72.png?v=5.8.38',
  './icons/icon-96.png?v=5.8.38',
  './icons/icon-128.png?v=5.8.38',
  './icons/icon-144.png?v=5.8.38',
  './icons/icon-152.png?v=5.8.38',
  './icons/icon-180.png?v=5.8.38',
  './icons/icon-192.png?v=5.8.38', 
  './icons/icon-384.png?v=5.8.38',
  './icons/icon-512.png?v=5.8.38',
  './maps/trujui.png', './maps/cuartelv.png', './maps/moreno.png',
  './maps/gralrodriguez.png', './maps/tigre.png', './maps/sanmartin.png',
  './maps/olivos.png', './maps/pilarescobar.png'
];
const CDN_ASSETS = [
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
  'https://cdn.jsdelivr.net/npm/jspdf-autotable@3.6.0/dist/jspdf.plugin.autotable.min.js',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(async cache => {
    for (const url of LOCAL_ASSETS) {
      try { await cache.add(url); } catch (err) { console.warn('[SW Local]', url, err); }
    }
    for (const url of CDN_ASSETS) {
      try { const r = await fetch(url); if (r.ok) await cache.put(url, r); } catch (err) { console.warn('[SW CDN]', url, err); }
    }
  }));
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
  
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(r => {
        const c = r.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request.url, c));
        return r;
      }).catch(async () => {
        const cached = await caches.match('./index.html') || await caches.match('./');
        if (cached) return cached;
        return new Response('Modo sin conexión activo - BAREMOS PWA', {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      })
    );
    return;
  }
  
  // ESTRATEGIA ESTRICTA: NUNCA CACHEAR LOS ARCHIVOS DE VERSIÓN
  if (url.pathname.endsWith('version.json') || url.pathname.endsWith('VERSION')) {
     event.respondWith(fetch(event.request, { cache: 'no-store' }));
     return;
  }
  
  // Network-first for same-origin JS and CSS to ensure instant updates
  if (url.origin === location.origin && (url.pathname.endsWith('.js') || url.pathname.endsWith('.css'))) {
    event.respondWith(
      fetch(event.request).then(r => {
        if (r.ok) {
          const c = r.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
        }
        return r;
      }).catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        throw new Error('Offline and not in cache');
      })
    );
    return;
  }

  // Cache First con Network Fallback para recursos estáticos y CDN
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(r => {
        if (r.ok && (url.origin === location.origin || CDN_ASSETS.includes(event.request.url))) {
          const c = r.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
        }
        return r;
      }).catch(err => {
        console.warn('[SW Offline Fetch]', event.request.url);
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
        icon: './icons/icon-192.png?v=5.8.35',
        badge: './icons/icon-192.png?v=5.8.35',
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
      for (const client) {
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
      icon: './icons/icon-192.png?v=5.8.35',
      badge: './icons/icon-192.png?v=5.8.35',
      vibrate: [200, 100, 200],
      tag: 'recordatorio-cierre-jornada',
      renotify: true,
      data: { url: './' }
    })
  );
});
