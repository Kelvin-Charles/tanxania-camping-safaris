import React from 'react';
import './Cultural.css';

const Cultural = () => {
  return (
    <div className="cultural">
      <div className="page-header">
        <h1>Cultural Tours</h1>
        <p>Immerse yourself in Tanzania's rich cultural heritage</p>
      </div>

      <div className="cultural-grid">
        <div className="cultural-card">
          <h2>Waterfalls</h2>
          <p>Visit Tanzania's most beautiful waterfalls</p>
        </div>

        <div className="cultural-card">
          <h2>Hot Spring Water</h2>
          <p>Relax in natural hot springs</p>
        </div>

        <div className="cultural-card">
          <h2>Coffee Tour</h2>
          <p>Experience Tanzania's coffee culture</p>
        </div>

        <div className="cultural-card">
          <h2>Giving Tour</h2>
          <p>Connect with local communities</p>
        </div>
      </div>
    </div>
  );
};

export default Cultural; 