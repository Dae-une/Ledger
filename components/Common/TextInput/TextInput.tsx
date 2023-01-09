import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styled from '@emotion/styled';

interface Props {
  label: string;
  placeholder: string;
  setState: Dispatch<SetStateAction<string>>;
  value: string;
  readonly?: boolean;
}

const TextInput = ({ label, placeholder, setState, value, readonly }: Props) => {
  const onChangeState = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  return (
    <>
      <InputWrap>
        <label>{label}</label>
        <input placeholder={placeholder} value={value} onChange={onChangeState} readOnly={readonly} />
      </InputWrap>
    </>
  );
};

export default TextInput;

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
