import React, { useEffect } from 'react';
import { BottomTapWrap, ButtonsWrap, TapButton } from './styles';
import home from '../../static/Icons/home.svg';
import profile from '../../static/Icons/profile.svg';
import schedule from '../../static/Icons/schedule.svg';
import useUserStore from '../../store/useUserStore';
import { useNavigate } from 'react-router-dom';

export const BottomTapsLinks = [
  {
    title: '메인',
    path: '/ledger',
    icon: home,
  },
  {
    title: '일정',
    path: '/schedule',
    icon: schedule,
  },
  {
    title: '프로필',
    path: '/profile',
    icon: profile,
  },
];

const BottomTaps = () => {
  const { userName } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate('/signin');
    }
  }, []);

  return (
    <BottomTapWrap>
      <ButtonsWrap>
        {BottomTapsLinks.map((link) => (
          <TapButton to={link.path} key={link.title}>
            <img src={link.icon} />
          </TapButton>
        ))}
      </ButtonsWrap>
    </BottomTapWrap>
  );
};

export default BottomTaps;
