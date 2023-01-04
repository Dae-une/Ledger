import styled from '@emotion/styled';

export const CalendarWrap = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid rgb(228, 228, 228);
`;

export const WeekWrap = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
`;

export const WeekDayWrap = styled.div`
  display: flex;
  height: 2rem;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
