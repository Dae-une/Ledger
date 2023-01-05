import { Dayjs } from 'dayjs';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import useDateStore from '../../store/useDateStore';
import createCalendar from '../../utils/createCalendar';
import { CalendarWrap, WeekWrap } from '../Calendar/styles';
import { Arrow } from '../Header/styles';
import { Container, DateWrap, HeaderWrap } from './styles';

interface Props {
  setDate: Dispatch<SetStateAction<string>>;
  setShowCalendar: Dispatch<SetStateAction<boolean>>;
}

const MiniCalendar = ({ setDate, setShowCalendar }: Props) => {
  const { baseDate, addMonth, subMonth } = useDateStore();

  const onIncreaseMonth = useCallback(() => {
    addMonth();
  }, []);

  const onDecreaseMonth = useCallback(() => {
    subMonth();
  }, []);

  const onChangeDate = useCallback((date: Dayjs) => {
    setDate(date.format('YYYY-MM-DD'));
    setShowCalendar(false);
  }, []);

  const monthList = createCalendar(baseDate);

  return (
    <>
      <Container>
        <HeaderWrap>
          <Arrow onClick={onDecreaseMonth}>&lt;</Arrow>
          <span>
            {baseDate.get('year')}년 {baseDate.get('month') + 1}월
          </span>
          <Arrow onClick={onIncreaseMonth}>&gt;</Arrow>
        </HeaderWrap>
        <CalendarWrap>
          {monthList.map((weeks, idx) => (
            <WeekWrap>
              {weeks.map((date) => (
                <DateWrap key={date.format('YY-MM-DD')} onClick={() => onChangeDate(date)}>
                  {date.date()}
                </DateWrap>
              ))}
            </WeekWrap>
          ))}
        </CalendarWrap>
      </Container>
    </>
  );
};

export default MiniCalendar;
