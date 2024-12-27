import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle } from 'react-icons/fa';
import './westernCircuit.css';

const WesternCircuit = () => {
  const navigate = useNavigate();
  const westernParks = [
    {
      id: 'gombe',
      name: 'Gombe National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: "Famous for Jane Goodall's chimpanzee research and pristine forest habitat.",
      highlights: [
        'Chimpanzee tracking',
        'Pristine forest trails',
        'Lake Tanganyika shores',
        'Bird watching'
      ],
      bestTime: 'July-October, December-February'
    },
    {
      id: 'mahale',
      name: 'Mahale Mountains',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Remote paradise combining mountains, rainforest, and beach along Lake Tanganyika.',
      highlights: [
        'Chimpanzee trekking',
        'Beach activities',
        'Mountain hiking',
        'Pristine forest'
      ],
      bestTime: 'May-October'
    },
    {
      id: 'katavi',
      name: 'Katavi National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76301801',
      description: "One of Tanzania's most untouched wilderness areas.",
      highlights: [
        'Large hippo pods',
        'Vast grasslands',
        'Remote safaris',
        'Authentic wilderness'
      ],
      bestTime: 'June-October'
    },
    {
      id: 'rubondo',
      name: 'Rubondo Island',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76301801',
      description: 'A unique island national park in Lake Victoria.',
      highlights: [
        'Forest chimpanzees',
        'Sport fishing',
        'Bird watching',
        'Island activities'
      ],
      bestTime: 'June-August'
    }
  ];

  return (
    <div className="western-circuit">
      <div className="circuit-hero">
        <div className="hero-content">
          <h1>Western Safari Circuit</h1>
          <p>Discover Tanzania's primate paradise and hidden wilderness</p>
        </div>
      </div>

      <div className="circuit-overview">
        <div className="overview-content">
          <h2>Circuit Overview</h2>
          <p>The Western Circuit offers unique wildlife experiences, focusing on primate encounters 
             and untouched wilderness areas along Lake Tanganyika.</p>
          
          <div className="circuit-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Unique Location</h3>
              <p>Pristine lakeside and mountain environments</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Primate Focus</h3>
              <p>Best chimpanzee viewing in Africa</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Remote Beauty</h3>
              <p>Untouched wilderness experiences</p>
            </div>
            <div className="feature">
              <FaClock />
              <h3>Adventure Safari</h3>
              <p>Combine wildlife with unique activities</p>
            </div>
          </div>

          <div className="circuit-introduction">
            <div className="intro-content">
              <h2>Why Visit the Western Circuit?</h2>
              <p>
                The Western Circuit provides a unique combination of primate tracking, 
                traditional safaris, and lakeside activities. It's perfect for adventurous 
                travelers seeking off-the-beaten-path experiences.
              </p>
              <p>
                From tracking chimpanzees in Gombe to exploring the remote wilderness of 
                Katavi, the Western Circuit offers unforgettable wildlife encounters.
              </p>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <strong>Best Time to Visit:</strong> June to October
                </div>
                <div className="highlight-item">
                  <strong>Duration:</strong> 7-10 days recommended
                </div>
                <div className="highlight-item">
                  <strong>Starting Point:</strong> Kigoma
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parks-grid">
        {westernParks.map(park => (
          <div 
            key={park.id} 
            className="park-card"
            onClick={() => navigate(`/parks-reserves/western/${park.id}`)}
          >
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
                to={`/parks-reserves/western/${park.id}`} 
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

export default WesternCircuit; 