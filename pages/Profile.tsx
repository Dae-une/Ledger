import React from 'react';
import useUserStore from '../store/useUserStore';
import styled from '@emotion/styled';
import LedgerChart from '../components/LedgerChart/LedgerChart';
import BottomTaps from '../components/BottomTaps/BottomTaps';

const Profile = () => {
  const { userName, image } = useUserStore();

  return (
    <>
      <UserInfo>
        <img src={image ? image : undefined} />
        <h3> {userName}</h3>
        <span>님의 프로필</span>
      </UserInfo>
      <Label>한달 소비내역</Label>
      <LedgerChart />
      <BottomTaps />
    </>
  );
};

export default Profile;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid rgb(228, 228, 228);
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const Label = styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid rgb(228, 228, 228);
`;
