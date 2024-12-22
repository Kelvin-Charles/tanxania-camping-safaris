import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParkPage from '../pages/ParkPage';
import ParksReserves from '../pages/ParksReserves';

const ParkRouter = () => {
  return (
    <Routes>
      <Route index element={<ParksReserves />} />
      <Route path=":circuit/:parkId" element={<ParkPage />} />
    </Routes>
  );
};

export default ParkRouter; 