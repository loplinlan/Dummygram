//importing firebase from the installed package
import * as firebase from 'firebase/app'; 
import 'firebase/storage'; //storage to store images. Firebase storage SDK
import 'firebase/firestore'; //firestore = database. Firestore SDK

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhyefyOjKcYNJ5mAYE7o86SqLm2GAt3gw",
    authDomain: "skaug-dummygram.firebaseapp.com",
    databaseURL: "https://skaug-dummygram.firebaseio.com",
    projectId: "skaug-dummygram",
    storageBucket: "skaug-dummygram.appspot.com",
    messagingSenderId: "881674446238",
    appId: "1:881674446238:web:4064e87fffd174274c228f"
};

firebase.initializeApp(firebaseConfig); // Initialize Firebase

const projectStorage = firebase.storage(); //Initialize firebase storage service
const projectFirestore = firebase.firestore(); //Initialize firebase firestore service
const timestamp = firebase.firestore.FieldValue.serverTimestamp; //Firebase server timestamp

export {projectStorage, projectFirestore, timestamp};