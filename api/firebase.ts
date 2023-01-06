import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: 'ledger-226c3',
  storageBucket: 'ledger-226c3.appspot.com',
  messagingSenderId: process.env.REAACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

const fireStore = getFirestore(firebase);

export { fireStore };
