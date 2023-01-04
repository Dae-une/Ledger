import styled from '@emotion/styled';

interface Props {
  isCurrentMonth: boolean;
  isSunday: boolean;
}

export const DayWrap = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
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

export const DotWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 3rem;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Dot = styled.div<{ color: string }>`
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? `${props.color}` : null)};
`;
