import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const Gombe = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Gombe National Park</h1>
          <p>Home of Jane Goodall's Chimpanzee Research - A Primate Paradise</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Gombe</h2>
          <p>Gombe National Park, made famous by Jane Goodall's groundbreaking chimpanzee research, offers an intimate wildlife experience along the shores of Lake Tanganyika. This pristine forest sanctuary is one of the best places in the world to observe chimpanzees in their natural habitat.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Western Tanzania, along Lake Tanganyika</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>52 square kilometers of forest reserve</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Steep valleys, streams, and evergreen forests</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Chimpanzees, red colobus monkeys, and diverse primates</p>
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
                <img src="https://img.freepik.com/free-photo/chimpanzee-family_181624-6311.jpg" alt="Chimpanzees" />
              </div>
              <div className="wildlife-content">
                <h3>Chimpanzees</h3>
                <p>Observe habituated chimpanzees through the forest with expert guides.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/red-colobus-monkey_181624-6312.jpg" alt="Other Primates" />
              </div>
              <div className="wildlife-content">
                <h3>Other Primates</h3>
                <p>Red-tailed monkeys, red colobus, and olive baboons inhabit the forest canopy.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/forest-birds_181624-6313.jpg" alt="Bird Life" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 200 bird species including palm-nut vultures and fish eagles.</p>
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
                <img src="https://img.freepik.com/free-photo/chimp-tracking_181624-6314.jpg" alt="Chimp Tracking" />
              </div>
              <div className="activity-content">
                <h3>Chimp Tracking</h3>
                <p>Follow habituated chimpanzees through the forest with expert guides.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/hiking-forest_181624-6315.jpg" alt="Forest Hiking" />
              </div>
              <div className="activity-content">
                <h3>Forest Hiking</h3>
                <p>Explore scenic trails through pristine forest valleys.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/lake-swimming_181624-6316.jpg" alt="Lake Activities" />
              </div>
              <div className="activity-content">
                <h3>Lake Activities</h3>
                <p>Swimming and snorkeling in Lake Tanganyika's crystal-clear waters.</p>
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
              <p>Accessible by boat from Kigoma town, or scheduled flights to Kigoma Airport.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>July to October (dry season) for best chimp viewing and hiking conditions.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Good hiking shoes, lightweight clothing, and camera with zoom lens.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gombe; 