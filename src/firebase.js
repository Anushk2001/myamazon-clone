//sorry can't explore secret data!
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi2hytmaR9hmV7N07tDO8WQxkGBF461DI",
    authDomain: "my-clone-2f3de.firebaseapp.com",
    projectId: "my-clone-2f3de",
    storageBucket: "my-clone-2f3de.appspot.com",
    messagingSenderId: "1037914820482",
    appId: "1:1037914820482:web:663aa0ead9dadcc46a899b",
    measurementId: "G-P5GVHG3XZL"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export { db , auth } ;