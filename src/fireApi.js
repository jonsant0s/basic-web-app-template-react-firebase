import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAujTBkecFLAA0iqwPgdBNs6Lvh8ufky8A",
  authDomain: "team19-1b9b2.firebaseapp.com",
  databaseURL: "https://team19-1b9b2.firebaseio.com",
  projectId: "team19-1b9b2",
  storageBucket: "team19-1b9b2.appspot.com",
  messagingSenderId: "815111991687",
  appId: "1:815111991687:web:03703be225a6901b26e322",
  measurementId: "G-31W92D15ZQ"
};

const firebaseApp = firebase.initializeApp(config);

export const fireAuth = firebaseApp.auth();
