import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars, FaSwimmer } from 'react-icons/fa';

const MafiaIsland = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Mafia Island Marine Park</h1>
          <p>Tanzania's Premier Marine Reserve - A Diver's Paradise</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Mafia Island</h2>
          <p>Mafia Island Marine Park is Tanzania's first marine park, offering pristine coral reefs, diverse marine life, and secluded beaches. This hidden gem provides world-class diving and snorkeling experiences away from the crowds.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Indian Ocean, south of Zanzibar</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Marine Park</h3>
              <p>822 square kilometers of protected marine area</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Ecosystem</h3>
              <p>Coral reefs, mangroves, and seagrass beds</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Marine Life</h3>
              <p>Whale sharks, sea turtles, and vibrant coral reefs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Marine Life & Nature</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/whale-sharks_181624-6413.jpg" alt="Whale Sharks" />
              </div>
              <div className="wildlife-content">
                <h3>Whale Sharks</h3>
                <p>Seasonal visits from these gentle giants between October and March.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/coral-reefs_181624-6414.jpg" alt="Coral Reefs" />
              </div>
              <div className="wildlife-content">
                <h3>Coral Reefs</h3>
                <p>Pristine coral gardens with over 400 species of fish.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/sea-turtles_181624-6415.jpg" alt="Sea Turtles" />
              </div>
              <div className="wildlife-content">
                <h3>Sea Turtles</h3>
                <p>Important nesting sites and feeding grounds for sea turtles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Activities & Attractions</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/scuba-diving_181624-6416.jpg" alt="Diving" />
              </div>
              <div className="activity-content">
                <h3>Scuba Diving</h3>
                <p>World-class diving sites for all experience levels.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/snorkeling_181624-6417.jpg" alt="Snorkeling" />
              </div>
              <div className="activity-content">
                <h3>Snorkeling</h3>
                <p>Explore vibrant coral reefs in shallow waters.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/beach-activities_181624-6418.jpg" alt="Beach Activities" />
              </div>
              <div className="activity-content">
                <h3>Beach Activities</h3>
                <p>Relax on pristine beaches and enjoy water sports.</p>
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
              <p>Flights from Dar es Salaam or Zanzibar to Mafia Island Airport.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>July to October for diving, October to March for whale sharks.</p>
            </div>
            <div className="info-card">
              <FaSwimmer />
              <h3>What to Bring</h3>
              <p>Swimwear, sun protection, and underwater camera equipment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MafiaIsland; 