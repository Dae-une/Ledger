import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonWrap } from './styles';

const AddButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onHandleLink = useCallback(() => {
    if (pathname === '/') navigate('/regist');
    if (pathname === '/schedule') navigate('/schedule/regist');
  }, [pathname]);

  return (
    <>
      <ButtonWrap onClick={onHandleLink}>+</ButtonWrap>
    </>
  );
};

export default AddButton;
