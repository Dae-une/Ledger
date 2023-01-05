import dayjs, { Dayjs } from 'dayjs';
import React, { useCallback } from 'react';
import useDateStore from '../../store/useDateStore';
import { LedgerType, ScheduleType } from '../../types/types';
import { DayWrap, IsToday, IsSelected, Dot, DotWrap } from './styles';

interface Props {
  date: Dayjs;
  onClick: (date: Dayjs) => void;
  isSelected: boolean;
  list: LedgerType[] | ScheduleType[] | undefined;
}

const DateCell = ({ date, onClick, isSelected, list }: Props) => {
  const { baseDate } = useDateStore();
  const today = dayjs();
  const isCurrentMonth = date.month() === baseDate.month();
  const isSunday = date.day() === 0;
  const isToday = today.format('YY-MM-DD') === date.format('YY-MM-DD');

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const getFilteredData = useCallback((arr: any[] | undefined) => {
    return arr?.filter((v) => v.date === date.format('YYYY-MM-DD'));
  }, []);

  const data = getFilteredData(list);

  return (
    <>
      <DayWrap
        isCurrentMonth={isCurrentMonth}
        isSunday={isSunday}
        onClick={() => onClick?.(date)}
        data-testid="DateCellBtn"
      >
        {isToday && <IsToday />}
        {isSelected && <IsSelected />}
        <span>{date.date()}</span>
        <div>
          {data && (
            <DotWrap>
              {data.map((list) => (
                <Dot key={list.desc} color={getRandomColor()}></Dot>
              ))}
            </DotWrap>
          )}
        </div>
      </DayWrap>
    </>
  );
};

export default DateCell;
