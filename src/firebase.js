import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSzrd7Tzte4-kogJXNJMSHcwgxIPhaMtg",
  authDomain: "fir-login-app-6db55.firebaseapp.com",
  projectId: "fir-login-app-6db55",
  storageBucket: "fir-login-app-6db55.appspot.com",
  messagingSenderId: "424666422799",
  appId: "1:424666422799:web:9a8ccbfe31f1f2dada0d7a",
  measurementId: "G-DC3EVPSK02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
    return signOut(auth);
}


// custom hook 
export function useAuth (){
    const [ currentUser, setCurrentUser] = useState();

    useEffect(() =>{
        const unsub = onAuthStateChanged(auth, ( user => setCurrentUser(user)))
        return unsub;

    }, [])

    return currentUser;
}