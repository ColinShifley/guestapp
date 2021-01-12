import firebase from "firebase/app";
import 'firebase/firestore'


    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyDJozEsXIMaSfiJx7NhpBFB2LE0MBLfhgY",
    authDomain: "guestapp-124.firebaseapp.com",
    databaseURL: "https://guestapp-124-default-rtdb.firebaseio.com",
    projectId: "guestapp-124",
    storageBucket: "guestapp-124.appspot.com",
    messagingSenderId: "593327595178",
    appId: "1:593327595178:web:19f05780340bc29768fad3",
    measurementId: "G-4C5V5DWQFQ"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default firebase