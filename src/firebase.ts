// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1Ifs5JzdKF_shx1-GITVZ0YY7GgbiV4E',
  authDomain: 'dxpro-edu.firebaseapp.com',
  projectId: 'dxpro-edu',
  storageBucket: 'dxpro-edu.appspot.com',
  messagingSenderId: '690166532663',
  appId: '1:690166532663:web:cdea797380a4c1ad1acdb2',
  measurementId: 'G-ZEC6J5H9NP'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
