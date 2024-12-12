import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars, FaSwimmer } from 'react-icons/fa';

const ZanzibarPark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Zanzibar Archipelago</h1>
          <p>Spice Islands Paradise - Where Culture Meets Tropical Beauty</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Zanzibar</h2>
          <p>The Zanzibar Archipelago, a semi-autonomous region of Tanzania, is a tropical paradise known for its pristine beaches, historic Stone Town, and rich cultural heritage. The archipelago combines stunning natural beauty with fascinating history and vibrant culture.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Indian Ocean, off the coast of Tanzania</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Geography</h3>
              <p>Coral atolls, pristine beaches, and coral reefs</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Ecosystem</h3>
              <p>Marine sanctuary, mangroves, and spice plantations</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Marine Life</h3>
              <p>Dolphins, sea turtles, and vibrant coral reefs</p>
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
                <img src="https://img.freepik.com/free-photo/marine-life-zanzibar_181624-6407.jpg" alt="Marine Life" />
              </div>
              <div className="wildlife-content">
                <h3>Marine Life</h3>
                <p>Rich marine ecosystem with colorful coral reefs, tropical fish, and dolphins.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/stone-town_181624-6408.jpg" alt="Stone Town" />
              </div>
              <div className="wildlife-content">
                <h3>Stone Town</h3>
                <p>UNESCO World Heritage site with rich history and stunning architecture.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/spice-farms_181624-6409.jpg" alt="Spice Farms" />
              </div>
              <div className="wildlife-content">
                <h3>Spice Farms</h3>
                <p>Traditional spice plantations offering aromatic tours and cultural experiences.</p>
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
                <img src="https://img.freepik.com/free-photo/water-activities_181624-6410.jpg" alt="Water Activities" />
              </div>
              <div className="activity-content">
                <h3>Water Activities</h3>
                <p>Snorkeling, diving, and swimming in crystal-clear waters.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/cultural-tours_181624-6411.jpg" alt="Cultural Tours" />
              </div>
              <div className="activity-content">
                <h3>Cultural Tours</h3>
                <p>Explore Stone Town's history and local spice farms.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/sunset-cruises_181624-6412.jpg" alt="Sunset Cruises" />
              </div>
              <div className="activity-content">
                <h3>Sunset Cruises</h3>
                <p>Traditional dhow cruises with stunning ocean views.</p>
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
              <p>Flights to Zanzibar International Airport or ferry from Dar es Salaam.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) for best beach and outdoor activities.</p>
            </div>
            <div className="info-card">
              <FaSwimmer />
              <h3>What to Bring</h3>
              <p>Beach wear, sun protection, and modest clothing for town visits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZanzibarPark; 