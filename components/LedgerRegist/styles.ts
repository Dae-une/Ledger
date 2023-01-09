import styled from '@emotion/styled';

export const Header = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(228, 228, 228);
  font-size: 1.3rem;
  margin-bottom: 1rem;
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

export const TypeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
    height: 3rem;
    text-align: center;
    border: 1px solid black;
    cursor: pointer;
  }
`;

export const GoBack = styled.div`
  position: absolute;
  left: 2.2rem;
  font-size: 2rem;
  cursor: pointer;
`;
