import React from 'react';

import styles from "./App.module.css";
import { HomePage, NotFoundPage, RegisterPage } from './pages'

import { Route, Routes } from 'react-router-dom'
import { SignInPage } from './pages/signIn'
import { DetailPage } from './pages/detail'

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/detail/:touristRouteId' element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
