import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Tanzania Camping Safaris</h1>
        <p>Experience the magic of Tanzania's wilderness</p>
      </div>
      
      <section className="featured-tours">
        <h2>Popular Safari Experiences</h2>
        <div className="tour-grid">
          <div className="tour-card">
            <img src="https://i.natgeofe.com/n/fb42b3ae-aa34-488d-916b-0745491be3bd/Mountain-tent-looking-out_3x2.jpg" alt="Luxury Camping" />
            <h3>Luxury Camping</h3>
            <p>Experience nature without compromising on comfort</p>
          </div>
          <div className="tour-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Giraffa_camelopardalis_-Safaripark_Beekse_Bergen-11July2009.jpg/800px-Giraffa_camelopardalis_-Safaripark_Beekse_Bergen-11July2009.jpg" alt="Wildlife Safari" />
            <h3>Wildlife Safari</h3>
            <p>Get up close with Africa's magnificent wildlife</p>
          </div>
          <div className="tour-card">
            <img src="https://serengetinationalparksafaris.com/wp-content/uploads/2021/09/kenya-cultural-tours-fig-1.jpg" alt="Cultural Tours" />
            <h3>Cultural Tours</h3>
            <p>Immerse yourself in Tanzania's rich culture</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature">
            <h3>Expert Guides</h3>
            <p>Experienced local guides with deep knowledge</p>
          </div>
          <div className="feature">
            <h3>Customized Tours</h3>
            <p>Tailored experiences for your preferences</p>
          </div>
          <div className="feature">
            <h3>Safety First</h3>
            <p>Your safety is our top priority</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 