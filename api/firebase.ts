import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { LedgerType } from '../types/types';

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

export const addNewLedger = async (data: LedgerType) => {
  const id = uuid();
  const ledgerRef = doc(fireStore, 'ledger', id);

  await setDoc(ledgerRef, data);
};
