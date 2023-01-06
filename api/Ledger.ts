import { collection, query, where, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { LedgerType } from '../types/types';
import { numberPad } from '../utils/numberPad';
import { fireStore } from './firebase';

interface LedgerDB {
  type: string;
  desc: string;
  price: number;
  year: string;
  month: string;
  date: string;
}

export const addNewLedger = async (data: LedgerDB) => {
  const id = uuid();
  const ledgerRef = collection(fireStore, 'ledger');
  await addDoc(ledgerRef, { ...data, id });
};

export const getLedgerList = async (month: number) => {
  const ledgerRef = collection(fireStore, 'ledger');

  const target = query(ledgerRef, where('month', '==', `${numberPad(month + 1, 2)}`));

  const data = await getDocs(target);
  const returnData: LedgerType[] = [];
  const newData = data.docs.map((doc) => ({ ...doc.data() }));
  newData.map((data) => {
    returnData.push({
      id: data.id,
      type: data.type,
      price: data.price,
      desc: data.desc,
      date: `${data.year}-${data.month}-${data.date}`,
    });
  });

  return returnData;
};

export const getLedger = async (id: string) => {
  const ledgerRef = collection(fireStore, 'ledger');

  const target = query(ledgerRef, where('id', '==', `${id}`));
  const data = await getDocs(target);
  const newData = data.docs.map((doc) => ({ ...doc.data() }));
  const returnData: LedgerType[] = [];

  newData.map((data) => {
    returnData.push({
      id: data.id,
      type: data.type,
      price: data.price,
      desc: data.desc,
      date: `${data.year}-${data.month}-${data.date}`,
    });
  });

  return returnData[0];
};

export const deleteLedger = async (id: string) => {
  const ledgerRef = collection(fireStore, 'ledger');
  const target = query(ledgerRef, where('id', '==', `${id}`));
  const data = await getDocs(target);
  const targetId = data.docs.map((doc) => {
    return doc.id;
  });
  const ledgerDoc = doc(fireStore, 'ledger', targetId[0]);
  await deleteDoc(ledgerDoc);
};

export const editLedger = async (id: string, data: LedgerDB) => {
  const ledgerRef = collection(fireStore, 'ledger');
  const target = query(ledgerRef, where('id', '==', `${id}`));
  const res = await getDocs(target);
  const targetId = res.docs.map((doc) => {
    return doc.id;
  });
  const ledgerDoc = doc(fireStore, 'ledeger', targetId[0]);
  await updateDoc(ledgerDoc, { ...data });
};
