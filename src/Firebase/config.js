import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtP2zw0rwI78-lyM3zgOebapAbb5_zUUk",
  authDomain: "portfolio-b23c5.firebaseapp.com",
  projectId: "portfolio-b23c5",
  storageBucket: "portfolio-b23c5.appspot.com",
  messagingSenderId: "545823328957",
  appId: "1:545823328957:web:3afc7fada56196816ac5d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
