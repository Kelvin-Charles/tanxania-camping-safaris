import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle } from 'react-icons/fa';
import './northernCircuit.css';

const NorthernCircuit = () => {
  const navigate = useNavigate();
  const northernParks = [
    {
      id: 'kilimanjaro',
      name: 'Mount Kilimanjaro',
      image: 'https://images.unsplash.com/photo-1589308454676-22c0253bb86a',
      description: "Africa's highest peak and the world's highest free-standing mountain.",
      highlights: [
        'Summit at 5,895 meters',
        'Multiple climbing routes',
        'Diverse climate zones',
        'Unique flora and fauna'
      ],
      bestTime: 'January-March, June-October'
    },
    {
      id: 'serengeti',
      name: 'Serengeti National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Home to the Great Migration and endless plains teeming with wildlife.',
      highlights: [
        'Great Migration',
        'Big Five viewing',
        'Vast savannah plains',
        'Hot air balloon safaris'
      ],
      bestTime: 'June-October (Dry Season)'
    },
    {
      id: 'ngorongoro',
      name: 'Ngorongoro Crater',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
      description: "The world's largest intact volcanic caldera and a UNESCO World Heritage site.",
      highlights: [
        'Dense wildlife population',
        'All Big Five present',
        'Stunning crater views',
        'Maasai culture'
      ],
      bestTime: 'June-September'
    },
    {
      id: 'tarangire',
      name: 'Tarangire National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Famous for its large elephant herds and ancient baobab trees.',
      highlights: [
        'Large elephant herds',
        'Ancient baobab trees',
        'River valley wildlife',
        'Bird watching paradise'
      ],
      bestTime: 'July-October'
    },
    {
      id: 'manyara',
      name: 'Lake Manyara National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Known for its tree-climbing lions and diverse ecosystems.',
      highlights: [
        'Tree-climbing lions',
        'Huge flamingo flocks',
        'Ground water forest',
        'Lake shore game viewing'
      ],
      bestTime: 'July-October, December-February'
    },
    {
      id: 'arusha',
      name: 'Arusha National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'A gem of varied ecosystems and spectacular views of Mt. Meru.',
      highlights: [
        'Mount Meru climbing',
        'Diverse primate species',
        'Momella Lakes',
        'Canoeing safaris'
      ],
      bestTime: 'June-February'
    }
  ];

  return (
    <div className="northern-circuit">
      <div className="circuit-hero">
        <div className="hero-content">
          <h1>Northern Safari Circuit</h1>
          <p>Tanzania's most popular and accessible wildlife sanctuaries</p>
        </div>
      </div>

      <div className="circuit-overview">
        <div className="overview-content">
          <h2>Circuit Overview</h2>
          <p>The Northern Safari Circuit is Tanzania's most celebrated collection of national parks and conservation areas, offering an unparalleled concentration of wildlife and diverse landscapes.</p>
          
          <div className="circuit-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Strategic Location</h3>
              <p>Easy access from Arusha, Tanzania's safari capital</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Rich Wildlife</h3>
              <p>Home to the highest concentration of wildlife in Africa</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Diverse Landscapes</h3>
              <p>From volcanic craters to endless plains</p>
            </div>
            <div className="feature">
              <FaClock />
              <h3>Year-round Destination</h3>
              <p>Each season offers unique wildlife experiences</p>
            </div>
          </div>

          <div className="circuit-introduction">
            <div className="intro-content">
              <h2>Why Visit the Northern Circuit?</h2>
              <p>
                The Northern Circuit offers the most diverse safari experience in Tanzania. 
                From the iconic Serengeti plains to the snow-capped peak of Kilimanjaro, 
                each destination offers unique wildlife viewing opportunities.
              </p>
              <p>
                This circuit is perfect for first-time safari goers and experienced wildlife 
                enthusiasts alike, offering excellent infrastructure and accommodation options.
              </p>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <strong>Best Time to Visit:</strong> June to October
                </div>
                <div className="highlight-item">
                  <strong>Duration:</strong> 5-14 days recommended
                </div>
                <div className="highlight-item">
                  <strong>Starting Point:</strong> Arusha
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parks-grid">
        {northernParks.map(park => (
          <div 
            key={park.id} 
            className="park-card"
            onClick={() => navigate(`/parks-reserves/northern/${park.id}`)}
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
                to={`/parks-reserves/northern/${park.id}`} 
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

export default NorthernCircuit; 