import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle, FaWater } from 'react-icons/fa';
import './CoastalCircuit.css';

const CoastalCircuit = () => {
  const coastalParks = [
    {
      id: 'saadani',
      name: 'Saadani National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Where the beach meets the bush - the only wildlife sanctuary in East Africa with an Indian Ocean beachfront.',
      highlights: [
        'Beach and bush safaris',
        'River boat trips',
        'Green turtle breeding',
        'Coastal forest walks'
      ],
      bestTime: 'June-September, January-February'
    },
    {
      id: 'zanzibar',
      name: 'Zanzibar Archipelago',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Historic spice islands with pristine beaches and rich marine life.',
      highlights: [
        'Stone Town UNESCO site',
        'Spice tours',
        'Dolphin watching',
        'Coral reef snorkeling'
      ],
      bestTime: 'July-September, December-March'
    },
    {
      id: 'mafia',
      name: 'Mafia Island Marine Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Premier diving destination with whale sharks and pristine coral reefs.',
      highlights: [
        'Whale shark swimming',
        'Scuba diving',
        'Traditional fishing',
        'Turtle hatching'
      ],
      bestTime: 'October-March'
    },
    {
      id: 'pemba',
      name: 'Pemba Island',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Untouched paradise known for its deep-sea fishing and diving.',
      highlights: [
        'Deep sea fishing',
        'Pristine reefs',
        'Spice plantations',
        'Mangrove forests'
      ],
      bestTime: 'December-March'
    }
  ];

  return (
    <div className="coastal-circuit">
      <div className="circuit-hero">
        <div className="hero-content">
          <h1>Coastal & Islands Circuit</h1>
          <p>Where safari meets sea - Tanzania's tropical paradise</p>
        </div>
      </div>

      <div className="circuit-overview">
        <div className="overview-content">
          <h2>Circuit Overview</h2>
          <p>The Coastal Circuit combines the best of both worlds - wildlife viewing and 
             beach relaxation along Tanzania's stunning Indian Ocean coastline.</p>
          
          <div className="circuit-features">
            <div className="feature">
              <FaWater />
              <h3>Marine Life</h3>
              <p>Rich coral reefs and diverse sea life</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Unique Wildlife</h3>
              <p>Coastal forests and marine sanctuaries</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Island Paradise</h3>
              <p>Pristine beaches and historic culture</p>
            </div>
            <div className="feature">
              <FaClock />
              <h3>Year-round Appeal</h3>
              <p>Different activities each season</p>
            </div>
          </div>

          <div className="circuit-introduction">
            <div className="intro-content">
              <h2>Why Visit the Coastal Circuit?</h2>
              <p>
                The Coastal Circuit offers a perfect blend of wildlife viewing, marine activities, 
                and cultural experiences. It's ideal for combining a traditional safari with a 
                tropical beach holiday.
              </p>
              <p>
                From the unique Saadani National Park to the exotic Spice Islands, this circuit 
                provides diverse experiences in stunning coastal settings.
              </p>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <strong>Best Time to Visit:</strong> June to March
                </div>
                <div className="highlight-item">
                  <strong>Duration:</strong> 5-14 days recommended
                </div>
                <div className="highlight-item">
                  <strong>Starting Point:</strong> Dar es Salaam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parks-grid">
        {coastalParks.map(park => (
          <div key={park.id} className="park-card">
            <div className="park-image">
              <img src={park.image} alt={park.name} />
            </div>
            <div className="park-content">
              <h3>{park.name}</h3>
              <p className="park-description">{park.description}</p>
              
              <div className="park-highlights">
                <h4>Highlights</h4>
                <ul>
                  {park.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="park-meta">
                <div className="best-time">
                  <FaClock />
                  <span>Best Time: {park.bestTime}</span>
                </div>
              </div>

              <Link 
                to={`/parks-reserves/coastal/${park.id}`} 
                className="view-details-btn"
              >
                View Details <FaInfoCircle />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoastalCircuit; 