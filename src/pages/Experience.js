import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <div className="page-header">
        <h1>Experiences</h1>
        <p>Unforgettable adventures in Tanzania</p>
      </div>

      <div className="experiences-grid">
        <div className="experience-card">
          <h2>Nature Walk</h2>
          <p>Explore Tanzania's diverse landscapes on foot</p>
        </div>

        <div className="experience-card">
          <h2>City Tour</h2>
          <p>Discover the vibrant culture of Tanzania's cities</p>
        </div>

        <div className="experience-card">
          <h2>Biking Tours</h2>
          <p>Adventure through scenic routes on two wheels</p>
        </div>

        <div className="experience-card">
          <h2>Birding Tours</h2>
          <p>Spot exotic birds in their natural habitat</p>
        </div>
      </div>
    </div>
  );
};

export default Experience; 