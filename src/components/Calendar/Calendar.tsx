import React from 'react';
import useDateStore from '../../store/useDateStore';
import createCalendar from '../../utils/createCalendar';

const Calnendar = () => {
  const { baseDate } = useDateStore();

  const monthList = createCalendar(baseDate);

  return <div>달력</div>;
};

export default Calnendar;
