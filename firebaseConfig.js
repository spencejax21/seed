import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzjIUQJEOpkTmMDNgC4xMf3NKkpRoGCww",
    authDomain: "seed-e3d11.firebaseapp.com",
    projectId: "seed-e3d11",
    storageBucket: "seed-e3d11.appspot.com",
    messagingSenderId: "616062033210",
    appId: "1:616062033210:web:a8d7f9ae7a9d5e9f54c403",
    measurementId: "G-MZZ6DFW039",
    databaseURL: "https://seed-e3d11-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
