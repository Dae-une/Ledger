import React from 'react';
import { useQuery } from 'react-query';
import AddButton from '../components/AddButton/AddButton';
import Calendar from '../components/Calendar/Calendar';
import ScheduleList from '../components/ScheduleList/ScheduleList';
import { getSchedule } from '../mocks/api';
import useDateStore from '../store/useDateStore';

const Schedule = () => {
  const { baseDate, selectedDate } = useDateStore();

  const { data } = useQuery(['ledger', baseDate.month()], () => getSchedule(baseDate.format('YYYY-MM-DD')));

  const selectedData = data?.filter((v) => {
    return v.date === selectedDate.format('YYYY-MM-DD');
  });

  return (
    <>
      <Calendar data={data} />
      <ScheduleList list={selectedData} />
      <AddButton />
    </>
  );
};

export default Schedule;
