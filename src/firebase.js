import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
    .initializeApp({
        apiKey: "AIzaSyAHER5ayk3K0eeVi7x5ETlGUY3N9bP4pYY",

        authDomain: "chat-app-73ac6.firebaseapp.com",

        projectId: "chat-app-73ac6",

        storageBucket: "chat-app-73ac6.appspot.com",

        messagingSenderId: "643888076154",

        appId: "1:643888076154:web:8679d7337137c7122ef2c3",

        measurementId: "G-MRLPFZYWFM",
    })
    .auth();
