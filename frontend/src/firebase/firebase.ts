import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKqlfPOn0Fn1uUmiHch-brrKT7gFRuh4Y",
  authDomain: "cryptoolympia.firebaseapp.com",
  projectId: "cryptoolympia",
  storageBucket: "cryptoolympia.firebasestorage.app",
  messagingSenderId: "359116637321",
  appId: "1:359116637321:web:ab11c9b2a2f351265c3258"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
