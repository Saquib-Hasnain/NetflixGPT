// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMdXivn3i0YbqSuVCopKB-pKOXa4Yj6wE",
  authDomain: "netflixgpt-28c00.firebaseapp.com",
  projectId: "netflixgpt-28c00",
  storageBucket: "netflixgpt-28c00.appspot.com",
  messagingSenderId: "381016159361",
  appId: "1:381016159361:web:56a335e53f292c8a3c0980",
  measurementId: "G-X3C2LR0TJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();