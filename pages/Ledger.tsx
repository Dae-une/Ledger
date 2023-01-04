import React from 'react';
import { useQuery } from 'react-query';
import Calendar from '../components/Calendar/Calendar';
import LedgerList from '../components/LedgerList/LedgerList';
import { getLedger } from '../mocks/api';
import useDateStore from '../store/useDateStore';

const Ledger = () => {
  const { baseDate, selectedDate } = useDateStore();

  const { data } = useQuery(['ledger', baseDate.month()], () => getLedger(baseDate.format('YYYY-MM-DD')));

  const selectedData = data?.filter((v) => {
    return v.date === selectedDate.format('YYYY-MM-DD');
  });

  return (
    <>
      <Calendar data={data} />
      <LedgerList list={selectedData} />
    </>
  );
};

export default Ledger;
