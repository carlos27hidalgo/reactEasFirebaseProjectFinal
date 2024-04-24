// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPsguUimsIDO3ZrC9o6Bb1rW21l_EDUgE",
  authDomain: "evaluacion-8b8cc.firebaseapp.com",
  databaseURL: "https://evaluacion-8b8cc-default-rtdb.firebaseio.com",
  projectId: "evaluacion-8b8cc",
  storageBucket: "evaluacion-8b8cc.appspot.com",
  messagingSenderId: "154032926916",
  appId: "1:154032926916:web:c372dd692949cecf3d9991"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);
