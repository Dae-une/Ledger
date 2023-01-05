import styled from '@emotion/styled';

export const ModalHeader = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(228, 228, 228);
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const InputWrap = styled.div`
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
  input,
  textarea {
    resize: none;
    outline: none;
    border: none;
    height: 1.3rem;
    width: 100%;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2rem;
  gap: 1rem;
  button {
    cursor: pointer;
    width: 5rem;
    background-color: black;
    color: white;
    border: none;
    &:first-child {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;
