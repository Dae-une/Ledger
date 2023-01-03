import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './src/layouts/App';

const container = document.getElementById('app');
const root = createRoot(container as Element);

root.render(<App />);
