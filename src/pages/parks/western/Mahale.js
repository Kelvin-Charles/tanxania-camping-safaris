import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const Mahale = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Mahale Mountains National Park</h1>
          <p>Where Chimpanzees Meet Lake Tanganyika's Crystal Waters</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Mahale Mountains</h2>
          <p>Mahale Mountains National Park is one of Tanzania's most remote and spectacular parks, combining pristine rainforest with the crystal-clear waters of Lake Tanganyika. Home to one of Africa's largest populations of wild chimpanzees, the park offers a unique combination of wildlife viewing and beach relaxation.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Western Tanzania, along Lake Tanganyika</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>1,613 square kilometers of forest-covered mountains</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Rainforest, alpine bamboo, and lakeside beaches</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Over 800 chimpanzees and diverse primate species</p>
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
                <img src="https://img.freepik.com/free-photo/chimpanzee-family-mahale_181624-6317.jpg" alt="Chimpanzees" />
              </div>
              <div className="wildlife-content">
                <h3>Chimpanzees</h3>
                <p>One of Africa's best locations for observing wild chimpanzees in their natural habitat.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/red-colobus-monkey-mahale_181624-6318.jpg" alt="Other Primates" />
              </div>
              <div className="wildlife-content">
                <h3>Other Primates</h3>
                <p>Red colobus, red-tailed monkeys, and yellow baboons inhabit the forest.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/lake-tanganyika-fish_181624-6319.jpg" alt="Aquatic Life" />
              </div>
              <div className="wildlife-content">
                <h3>Aquatic Life</h3>
                <p>Lake Tanganyika hosts hundreds of fish species in its pristine waters.</p>
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
                <img src="https://img.freepik.com/free-photo/chimp-tracking-mahale_181624-6320.jpg" alt="Chimp Tracking" />
              </div>
              <div className="activity-content">
                <h3>Chimp Tracking</h3>
                <p>Trek through the forest to observe habituated chimpanzee communities.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/swimming-lake-tanganyika_181624-6321.jpg" alt="Beach Activities" />
              </div>
              <div className="activity-content">
                <h3>Beach Activities</h3>
                <p>Swimming and snorkeling in Lake Tanganyika's clear waters.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/hiking-mahale-mountains_181624-6322.jpg" alt="Mountain Hiking" />
              </div>
              <div className="activity-content">
                <h3>Mountain Hiking</h3>
                <p>Explore the forested slopes of the Mahale Mountains.</p>
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
              <p>Accessible by chartered flights to Mahale airstrip and boat transfer to the park.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>May to October (dry season) for best chimp viewing and hiking conditions.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Light clothing, hiking boots, swimming gear, and camera equipment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mahale; 