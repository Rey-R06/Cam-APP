// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBtfuhym_nrcKET64gznpF1rWdOgkDCSOc",
  authDomain: "cam-talk-64eaa.firebaseapp.com",
  projectId: "cam-talk-64eaa",
  storageBucket: "cam-talk-64eaa.firebasestorage.app",
  messagingSenderId: "247667806482",
  appId: "1:247667806482:web:d0ac1696f5f7a49a9623cb",
  measurementId: "G-ZKN2VY25L1",
  databaseURL: "https://cam-talk-64eaa-default-rtdb.firebaseio.com/"
};

// Evitar error de duplicate-app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getDatabase(app);
