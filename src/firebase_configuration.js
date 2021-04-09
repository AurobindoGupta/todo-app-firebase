import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyAURfVF-uxN4u8mS_iYIEqwQiE5n8-iKVo",
    authDomain: "fir-todo-33b45.firebaseapp.com",
    projectId: "fir-todo-33b45",
    storageBucket: "fir-todo-33b45.appspot.com",
    messagingSenderId: "1064380062109",
    appId: "1:1064380062109:web:954b85799e1c0d1465b774",
    measurementId: "G-Q64J7QZ3XK"
  };

 firebase.initializeApp(firebaseConfig);
 const db= firebase.firestore();
 export { db };