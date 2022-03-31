import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN2dYXzIr9HJFW5z_ZT6672FEj3dqq6F8",
  authDomain: "bm-gamestore.firebaseapp.com",
  projectId: "bm-gamestore",
  storageBucket: "bm-gamestore.appspot.com",
  messagingSenderId: "318544594782",
  appId: "1:318544594782:web:557fb1b83fd467aee2b1cf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);