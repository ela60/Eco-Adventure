// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvDRaZvuh_DjvRtCs4Ktsdb1IKSSSC-vQ",
  authDomain: "eco-adventure-dd2f7.firebaseapp.com",
  projectId: "eco-adventure-dd2f7",
  storageBucket: "eco-adventure-dd2f7.firebasestorage.app",
  messagingSenderId: "938004261421",
  appId: "1:938004261421:web:bf90796cb8f024d16a26a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

// Export the app instance in case it's needed elsewhere
export default app;
