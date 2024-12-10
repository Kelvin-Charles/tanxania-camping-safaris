import React from 'react';
import './ParksReserves.css';

const ParksReserves = () => {
  return (
    <div className="parks-reserves">
      <div className="page-header">
        <h1>Parks & Reserves</h1>
        <p>Explore Tanzania's wildlife sanctuaries</p>
      </div>

      <div className="parks-grid">
        <div className="park-card">
          <h2>Game Packages</h2>
          <p>Experience wildlife in their natural habitat</p>
        </div>

        <div className="park-card">
          <h2>Golfing</h2>
          <p>Play golf in scenic locations</p>
        </div>
      </div>
    </div>
  );
};

export default ParksReserves; 