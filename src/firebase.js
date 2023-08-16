import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANUqC4Uz2Je-C9G0Ewtfg7SxLNXG_ykHA",
    authDomain: "linkedin-clone-88d56.firebaseapp.com",
    projectId: "linkedin-clone-88d56",
    storageBucket: "linkedin-clone-88d56.appspot.com",
    messagingSenderId: "990045977956",
    appId: "1:990045977956:web:acf430d42b4004f4458e71",
    measurementId: "G-7V1NT95KMR"
  };




// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}






