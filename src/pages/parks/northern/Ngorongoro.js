import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const Ngorongoro = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Ngorongoro Crater</h1>
          <p>The World's Largest Intact Volcanic Caldera - A Natural Wonder</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Ngorongoro</h2>
          <p>The Ngorongoro Crater is a UNESCO World Heritage Site and one of Africa's most remarkable wildlife viewing areas. This extinct volcano crater forms a natural enclosure for a wide variety of wildlife, creating a unique ecosystem.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, part of the Ngorongoro Conservation Area</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>264 square kilometers crater floor area</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Grasslands, swamps, forests, and Lake Magadi</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Home to over 25,000 large animals including rare black rhinos</p>
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
                <img src="https://img.freepik.com/free-photo/big-five_181624-6347.jpg" alt="Big Five" />
              </div>
              <div className="wildlife-content">
                <h3>Big Five</h3>
                <p>All of Africa's Big Five can be seen in the crater: lion, leopard, elephant, rhino, and buffalo.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/flamingos-lake-magadi_181624-6348.jpg" alt="Birds" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 500 bird species including flamingos on Lake Magadi.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/maasai-culture_181624-6349.jpg" alt="Cultural Heritage" />
              </div>
              <div className="wildlife-content">
                <h3>Cultural Heritage</h3>
                <p>Home to Maasai people who continue their traditional lifestyle.</p>
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
                <img src="https://img.freepik.com/free-photo/crater-game-drive_181624-6350.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Full-day crater floor game drives with expert guides.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/maasai-village-visit_181624-6351.jpg" alt="Cultural Visits" />
              </div>
              <div className="activity-content">
                <h3>Cultural Visits</h3>
                <p>Visit authentic Maasai villages and learn about their culture.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/crater-rim-walk_181624-6352.jpg" alt="Crater Rim Walks" />
              </div>
              <div className="activity-content">
                <h3>Crater Rim Walks</h3>
                <p>Guided walks along the crater rim with stunning views.</p>
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
              <p>180 km from Arusha. Accessible by road or flights to nearby airstrips.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>Year-round destination. June to October offers the best wildlife viewing.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Warm clothing, camera, binoculars, and sun protection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ngorongoro; 