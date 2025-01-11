import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle, FaRoute,
  FaGlobe, FaCalendarAlt, FaSun, FaCloudRain, FaChevronRight,
  FaStar, FaHeart, FaPlane, FaHotel, FaCamera, FaCompass
} from 'react-icons/fa';
import './southernCircuit.css';

const SouthernCircuit = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const circuitFeatures = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Remote Wilderness",
      description: "Experience Africa's largest game reserve and untouched landscapes"
    },
    {
      icon: <FaPaw />,
      title: "Diverse Wildlife",
      description: "Home to Tanzania's largest elephant populations and rare species"
    },
    {
      icon: <FaCamera />,
      title: "Exclusive Safari",
      description: "Fewer tourists means more intimate wildlife encounters"
    },
    {
      icon: <FaCompass />,
      title: "Adventure Safari",
      description: "Walking safaris, boat trips, and authentic wilderness experiences"
    }
  ];

  const circuitHighlights = {
    uniqueFeatures: [
      "Africa's largest game reserve at Nyerere",
      "Tanzania's largest elephant populations",
      "Pristine wilderness areas",
      "Great Ruaha River ecosystem",
      "Udzungwa Mountains biodiversity",
      "Ancient baobab forests"
    ],
    activities: [
      "Game drives in remote areas",
      "Walking safaris",
      "Boat safaris on Rufiji River",
      "Mountain hiking",
      "Bird watching paradise",
      "Authentic cultural experiences"
    ]
  };

  const practicalInfo = {
    bestTime: {
      icon: <FaClock />,
      title: "Best Time to Visit",
      details: [
        "Dry Season: June to October",
        "Green Season: November to May",
        "Peak Wildlife: July to October",
        "Bird Watching: November to April"
      ]
    },
    access: {
      icon: <FaPlane />,
      title: "Getting There",
      details: [
        "Flights from Dar es Salaam",
        "Charter flights available",
        "Road access from Dar",
        "Multiple entry points"
      ]
    },
    accommodation: {
      icon: <FaHotel />,
      title: "Where to Stay",
      details: [
        "Luxury safari lodges",
        "Tented wilderness camps",
        "River-side accommodations",
        "Mountain lodges"
      ]
    }
  };

  const seasonalHighlights = {
    drySeasonJunOct: [
      "Peak wildlife viewing season",
      "Concentrated wildlife near water sources",
      "Clear skies perfect for photography",
      "Excellent road conditions",
      "Comfortable temperatures",
      "Best time for walking safaris"
    ],
    wetSeasonNovMay: [
      "Lush green landscapes",
      "Migratory birds present",
      "Fewer tourists",
      "Lower accommodation rates",
      "Beautiful photography conditions",
      "New-born animals"
    ]
  };

  // Update the southernParks array first
  const southernParks = [
    {
      id: 'ruaha',
      name: 'Ruaha National Park',
      image: 'https://img.freepik.com/free-photo/wild-african-elephant-walking-savanna_181624-49324.jpg',
      description: "Tanzania's largest national park, famous for its large elephant and lion populations.",
      difficulty: "Moderate",
      bestTime: "June-October",
      duration: "3-4 days",
      highlights: [
        'Large elephant herds',
        'High lion density',
        'Diverse landscapes',
        'Remote wilderness'
      ]
    },
    {
      id: 'nyerere',
      name: 'Nyerere National Park',
      image: 'https://img.freepik.com/free-photo/zebras-walking-dry-grassy-field-during-sunset_181624-41825.jpg',
      description: "Formerly part of Selous Game Reserve, Africa's largest protected area.",
      difficulty: "Moderate",
      bestTime: "June-October",
      duration: "3-5 days",
      highlights: [
        'Boat safaris',
        'Walking safaris',
        'Diverse wildlife',
        'Rufiji River ecosystem'
      ]
    },
    {
      id: 'mikumi',
      name: 'Mikumi National Park',
      image: 'https://img.freepik.com/free-photo/zebras-giraffes-walking-dry-grass-field_181624-16210.jpg',
      description: 'Often called "Little Serengeti", accessible from Dar es Salaam.',
      difficulty: "Easy",
      bestTime: "June-October",
      duration: "2-3 days",
      highlights: [
        'Easy accessibility',
        'Open grasslands',
        'Abundant wildlife',
        'Bird watching'
      ]
    },
    {
      id: 'udzungwa',
      name: 'Udzungwa Mountains',
      image: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-covered-trees-fog_181624-24367.jpg',
      description: 'A paradise for hikers and primate enthusiasts.',
      difficulty: "Challenging",
      bestTime: "June-October",
      duration: "2-4 days",
      highlights: [
        'Endemic primates',
        'Hiking trails',
        'Waterfalls',
        'Bird species'
      ]
    }
  ];

  return (
    <div className="southern-circuit">
      <section className="circuit-hero">
        <div className="hero-content">
          <h1>Southern Safari Circuit</h1>
          <p>Discover Tanzania's hidden wilderness and exclusive safari experiences</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="circuit-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <FaPaw />
              </div>
              <div className="stat-content">
                <h3>Wildlife Haven</h3>
                <p>Home to Tanzania's largest elephant populations</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaGlobe />
              </div>
              <div className="stat-content">
                <h3>Vast Wilderness</h3>
                <p>Africa's largest game reserve and untouched landscapes</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaRoute />
              </div>
              <div className="stat-content">
                <h3>Exclusive Experience</h3>
                <p>Remote safaris away from tourist crowds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circuit Overview */}
      <section className="circuit-overview">
        <div className="overview-content">
          <h2>Tanzania's Southern Wilderness</h2>
          <p className="overview-intro">
            Experience the untamed beauty of Tanzania's Southern Circuit, where vast wilderness 
            meets diverse ecosystems. From the mighty Ruaha River to the peaks of Udzungwa, 
            discover a safari destination that offers solitude and authentic wildlife encounters.
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
          <div className="parks-cards-grid">
            {southernParks.map(park => (
              <div 
                key={park.id} 
                className={`park-card ${hoveredCard === park.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(park.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/parks-reserves/southern/${park.id}`)}
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
                    to={`/parks-reserves/southern/${park.id}`} 
                    className="view-details-btn"
                  >
                    Explore More <FaInfoCircle />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SouthernCircuit; 