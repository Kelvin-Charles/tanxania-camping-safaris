import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
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
            
            <Route path="/experience/*" element={<Experience />} />
            <Route path="/cultural/*" element={<Cultural />} />
            <Route path="/parks-reserves/*" element={<ParksReserves />} />
            <Route path="/about/*" element={
              <Routes>
                <Route index element={<AboutUs />} />
                <Route path="team" element={<OurTeam />} />
              </Routes>
            } />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
