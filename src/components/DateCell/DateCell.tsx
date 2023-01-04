import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import useDateStore from '../../store/useDateStore';
import { DayWrap, IsToday ,IsSelected} from './styles';

interface Props {
  date: Dayjs;
  onClick: (date: Dayjs) => void;
  isSelected: boolean;
}

const DateCell = ({ date, onClick, isSelected }: Props) => {
  const { baseDate } = useDateStore();
  const today = dayjs();
  const isCurrentMonth = date.month() === baseDate.month();
  const isSunday = date.day() === 0;
  const isToday = today.format('YY-MM-DD') === date.format('YY-MM-DD');

  return (
    <DayWrap isCurrentMonth={isCurrentMonth} isSunday={isSunday} onClick={() => onClick?.(date)}>
      {isToday && <IsToday />}
      {isSelected && <IsSelected />}
      <span>{date.date()}</span>
    </DayWrap>
  );
};

export default DateCell;
