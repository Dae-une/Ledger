import React, { useEffect, useState } from 'react';
import { getLedgerList } from '../api/Ledger';
import AddButton from '../components/AddButton/AddButton';
import Calendar from '../components/Calendar/Calendar';
import Header from '../components/Header/Header';
import LedgerList from '../components/LedgerList/LedgerList';
import useDateStore from '../store/useDateStore';
import { LedgerType } from '../types/types';

const Ledger = () => {
  const { baseDate, selectedDate } = useDateStore();
  const [data, setData] = useState<LedgerType[]>([]);

  const selectedData = data?.filter((v) => {
    return v.date === selectedDate.format('YYYY-MM-DD');
  });

  useEffect(() => {
    const getList = async () => {
      const list = getLedgerList(baseDate.month());
      setData(await list);
    };
    getList();
  }, [baseDate]);

  return (
    <>
      <Header />
      <Calendar data={data} />
      <LedgerList list={selectedData} />
      <AddButton />
    </>
  );
};

export default Ledger;
