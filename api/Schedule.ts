import { ScheduleType } from './../types/types';
import { collection, query, where, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { fireStore } from './firebase';
import { numberPad } from '../utils/numberPad';

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

export const addNewSchedule = async (data: ScheduleDB) => {
  const id = uuid();
  const scheduleRef = collection(fireStore, 'schedule');
  await addDoc(scheduleRef, { ...data, id });
};

export const getScheduleList = async (month: number) => {
  const scheduleRef = collection(fireStore, 'schedule');

  const target = query(scheduleRef, where('startMonth', '==', `${numberPad(month + 1, 2)}`));
  const data = await getDocs(target);
  const newData = data.docs.map((doc) => ({ ...doc.data() }));
  const returnData: ScheduleType[] = [];

  newData.map((data) => {
    returnData.push({
      id: data.id,
      title: data.title,
      desc: data.desc,
      startDate: `${data.startYear}-${data.startMonth}-${data.startDate}`,
      endDate: `${data.endYear}-${data.endMonth}-${data.endDate}`,
    });
  });

  return returnData;
};

export const getSchedule = async (id: string) => {
  const scheduleRef = collection(fireStore, 'schedule');

  const target = query(scheduleRef, where('id', '==', `${id}`));
  const data = await getDocs(target);
  const newData = data.docs.map((doc) => ({ ...doc.data() }));
  let returnData: ScheduleType[] = [];

  newData.map((data) => {
    returnData.push({
      id: data.id,
      title: data.title,
      desc: data.desc,
      startDate: `${data.startYear}-${data.startMonth}-${data.startDate}`,
      endDate: `${data.endYear}-${data.endMonth}-${data.endDate}`,
    });
  });

  return returnData[0];
};

export const deleteSchedule = async (id: string) => {
  const scheduleRef = collection(fireStore, 'schedule');
  const target = query(scheduleRef, where('id', '==', `${id}`));
  const data = await getDocs(target);
  const targetId = data.docs.map((doc) => {
    return doc.id;
  });
  const scheduleDoc = doc(fireStore, 'schedule', targetId[0]);
  await deleteDoc(scheduleDoc);
};

export const editSchedule = async (id: string, data: ScheduleDB) => {
  const scheduleRef = collection(fireStore, 'schedule');
  const target = query(scheduleRef, where('id', '==', `${id}`));
  const res = await getDocs(target);
  const targetId = res.docs.map((doc) => {
    return doc.id;
  });
  const scheduleDoc = doc(fireStore, 'schedule', targetId[0]);
  await updateDoc(scheduleDoc, { ...data });
};
