/** @format */

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDDMP6LHSmnKJxnVSSTLXlkzHJ1T7bbiFU",
  authDomain: "phone-auth-bafcc.firebaseapp.com",
  projectId: "phone-auth-bafcc",
  storageBucket: "phone-auth-bafcc.appspot.com",
  messagingSenderId: "880777936774",
  appId: "1:880777936774:web:3635fa9672c985e20bf607",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();


let auth = firebase.auth();

export { firebase, db, auth };
