import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const MikumiPark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Mikumi National Park</h1>
          <p>Tanzania's Most Accessible Wildlife Paradise</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Mikumi</h2>
          <p>Mikumi National Park, Tanzania's fourth-largest national park, is a spectacular wilderness area often called 'Little Serengeti'. The park's proximity to Dar es Salaam makes it an ideal destination for visitors with limited time.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Southern Tanzania, near Morogoro</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>3,230 square kilometers of diverse landscapes</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Open grasslands, woodlands, and mountain ranges</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Rich wildlife including all members of the 'Big Five'</p>
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
                <img src="https://img.freepik.com/free-photo/mikumi-elephants_181624-6383.jpg" alt="Large Mammals" />
              </div>
              <div className="wildlife-content">
                <h3>Large Mammals</h3>
                <p>Abundant elephants, giraffes, zebras, and wildebeest roaming the Mkata Plains.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/mikumi-predators_181624-6384.jpg" alt="Predators" />
              </div>
              <div className="wildlife-content">
                <h3>Predators</h3>
                <p>Lions, leopards, and wild dogs can be spotted throughout the park.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/mikumi-birds_181624-6385.jpg" alt="Birds" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 400 bird species including many migratory birds.</p>
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
                <img src="https://img.freepik.com/free-photo/game-drives-mikumi_181624-6386.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Excellent network of game viewing roads across the Mkata Plains.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/walking-safaris-mikumi_181624-6387.jpg" alt="Walking Safaris" />
              </div>
              <div className="activity-content">
                <h3>Walking Safaris</h3>
                <p>Guided walks offering close encounters with nature.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/bird-watching-mikumi_181624-6388.jpg" alt="Bird Watching" />
              </div>
              <div className="activity-content">
                <h3>Bird Watching</h3>
                <p>Excellent birding opportunities throughout the year.</p>
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
              <p>283 km from Dar es Salaam, accessible by road or scheduled flights.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) for best wildlife viewing.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Camera, binoculars, sun protection, and comfortable clothing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MikumiPark; 