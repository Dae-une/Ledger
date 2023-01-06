import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomTaps from '../../components/BottomTaps/BottomTaps';
import Ledger from '../../pages/Ledger';
import LedgerDetail from '../../pages/LedgerDetail';
import Profile from '../../pages/Profile';
import RegistLedger from '../../pages/RegistLedger';
import RegistSchedule from '../../pages/RegistSchedule';
import Schedule from '../../pages/Schedule';
import ScheduleDetail from '../../pages/ScheduleDetail';
import SignIn from '../../pages/SignIn';
import { AppContainer } from './styles';

const App = () => {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ledger />} />
            <Route path="/regist" element={<RegistLedger />} />
            <Route path="/detail/:id" element={<LedgerDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/schedule/regist" element={<RegistSchedule />} />
            <Route path="/schedule/detail/:id" element={<ScheduleDetail />} />
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
