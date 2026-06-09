// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBroBbYHeffZwMvpoKaWmRDrQWo6qNW0xE",
  authDomain: "portfolio-site-123.firebaseapp.com",
  projectId: "portfolio-site-123",
  storageBucket: "portfolio-site-123.appspot.com",
  messagingSenderId: "757167453664",
  appId: "1:757167453664:web:2abd9aef865e6fa75ae785",
  measurementId: "G-QENBDSTN6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();