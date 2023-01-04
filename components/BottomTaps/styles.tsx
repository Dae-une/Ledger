import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BottomTapWrap = styled.div`
  position: absolute;
  bottom: 0;
  height: 5rem;
  width: 100%;
  border-top: 1px solid rgb(228, 228, 228);
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TapButton = styled(Link)`
  line-height: 6rem;
  text-decoration: none;
  color: black;
`;
