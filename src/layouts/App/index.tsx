import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ledger from "../../pages/Ledger";
import Profile from "../../pages/Profile";
import Schedule from "../../pages/Schedule";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ledger />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
