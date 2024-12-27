import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NorthernCircuit from '../pages/parks/NorthernCircuit';
import SouthernCircuit from '../pages/parks/SouthernCircuit';
import WesternCircuit from '../pages/parks/WesternCircuit';
import ParksReserves from '../pages/ParksReserves';

// Import individual park components
import ArushaPark from '../pages/parks/northern/ArushaPark';
import SerengetiPark from '../pages/parks/northern/SerengetiPark';
import Ngorongoro from '../pages/parks/northern/Ngorongoro';
import Tarangire from '../pages/parks/northern/Tarangire';
import LakeManyara from '../pages/parks/northern/LakeManyara';
import Kilimanjaro from '../pages/parks/northern/Kilimanjaro';

import RuahaPark from '../pages/parks/southern/RuahaPark';
import MikumiPark from '../pages/parks/southern/MikumiPark';
import NyererePark from '../pages/parks/southern/NyererePark';
import UdzungwaPark from '../pages/parks/southern/UdzungwaPark';
import KataviPark from '../pages/parks/southern/KataviPark';

import Gombe from '../pages/parks/western/Gombe';
import Mahale from '../pages/parks/western/Mahale';
import Rubondo from '../pages/parks/western/Rubondo';
import BurigiChato from '../pages/parks/western/BurigiChato';

const ParkRouter = () => {
  return (
    <Routes>
      {/* Main Parks & Reserves page */}
      <Route index element={<ParksReserves />} />

      {/* Circuit Overview Routes */}
      <Route path="northern" element={<NorthernCircuit />} />
      <Route path="southern" element={<SouthernCircuit />} />
      <Route path="western" element={<WesternCircuit />} />

      {/* Northern Circuit Parks */}
      <Route path="northern/kilimanjaro" element={<Kilimanjaro />} />
      <Route path="northern/serengeti" element={<SerengetiPark />} />
      <Route path="northern/ngorongoro" element={<Ngorongoro />} />
      <Route path="northern/tarangire" element={<Tarangire />} />
      <Route path="northern/manyara" element={<LakeManyara />} />
      <Route path="northern/arusha" element={<ArushaPark />} />

      {/* Southern Circuit Parks */}
      <Route path="southern/ruaha" element={<RuahaPark />} />
      <Route path="southern/mikumi" element={<MikumiPark />} />
      <Route path="southern/nyerere" element={<NyererePark />} />
      <Route path="southern/udzungwa" element={<UdzungwaPark />} />
      <Route path="southern/katavi" element={<KataviPark />} />

      {/* Western Circuit Parks */}
      <Route path="western/gombe" element={<Gombe />} />
      <Route path="western/mahale" element={<Mahale />} />
      <Route path="western/rubondo" element={<Rubondo />} />
      <Route path="western/burigi-chato" element={<BurigiChato />} />
    </Routes>
  );
};

export default ParkRouter; 