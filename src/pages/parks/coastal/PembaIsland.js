import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars, FaSwimmer } from 'react-icons/fa';

const PembaIsland = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Pemba Island</h1>
          <p>The Green Island - A Hidden Paradise of Pristine Reefs and Spice Plantations</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Pemba Island</h2>
          <p>Pemba Island, known as 'The Green Island' due to its lush vegetation, is a pristine tropical paradise less visited than its famous neighbor Zanzibar. The island offers world-class diving, untouched beaches, and authentic cultural experiences.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Zanzibar Archipelago, Indian Ocean</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Marine Life</h3>
              <p>Pristine coral reefs and rich marine biodiversity</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Landscape</h3>
              <p>Rolling hills, mangroves, and spice plantations</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Endemic birds, flying foxes, and marine life</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Nature & Culture</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/coral-reefs-pemba_181624-6419.jpg" alt="Marine Life" />
              </div>
              <div className="wildlife-content">
                <h3>Marine Life</h3>
                <p>Some of East Africa's best coral reefs with abundant marine life.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/spice-farms-pemba_181624-6420.jpg" alt="Spice Farms" />
              </div>
              <div className="wildlife-content">
                <h3>Spice Farms</h3>
                <p>Traditional clove and spice plantations with guided tours.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/pemba-flying-fox_181624-6421.jpg" alt="Endemic Wildlife" />
              </div>
              <div className="wildlife-content">
                <h3>Endemic Wildlife</h3>
                <p>Unique species including the Pemba flying fox and endemic birds.</p>
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
                <img src="https://img.freepik.com/free-photo/diving-pemba_181624-6422.jpg" alt="Diving" />
              </div>
              <div className="activity-content">
                <h3>Scuba Diving</h3>
                <p>World-class diving sites with dramatic wall drops and coral gardens.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/cultural-tours-pemba_181624-6423.jpg" alt="Cultural Tours" />
              </div>
              <div className="activity-content">
                <h3>Cultural Tours</h3>
                <p>Visit traditional villages and historic ruins.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/beach-activities-pemba_181624-6424.jpg" alt="Beach Activities" />
              </div>
              <div className="activity-content">
                <h3>Beach Activities</h3>
                <p>Pristine beaches perfect for swimming and snorkeling.</p>
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
              <p>Flights from Zanzibar or Dar es Salaam to Pemba Airport.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>July to March for best weather and diving conditions.</p>
            </div>
            <div className="info-card">
              <FaSwimmer />
              <h3>What to Bring</h3>
              <p>Swimwear, reef shoes, and modest clothing for village visits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PembaIsland; 