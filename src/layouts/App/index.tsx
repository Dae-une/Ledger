import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomTaps from '../../components/BottomTaps';
import Header from '../../components/Header';
import Ledger from '../../pages/Ledger';
import Profile from '../../pages/Profile';
import Schedule from '../../pages/Schedule';
import { AppContainer } from './styles';

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Ledger />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomTaps />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
