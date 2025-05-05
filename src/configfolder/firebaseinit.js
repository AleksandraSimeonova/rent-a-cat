import { initializeApp } from "../../node_modules/firebase/firebase-app.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZeeRjIGeoBju0m5EkrvYbtL6twG2BVoI",
  authDomain: "rent-a-cat-softuni-jsapp.firebaseapp.com",
  projectId: "rent-a-cat-softuni-jsapp",
  storageBucket: "rent-a-cat-softuni-jsapp.firebasestorage.app",
  messagingSenderId: "15355977723",
  appId: "1:15355977723:web:c545b88674224c9af7f55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);