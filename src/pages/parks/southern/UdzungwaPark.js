import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const UdzungwaPark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Udzungwa Mountains National Park</h1>
          <p>The Galapagos of Africa - A Biodiversity Hotspot</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Udzungwa Mountains</h2>
          <p>Udzungwa Mountains National Park is a pristine rainforest paradise and one of Tanzania's most biodiverse areas. Known for its exceptional variety of primates and unique plant species, it's a paradise for hikers and nature enthusiasts.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Southern Tanzania, part of the Eastern Arc Mountains</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>1,990 square kilometers of mountainous forest</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Tropical rainforest, mountain forest, and miombo woodland</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Endemic primates, rare birds, and unique plant species</p>
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
                <img src="https://img.freepik.com/free-photo/udzungwa-primates_181624-6395.jpg" alt="Primates" />
              </div>
              <div className="wildlife-content">
                <h3>Endemic Primates</h3>
                <p>Home to the Iringa red colobus and Sanje mangabey, found nowhere else in the world.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/udzungwa-birds_181624-6396.jpg" alt="Birds" />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 400 bird species including many Eastern Arc endemics.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/udzungwa-plants_181624-6397.jpg" alt="Flora" />
              </div>
              <div className="wildlife-content">
                <h3>Unique Flora</h3>
                <p>Exceptional plant diversity with numerous endemic species.</p>
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
                <img src="https://img.freepik.com/free-photo/hiking-udzungwa_181624-6398.jpg" alt="Hiking" />
              </div>
              <div className="activity-content">
                <h3>Hiking Trails</h3>
                <p>Various trails including the popular Sanje Waterfall hike.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/waterfall-udzungwa_181624-6399.jpg" alt="Waterfalls" />
              </div>
              <div className="activity-content">
                <h3>Waterfalls</h3>
                <p>Spectacular waterfalls including the 170m Sanje Falls.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/primate-watching_181624-6400.jpg" alt="Primate Watching" />
              </div>
              <div className="activity-content">
                <h3>Primate Watching</h3>
                <p>Observe rare and endemic primates in their natural habitat.</p>
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
              <p>Accessible by road from Dar es Salaam (350 km) or Mikumi National Park.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) for hiking and wildlife viewing.</p>
            </div>
            <div className="info-card">
              <FaHiking />
              <h3>What to Bring</h3>
              <p>Good hiking boots, rain gear, and camping equipment for overnight treks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UdzungwaPark; 