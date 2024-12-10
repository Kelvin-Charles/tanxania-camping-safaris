import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Your trusted partner in Tanzania adventures</p>
      </div>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>We are passionate about sharing the beauty of Tanzania with the world...</p>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>Lead Guide</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>Safari Expert</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 