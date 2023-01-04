import React from 'react';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useDateStore from '../../store/useDateStore';
import { HeaderWrap, Arrow } from './styles';

const Header = () => {
  const { baseDate, addMonth, subMonth } = useDateStore();
  const { pathname } = useLocation();

  const onIncreaseMonth = useCallback(() => {
    addMonth();
  }, []);

  const onDecreaseMonth = useCallback(() => {
    subMonth();
  }, []);

  if (pathname === '/profile') {
    return null;
  }

  return (
    <HeaderWrap>
      <Arrow onClick={onDecreaseMonth}>&lt;</Arrow>
      <div>
        {baseDate.get('year')}년 {baseDate.get('month') + 1}월
      </div>
      <Arrow onClick={onIncreaseMonth}>&gt;</Arrow>
    </HeaderWrap>
  );
};

export default Header;
