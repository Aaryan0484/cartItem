import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp_L2adCcFMYg8hngdKkMQDox1JrM4dSo",
  authDomain: "cart-82316.firebaseapp.com",
  projectId: "cart-82316",
  storageBucket: "cart-82316.appspot.com",
  messagingSenderId: "182180872621",
  appId: "1:182180872621:web:9dd4be00c8bb5eef35e124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);