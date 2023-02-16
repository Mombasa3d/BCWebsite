import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDy7abPH96UTD3l1ckt-MymJph0Q_ajwpk",
    authDomain: "bcwebsite-79ae8.firebaseapp.com",
    databaseURL: "https://bcwebsite-79ae8-default-rtdb.firebaseio.com",
    projectId: "bcwebsite-79ae8",
    storageBucket: "bcwebsite-79ae8.appspot.com",
    messagingSenderId: "1054680442284",
    appId: "1:1054680442284:web:3a450c781d30c9884f4609",
    measurementId: "G-2F08VTZQXZ"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app);