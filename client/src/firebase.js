// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fd314.firebaseapp.com",
  projectId: "mern-estate-fd314",
  storageBucket: "mern-estate-fd314.appspot.com",
  messagingSenderId: "870983883707",
  appId: "1:870983883707:web:4753a5a398d22b5dad029e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
