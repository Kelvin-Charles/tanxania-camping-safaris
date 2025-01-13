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
import Enquiry from './pages/Enquiry';
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
import NorthernCircuit from './pages/parks/NorthernCircuit';
import SouthernCircuit from './pages/parks/SouthernCircuit';
import WesternCircuit from './pages/parks/WesternCircuit';
import CoastalCircuit from './pages/parks/CoastalCircuit';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enquiry" element={<Enquiry />} />
            
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
            
            {/* Parks & Reserves Routes */}
            <Route path="/parks-reserves/*" element={<ParksReserves />} />
            
            {/* Northern Circuit Routes */}
            <Route path="/parks-reserves/northern" element={<NorthernCircuit />} />
            <Route path="/parks-reserves/northern/kilimanjaro" element={<Kilimanjaro />} />
            <Route path="/parks-reserves/northern/serengeti" element={<SerengetiPark />} />
            <Route path="/parks-reserves/northern/ngorongoro" element={<Ngorongoro />} />
            <Route path="/parks-reserves/northern/tarangire" element={<Tarangire />} />
            <Route path="/parks-reserves/northern/manyara" element={<LakeManyara />} />
            <Route path="/parks-reserves/northern/arusha" element={<ArushaPark />} />

            {/* Southern Circuit Routes */}
            <Route path="/parks-reserves/southern" element={<SouthernCircuit />} />
            <Route path="/parks-reserves/southern/ruaha" element={<RuahaPark />} />
            <Route path="/parks-reserves/southern/mikumi" element={<MikumiPark />} />
            <Route path="/parks-reserves/southern/nyerere" element={<NyererePark />} />
            <Route path="/parks-reserves/southern/udzungwa" element={<UdzungwaPark />} />
            <Route path="/parks-reserves/southern/katavi" element={<KataviPark />} />

            {/* Western Circuit Routes */}
            <Route path="/parks-reserves/western" element={<WesternCircuit />} />
            <Route path="/parks-reserves/western/gombe" element={<Gombe />} />
            <Route path="/parks-reserves/western/mahale" element={<Mahale />} />
            <Route path="/parks-reserves/western/rubondo" element={<Rubondo />} />
            <Route path="/parks-reserves/western/burigi-chato" element={<BurigiChato />} />
            <Route path="/parks-reserves/western/saanane" element={<SaananeIsland />} />
            <Route path="/parks-reserves/western/ibanda-kyerwa" element={<IbandaKyerwa />} />
            <Route path="/parks-reserves/western/rumanyika" element={<Rumanyika />} />
            <Route path="/parks-reserves/western/ugalla" element={<Ugalla />} />

            {/* Coastal Circuit Routes */}
            <Route path="/parks-reserves/coastal/saadani" element={<SaadaniPark />} />
            <Route path="/parks-reserves/coastal/zanzibar" element={<ZanzibarPark />} />
            <Route path="/parks-reserves/coastal/mafia" element={<MafiaIsland />} />
            <Route path="/parks-reserves/coastal/pemba" element={<PembaIsland />} />

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
            <Route path="/parks-reserves/coastal" element={<CoastalCircuit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
