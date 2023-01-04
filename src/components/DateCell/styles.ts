import styled from '@emotion/styled';

interface Props {
  isCurrentMonth: boolean;
  isSunday: boolean;
}

export const DayWrap = styled.div<Props>`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  /* border: 1px black solid; */
  color: ${(props) => (props.isSunday ? 'red' : null)};
  opacity: ${(props) => (props.isCurrentMonth ? 1 : 0.5)};
  cursor: pointer;
`;

export const IsToday = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  background-color: green;
  opacity: 0.5;
  position: absolute;
  border-radius: 50%;
  top: -0.3rem;
  z-index: 10;
`;

export const IsSelected = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  background-color: gray;
  opacity: 0.5;
  position: absolute;
  border-radius: 50%;
  top: -0.3rem;
  z-index: 10;
`;
