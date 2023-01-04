import dayjs, { Dayjs } from 'dayjs';
import React, { useCallback, useReducer } from 'react';
import { useQuery } from 'react-query';
import { getLedger } from '../../mocks/api';
import useDateStore from '../../store/useDateStore';
import createCalendar from '../../utils/createCalendar';
import DateCell from '../DateCell/DateCell';
import LedgerList from '../LedgerList/LedgerList';
import { CalendarWrap, WeekWrap, WeekDayWrap } from './styles';

interface Action {
  type: 'CLICK';
  id: Dayjs;
}

interface State {
  action: Action['type'] | '';
  id: Dayjs;
}

const initialState: State = {
  action: '',
  id: dayjs(),
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  const reset = state.id.format('YY-MM-DD') === action.id.format('YY-MM-DD') && state.action === action.type;
  return reset ? initialState : { action: action.type, id: action.id };
};

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

const Calnendar = () => {
  const { baseDate } = useDateStore();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSelect = useCallback((id: Dayjs) => {
    dispatch({ type: 'CLICK', id });
  }, []);
  const isSelected = useCallback(
    (date: Dayjs) => {
      return state.id.format('YY-MM-DD') === date.format('YY-MM-DD');
    },
    [state],
  );

  const { data } = useQuery(['ledger', baseDate.month()], () => getLedger(baseDate.format('YYYY-MM-DD')));

  const slectedData = data?.filter((v) => {
    return v.date === state.id.format('YYYY-MM-DD');
  });

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
      <LedgerList list={slectedData} />
    </>
  );
};

export default Calnendar;
