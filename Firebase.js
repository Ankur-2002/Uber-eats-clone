// Import the functions you need from the SDKs you need

import * as firestore from 'firebase';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0DyOXsj5OasF8X0iAdxP3M7jBHPpwe44',
  authDomain: 'uber-eats-6904e.firebaseapp.com',
  projectId: 'uber-eats-6904e',
  storageBucket: 'uber-eats-6904e.appspot.com',
  messagingSenderId: '1006259242254',
  appId: '1:1006259242254:web:ba7b88f68a4d68ff88835f',
};

// Initialize Firebase

export const app =
  firestore.apps.length == 0
    ? firestore.initializeApp(firebaseConfig)
    : firestore.app();
