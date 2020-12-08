import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBnn41tV7XyXcm7G7Vdq05s3kG-nUU35ls",
    authDomain: "todo-app-cp-44f44.firebaseapp.com",
    projectId: "todo-app-cp-44f44",
    storageBucket: "todo-app-cp-44f44.appspot.com",
    messagingSenderId: "149403182154",
    appId: "1:149403182154:web:3c58b359413e5357bdf2b3",
    measurementId: "G-90RP38PBVM"
  });

const db = firebaseApp.firestore();


export default db;