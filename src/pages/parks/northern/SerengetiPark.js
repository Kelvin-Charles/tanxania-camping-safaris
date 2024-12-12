import React, { useState } from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars, FaCalendar, FaHistory, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getPackagesForPark } from '../../../data/parkPackages';
import ParkPackages from '../../../components/ParkPackages';

const SerengetiPark = () => {
  const [showItinerary, setShowItinerary] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = getPackagesForPark('serengeti');

  return (
    <div className="park-page">
      <motion.section 
        className="park-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1>Serengeti National Park</h1>
          <p>Witness the Great Migration in Africa's Most Iconic Safari Destination</p>
        </div>
      </motion.section>

      <section className="park-story">
        <div className="container">
          <h2>The Serengeti Story</h2>
          <div className="story-grid">
            <div className="story-text">
              <h3>A Land of Endless Plains</h3>
              <p>The name "Serengeti" comes from the Maasai word "siringet" meaning "endless plains." For centuries, these grasslands have been home to one of nature's most spectacular shows - the Great Migration...</p>
              
              <div className="historical-timeline">
                <h4>Historical Timeline</h4>
                <ul>
                  <li>1913 - First recorded European sighting</li>
                  <li>1929 - Game Reserve established</li>
                  <li>1951 - National Park status declared</li>
                  {/* ... more timeline items ... */}
                </ul>
              </div>
            </div>
            <div className="story-gallery">
              {/* Interactive image gallery */}
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section interactive">
        <div className="container">
          <h2>Wildlife & Nature</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/wildebeest-migration_181624-6341.jpg" alt="Great Migration" />
              </div>
              <div className="wildlife-content">
                <h3>Great Migration</h3>
                <p>Witness over 2 million wildebeest and zebras in the world's largest terrestrial migration.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/big-cats_181624-6342.jpg" alt="Predators" />
              </div>
              <div className="wildlife-content">
                <h3>Big Cats</h3>
                <p>Large populations of lions, leopards, and cheetahs hunting on the plains.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/serengeti-birds_181624-6343.jpg" alt="Bird Life" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 500 bird species including ostriches and secretary birds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParkPackages packages={packages} parkName="Serengeti" />

      <section className="activities-section">
        <div className="container">
          <h2>Activities & Attractions</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/game-drive-serengeti_181624-6344.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Daily game drives to witness incredible wildlife encounters.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/balloon-safari_181624-6345.jpg" alt="Balloon Safaris" />
              </div>
              <div className="activity-content">
                <h3>Balloon Safaris</h3>
                <p>Dawn balloon flights over the endless plains.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/cultural-visits_181624-6346.jpg" alt="Cultural Visits" />
              </div>
              <div className="activity-content">
                <h3>Cultural Visits</h3>
                <p>Visit nearby Maasai villages and learn about local culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-info">
        <div className="container">
          <h2>Visitor Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaMapMarkerAlt />
              <h3>How to Get There</h3>
              <p>Flights to Seronera Airstrip or drive from Arusha (325 km).</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>Year-round, with migration highlights from July to October.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Camera, binoculars, sun protection, and neutral-colored clothing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SerengetiPark; 