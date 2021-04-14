import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const config ={
  apiKey: "AIzaSyAC5XecLgGEMMNCOIZ0tFiMToltRXp4ofY",
  authDomain: "reacttodofirebase-38c4a.firebaseapp.com",
  databaseURL: "https://reacttodofirebase-38c4a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reacttodofirebase-38c4a",
  storageBucket: "reacttodofirebase-38c4a.appspot.com",
  messagingSenderId: "37960505546",
  appId: "1:37960505546:web:94908e516dd58ef3757c33"
};

firebase.initializeApp(config);
var db = firebase.firestore();

export { db }