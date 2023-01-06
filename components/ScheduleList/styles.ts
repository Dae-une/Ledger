import styled from '@emotion/styled';

export const ListWrap = styled.div`
  padding-bottom: 6rem;
`;

export const ListStyle = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
  cursor: pointer;
  & :first-child {
    width: 30%;
  }
`;
