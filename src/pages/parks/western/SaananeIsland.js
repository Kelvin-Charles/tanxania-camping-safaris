import React from 'react';
import './ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaFish, FaWater, FaCamera, FaHiking } from 'react-icons/fa';

const SaananeIsland = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Saanane Island National Park</h1>
          <p>Tanzania's Smallest National Park - A Hidden Gem in Lake Victoria</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Saanane Island</h2>
          <p>Saanane Island National Park, located in Lake Victoria near Mwanza city, is Tanzania's smallest national park. Originally established as a zoo in 1964 and upgraded to a national park in 2013, it encompasses three islands: Saanane, Chankende, and Butimba.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Situated in Lake Victoria, just 500m from Capri Point in Mwanza city</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>2.18 square kilometers total area</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Island ecosystem with rocky outcrops and aquatic habitats</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Home to diverse species including De-brazza's monkeys, rock hyraxes, and various birds</p>
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
                <img src="https://img.freepik.com/free-photo/monkey-sitting-branch_181624-57497.jpg" alt="Primates" />
              </div>
              <div className="wildlife-content">
                <h3>Primates</h3>
                <p>Observe De-brazza's monkeys, vervet monkeys, and rock hyraxes in their natural habitat.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/beautiful-shot-african-fish-eagle-flying-cloudy-sky_181624-6305.jpg" alt="Birds" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 40 bird species including African fish eagles, grey-headed gulls, and various water birds.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/fish-swimming-underwater_23-2150699390.jpg" alt="Aquatic Life" />
              </div>
              <div className="wildlife-content">
                <h3>Aquatic Life</h3>
                <p>Rich aquatic ecosystem with various fish species in Lake Victoria's waters.</p>
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
                <img src="https://img.freepik.com/free-photo/people-hiking-mountains_23-2148907385.jpg" alt="Nature Walks" />
              </div>
              <div className="activity-content">
                <h3>Nature Walks</h3>
                <p>Guided walks through the island's trails and rocky outcrops.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/photographer-taking-photo-sunset_23-2149011561.jpg" alt="Photography" />
              </div>
              <div className="activity-content">
                <h3>Photography</h3>
                <p>Capture stunning views of Lake Victoria and wildlife.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/people-enjoying-boat-ride-lake_23-2149011576.jpg" alt="Boat Tours" />
              </div>
              <div className="activity-content">
                <h3>Boat Tours</h3>
                <p>Explore the surrounding waters and islands.</p>
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
              <p>Accessible by boat from Capri Point, Mwanza. Just 10 minutes from city center.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>Open year-round. Best visited during dry seasons (June-October, January-February).</p>
            </div>
            <div className="info-card">
              <FaHiking />
              <h3>What to Bring</h3>
              <p>Comfortable walking shoes, camera, sunscreen, and water.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaananeIsland; 