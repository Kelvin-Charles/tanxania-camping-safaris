import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const Ugalla = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Ugalla River National Park</h1>
          <p>A Remote Wilderness Along the Mighty Ugalla River</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Ugalla River</h2>
          <p>Ugalla River National Park is one of Tanzania's newest national parks, offering visitors a chance to explore pristine wilderness along the Ugalla River. The park is known for its diverse wildlife and untouched natural beauty.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Western Tanzania, along the Ugalla River</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Ecosystem</h3>
              <p>Miombo woodlands and riverine forests</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Landscape</h3>
              <p>River systems, floodplains, and woodlands</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Diverse wildlife including elephants, hippos, and rare antelopes</p>
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
                <img src="https://img.freepik.com/free-photo/elephant-herd-river_181624-6335.jpg" alt="Large Mammals" />
              </div>
              <div className="wildlife-content">
                <h3>Large Mammals</h3>
                <p>Home to elephants, hippos, buffalo, and various antelope species.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/river-birds_181624-6336.jpg" alt="Bird Life" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Rich diversity of water birds and woodland species.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/river-landscape_181624-6337.jpg" alt="River Ecosystem" />
              </div>
              <div className="wildlife-content">
                <h3>River Ecosystem</h3>
                <p>Pristine river system supporting diverse aquatic life.</p>
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
                <img src="https://img.freepik.com/free-photo/game-drive-safari_181624-6338.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Explore the park's diverse wildlife and landscapes.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/river-boat-safari_181624-6339.jpg" alt="River Safaris" />
              </div>
              <div className="activity-content">
                <h3>River Safaris</h3>
                <p>Boat trips along the Ugalla River for wildlife viewing.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/bird-watching-safari_181624-6340.jpg" alt="Bird Watching" />
              </div>
              <div className="activity-content">
                <h3>Bird Watching</h3>
                <p>Excellent opportunities for bird photography and observation.</p>
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
              <p>Accessible by road from Tabora. Charter flights available to nearby airstrips.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) offers the best wildlife viewing conditions.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Binoculars, camera, comfortable clothing, and insect repellent.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ugalla; 