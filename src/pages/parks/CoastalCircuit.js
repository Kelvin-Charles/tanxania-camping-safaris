import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle, FaWater,
  FaCalendarAlt, FaSun, FaCloudRain, FaChevronRight, FaStar, 
  FaHeart, FaPlane, FaHotel, FaShip, FaFish, FaChevronLeft
} from 'react-icons/fa';
import './CoastalCircuit.css';

const CoastalCircuit = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    {
      icon: <FaWater />,
      title: "Marine Paradise",
      description: "World-class diving and pristine beaches"
    },
    {
      icon: <FaShip />,
      title: "Island Life",
      description: "Historic spice islands and cultural heritage"
    },
    {
      icon: <FaFish />,
      title: "Marine Life",
      description: "Whale sharks, dolphins, and vibrant coral reefs"
    },
    {
      icon: <FaPaw />,
      title: "Coastal Wildlife",
      description: "Unique blend of marine and terrestrial species"
    }
  ];

  const circuitFeatures = [
    {
      icon: <FaWater />,
      title: "Marine Paradise",
      description: "Pristine beaches, coral reefs, and rich marine ecosystems"
    },
    {
      icon: <FaShip />,
      title: "Island Adventures",
      description: "Historic spice islands and traditional dhow experiences"
    },
    {
      icon: <FaPaw />,
      title: "Unique Wildlife",
      description: "Where wildlife meets the Indian Ocean"
    },
    {
      icon: <FaFish />,
      title: "Marine Life",
      description: "Whale sharks, dolphins, and vibrant coral reefs"
    }
  ];

  const circuitHighlights = {
    uniqueFeatures: [
      "Only wildlife sanctuary with Indian Ocean beachfront",
      "UNESCO World Heritage Site - Stone Town",
      "Pristine coral reefs",
      "Traditional Swahili culture",
      "Spice plantations",
      "Marine protected areas"
    ],
    activities: [
      "Beach and bush safaris",
      "Snorkeling and diving",
      "Whale shark swimming",
      "Spice tours",
      "Dhow cruises",
      "Cultural heritage tours"
    ]
  };

  const practicalInfo = {
    bestTime: {
      icon: <FaClock />,
      title: "Best Time to Visit",
      details: [
        "June to September (Dry Season)",
        "December to March (Marine Life)",
        "Year-round activities available",
        "Different peaks for different activities",
        "October-November (Short Rains)",
        "April-May (Long Rains)"
      ]
    },
    access: {
      icon: <FaPlane />,
      title: "Getting There",
      details: [
        "Flights to Zanzibar",
        "Dar es Salaam connections",
        "Ferry services available",
        "Domestic flights to islands",
        "Boat transfers between islands",
        "Road access to coastal parks"
      ]
    },
    accommodation: {
      icon: <FaHotel />,
      title: "Where to Stay",
      details: [
        "Luxury beach resorts",
        "Boutique hotels",
        "Traditional guest houses",
        "Eco-lodges",
        "Island retreats",
        "Coastal camping"
      ]
    },
    activities: {
      icon: <FaShip />,
      title: "Activities",
      details: [
        "Scuba diving & snorkeling",
        "Beach safaris",
        "Cultural tours",
        "Spice tours",
        "Dhow cruises",
        "Water sports"
      ]
    }
  };

  const seasonalHighlights = {
    drySeasonJunOct: [
      "Perfect beach weather",
      "Clear waters for diving",
      "Comfortable temperatures",
      "Ideal wildlife viewing",
      "Cultural festivals",
      "Best sailing conditions",
      "Peak whale shark season",
      "Ideal for water sports"
    ],
    wetSeasonNovMay: [
      "Whale shark season",
      "Turtle hatching period",
      "Lush landscapes",
      "Better rates",
      "Fewer tourists",
      "Rich marine life",
      "Vibrant coral spawning",
      "Excellent fishing conditions"
    ]
  };

  const coastalParks = [
    {
      id: 'saadani',
      name: 'Saadani National Park',
      image: 'https://img.freepik.com/free-photo/beautiful-beach-with-coconut-palm-trees_1232-1976.jpg',
      description: 'Where the beach meets the bush - the only wildlife sanctuary in East Africa with an Indian Ocean beachfront.',
      difficulty: "Easy",
      bestTime: "June-September",
      duration: "2-3 days",
      highlights: [
        'Beach and bush safaris',
        'River boat trips',
        'Green turtle breeding',
        'Coastal forest walks'
      ]
    },
    {
      id: 'zanzibar',
      name: 'Zanzibar Archipelago',
      image: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-palm-tree-sunrise_74190-7454.jpg',
      description: 'Historic spice islands with pristine beaches and rich marine life.',
      difficulty: "Easy",
      bestTime: "July-September",
      duration: "3-7 days",
      highlights: [
        'Stone Town UNESCO site',
        'Spice tours',
        'Dolphin watching',
        'Coral reef snorkeling'
      ]
    },
    {
      id: 'mafia',
      name: 'Mafia Island Marine Park',
      image: 'https://img.freepik.com/free-photo/beautiful-underwater-coral-reef-with-tropical-fish_181624-9776.jpg',
      description: 'Premier diving destination with whale sharks and pristine coral reefs.',
      difficulty: "Moderate",
      bestTime: "October-March",
      duration: "3-5 days",
      highlights: [
        'Whale shark swimming',
        'Scuba diving',
        'Traditional fishing',
        'Turtle hatching'
      ]
    },
    {
      id: 'pemba',
      name: 'Pemba Island',
      image: 'https://img.freepik.com/free-photo/aerial-view-beautiful-islands-ocean-maldives_181624-36709.jpg',
      description: 'Untouched paradise known for its deep-sea fishing and diving.',
      difficulty: "Moderate",
      bestTime: "December-March",
      duration: "3-5 days",
      highlights: [
        'Deep sea fishing',
        'Pristine reefs',
        'Spice plantations',
        'Mangrove forests'
      ]
    }
  ];

  const scrollParks = (direction) => {
    const container = document.querySelector('.parks-cards-grid');
    const scrollAmount = 400; // Width of one card
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="coastal-circuit">
      <section className="circuit-hero">
        <div className="hero-content">
          <h1>Coastal & Islands Circuit</h1>
          <p>Where safari meets sea - Tanzania's tropical paradise</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="circuit-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <h3>{stat.title}</h3>
                  <p>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuit Overview */}
      <section className="circuit-overview">
        <div className="overview-content">
          <h2>Tanzania's Coastal Paradise</h2>
          <p className="overview-intro">
            Experience the perfect blend of wildlife and marine adventures along Tanzania's 
            stunning Indian Ocean coastline. From unique beach-and-bush safaris to pristine 
            coral reefs and historic spice islands.
          </p>

          <div className="circuit-features">
            {circuitFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span className="icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-footer">
                  <span className="learn-more">Learn More</span>
                  <FaChevronRight className={`arrow-icon ${hoveredCard === index ? 'active' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuit Highlights */}
      <section className="circuit-highlights">
        <div className="container">
          <h2>What Makes It Special</h2>
          <div className="highlights-grid">
            <div className="highlights-card">
              <h3><FaStar /> Unique Features</h3>
              <ul>
                {circuitHighlights.uniqueFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="highlights-card">
              <h3><FaHeart /> Signature Activities</h3>
              <ul>
                {circuitHighlights.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="practical-info">
        <div className="container">
          <h2>Essential Information</h2>
          <div className="info-grid">
            {Object.values(practicalInfo).map((info, index) => (
              <div className="info-card" key={index}>
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <ul>
                  {info.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="seasonal-highlights">
        <div className="container">
          <h2>Seasonal Highlights</h2>
          <div className="season-grid">
            <div className="season-card">
              <div className="season-icon"><FaSun /></div>
              <h3>Dry Season (June-October)</h3>
              <ul>
                {seasonalHighlights.drySeasonJunOct.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="season-card">
              <div className="season-icon"><FaCloudRain /></div>
              <h3>Green Season (November-April)</h3>
              <ul>
                {seasonalHighlights.wetSeasonNovMay.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="parks-grid">
        <div className="container">
          <h2>Explore Our Parks</h2>
          <button 
            className="scroll-indicator scroll-left" 
            onClick={() => scrollParks('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          <div className="parks-cards-grid">
            {coastalParks.map(park => (
              <div 
                key={park.id} 
                className={`park-card ${hoveredCard === park.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(park.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/parks-reserves/coastal/${park.id}`)}
              >
                <div className="park-image">
                  <img src={park.image} alt={park.name} />
                  <div className="image-overlay">
                    <span className="park-difficulty">{park.difficulty}</span>
                  </div>
                </div>
                <div className="park-content">
                  <h3>{park.name}</h3>
                  <p className="park-description">{park.description}</p>
                  
                  <div className="park-meta">
                    <div className="best-time">
                      <FaClock />
                      <span>Best Time: {park.bestTime}</span>
                    </div>
                    <div className="duration">
                      <FaCalendarAlt />
                      <span>Duration: {park.duration}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/parks-reserves/coastal/${park.id}`} 
                    className="view-details-btn"
                  >
                    Explore More <FaInfoCircle />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="scroll-indicator scroll-right" 
            onClick={() => scrollParks('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CoastalCircuit; 