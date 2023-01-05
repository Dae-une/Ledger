import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { logIn } from '../api/Auth';
import useUserStore from '../store/useUserStore';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { userName, setUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    logIn().then((user) => {
      if (typeof user === 'object') {
        const { displayName, photoURL } = user;
        if (displayName) {
          setUser({ userName: displayName, image: photoURL });
        }
      }
    });
  }, []);

  useEffect(() => {
    if (userName) {
      navigate('/');
    }
  }, [userName]);

  return (
    <>
      <div>
        <h2>Ledger</h2>
      </div>
      <div>
        <button onClick={handleLogin}>로그인</button>
      </div>
    </>
  );
};

export default SignIn;
