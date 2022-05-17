import React, { StrictMode } from 'react';

//import { ContextProvider } from './Context';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Main from './components/Main';
import { ContextProvider } from './Context';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      {/* <App /> */}
      <Main />
    </ContextProvider>
  </StrictMode>
);
