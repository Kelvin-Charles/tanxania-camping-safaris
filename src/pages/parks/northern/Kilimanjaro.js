import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaMountain, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const Kilimanjaro = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Mount Kilimanjaro National Park</h1>
          <p>Africa's Highest Peak - The Roof of Africa</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Mount Kilimanjaro</h2>
          <p>Mount Kilimanjaro, Africa's highest peak and the world's highest free-standing mountain, rises majestically from the surrounding plains. This UNESCO World Heritage site offers climbers the chance to ascend through multiple climate zones to reach its snow-capped summit.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, near Moshi town</p>
            </div>
            <div className="feature">
              <FaMountain />
              <h3>Height</h3>
              <p>5,895 meters (19,341 feet) above sea level</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Ecosystem</h3>
              <p>Five distinct climate zones from rainforest to arctic</p>
            </div>
            <div className="feature">
              <FaHiking />
              <h3>Routes</h3>
              <p>Seven official routes to the summit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Nature & Climate Zones</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/kilimanjaro-rainforest_181624-6365.jpg" alt="Rainforest Zone" />
              </div>
              <div className="wildlife-content">
                <h3>Rainforest Zone</h3>
                <p>Lush forest with diverse wildlife, including Colobus monkeys and unique bird species.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/alpine-desert_181624-6366.jpg" alt="Alpine Desert" />
              </div>
              <div className="wildlife-content">
                <h3>Alpine Desert</h3>
                <p>Dramatic landscapes with unique high-altitude vegetation.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/arctic-summit_181624-6367.jpg" alt="Arctic Summit" />
              </div>
              <div className="wildlife-content">
                <h3>Arctic Summit</h3>
                <p>Snow-capped peak with glaciers and breathtaking views.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Activities & Routes</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/marangu-route_181624-6368.jpg" alt="Marangu Route" />
              </div>
              <div className="activity-content">
                <h3>Marangu Route</h3>
                <p>Classic 'Coca-Cola' route with hut accommodations.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/machame-route_181624-6369.jpg" alt="Machame Route" />
              </div>
              <div className="activity-content">
                <h3>Machame Route</h3>
                <p>Scenic 'Whiskey' route, most popular among climbers.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/lemosho-route_181624-6370.jpg" alt="Lemosho Route" />
              </div>
              <div className="activity-content">
                <h3>Lemosho Route</h3>
                <p>Remote and scenic with high success rate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-info">
        <div className="container">
          <h2>Climbing Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaMapMarkerAlt />
              <h3>How to Get There</h3>
              <p>Fly to Kilimanjaro International Airport or drive from Arusha (about 2 hours).</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Climb</h3>
              <p>January-March and June-October are the best climbing seasons.</p>
            </div>
            <div className="info-card">
              <FaHiking />
              <h3>Essential Gear</h3>
              <p>Proper climbing gear, warm clothing, and high-altitude equipment required.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kilimanjaro; 