import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const KataviPark = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Katavi National Park</h1>
          <p>Tanzania's Remote Wilderness Paradise</p>
        </div>
      </section>

      {/* Rest of the component structure similar to other park components */}
      <section className="park-overview">
        <div className="container">
          <h2>About Katavi</h2>
          <p>One of Tanzania's most remote and pristine national parks, offering an authentic wilderness experience.</p>
          
          <div className="key-features">
            {/* Key features content */}
          </div>
        </div>
      </section>

      {/* Additional sections */}
    </div>
  );
};

export default KataviPark; 