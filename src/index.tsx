import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
  
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
