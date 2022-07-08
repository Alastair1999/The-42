import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";


//Firebase Details
const firebaseConfig = {
    apiKey: "AIzaSyAqknbHJvhnN8Euhrdm8XtPCI3-oa2r7U0",
    authDomain: "fir-auth-a05e0.firebaseapp.com",
    projectId: "fir-auth-a05e0",
    storageBucket: "fir-auth-a05e0.appspot.com",
    messagingSenderId: "912365762837",
    appId: "1:912365762837:web:a6a56d66befb675b53911c"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);


//Initialize firestore

export const db = getFirestore(app);
