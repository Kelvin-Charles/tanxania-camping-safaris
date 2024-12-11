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
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camping-tours/*" element={<CampingTours />} />
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
