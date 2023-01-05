import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomTaps from '../../components/BottomTaps/BottomTaps';
import Header from '../../components/Header/Header';
import Ledger from '../../pages/Ledger';
import Profile from '../../pages/Profile';
import Schedule from '../../pages/Schedule';
import SignIn from '../../pages/SignIn';
import { AppContainer } from './styles';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../../mocks/browser');
  worker.start();
}

const App = () => {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppContainer>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Ledger />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <BottomTaps />
        </BrowserRouter>
      </AppContainer>
    </QueryClientProvider>
  );
};

export default App;
