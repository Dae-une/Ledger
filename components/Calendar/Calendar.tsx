import { Dayjs } from 'dayjs';
import React, { useCallback } from 'react';
import useDateStore from '../../store/useDateStore';
import { LedgerType, ScheduleType } from '../../types/types';
import createCalendar from '../../utils/createCalendar';
import DateCell from '../DateCell/DateCell';
import { CalendarWrap, WeekWrap, WeekDayWrap } from './styles';

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

interface Props {
  data: LedgerType[] | ScheduleType[] | undefined;
}

const Calendar = ({ data }: Props) => {
  const { baseDate, selectedDate, selectDate } = useDateStore();

  const onSelect = useCallback((id: Dayjs) => {
    selectDate(id);
  }, []);

  const isSelected = useCallback(
    (date: Dayjs) => {
      return selectedDate.format('YY-MM-DD') === date.format('YY-MM-DD');
    },
    [selectedDate],
  );

  const monthList = createCalendar(baseDate);

  return (
    <>
      <WeekDayWrap>
        {WEEK.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </WeekDayWrap>
      <CalendarWrap>
        {monthList.map((weeks, idx) => (
          <WeekWrap key={idx}>
            {weeks.map((date) => (
              <DateCell
                date={date}
                key={date.date()}
                onClick={() => onSelect(date)}
                isSelected={isSelected(date)}
                list={data}
              />
            ))}
          </WeekWrap>
        ))}
      </CalendarWrap>
    </>
  );
};

export default Calendar;
