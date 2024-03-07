// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-363b6.firebaseapp.com",
  projectId: "mern-estate-363b6",
  storageBucket: "mern-estate-363b6.appspot.com",
  messagingSenderId: "771717993892",
  appId: "1:771717993892:web:f5db236c91036c7d919d31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);