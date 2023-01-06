import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styled from '@emotion/styled';

interface Props {
  label: string;
  placeholder: string;
  setState: Dispatch<SetStateAction<number>>;
  value: string;
}

const NumberInput = ({ label, placeholder, setState, value }: Props) => {
  const onChangeState = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const value = e.target.value.replace(regex, '');
    if (!value) {
      return setState(0);
    }
    setState(parseInt(value));
  }, []);

  return (
    <>
      <InputWrap>
        <label>{label}</label>
        <input placeholder={placeholder} value={value} onChange={onChangeState} />
      </InputWrap>
    </>
  );
};

export default NumberInput;

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
