// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBSE_API_KEY,
  authDomain: "mern-blog-3a291.firebaseapp.com",
  projectId: "mern-blog-3a291",
  storageBucket: "mern-blog-3a291.appspot.com",
  messagingSenderId: "421368264505",
  appId: "1:421368264505:web:0088bfeb57b2da7a0d1ae8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);