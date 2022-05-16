import React, { StrictMode } from 'react';

//import { ContextProvider } from './Context';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ContextProvider } from './Context';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
