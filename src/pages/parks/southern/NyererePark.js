import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const NyererePark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Nyerere National Park</h1>
          <p>Africa's Largest Game Reserve - A UNESCO World Heritage Site</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Nyerere</h2>
          <p>Nyerere National Park, formerly part of Selous Game Reserve, is Africa's largest protected area untouched by human activity. Named after Tanzania's first president, Julius Nyerere, this vast wilderness offers an exclusive safari experience with diverse ecosystems and abundant wildlife.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Southern Tanzania, along the Rufiji River</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>Over 30,000 square kilometers of pristine wilderness</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Miombo woodlands, riverine forests, wetlands, and grasslands</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Large populations of elephants, lions, and diverse wildlife</p>
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
                <img src="https://img.freepik.com/free-photo/nyerere-elephants_181624-6389.jpg" alt="Elephants" />
              </div>
              <div className="wildlife-content">
                <h3>Elephants</h3>
                <p>Home to one of Africa's largest elephant populations, with herds frequently seen along the Rufiji River.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/nyerere-predators_181624-6390.jpg" alt="Predators" />
              </div>
              <div className="wildlife-content">
                <h3>Predators</h3>
                <p>Large populations of lions, leopards, and wild dogs roaming the vast wilderness.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/nyerere-river_181624-6391.jpg" alt="River Life" />
              </div>
              <div className="wildlife-content">
                <h3>River Life</h3>
                <p>Hippos, crocodiles, and diverse water birds along the mighty Rufiji River.</p>
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
                <img src="https://img.freepik.com/free-photo/boat-safari-nyerere_181624-6392.jpg" alt="Boat Safaris" />
              </div>
              <div className="activity-content">
                <h3>Boat Safaris</h3>
                <p>Unique river safaris along the Rufiji River system.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/walking-safari-nyerere_181624-6393.jpg" alt="Walking Safaris" />
              </div>
              <div className="activity-content">
                <h3>Walking Safaris</h3>
                <p>Multi-day walking safaris through pristine wilderness.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/fly-camping-nyerere_181624-6394.jpg" alt="Fly Camping" />
              </div>
              <div className="activity-content">
                <h3>Fly Camping</h3>
                <p>Exclusive wilderness camping experiences under the stars.</p>
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
              <p>Scheduled flights from Dar es Salaam or drive (6-8 hours). Charter flights available.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) for best wildlife viewing and activities.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Light clothing, sun protection, insect repellent, and good walking shoes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NyererePark; 