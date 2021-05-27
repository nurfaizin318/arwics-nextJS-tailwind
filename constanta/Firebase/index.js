import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBUbEFwyJ53sR6Tff5Ie8A5iJpMWe8lV7I",
    authDomain: "newarwics.firebaseapp.com",
    projectId: "newarwics",
    storageBucket: "newarwics.appspot.com",
    messagingSenderId: "655027417973",
    appId: "1:655027417973:web:3bfd2d0d28403fe905193c",
    measurementId: "G-52PFTY4EQ2"
  };



const db = firebase.initializeApp(firebaseConfig);

export default db;
