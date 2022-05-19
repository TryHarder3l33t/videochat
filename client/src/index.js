import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';
import { ContextProvider } from './Context';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <Main />
    </ContextProvider>
  </StrictMode>
);
