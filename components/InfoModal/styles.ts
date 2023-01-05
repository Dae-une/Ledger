import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

type IsActive = {
  isOpen: boolean;
};

const isOpen = keyframes`
  from {
    transform: translate3d(-50%,-70%,0); 
    opacity: 0;
  }
  to{
    transform:translate3d(-50%, -50%,0);
    opacity: 1;
  }
`;
const isClose = keyframes`
  from{
    transform:translate3d(-50%, -50%,0);
    opacity:1;
  }
  to{
  transform: translate3d(-50%,-70%,0);
    opacity:0;
  }

`;

export const Modal = styled.div<IsActive>`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  z-index: 100;
  transform: translate3d(-50%, -50%, 0);
  min-width: 15rem;
  height: 6rem;
  background-color: white;
  box-shadow: rgb(0 0 0 / 50%) 20px 20px 80px 0px;
  animation: ${(props) => (props.isOpen ? isOpen : isClose)} 0.3s ease-in;
  & > button {
    align-items: center;
    justify-content: center;
    min-height: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
    padding: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  & > div {
    font-size: 18px;
    text-align: center;
    line-height: 1.4em;
  }
`;

export const TextButton = styled.div`
  border: 1px solid rgb(212, 212, 212);
  padding: 0.6rem;
  font-size: 14px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
