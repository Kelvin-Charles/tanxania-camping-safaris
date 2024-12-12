import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const SaadaniPark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Saadani National Park</h1>
          <p>Where the Beach Meets the Bush - Africa's Unique Coastal Wildlife Paradise</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Saadani</h2>
          <p>Saadani National Park is Tanzania's only coastal wildlife sanctuary, offering the unique experience of watching elephants stroll along the beach. This rare ecosystem combines marine and mainland flora and fauna in a stunning setting.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Eastern Tanzania, along the Indian Ocean coast</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>1,100 square kilometers of coastal wilderness</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Coastal forest, savannah, mangroves, and coral reefs</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Diverse mix of marine and terrestrial wildlife</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Wildlife & Nature</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/coastal-elephants_181624-6401.jpg" alt="Coastal Wildlife" />
              </div>
              <div className="wildlife-content">
                <h3>Coastal Wildlife</h3>
                <p>Elephants, giraffes, and other wildlife frequently seen near the beach.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/marine-life_181624-6402.jpg" alt="Marine Life" />
              </div>
              <div className="wildlife-content">
                <h3>Marine Life</h3>
                <p>Green turtles, dolphins, and various marine species in coastal waters.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/mangrove-ecosystem_181624-6403.jpg" alt="Mangrove Ecosystem" />
              </div>
              <div className="wildlife-content">
                <h3>Mangrove Ecosystem</h3>
                <p>Rich mangrove forests supporting diverse bird and marine life.</p>
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
                <img src="https://img.freepik.com/free-photo/game-drives-saadani_181624-6404.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Unique coastal game drives with ocean views.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/boat-safaris-saadani_181624-6405.jpg" alt="Boat Safaris" />
              </div>
              <div className="activity-content">
                <h3>Boat Safaris</h3>
                <p>River and ocean excursions to spot marine life.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/beach-activities_181624-6406.jpg" alt="Beach Activities" />
              </div>
              <div className="activity-content">
                <h3>Beach Activities</h3>
                <p>Swimming, snorkeling, and beach walks along pristine shores.</p>
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
              <p>Accessible by road from Dar es Salaam (4 hours) or scheduled flights.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to September (dry season) for wildlife viewing and beach activities.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Beach gear, wildlife viewing equipment, and sun protection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaadaniPark; 