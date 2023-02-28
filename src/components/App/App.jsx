import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import UserRoutes from '../../UserRoutes';

import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <header>
        <Navigation />
      </header>

      <UserRoutes />
    </div>
  );
}
