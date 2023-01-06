import React, { useEffect, useState } from 'react';
import { getScheduleList } from '../api/firebase';
import AddButton from '../components/AddButton/AddButton';
import Calendar from '../components/Calendar/Calendar';
import Header from '../components/Header/Header';
import ScheduleList from '../components/ScheduleList/ScheduleList';
import useDateStore from '../store/useDateStore';
import { ScheduleType } from '../types/types';

const Schedule = () => {
  const { baseDate, selectedDate } = useDateStore();
  const [data, setData] = useState<ScheduleType[]>([]);

  const selectedData = data?.filter((v) => {
    return v.startDate === selectedDate.format('YYYY-MM-DD');
  });

  useEffect(() => {
    const getList = async () => {
      const list = getScheduleList(baseDate.month());
      setData(await list);
    };
    getList();
  }, [baseDate]);

  console.log(data);

  return (
    <>
      <Header />
      <Calendar data={data} />
      <ScheduleList list={selectedData} />
      <AddButton />
    </>
  );
};

export default Schedule;
