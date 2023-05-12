// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBDdo7raproZhoF1QVNN15A6oYDXgop958',
  authDomain: 'vestarplus-project.firebaseapp.com',
  projectId: 'vestarplus-project',
  storageBucket: 'vestarplus-project.appspot.com',
  messagingSenderId: '1005664040446',
  appId: '1:1005664040446:web:ded114cbe8fbcf45957caf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
