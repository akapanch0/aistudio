const DB_NAME = 'BaremosDB';
const DB_VERSION = 1;
let db;
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('config')) d.createObjectStore('config', { keyPath: 'key' });
      if (!d.objectStoreNames.contains('usuarios')) d.createObjectStore('usuarios', { keyPath: 'legajo' });
      if (!d.objectStoreNames.contains('baremo')) d.createObjectStore('baremo', { keyPath: 'baremo' });
      if (!d.objectStoreNames.contains('jornadas')) {
        const st = d.createObjectStore('jornadas', { keyPath: 'id', autoIncrement: true });
        st.createIndex('legajo', 'legajo', { unique: false });
        st.createIndex('fechaLegajo', ['fecha', 'legajo'], { unique: false });
      }
      if (!d.objectStoreNames.contains('combustible')) {
        const st = d.createObjectStore('combustible', { keyPath: 'id', autoIncrement: true });
        st.createIndex('legajo', 'legajo', { unique: false });
      }
      if (!d.objectStoreNames.contains('quincenas')) {
        const st = d.createObjectStore('quincenas', { keyPath: 'id', autoIncrement: true });
        st.createIndex('legajo', 'legajo', { unique: false });
      }
    };
    req.onsuccess = e => { db = e.target.result; resolve(db); };
    req.onerror = e => reject(e.target.error);
  });
}
function dbGet(store, key) { return new Promise((res, rej) => { const r = db.transaction(store).objectStore(store).get(key); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
function dbGetAll(store) { return new Promise((res, rej) => { const r = db.transaction(store).objectStore(store).getAll(); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
function dbPut(store, data) { return new Promise((res, rej) => { const r = db.transaction(store, 'readwrite').objectStore(store).put(data); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
function dbAdd(store, data) { return new Promise((res, rej) => { const r = db.transaction(store, 'readwrite').objectStore(store).add(data); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
function dbDelete(store, key) { return new Promise((res, rej) => { const r = db.transaction(store, 'readwrite').objectStore(store).delete(key); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
function dbGetByIndex(store, idx, key) { return new Promise((res, rej) => { const r = db.transaction(store).objectStore(store).index(idx).getAll(key); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
async function exportAllDB() {
  const d = { config: await dbGetAll('config'), usuarios: await dbGetAll('usuarios'), baremo: await dbGetAll('baremo'), jornadas: await dbGetAll('jornadas'), combustible: await dbGetAll('combustible'), quincenas: await dbGetAll('quincenas') };
  return d;
}
async function importAllDB(data) {
  if (data.config) for (const i of data.config) await dbPut('config', i);
  if (data.usuarios) for (const i of data.usuarios) await dbPut('usuarios', i);
  if (data.baremo) for (const i of data.baremo) await dbPut('baremo', i);
  if (data.jornadas) for (const i of data.jornadas) await dbPut('jornadas', i);
  if (data.combustible) for (const i of data.combustible) await dbPut('combustible', i);
  if (data.quincenas) for (const i of data.quincenas) await dbPut('quincenas', i);
}
