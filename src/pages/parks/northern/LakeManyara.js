import React, { useState } from 'react';
import './LakeManyara.css';
import {
  FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, 
  FaHiking, FaBinoculars, FaCompass, FaCalendarAlt, FaSun, 
  FaCloudRain, FaMountain, FaDove, FaInfoCircle, FaMapMarked,
  FaUsers, FaClock, FaRoute, FaShieldAlt, FaBed, FaUmbrellaBeach,
  FaSeedling, FaGlobeAfrica, FaHeart, FaHandshake, FaCheck,
  FaThermometerHalf, FaUmbrella, FaWind, FaStar, FaImage,
  FaChevronLeft, FaChevronRight, FaExpand, FaCompress, FaDollarSign,
  FaCar, FaPlane, FaPassport, FaPhone, FaCalendarPlus, FaSuitcase, FaList, FaBookmark, FaExclamationCircle,
  FaChild, FaCaravan, FaMoneyBillWave, FaFirstAid, FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';

const LakeManyara = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeEcosystem, setActiveEcosystem] = useState('lake');

  // New state variables for interactive features
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);
  const [activeSeason, setActiveSeason] = useState('dry');
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);
  const [selectedViewpoint, setSelectedViewpoint] = useState(null);

  // Add new state for trip planning
  const [selectedDuration, setSelectedDuration] = useState('2');
  const [selectedTripType, setSelectedTripType] = useState('standard');

  // Park Statistics
  const parkStats = [
    {
      number: "330",
      label: "Square Kilometers",
      description: "Total park area including the lake"
    },
    {
      number: "1,000+",
      label: "Bird Species",
      description: "Including flamingos and pelicans"
    },
    {
      number: "2-3",
      label: "Days Recommended",
      description: "Ideal duration for visit"
    },
    {
      number: "670",
      label: "Meters Elevation",
      description: "Above sea level"
    }
  ];

  // Wildlife Data
  const wildlife = [
    {
      name: "Tree-Climbing Lions",
      image: "https://images.unsplash.com/photo-1545406213-c22c0c5af303",
      description: "Lake Manyara is famous for its tree-climbing lions, a behavior rarely seen in other locations.",
      bestTime: "Early morning and late afternoon"
    },
    {
      name: "Pink Flamingos",
      image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75",
      description: "Thousands of flamingos gather at the lake, creating a stunning pink spectacle.",
      bestTime: "Year-round, best during wet season"
    },
    {
      name: "African Elephants",
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174",
      description: "Large herds of elephants can be seen in the groundwater forest.",
      bestTime: "Dry season (June to October)"
    }
  ];

  // Activities
  const activities = [
    {
      title: "Game Drives",
      icon: <FaRoute />,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      description: "Explore diverse landscapes and spot wildlife in open-sided vehicles.",
      duration: "3-4 hours",
      difficulty: "Easy"
    },
    {
      title: "Bird Watching",
      icon: <FaBinoculars />,
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53",
      description: "Over 400 species of birds make this park a bird-watcher's paradise.",
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      title: "Walking Safari",
      icon: <FaHiking />,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      description: "Get close to nature with guided walks through the forest.",
      duration: "2-3 hours",
      difficulty: "Moderate"
    }
  ];

  // Ecosystems Data
  const ecosystems = {
    lake: {
      title: "Soda Lake",
      icon: <FaWater />,
      description: "A shallow alkaline lake covering two-thirds of the park, home to thousands of flamingos and other water birds.",
      features: ["Alkaline waters", "Flamingo flocks", "Pelican colonies", "Seasonal water levels"],
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53"
    },
    forest: {
      title: "Groundwater Forest",
      icon: <FaTree />,
      description: "Dense forest sustained by underground water sources, providing habitat for tree-climbing lions and diverse wildlife.",
      features: ["Ancient mahogany trees", "Tree-climbing lions", "Baboon troops", "Forest birds"],
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
    },
    woodland: {
      title: "Acacia Woodland",
      icon: <FaSeedling />,
      description: "Open woodland areas with scattered acacia trees, perfect for spotting elephants and giraffes.",
      features: ["Elephant herds", "Giraffe groups", "Diverse birdlife", "Open savanna"],
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
    }
  };

  // Cultural Experiences
  const culturalExperiences = [
    {
      title: "Maasai Village Visit",
      icon: <FaUsers />,
      description: "Experience authentic Maasai culture through guided village visits and cultural interactions.",
      activities: ["Traditional dances", "Craft demonstrations", "Cultural discussions", "Local market visits"]
    },
    {
      title: "Mto wa Mbu Town",
      icon: <FaGlobeAfrica />,
      description: "Explore this vibrant multicultural town known for its diverse ethnic groups and local crafts.",
      activities: ["Local market tours", "Banana beer tasting", "Art galleries", "Traditional cooking"]
    }
  ];

  // Conservation Initiatives
  const conservationEfforts = [
    {
      title: "Wildlife Protection",
      icon: <FaHeart />,
      description: "Ongoing efforts to protect and monitor the park's unique wildlife populations.",
      achievements: "Successful conservation of tree-climbing lions and elephant populations."
    },
    {
      title: "Community Partnership",
      icon: <FaHandshake />,
      description: "Working with local communities to promote sustainable tourism and conservation.",
      achievements: "Development of community-based tourism initiatives and educational programs."
    }
  ];

  // Accommodation Options
  const accommodations = [
    {
      name: "Lake Manyara Tree Lodge",
      type: "Luxury Lodge",
      features: [
        "9 exclusive treehouse suites",
        "Private butler service",
        "Swimming pool",
        "Spa facilities",
        "Night safari access"
      ],
      description: "Nestled in an ancient mahogany forest, offering intimate luxury experiences."
    },
    {
      name: "Manyara Green Camp",
      type: "Eco Camp",
      features: [
        "8 eco-friendly tents",
        "Riverside location",
        "Communal dining",
        "Sustainable practices",
        "Natural setting"
      ],
      description: "Sustainable camping experience on the banks of the Endabash River."
    }
  ];

  // New data objects for additional features
  const photoGallery = [
    {
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      title: "Tree-climbing Lions",
      description: "Unique behavior of lions climbing trees in Lake Manyara",
      credit: "Wildlife Photographer"
    },
    {
      url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53",
      title: "Flamingo Flocks",
      description: "Thousands of flamingos creating a pink spectacle on the lake",
      credit: "Nature Photographer"
    },
    {
      url: "https://images.unsplash.com/photo-1547970810-dc1eac37d174",
      title: "Elephant Herds",
      description: "Elephants in their natural habitat near the lake shore",
      credit: "Safari Guide"
    }
  ];

  const seasonalWeather = {
    dry: {
      months: "June to October",
      temperature: "20°C - 30°C",
      rainfall: "Minimal",
      humidity: "Low",
      visibility: "Excellent",
      highlights: [
        "Clear skies perfect for photography",
        "Animals concentrate around water sources",
        "Less vegetation for better wildlife viewing",
        "Comfortable temperatures for activities"
      ],
      tips: [
        "Bring warm clothes for morning game drives",
        "Pack sun protection",
        "Carry plenty of water",
        "Book accommodations in advance"
      ]
    },
    wet: {
      months: "November to May",
      temperature: "22°C - 32°C",
      rainfall: "Moderate to Heavy",
      humidity: "High",
      visibility: "Variable",
      highlights: [
        "Lush green landscapes",
        "Migratory birds present",
        "Beautiful storm clouds",
        "Fewer tourists"
      ],
      tips: [
        "Pack rain gear",
        "Bring insect repellent",
        "Check road conditions",
        "Be flexible with plans"
      ]
    }
  };

  const viewpoints = [
    {
      id: 1,
      name: "Lake View Point",
      coordinates: { lat: -3.375, lng: 35.8 },
      description: "Panoramic views of the lake and flamingo flocks",
      bestTime: "Early morning",
      photoTips: "Use polarizing filter for water reflections"
    },
    {
      id: 2,
      name: "Forest Canopy",
      coordinates: { lat: -3.380, lng: 35.82 },
      description: "Perfect spot for tree-climbing lions",
      bestTime: "Mid-morning to afternoon",
      photoTips: "Long lens recommended for wildlife shots"
    },
    {
      id: 3,
      name: "Rift Valley Viewpoint",
      coordinates: { lat: -3.385, lng: 35.84 },
      description: "Spectacular views of the Great Rift Valley",
      bestTime: "Sunset",
      photoTips: "Wide-angle lens for landscape shots"
    }
  ];

  const practicalInfo = {
    fees: {
      international: "$53.10 per adult",
      resident: "$35.40 per adult",
      children: "50% discount for under 16",
      vehicle: "$40 per vehicle"
    },
    transportation: {
      car: {
        route: "126km from Arusha via good tarmac road",
        duration: "1.5-2 hours drive",
        tips: "4x4 recommended during wet season"
      },
      air: {
        nearest: "Lake Manyara Airport (LKY)",
        connections: "Daily flights from Arusha and Serengeti",
        transfer: "Lodge transfers available"
      }
    },
    requirements: [
      "Park entry permit",
      "Valid passport/ID",
      "Yellow fever vaccination (recommended)",
      "Travel insurance"
    ],
    contacts: {
      emergency: "+255 123 456 789",
      office: "+255 987 654 321",
      email: "info@lakemanyara.com"
    }
  };

  // Add new data for trip planning
  const tripTypes = {
    standard: {
      title: "Standard Safari",
      description: "Perfect for first-time visitors",
      duration: "2-3 days",
      highlights: [
        "Game drives",
        "Bird watching",
        "Basic accommodation"
      ]
    },
    luxury: {
      title: "Luxury Experience",
      description: "Premium safari with exclusive amenities",
      duration: "3-4 days",
      highlights: [
        "Private game drives",
        "Luxury lodge stay",
        "Exclusive dining"
      ]
    },
    photography: {
      title: "Photography Focus",
      description: "Designed for photography enthusiasts",
      duration: "3-4 days",
      highlights: [
        "Prime photo locations",
        "Professional guidance",
        "Flexible timing"
      ]
    },
    family: {
      title: "Family Adventure",
      description: "Kid-friendly safari experience",
      duration: "2-3 days",
      highlights: [
        "Educational activities",
        "Family lodges",
        "Safe adventures"
      ]
    }
  };

  const essentialItems = [
    {
      category: "Documents",
      icon: <FaPassport />,
      items: [
        "Valid passport",
        "Entry visa",
        "Travel insurance",
        "Vaccination records"
      ]
    },
    {
      category: "Clothing",
      icon: <FaUmbrellaBeach />,
      items: [
        "Light, neutral-colored clothing",
        "Warm jacket for mornings",
        "Sun hat and sunglasses",
        "Sturdy walking shoes"
      ]
    },
    {
      category: "Equipment",
      icon: <FaCamera />,
      items: [
        "Camera and charger",
        "Binoculars",
        "Power bank",
        "Adapter plugs"
      ]
    },
    {
      category: "Health & Safety",
      icon: <FaFirstAid />,
      items: [
        "First aid kit",
        "Insect repellent",
        "Sunscreen",
        "Prescription medications"
      ]
    }
  ];

  const budgetEstimates = {
    basic: {
      accommodation: "$150-200/night",
      activities: "$100-150/day",
      transportation: "$50-100/day",
      meals: "$30-50/day"
    },
    comfort: {
      accommodation: "$250-350/night",
      activities: "$150-200/day",
      transportation: "$100-150/day",
      meals: "$50-80/day"
    },
    luxury: {
      accommodation: "$500+/night",
      activities: "$250+/day",
      transportation: "$200+/day",
      meals: "$100+/day"
    }
  };

  // Helper functions for interactive features
  const nextPhoto = () => {
    setActivePhotoIndex((prev) => 
      prev === photoGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => 
      prev === 0 ? photoGallery.length - 1 : prev - 1
    );
  };

  const togglePhotoExpand = () => {
    setIsPhotoExpanded(!isPhotoExpanded);
  };

  const contactInfo = {
    whatsappLink: "https://wa.me/255123456789",
    email: "info@lakemanyara.com",
    phone: "+255 123 456 789"
  };

  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Lake Manyara National Park</h1>
          <p>Where Lions Climb Trees and Flamingos Paint the Lake Pink</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>About Lake Manyara</h2>
              <p>Lake Manyara National Park is a compact yet diverse ecosystem where the Great Rift Valley escarpment meets an ancient soda lake. The park is renowned for its tree-climbing lions, vast flocks of flamingos, and diverse landscapes ranging from dense groundwater forest to acacia woodlands.</p>
              
              <div className="key-stats">
                {parkStats.map((stat, index) => (
                  <div className="stat-item" key={index}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                    <p>{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801" alt="Lake Manyara Landscape" />
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Incredible Wildlife</h2>
          <div className="wildlife-grid">
            {wildlife.map((animal, index) => (
              <div className="wildlife-card" key={index}>
                <div className="wildlife-image">
                  <img src={animal.image} alt={animal.name} />
                </div>
                <div className="wildlife-info">
                  <h3><FaPaw /> {animal.name}</h3>
                  <p>{animal.description}</p>
                  <div className="best-time">
                    <FaClock /> Best time: {animal.bestTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Park Activities</h2>
          <div className="activity-cards">
            {activities.map((activity, index) => (
              <div className="activity-card" key={index}>
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                </div>
                <div className="activity-content">
                  <h3>{activity.icon} {activity.title}</h3>
                  <p>{activity.description}</p>
                  <div className="activity-details">
                    <span><FaClock /> {activity.duration}</span>
                    <span><FaShieldAlt /> {activity.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="visit-info">
        <div className="container">
          <h2>Essential Visit Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaCalendarAlt />
              <h3>Best Time to Visit</h3>
              <p>Dry season (June to October) for wildlife viewing</p>
              <p>Wet season (November to May) for bird watching</p>
            </div>
            <div className="info-card">
              <FaClock />
              <h3>Park Hours</h3>
              <p>6:00 AM to 6:00 PM daily</p>
              <p>Night game drives available with special permission</p>
            </div>
            <div className="info-card">
              <FaRoute />
              <h3>Getting There</h3>
              <p>126 km west of Arusha</p>
              <p>Accessible by road or air (Manyara Airstrip)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystems-section">
        <div className="container">
          <h2>Diverse Ecosystems</h2>
          <div className="ecosystem-tabs">
            {Object.keys(ecosystems).map(key => (
              <div
                key={key}
                className={`ecosystem-tab ${activeEcosystem === key ? 'active' : ''}`}
                onClick={() => setActiveEcosystem(key)}
              >
                {ecosystems[key].icon}
                <span>{ecosystems[key].title}</span>
              </div>
            ))}
          </div>
          <div className="ecosystem-content">
            <div className="ecosystem-info">
              <h3>{ecosystems[activeEcosystem].title}</h3>
              <p>{ecosystems[activeEcosystem].description}</p>
              <ul className="ecosystem-features">
                {ecosystems[activeEcosystem].features.map((feature, index) => (
                  <li key={index}><FaLeaf /> {feature}</li>
                ))}
              </ul>
            </div>
            <div className="ecosystem-image">
              <img src={ecosystems[activeEcosystem].image} alt={ecosystems[activeEcosystem].title} />
            </div>
          </div>
        </div>
      </section>

      <section className="cultural-section">
        <div className="container">
          <h2>Cultural Experiences</h2>
          <div className="cultural-grid">
            {culturalExperiences.map((experience, index) => (
              <div className="cultural-card" key={index}>
                <div className="cultural-icon">{experience.icon}</div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <ul className="cultural-activities">
                  {experience.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="conservation-section">
        <div className="container">
          <h2>Conservation & Community</h2>
          <div className="conservation-grid">
            {conservationEfforts.map((effort, index) => (
              <div className="conservation-card" key={index}>
                <div className="conservation-icon">{effort.icon}</div>
                <h3>{effort.title}</h3>
                <p>{effort.description}</p>
                <div className="achievement-badge">
                  <FaInfoCircle />
                  <span>{effort.achievements}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="accommodation-section">
        <div className="container">
          <h2>Where to Stay</h2>
          <div className="accommodation-grid">
            {accommodations.map((lodge, index) => (
              <div className="accommodation-card" key={index}>
                <div className="accommodation-type">
                  <FaBed />
                  <span>{lodge.type}</span>
                </div>
                <h3>{lodge.name}</h3>
                <p>{lodge.description}</p>
                <ul className="feature-list">
                  {lodge.features.map((feature, idx) => (
                    <li key={idx}><FaCheck /> {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="photo-gallery-section">
        <div className="container">
          <h2>Photo Gallery</h2>
          <div className={`gallery-viewer ${isPhotoExpanded ? 'expanded' : ''}`}>
            <div className="gallery-main">
              <button className="gallery-nav prev" onClick={prevPhoto}>
                <FaChevronLeft />
              </button>
              <div className="gallery-image">
                <img 
                  src={photoGallery[activePhotoIndex].url} 
                  alt={photoGallery[activePhotoIndex].title} 
                />
                <button className="expand-btn" onClick={togglePhotoExpand}>
                  {isPhotoExpanded ? <FaCompress /> : <FaExpand />}
                </button>
              </div>
              <button className="gallery-nav next" onClick={nextPhoto}>
                <FaChevronRight />
              </button>
            </div>
            <div className="gallery-info">
              <h3>{photoGallery[activePhotoIndex].title}</h3>
              <p>{photoGallery[activePhotoIndex].description}</p>
              <span className="photo-credit">Photo by: {photoGallery[activePhotoIndex].credit}</span>
            </div>
            <div className="gallery-thumbnails">
              {photoGallery.map((photo, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${index === activePhotoIndex ? 'active' : ''}`}
                  onClick={() => setActivePhotoIndex(index)}
                >
                  <img src={photo.url} alt={photo.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="weather-guide-section">
        <div className="container">
          <h2>Seasonal Weather Guide</h2>
          <div className="season-selector">
            <button 
              className={`season-btn ${activeSeason === 'dry' ? 'active' : ''}`}
              onClick={() => setActiveSeason('dry')}
            >
              <FaSun /> Dry Season
            </button>
            <button 
              className={`season-btn ${activeSeason === 'wet' ? 'active' : ''}`}
              onClick={() => setActiveSeason('wet')}
            >
              <FaCloudRain /> Wet Season
            </button>
          </div>
          <div className="weather-details">
            <div className="weather-overview">
              <div className="weather-stat">
                <FaCalendarAlt />
                <h4>Months</h4>
                <p>{seasonalWeather[activeSeason].months}</p>
              </div>
              <div className="weather-stat">
                <FaThermometerHalf />
                <h4>Temperature</h4>
                <p>{seasonalWeather[activeSeason].temperature}</p>
              </div>
              <div className="weather-stat">
                <FaUmbrella />
                <h4>Rainfall</h4>
                <p>{seasonalWeather[activeSeason].rainfall}</p>
              </div>
              <div className="weather-stat">
                <FaWind />
                <h4>Humidity</h4>
                <p>{seasonalWeather[activeSeason].humidity}</p>
              </div>
            </div>
            <div className="season-highlights">
              <h3>Season Highlights</h3>
              <ul>
                {seasonalWeather[activeSeason].highlights.map((highlight, index) => (
                  <li key={index}><FaStar /> {highlight}</li>
                ))}
              </ul>
            </div>
            <div className="season-tips">
              <h3>Travel Tips</h3>
              <ul>
                {seasonalWeather[activeSeason].tips.map((tip, index) => (
                  <li key={index}><FaCheck /> {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="practical-info-section">
        <div className="container">
          <h2>Practical Information</h2>
          <div className="info-grid">
            <div className="info-block fees">
              <h3><FaDollarSign /> Park Fees</h3>
              <ul>
                <li>International: {practicalInfo.fees.international}</li>
                <li>Resident: {practicalInfo.fees.resident}</li>
                <li>Children: {practicalInfo.fees.children}</li>
                <li>Vehicle: {practicalInfo.fees.vehicle}</li>
              </ul>
            </div>
            <div className="info-block transport">
              <h3><FaCar /> Getting There</h3>
              <div className="transport-option">
                <h4>By Road</h4>
                <p>{practicalInfo.transportation.car.route}</p>
                <p>{practicalInfo.transportation.car.duration}</p>
                <p className="tip">{practicalInfo.transportation.car.tips}</p>
              </div>
              <div className="transport-option">
                <h4>By Air</h4>
                <p>{practicalInfo.transportation.air.nearest}</p>
                <p>{practicalInfo.transportation.air.connections}</p>
              </div>
            </div>
            <div className="info-block requirements">
              <h3><FaPassport /> Requirements</h3>
              <ul>
                {practicalInfo.requirements.map((req, index) => (
                  <li key={index}><FaCheck /> {req}</li>
                ))}
              </ul>
            </div>
            <div className="info-block contacts">
              <h3><FaPhone /> Important Contacts</h3>
              <ul>
                <li>Emergency: {practicalInfo.contacts.emergency}</li>
                <li>Office: {practicalInfo.contacts.office}</li>
                <li>Email: {practicalInfo.contacts.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="viewpoints-section">
        <div className="container">
          <h2>Photography Viewpoints</h2>
          <div className="viewpoints-grid">
            {viewpoints.map((point) => (
              <div 
                key={point.id}
                className={`viewpoint-card ${selectedViewpoint === point.id ? 'active' : ''}`}
                onClick={() => setSelectedViewpoint(point.id)}
              >
                <div className="viewpoint-header">
                  <h3><FaMapMarkerAlt /> {point.name}</h3>
                  <span className="best-time"><FaClock /> {point.bestTime}</span>
                </div>
                <p>{point.description}</p>
                <div className="photo-tip">
                  <FaCamera />
                  <span>{point.photoTips}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="plan-visit-section">
        <div className="container">
          <h2>Safari Style</h2>
          
          <div className="trip-types">
            <h3>Choose Your Safari Style</h3>
            <div className="trip-type-grid">
              {Object.entries(tripTypes).map(([key, type]) => (
                <div 
                  key={key}
                  className={`trip-type-card ${selectedTripType === key ? 'active' : ''}`}
                  onClick={() => setSelectedTripType(key)}
                >
                  <div className="trip-type-header">
                    <h4>{type.title}</h4>
                    <span className="duration">{type.duration}</span>
                  </div>
                  <p>{type.description}</p>
                  <ul className="trip-highlights">
                    {type.highlights.map((highlight, idx) => (
                      <li key={idx}><FaCheck /> {highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="planning-tools">
            <div className="checklist-section">
              <h3><FaList /> Essential Packing List</h3>
              <div className="checklist-grid">
                {essentialItems.map((category, index) => (
                  <div key={index} className="checklist-category">
                    <div className="category-header">
                      {category.icon}
                      <h4>{category.category}</h4>
                    </div>
                    <ul>
                      {category.items.map((item, idx) => (
                        <li key={idx}>
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>{item}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="budget-planner">
              <h3><FaMoneyBillWave /> Budget Estimates</h3>
              <div className="budget-categories">
                {Object.entries(budgetEstimates).map(([level, costs]) => (
                  <div key={level} className="budget-level">
                    <h4 className="capitalize">{level}</h4>
                    <ul>
                      {Object.entries(costs).map(([category, cost]) => (
                        <li key={category}>
                          <span className="capitalize">{category}:</span>
                          <span className="cost">{cost}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="travel-tips">
              <h3><FaExclamationCircle /> Important Travel Tips</h3>
              <div className="tips-grid">
                <div className="tip-card">
                  <FaCalendarPlus />
                  <h4>Booking</h4>
                  <p>Book at least 3-6 months in advance, especially during peak season (June-October)</p>
                </div>
                <div className="tip-card">
                  <FaSuitcase />
                  <p>Pack light, breathable clothing in neutral colors. Don't forget warm layers for morning game drives</p>
                </div>
                <div className="tip-card">
                  <FaChild />
                  <h4>Family Travel</h4>
                  <p>Minimum age for game drives is 6 years. Special family rooms available at most lodges</p>
                </div>
                <div className="tip-card">
                  <FaCaravan />
                  <h4>Transportation</h4>
                  <p>4x4 vehicles are recommended, especially during wet season. Airport transfers available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Start Your Adventure?</h3>
            <p>Contact us to customize your perfect Lake Manyara safari experience</p>
            <div className="cta-buttons">
              <button className="primary-btn">
                <FaBookmark /> Save Trip Plan
              </button>
              <button className="secondary-btn">
                <FaPhone /> Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <h2>Plan Your Visit</h2>
          <div className="booking-container">
            <div className="booking-form">
              <h3>Inquire Now</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Number of People</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group select-wrapper">
                  <select required>
                    <option value="">Select Activity</option>
                    <option value="game-drive">Game Drive</option>
                    <option value="walking">Walking Safari</option>
                    <option value="birding">Bird Watching</option>
                    <option value="custom">Custom Tour</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Special Requirements" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <FaCalendarCheck /> Request Booking
                </button>
              </form>
            </div>
            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <div className="contact-options">
                <a href={contactInfo.whatsappLink} className="whatsapp-btn">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <div className="contact-info">
                  <p>Email: {contactInfo.email}</p>
                  <p>Phone: {contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LakeManyara; 