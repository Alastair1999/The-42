import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqknbHJvhnN8Euhrdm8XtPCI3-oa2r7U0",
    authDomain: "fir-auth-a05e0.firebaseapp.com",
    projectId: "fir-auth-a05e0",
    storageBucket: "fir-auth-a05e0.appspot.com",
    messagingSenderId: "912365762837",
    appId: "1:912365762837:web:a6a56d66befb675b53911c"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};