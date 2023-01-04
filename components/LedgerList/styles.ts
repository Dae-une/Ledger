import styled from '@emotion/styled';

export const Empty = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

export const ListWrap = styled.div`
  padding-bottom: 6rem;
`;

export const ListStyle = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
  height: 3rem;
  text-align: center;
  div {
    width: 100%;
    text-align: center;
  }
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 3rem;
  align-items: center;
`;
