import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/app/app';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
