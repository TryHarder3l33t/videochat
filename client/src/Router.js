import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home/:id' element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
