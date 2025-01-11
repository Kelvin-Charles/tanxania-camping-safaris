import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle, FaRoute, 
  FaGlobe, FaUsers, FaCalendarAlt, FaSun, FaCloudRain, FaChevronRight,
  FaStar, FaHeart, FaPlane, FaHotel, FaWhatsapp
} from 'react-icons/fa';
import './westernCircuit.css';

const WesternCircuit = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const circuitFeatures = [
    {
      icon: <FaPaw />,
      title: "Primate Paradise",
      description: "Home to some of Africa's most studied chimpanzee populations"
    },
    {
      icon: <FaTree />,
      title: "Pristine Wilderness",
      description: "Remote and untouched landscapes along Lake Tanganyika"
    },
    {
      icon: <FaGlobe />,
      title: "Unique Ecosystems",
      description: "Blend of rainforest, mountains, and lakeside environments"
    },
    {
      icon: <FaRoute />,
      title: "Adventure Safari",
      description: "Off-the-beaten-path experiences in Tanzania's wild west"
    }
  ];

  const circuitHighlights = {
    uniqueFeatures: [
      "Chimpanzee tracking in natural habitat",
      "Lake Tanganyika's crystal waters",
      "Remote wilderness experiences",
      "Mountain forest hiking trails",
      "Pristine beaches along the lake",
      "Rich biodiversity hotspots"
    ],
    activities: [
      "Chimp trekking adventures",
      "Sport fishing expeditions",
      "Forest hiking and nature walks",
      "Beach activities on Lake Tanganyika",
      "Bird watching in pristine forests",
      "Cultural village visits"
    ]
  };

  const practicalInfo = {
    bestTime: {
      icon: <FaClock />,
      title: "Best Time to Visit",
      details: [
        "Dry Season: May to October",
        "Chimp Tracking: July to October",
        "Green Season: November to April",
        "Lake Activities: Year-round"
      ]
    },
    access: {
      icon: <FaPlane />,
      title: "Getting There",
      details: [
        "Flights to Kigoma Airport",
        "Charter flights available",
        "Road access from Arusha/Dar",
        "Boat transfers on Lake Tanganyika"
      ]
    },
    accommodation: {
      icon: <FaHotel />,
      title: "Where to Stay",
      details: [
        "Luxury lakeside lodges",
        "Tented forest camps",
        "Mountain retreats",
        "Eco-friendly resorts"
      ]
    }
  };

  const seasonalHighlights = {
    drySeasonJunOct: [
      "Peak chimpanzee tracking season",
      "Clear forest trails",
      "Excellent photography conditions",
      "Perfect lake activities weather"
    ],
    wetSeasonNovMay: [
      "Lush forest landscapes",
      "Abundant birdlife",
      "Fewer visitors",
      "Dramatic forest scenery"
    ]
  };

  const westernParks = [
    {
      id: 'gombe',
      name: 'Gombe National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: "Famous for Jane Goodall's chimpanzee research, offering intimate primate encounters.",
      difficulty: "Moderate",
      bestTime: "July-October",
      duration: "2-3 days",
      highlights: [
        'Chimpanzee tracking',
        'Pristine forest trails',
        'Lake Tanganyika shores',
        'Bird watching'
      ]
    },
    {
      id: 'mahale',
      name: 'Mahale Mountains',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Remote paradise combining mountains, rainforest, and beach along Lake Tanganyika.',
      difficulty: "Moderate-Challenging",
      bestTime: "May-October",
      duration: "3-4 days",
      highlights: [
        'Chimpanzee trekking',
        'Beach activities',
        'Mountain hiking',
        'Pristine forest'
      ]
    },
    {
      id: 'katavi',
      name: 'Katavi National Park',
      image: 'https://img.freepik.com/free-photo/beautiful-shot-african-safari-wildlife_181624-19806.jpg?w=1800',
      description: "One of Tanzania's most untouched wilderness areas, famous for large hippo pods and buffalo herds.",
      difficulty: "Moderate",
      bestTime: "June-October",
      duration: "3-4 days",
      highlights: [
        'Large hippo concentrations',
        'Vast grasslands',
        'Remote safaris',
        'Authentic wilderness'
      ]
    },
    {
      id: 'rubondo',
      name: 'Rubondo Island',
      image: 'https://img.freepik.com/free-photo/beautiful-landscape-with-trees-lake_23-2149666138.jpg?w=1800',
      description: 'A unique island national park in Lake Victoria offering pristine forest and water experiences.',
      difficulty: "Easy",
      bestTime: "June-August",
      duration: "2-3 days",
      highlights: [
        'Forest chimpanzees',
        'Sport fishing',
        'Bird watching',
        'Island activities'
      ]
    },
    {
      id: 'saanane',
      name: 'Saanane Island National Park',
      image: 'https://img.freepik.com/free-photo/beautiful-landscape-lake-victoria_23-2149666137.jpg?w=1800',
      description: "Tanzania's smallest national park, offering a unique blend of wildlife and Lake Victoria views.",
      difficulty: "Easy",
      bestTime: "June-September",
      duration: "1-2 days",
      highlights: [
        'Lake Victoria views',
        'Small wildlife',
        'Bird watching',
        'City proximity'
      ]
    },
    {
      id: 'burigi-chato',
      name: 'Burigi-Chato National Park',
      image: 'https://img.freepik.com/free-photo/african-savanna-landscape_23-2149666144.jpg?w=1800',
      description: "A newly established park with diverse landscapes and emerging wildlife populations.",
      difficulty: "Moderate",
      bestTime: "June-October",
      duration: "2-3 days",
      highlights: [
        'Scenic landscapes',
        'Growing wildlife',
        'Lake Burigi',
        'Remote safaris'
      ]
    },
    {
      id: 'ibanda-kyerwa',
      name: 'Ibanda-Kyerwa National Park',
      image: 'https://img.freepik.com/free-photo/african-landscape-sunset_23-2149666140.jpg?w=1800',
      description: "Rich in biodiversity and cultural heritage, offering unique wildlife corridors.",
      difficulty: "Moderate",
      bestTime: "June-September",
      duration: "2-3 days",
      highlights: [
        'Cultural sites',
        'Wildlife corridors',
        'River systems',
        'Local communities'
      ]
    },
    {
      id: 'rumanyika',
      name: 'Rumanyika-Karagwe National Park',
      image: 'https://img.freepik.com/free-photo/beautiful-african-savanna_23-2149666143.jpg?w=1800',
      description: "Historical landscapes combined with natural beauty and cultural significance.",
      difficulty: "Easy-Moderate",
      bestTime: "June-September",
      duration: "2-3 days",
      highlights: [
        'Historical sites',
        'Cultural heritage',
        'Scenic views',
        'Traditional kingdoms'
      ]
    },
    {
      id: 'ugalla',
      name: 'Ugalla River National Park',
      image: 'https://img.freepik.com/free-photo/river-forest-landscape_23-2149666139.jpg?w=1800',
      description: "A pristine wilderness area along the Ugalla River system, perfect for adventurous travelers.",
      difficulty: "Moderate",
      bestTime: "July-October",
      duration: "2-4 days",
      highlights: [
        'River ecosystem',
        'Sport fishing',
        'Remote safaris',
        'Bird diversity'
      ]
    }
    // Add other parks...
  ];

  return (
    <div className="western-circuit">
      <section className="circuit-hero">
        <div className="hero-content">
          <h1>Western Safari Circuit</h1>
          <p>Discover Tanzania's hidden gems and primate paradise</p>
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
                <h3>Primate Haven</h3>
                <p>Home to Tanzania's largest chimpanzee populations</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaGlobe />
              </div>
              <div className="stat-content">
                <h3>Unique Landscape</h3>
                <p>Mountains meet Lake Tanganyika's crystal waters</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaRoute />
              </div>
              <div className="stat-content">
                <h3>Remote Adventure</h3>
                <p>Off-the-beaten-path wilderness experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circuit Overview */}
      <section className="circuit-overview">
        <div className="overview-content">
          <h2>Tanzania's Wild West Adventure</h2>
          <p className="overview-intro">
            Experience the untamed beauty of Tanzania's Western Circuit, where pristine 
            forests meet the crystal waters of Lake Tanganyika. This remote paradise 
            offers unique wildlife encounters and breathtaking landscapes far from the 
            beaten path.
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

      {/* Add the highlights section */}
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

      {/* Add the practical info section */}
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

      {/* Add the seasonal highlights section */}
      <section className="seasonal-highlights">
        <div className="container">
          <h2>Seasonal Highlights</h2>
          <div className="season-grid">
            <div className="season-card">
              <div className="season-icon"><FaSun /></div>
              <h3>Dry Season (May-October)</h3>
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
            {westernParks.map(park => (
              <div 
                key={park.id} 
                className={`park-card ${hoveredCard === park.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(park.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/parks-reserves/western/${park.id}`)}
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
                    to={`/parks-reserves/western/${park.id}`} 
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

export default WesternCircuit; 