import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSchedule } from '../api/firebase';
import { GoBack, Header } from '../components/ScheduleRegist/styles';
import { ScheduleType } from '../types/types';

const ScheduleDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<ScheduleType[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = getSchedule(id);
        setData(await data);
      }
    };

    getData();
  }, [id]);

  console.log(data);
  return (
    <>
      <Header>
        <GoBack>&lt;</GoBack>
        <span>상세</span>
      </Header>
    </>
  );
};

export default ScheduleDetail;
