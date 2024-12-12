import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const RuahaPark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Ruaha National Park</h1>
          <p>Tanzania's Largest National Park - A Pristine Wilderness</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Ruaha</h2>
          <p>Ruaha National Park is Tanzania's largest national park, offering an untamed wilderness experience with diverse landscapes and abundant wildlife. The park is named after the Great Ruaha River that flows along its eastern border.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Central Tanzania, near Iringa</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>20,226 square kilometers of untamed wilderness</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Miombo woodlands, baobab forests, and river systems</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Large predator populations and diverse wildlife</p>
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
                <img src="https://img.freepik.com/free-photo/ruaha-predators_181624-6377.jpg" alt="Predators" />
              </div>
              <div className="wildlife-content">
                <h3>Predators</h3>
                <p>One of Africa's largest populations of lions, plus leopards and rare wild dogs.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/ruaha-elephants_181624-6378.jpg" alt="Elephants" />
              </div>
              <div className="wildlife-content">
                <h3>Elephants</h3>
                <p>Large herds of elephants, particularly during the dry season.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/ruaha-birds_181624-6379.jpg" alt="Birds" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 570 bird species including many southern African species.</p>
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
                <img src="https://img.freepik.com/free-photo/game-drives-ruaha_181624-6380.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Extensive network of game viewing circuits along the Great Ruaha River.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/walking-safaris-ruaha_181624-6381.jpg" alt="Walking Safaris" />
              </div>
              <div className="activity-content">
                <h3>Walking Safaris</h3>
                <p>Guided walks through pristine wilderness areas.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/bird-watching-ruaha_181624-6382.jpg" alt="Bird Watching" />
              </div>
              <div className="activity-content">
                <h3>Bird Watching</h3>
                <p>Prime location for spotting both resident and migratory birds.</p>
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
              <p>Scheduled flights from Dar es Salaam or drive from Iringa (130 km).</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) for best wildlife viewing.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Camera, binoculars, sturdy shoes, and light clothing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RuahaPark; 