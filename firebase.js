// firebase.js - Integración modular de Firebase Firestore y Auth
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut as fbSignOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, getDocFromServer, getDocs, collection, query, where } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js';

let firebaseConfig = null;
let app = null;
let auth = null;
let db = null;
let isInitialized = false;

export const OperationType = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  LIST: 'list',
  GET: 'get',
  WRITE: 'write',
};

export function handleFirestoreError(error, operationType, path) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid || null,
      email: auth?.currentUser?.email || null,
      emailVerified: auth?.currentUser?.emailVerified || null,
      isAnonymous: auth?.currentUser?.isAnonymous || null,
      providerInfo: auth?.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function initFirebase() {
  if (isInitialized) return { app, auth, db };
  try {
    const res = await fetch('./firebase-applet-config.json?v=5.8.39');
    firebaseConfig = await res.json();
    
    app = initializeApp(firebaseConfig);
    db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
    auth = getAuth(app);
    isInitialized = true;

    // Conexión inicial de verificación
    testConnection();

    return { app, auth, db };
  } catch (err) {
    console.warn('[Firebase Init Warning]', err);
    return null;
  }
}

export async function testConnection() {
  if (!db) return;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase: El cliente se encuentra actualmente offline.');
    }
  }
}

export async function loginWithGoogle() {
  if (!auth) await initFirebase();
  if (!auth) throw new Error('Firebase no está inicializado');
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, 'auth/google');
  }
}

export async function logoutFirebase() {
  if (auth) {
    await fbSignOut(auth);
  }
}

export async function syncJornadaToCloud(jornada) {
  if (!db || !auth?.currentUser) return null;
  const path = `jornadas/${jornada.id || Date.now()}`;
  try {
    await setDoc(doc(db, 'jornadas', String(jornada.id || Date.now())), {
      id: String(jornada.id || Date.now()),
      userId: auth.currentUser.uid,
      fecha: jornada.fecha || '',
      cerrada: !!jornada.cerrada,
      horaCierre: jornada.horaCierre || '',
      zona: jornada.zona || '',
      totalPuntos: Number(jornada.totalPuntos || 0),
      totalPesos: Number(jornada.totalPesos || 0),
      createdAt: jornada.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export { app, auth, db, onAuthStateChanged };
