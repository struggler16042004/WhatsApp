import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBJQrqLp_z5MzZoAZI7aJr40aesAvzWHQ",
    authDomain: "whatsapp-2-e7e5c.firebaseapp.com",
    projectId: "whatsapp-2-e7e5c",
    storageBucket: "whatsapp-2-e7e5c.appspot.com",
    messagingSenderId: "42145648963",
    appId: "1:42145648963:web:a972cc3755bbb9e68a5ff6"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };