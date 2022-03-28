import React from 'react';

import styles from "./App.module.css";
import { HomePage } from './pages'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signIn' element={<h1>signIn</h1>} />
      </Routes>
    </div>
  );
}

export default App;
