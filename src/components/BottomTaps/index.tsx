import React from 'react';
import { BottomTapWrap, ButtonsWrap, TapButton } from './styles';
import home from '../../static/Icons/home.svg';
import profile from '../../static/Icons/profile.svg';
import schedule from '../../static/Icons/schedule.svg';

const BottomTapsLinks = [
  {
    title: '메인',
    path: '/',
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
