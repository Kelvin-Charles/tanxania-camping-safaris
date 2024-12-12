import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const BurigiChato = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Burigi-Chato National Park</h1>
          <p>Tanzania's Newest Wildlife Paradise - A Hidden Gem in the Northwest</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Burigi-Chato</h2>
          <p>Burigi-Chato National Park, established in 2019, is one of Tanzania's newest national parks. Located in the northwestern part of Tanzania, it encompasses the former Burigi and Biharamulo Game Reserves and Kimisi Game Reserve, creating a vast protected area rich in biodiversity.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northwestern Tanzania, spanning Kagera and Geita regions</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>4,707 square kilometers of diverse landscapes</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Mix of savannah, woodlands, lakes, and wetlands</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Home to elephants, lions, leopards, and diverse antelope species</p>
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
                <img src="https://img.freepik.com/free-photo/elephant-walking-through-grass_181624-24595.jpg" alt="Large Mammals" />
              </div>
              <div className="wildlife-content">
                <h3>Large Mammals</h3>
                <p>Elephants, buffaloes, giraffes, zebras, and various antelope species roam freely in their natural habitat.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/lion-looking-sunset_181624-24593.jpg" alt="Predators" />
              </div>
              <div className="wildlife-content">
                <h3>Predators</h3>
                <p>Lions, leopards, and spotted hyenas can be found throughout the park's diverse landscapes.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/beautiful-shot-african-fish-eagle-flying-cloudy-sky_181624-6305.jpg" alt="Bird Life" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Rich avian diversity with numerous water birds and raptors inhabiting the wetland areas.</p>
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
                <img src="https://img.freepik.com/free-photo/group-tourists-enjoying-safari-trip_23-2149011754.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Explore the diverse landscapes and spot wildlife in their natural habitat.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/people-hiking-mountains_23-2148907385.jpg" alt="Nature Walks" />
              </div>
              <div className="activity-content">
                <h3>Nature Walks</h3>
                <p>Guided walks through scenic trails and diverse ecosystems.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/bird-watching-wild_23-2149011745.jpg" alt="Bird Watching" />
              </div>
              <div className="activity-content">
                <h3>Bird Watching</h3>
                <p>Excellent opportunities for bird watching around lakes and wetlands.</p>
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
              <p>Accessible by road from Bukoba, Muleba, and Biharamulo. Charter flights available to nearby airstrips.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) offers the best wildlife viewing opportunities.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Binoculars, camera, comfortable clothing, and sturdy walking shoes recommended.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BurigiChato; 