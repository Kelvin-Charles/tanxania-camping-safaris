import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ParkRouter from './components/ParkRouter';
import CampingTours from './pages/CampingTours';
import Experience from './pages/Experience';
import Cultural from './pages/Cultural';
import ParksReserves from './pages/ParksReserves';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurTeam from './pages/OurTeam';
import LuxuryCamping from './pages/camping/LuxuryCamping';
import MidRangeCamping from './pages/camping/MidRangeCamping';
import BudgetCamping from './pages/camping/BudgetCamping';
import DayTrip from './pages/camping/DayTrip';
import GamePackages from './pages/camping/GamePackages';
import MountainCamping from './pages/camping/MountainCamping';
import PhotographySafaris from './pages/camping/PhotographySafaris';
import BeachCamping from './pages/camping/BeachCamping';
import SaananeIsland from './pages/parks/western/SaananeIsland';
import BurigiChato from './pages/parks/western/BurigiChato';
import Rubondo from './pages/parks/western/Rubondo';
import Gombe from './pages/parks/western/Gombe';
import Mahale from './pages/parks/western/Mahale';
import IbandaKyerwa from './pages/parks/western/IbandaKyerwa';
import Rumanyika from './pages/parks/western/Rumanyika';
import Ugalla from './pages/parks/western/Ugalla';
import ArushaPark from './pages/parks/northern/ArushaPark';
import SerengetiPark from './pages/parks/northern/SerengetiPark';
import Ngorongoro from './pages/parks/northern/Ngorongoro';
import Tarangire from './pages/parks/northern/Tarangire';
import LakeManyara from './pages/parks/northern/LakeManyara';
import Kilimanjaro from './pages/parks/northern/Kilimanjaro';
import RuahaPark from './pages/parks/southern/RuahaPark';
import MikumiPark from './pages/parks/southern/MikumiPark';
import NyererePark from './pages/parks/southern/NyererePark';
import UdzungwaPark from './pages/parks/southern/UdzungwaPark';
import SaadaniPark from './pages/parks/coastal/SaadaniPark';
import ZanzibarPark from './pages/parks/coastal/ZanzibarPark';
import MafiaIsland from './pages/parks/coastal/MafiaIsland';
import PembaIsland from './pages/parks/coastal/PembaIsland';
import KataviPark from './pages/parks/southern/KataviPark';
import TripsRouter from './components/TripsRouter';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Camping Tours Routes */}
            <Route path="/camping-tours" element={<CampingTours />} />
            <Route path="/camping-tours/luxury" element={<LuxuryCamping />} />
            <Route path="/camping-tours/mid-range" element={<MidRangeCamping />} />
            <Route path="/camping-tours/budget" element={<BudgetCamping />} />
            <Route path="/camping-tours/day-trip" element={<DayTrip />} />
            <Route path="/camping-tours/game-packages" element={<GamePackages />} />
            <Route path="/camping-tours/mountain" element={<MountainCamping />} />
            <Route path="/camping-tours/photography" element={<PhotographySafaris />} />
            <Route path="/camping-tours/beach" element={<BeachCamping />} />
            
            <Route path="/parks-reserves/*" element={<ParkRouter />} />

            <Route path="/experience/*" element={<Experience />} />
            <Route path="/cultural/*" element={<Cultural />} />
            <Route path="/about/*" element={
              <Routes>
                <Route index element={<AboutUs />} />
                <Route path="team" element={<OurTeam />} />
              </Routes>
            } />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/trips/*" element={<TripsRouter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
