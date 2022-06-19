// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGPOue7HT0cE4Rxe07Muvgjj54sND4OQ8',
  authDomain: 'tiktok-clone-mirak.firebaseapp.com',
  projectId: 'tiktok-clone-mirak',
  storageBucket: 'tiktok-clone-mirak.appspot.com',
  messagingSenderId: '789197055991',
  appId: '1:789197055991:web:a92b5c65d54914e89970f2',
  measurementId: 'G-7GF08MZPZT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// exports database from the initialized firebaseApp so we have access to it
export default db;
