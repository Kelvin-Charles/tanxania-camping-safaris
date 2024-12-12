import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const IbandaKyerwa = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Ibanda-Kyerwa National Park</h1>
          <p>Tanzania's Newest Wildlife Haven - A Hidden Treasure in the Northwest</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Ibanda-Kyerwa</h2>
          <p>Ibanda-Kyerwa National Park, established in 2019, is one of Tanzania's newest national parks. Located in the northwestern region, it represents an important ecological corridor and offers visitors a chance to explore untouched wilderness.</p>
          
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
              <p>Rolling hills, valleys, and river systems</p>
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
                <img src="https://img.freepik.com/free-photo/elephant-herd_181624-6323.jpg" alt="Large Mammals" />
              </div>
              <div className="wildlife-content">
                <h3>Large Mammals</h3>
                <p>Home to elephants, buffalo, zebras, and various antelope species.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/african-birds_181624-6324.jpg" alt="Bird Life" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Rich diversity of bird species in varied habitats.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/savannah-landscape_181624-6325.jpg" alt="Landscapes" />
              </div>
              <div className="wildlife-content">
                <h3>Landscapes</h3>
                <p>Beautiful savannah woodlands and scenic river valleys.</p>
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
                <img src="https://img.freepik.com/free-photo/game-drive-safari_181624-6326.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Explore the park's diverse wildlife and landscapes.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/walking-safari_181624-6327.jpg" alt="Walking Safaris" />
              </div>
              <div className="activity-content">
                <h3>Walking Safaris</h3>
                <p>Guided walks through pristine wilderness areas.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/bird-watching-safari_181624-6328.jpg" alt="Bird Watching" />
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
              <p>Accessible by road from Bukoba and Kyerwa. Charter flights available to nearby airstrips.</p>
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

export default IbandaKyerwa; 