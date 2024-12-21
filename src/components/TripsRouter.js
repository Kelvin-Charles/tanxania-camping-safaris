import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllTrips from '../pages/trips/AllTrips';
import WildlifeSafaris from '../pages/trips/WildlifeSafaris';
import MountainClimbing from '../pages/trips/MountainClimbing';
import BeachHolidays from '../pages/trips/BeachHolidays';
import CulturalTours from '../pages/trips/CulturalTours';
import DayTrips from '../pages/trips/DayTrips';
import CustomSafaris from '../pages/trips/CustomSafaris';

const TripsRouter = () => {
  return (
    <Routes>
      <Route index element={<AllTrips />} />
      <Route path="wildlife-safaris" element={<WildlifeSafaris />} />
      <Route path="mountain-climbing" element={<MountainClimbing />} />
      <Route path="beach-holidays" element={<BeachHolidays />} />
      <Route path="cultural-tours" element={<CulturalTours />} />
      <Route path="day-trips" element={<DayTrips />} />
      <Route path="custom-safaris" element={<CustomSafaris />} />
    </Routes>
  );
};

export default TripsRouter; 