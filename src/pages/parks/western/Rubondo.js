import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars, FaFish } from 'react-icons/fa';

const Rubondo = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Rubondo National Park</h1>
          <p>Africa's Largest Island National Park - A Paradise in Lake Victoria</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Rubondo</h2>
          <p>Rubondo Island National Park is Africa's largest island national park, situated in the southwestern corner of Lake Victoria. This unique ecosystem combines pristine rainforest with a diverse array of wildlife and rich aquatic life.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Southwestern Lake Victoria, Tanzania</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>456.8 square kilometers of island paradise</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Rainforest, wetlands, and aquatic habitats</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Chimpanzees, elephants, and diverse bird species</p>
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
                <img src="https://img.freepik.com/free-photo/chimpanzee-sitting-branch_181624-57498.jpg" alt="Primates" />
              </div>
              <div className="wildlife-content">
                <h3>Primates</h3>
                <p>Home to a thriving chimpanzee population and other primates in their natural forest habitat.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/african-fish-eagle-flying-sky_181624-6306.jpg" alt="Birds" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 300 bird species including African fish eagles and numerous water birds.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/nile-perch-fish_181624-6307.jpg" alt="Aquatic Life" />
              </div>
              <div className="wildlife-content">
                <h3>Aquatic Life</h3>
                <p>Rich aquatic ecosystem with Nile perch and other fish species.</p>
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
                <img src="https://img.freepik.com/free-photo/chimpanzee-tracking_181624-6308.jpg" alt="Chimp Tracking" />
              </div>
              <div className="activity-content">
                <h3>Chimp Tracking</h3>
                <p>Track and observe chimpanzees in their natural habitat.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/sport-fishing_181624-6309.jpg" alt="Sport Fishing" />
              </div>
              <div className="activity-content">
                <h3>Sport Fishing</h3>
                <p>World-class fishing opportunities for Nile perch.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/forest-hiking_181624-6310.jpg" alt="Forest Walks" />
              </div>
              <div className="activity-content">
                <h3>Forest Walks</h3>
                <p>Guided walks through pristine rainforest trails.</p>
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
              <p>Accessible by boat from Nkome and Kasenda ports, or by chartered flights to the island's airstrip.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) offers the best wildlife viewing and fishing conditions.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Binoculars, camera, insect repellent, and comfortable walking shoes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rubondo; 