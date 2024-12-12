import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const Rumanyika = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Rumanyika-Karagwe National Park</h1>
          <p>A Hidden Gem in Tanzania's Northwestern Corner</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Rumanyika-Karagwe</h2>
          <p>Rumanyika-Karagwe National Park, established in 2019, is one of Tanzania's newest national parks. Located in the Kagera Region, this park preserves important historical sites and diverse wildlife habitats.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northwestern Tanzania, Kagera Region</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Ecosystem</h3>
              <p>Savannah woodlands and riverine forests</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Landscape</h3>
              <p>Hills, valleys, and historical sites</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Diverse wildlife including elephants, buffalo, and antelopes</p>
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
                <img src="https://img.freepik.com/free-photo/elephant-herd-savannah_181624-6329.jpg" alt="Large Mammals" />
              </div>
              <div className="wildlife-content">
                <h3>Large Mammals</h3>
                <p>Home to elephants, buffalo, zebras, and various antelope species.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/savannah-birds_181624-6330.jpg" alt="Bird Life" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Rich diversity of bird species in varied habitats.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/historical-site_181624-6331.jpg" alt="Historical Sites" />
              </div>
              <div className="wildlife-content">
                <h3>Historical Sites</h3>
                <p>Ancient rock paintings and historical landmarks.</p>
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
                <img src="https://img.freepik.com/free-photo/game-drive-safari_181624-6332.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Explore the park's diverse wildlife and landscapes.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/historical-tour_181624-6333.jpg" alt="Historical Tours" />
              </div>
              <div className="activity-content">
                <h3>Historical Tours</h3>
                <p>Visit ancient rock art sites and historical landmarks.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/nature-walk_181624-6334.jpg" alt="Nature Walks" />
              </div>
              <div className="activity-content">
                <h3>Nature Walks</h3>
                <p>Guided walks through scenic trails and historical sites.</p>
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
              <p>Accessible by road from Bukoba and Karagwe. Charter flights available to nearby airstrips.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) offers the best wildlife viewing conditions.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Binoculars, camera, comfortable clothing, and sturdy walking shoes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rumanyika; 