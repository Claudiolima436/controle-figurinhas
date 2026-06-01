import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUgvuefFWoU8jE08BmM2OzPQyTzKO1tjA",
  authDomain: "album-dig-copa-2026-pedrinho01.firebaseapp.com",
  projectId: "album-dig-copa-2026-pedrinho01",
  storageBucket: "album-dig-copa-2026-pedrinho01.firebasestorage.app",
  messagingSenderId: "757460864724",
  appId: "1:757460864724:web:783b5b38f31e22b003b541"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);