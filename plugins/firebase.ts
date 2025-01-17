import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyCe6ghbRndr-K5nwwug8AfjB-w-_KFCsoU",
  authDomain: "n11-webproject-2493b.firebaseapp.com",
  projectId: "n11-webproject-2493b",
  storageBucket: "n11-webproject-2493b.firebasestorage.app",
  messagingSenderId: "987891418614",
  appId: "1:987891418614:web:5a0f9b9d08850d9271b3d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app); 
const auth = getAuth(app);


// Nuxt plugin olarak export edin
export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebase: app,
      storage,
      db,
      auth
    }
  };
});