// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbxWfLtUjBZaeAYssMwo5IFffbbJNxkbY",
    authDomain: "clone-b81cb.firebaseapp.com",
    projectId: "clone-b81cb",
    storageBucket: "clone-b81cb.appspot.com",
    messagingSenderId: "1049338367728",
    appId: "1:1049338367728:web:e3a006d6e5f7ab3bc7bc35",
    measurementId: "G-MLLY6EYJ3R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};