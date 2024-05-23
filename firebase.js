import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    // ... FIREBASE_CONFIGURATION
    apiKey: "AIzaSyDDhncQ-zmbOgwkcUqlwDHExKCLGCQIM-Q",
    authDomain: "class-work-c5bee.firebaseapp.com",
    projectId: "class-work-c5bee",
    storageBucket: "class-work-c5bee.appspot.com",
    messagingSenderId: "156765701708",
    appId: "1:156765701708:web:d543605b3a4218c9d5d6e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
// when we export a variable or function it is accessable in other files
// db is out connetion var to our firesstore