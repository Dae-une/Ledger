import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import useDateStore from '../../store/useDateStore';
import { LedgerType } from '../../types/types';
import changeInPrice from '../../utils/changeInPrice';
import { DayWrap, IsToday, IsSelected } from './styles';

interface Props {
  date: Dayjs;
  onClick: (date: Dayjs) => void;
  isSelected: boolean;
  list: LedgerType[] | undefined;
}

const DateCell = ({ date, onClick, isSelected, list }: Props) => {
  const { baseDate } = useDateStore();
  const today = dayjs();
  const isCurrentMonth = date.month() === baseDate.month();
  const isSunday = date.day() === 0;
  const isToday = today.format('YY-MM-DD') === date.format('YY-MM-DD');

  const data = list?.filter((v) => v.date === date.format('YYYY-MM-DD'));
  const totalPrice = data?.reduce((acc, cur) => {
    return (acc += cur.price);
  }, 0);

  return (
    <DayWrap isCurrentMonth={isCurrentMonth} isSunday={isSunday} onClick={() => onClick?.(date)}>
      {isToday && <IsToday />}
      {isSelected && <IsSelected />}
      <span>{date.date()}</span>
      {totalPrice && totalPrice > 0 ? <div>{changeInPrice(totalPrice)}원</div> : null}
    </DayWrap>
  );
};

export default DateCell;
