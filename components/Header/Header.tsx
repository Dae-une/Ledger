import React from 'react';
import { useCallback } from 'react';
import useDateStore from '../../store/useDateStore';
import { HeaderWrap, Arrow } from './styles';

const Header = () => {
  const { baseDate, addMonth, subMonth } = useDateStore();

  const onIncreaseMonth = useCallback(() => {
    addMonth();
  }, []);

  const onDecreaseMonth = useCallback(() => {
    subMonth();
  }, []);

  return (
    <HeaderWrap>
      <Arrow data-testid="leftArrow" onClick={onDecreaseMonth}>
        &lt;
      </Arrow>
      <div>
        {baseDate.get('year')}년 {baseDate.get('month') + 1}월
      </div>
      <Arrow data-testid="rightArrow" onClick={onIncreaseMonth}>
        &gt;
      </Arrow>
    </HeaderWrap>
  );
};

export default Header;
