import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaMountain, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const ArushaPark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Arusha National Park</h1>
          <p>A Diverse Paradise Under Mount Meru's Shadow</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Arusha National Park</h2>
          <p>Often overlooked in favor of its more famous neighbors, Arusha National Park is a gem offering remarkable landscapes from the Momela Lakes to the peaks of Mount Meru. The park provides stunning views of both Mount Kilimanjaro and Mount Meru.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, near Arusha city</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>552 square kilometers of diverse terrain</p>
            </div>
            <div className="feature">
              <FaMountain />
              <h3>Landscape</h3>
              <p>Mount Meru, crater, lakes, and forests</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Diverse primates, birds, and unique forest species</p>
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
                <img src="https://img.freepik.com/free-photo/black-white-colobus_181624-6371.jpg" alt="Primates" />
              </div>
              <div className="wildlife-content">
                <h3>Primates</h3>
                <p>Black-and-white colobus monkeys and blue monkeys in their natural forest habitat.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/flamingos-momela-lakes_181624-6372.jpg" alt="Water Birds" />
              </div>
              <div className="wildlife-content">
                <h3>Water Birds</h3>
                <p>Flamingos and other water birds at the Momela Lakes.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/mount-meru-view_181624-6373.jpg" alt="Mount Meru" />
              </div>
              <div className="wildlife-content">
                <h3>Mount Meru</h3>
                <p>Tanzania's second-highest peak offering challenging climbs and spectacular views.</p>
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
                <img src="https://img.freepik.com/free-photo/walking-safari-arusha_181624-6374.jpg" alt="Walking Safaris" />
              </div>
              <div className="activity-content">
                <h3>Walking Safaris</h3>
                <p>Guided walks through diverse landscapes and forest trails.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/mount-meru-climbing_181624-6375.jpg" alt="Mountain Climbing" />
              </div>
              <div className="activity-content">
                <h3>Mount Meru Climbing</h3>
                <p>Three to four-day ascents of Mount Meru.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/canoeing-momela-lakes_181624-6376.jpg" alt="Canoeing" />
              </div>
              <div className="activity-content">
                <h3>Canoeing</h3>
                <p>Canoe safaris on the Momela Lakes.</p>
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
              <p>45-minute drive from Arusha city. Easy access from Kilimanjaro International Airport.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>Year-round destination. Clearest views during dry seasons (June-October, December-February).</p>
            </div>
            <div className="info-card">
              <FaHiking />
              <h3>What to Bring</h3>
              <p>Walking shoes, warm clothing for high altitudes, and camera equipment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArushaPark; 