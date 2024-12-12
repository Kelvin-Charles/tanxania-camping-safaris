import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const Tarangire = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Tarangire National Park</h1>
          <p>Home to Ancient Baobabs and Tanzania's Largest Elephant Population</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Tarangire</h2>
          <p>Tarangire National Park is famous for its large elephant herds, ancient baobab trees, and diverse wildlife. The park is named after the Tarangire River, which provides a permanent water source for wildlife throughout the year.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, 120 km from Arusha</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>2,850 square kilometers of diverse landscapes</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>River valleys, swamps, and ancient baobab trees</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Large elephant herds, predators, and diverse antelope species</p>
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
                <img src="https://img.freepik.com/free-photo/elephant-herd-tarangire_181624-6353.jpg" alt="Elephants" />
              </div>
              <div className="wildlife-content">
                <h3>Elephant Herds</h3>
                <p>Home to some of Africa's largest elephant populations, with herds of up to 300 individuals.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/baobab-trees_181624-6354.jpg" alt="Baobabs" />
              </div>
              <div className="wildlife-content">
                <h3>Ancient Baobabs</h3>
                <p>Iconic landscapes dotted with ancient baobab trees, some over 1,000 years old.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/predators-tarangire_181624-6355.jpg" alt="Predators" />
              </div>
              <div className="wildlife-content">
                <h3>Predators</h3>
                <p>Lions, leopards, and other predators thrive in the diverse habitats.</p>
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
                <img src="https://img.freepik.com/free-photo/game-drive-tarangire_181624-6356.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Explore diverse landscapes and witness incredible wildlife encounters.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/walking-safari-tarangire_181624-6357.jpg" alt="Walking Safaris" />
              </div>
              <div className="activity-content">
                <h3>Walking Safaris</h3>
                <p>Guided walks through the ancient baobab forests.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/bird-watching-tarangire_181624-6358.jpg" alt="Bird Watching" />
              </div>
              <div className="activity-content">
                <h3>Bird Watching</h3>
                <p>Over 550 bird species inhabit the diverse ecosystems.</p>
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
              <p>120 km drive from Arusha or scheduled flights to Tarangire airstrip.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>July to October for best wildlife viewing during dry season.</p>
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

export default Tarangire; 