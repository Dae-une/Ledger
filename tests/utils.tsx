import React from 'react';
import { MemoryRouter, Routes } from 'react-router-dom';

export const withRouter = (
  routes: React.ReactElement<React.JSXElementConstructor<any>> | React.ReactPortal,
  initialEntry = '/',
) => {
  return (
    <MemoryRouter>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
};
