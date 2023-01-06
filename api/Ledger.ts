import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
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
