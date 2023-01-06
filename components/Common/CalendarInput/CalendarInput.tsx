import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import MiniCalendar from '../../MiniCalendar/MiniCalendar';

interface Props {
  label: string;
  placeholder: string;
  setState: Dispatch<SetStateAction<string>>;
  value: string;
}

const CalendarInput = ({ label, placeholder, setState, value }: Props) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const onShowCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  return (
    <>
      <InputWrap>
        <label>{label}</label>
        <input placeholder={placeholder} value={value} onClick={onShowCalendar} readOnly />
      </InputWrap>
      {showCalendar && <MiniCalendar setDate={setState} setShowCalendar={setShowCalendar} />}
    </>
  );
};

export default CalendarInput;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
  border-bottom: 1px solid rgb(228, 228, 228);
  align-items: center;
  label,
  div {
    font-size: 1rem;
    text-align: center;
    width: 20%;
  }
  input {
    cursor: pointer;
    resize: none;
    outline: none;
    border: none;
    height: 1.3rem;
    width: 100%;
  }
`;
