import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle } from 'react-icons/fa';
import './southernCircuit.css';

const SouthernCircuit = () => {
  const navigate = useNavigate();
  const southernParks = [
    {
      id: 'ruaha',
      name: 'Ruaha National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: "Tanzania's largest national park, famous for its large elephant and lion populations.",
      highlights: [
        'Large elephant herds',
        'High lion density',
        'Diverse landscapes',
        'Remote wilderness'
      ],
      bestTime: 'June-October'
    },
    {
      id: 'nyerere',
      name: 'Nyerere National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: "Formerly part of Selous Game Reserve, Africa's largest protected area.",
      highlights: [
        'Boat safaris',
        'Walking safaris',
        'Diverse wildlife',
        'Rufiji River ecosystem'
      ],
      bestTime: 'June-October'
    },
    {
      id: 'mikumi',
      name: 'Mikumi National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Often called "Little Serengeti", accessible from Dar es Salaam.',
      highlights: [
        'Easy accessibility',
        'Open grasslands',
        'Abundant wildlife',
        'Bird watching'
      ],
      bestTime: 'June-October'
    },
    {
      id: 'udzungwa',
      name: 'Udzungwa Mountains',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'A paradise for hikers and primate enthusiasts.',
      highlights: [
        'Endemic primates',
        'Hiking trails',
        'Waterfalls',
        'Bird species'
      ],
      bestTime: 'June-October'
    },
    {
      id: 'katavi',
      name: 'Katavi National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Remote wilderness with spectacular wildlife concentrations.',
      highlights: [
        'Hippo pools',
        'Remote wilderness',
        'Large buffalo herds',
        'Few tourists'
      ],
      bestTime: 'July-October'
    }
  ];

  return (
    <div className="southern-circuit">
      <div className="circuit-hero">
        <div className="hero-content">
          <h1>Southern Safari Circuit</h1>
          <p>Tanzania's hidden gems and untamed wilderness</p>
        </div>
      </div>

      <div className="circuit-overview">
        <div className="overview-content">
          <h2>Circuit Overview</h2>
          <p>The Southern Circuit offers a more exclusive safari experience away from the crowds, 
             perfect for those seeking authentic wilderness adventures.</p>
          
          <div className="circuit-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Remote Beauty</h3>
              <p>Untouched wilderness areas</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Diverse Wildlife</h3>
              <p>Large populations of elephants and predators</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Varied Landscapes</h3>
              <p>From rivers to mountains and savannas</p>
            </div>
            <div className="feature">
              <FaClock />
              <h3>Extended Safaris</h3>
              <p>Perfect for longer, more immersive experiences</p>
            </div>
          </div>

          <div className="circuit-introduction">
            <div className="intro-content">
              <h2>Why Visit the Southern Circuit?</h2>
              <p>
                The Southern Circuit offers a more exclusive safari experience away from the crowds. 
                It's perfect for seasoned safari-goers and those seeking a more authentic wilderness experience.
              </p>
              <p>
                From the vast plains of Ruaha to the river systems of Nyerere, the Southern Circuit 
                provides diverse ecosystems and unique wildlife viewing opportunities.
              </p>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <strong>Best Time to Visit:</strong> June to October
                </div>
                <div className="highlight-item">
                  <strong>Duration:</strong> 7-14 days recommended
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
        {southernParks.map(park => (
          <div 
            key={park.id} 
            className="park-card"
            onClick={() => navigate(`/parks-reserves/southern/${park.id}`)}
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
                to={`/parks-reserves/southern/${park.id}`} 
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

export default SouthernCircuit; 