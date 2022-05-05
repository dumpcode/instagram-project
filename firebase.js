// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34iSAreIrOQrtqUJW5eOI-KrbfbC3AK4",
  authDomain: "insta-project-b9076.firebaseapp.com",
  projectId: "insta-project-b9076",
  storageBucket: "insta-project-b9076.appspot.com",
  messagingSenderId: "384989609072",
  appId: "1:384989609072:web:0120c935dadf57b9dfc8b5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };