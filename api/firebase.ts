import { ScheduleType } from './../types/types';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, query, where, getDoc, getDocs, addDoc } from 'firebase/firestore';
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

interface LedgerDB {
  type: string;
  desc: string;
  price: number;
  year: string;
  month: string;
  date: string;
}

interface ScheduleDB {
  title: string;
  desc: string;
  startYear: string;
  startMonth: string;
  startDate: string;
  endYear: string;
  endMonth: string;
  endDate: string;
}

export const addNewLedger = async (data: LedgerDB) => {
  const ledgerRef = collection(fireStore, 'ledger');
  await addDoc(ledgerRef, data);
};

export const addNewSchedule = async (data: ScheduleDB) => {
  const scheduleRef = collection(fireStore, 'schedule');
  await addDoc(scheduleRef, data);
};

function numberPad(n: number, width: number) {
  const v = n + '';
  return v.length >= width ? n : new Array(width - v.length + 1).join('0') + v;
}

export const getLedgerList = async (month: number) => {
  const ledgerRef = collection(fireStore, 'ledger');

  const target = query(ledgerRef, where('month', '==', `${numberPad(month + 1, 2)}`));

  const data = await getDocs(target);
  const returnData: LedgerType[] = [];
  const newData = data.docs.map((doc) => ({ ...doc.data() }));
  newData.map((data) => {
    returnData.push({
      type: data.type,
      price: data.price,
      desc: data.desc,
      date: `${data.year}-${data.month}-${data.date}`,
    });
  });

  return returnData;
};

export const getScheduleList = async (month: number) => {
  const scheduleRef = collection(fireStore, 'schedule');

  const target = query(scheduleRef, where('startMonth', '==', `${numberPad(month + 1, 2)}`));
  const data = await getDocs(target);
  const newData = data.docs.map((doc) => ({ ...doc.data() }));
  const returnData: ScheduleType[] = [];

  newData.map((data) => {
    returnData.push({
      title: data.title,
      desc: data.desc,
      startDate: `${data.startYear}-${data.startMonth}-${data.startDate}`,
      endDate: `${data.endYear}-${data.endMonth}-${data.endDate}`,
    });
  });

  return returnData;
};
