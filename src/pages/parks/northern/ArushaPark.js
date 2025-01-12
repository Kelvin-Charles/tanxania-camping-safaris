import React, { useState } from 'react';
import './ArushaPark.css';
import {
  FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, 
  FaHiking, FaBinoculars, FaCompass, FaCalendarAlt, FaSun, 
  FaCloudRain, FaMountain, FaDove, FaInfoCircle, FaMapMarked,
  FaUsers, FaClock, FaRoute, FaShieldAlt, FaBed, FaUmbrellaBeach,
  FaSeedling, FaGlobeAfrica, FaHeart, FaHandshake, FaCheck,
  FaThermometerHalf, FaUmbrella, FaWind, FaStar, FaImage,
  FaChevronLeft, FaChevronRight, FaExpand, FaCompress, FaDollarSign,
  FaCar, FaPlane, FaPassport, FaPhone, FaCalendarPlus, FaSuitcase, FaList, FaBookmark, FaExclamationCircle,
  FaChild, FaCaravan, FaMoneyBillWave, FaFirstAid, FaCalendarCheck, FaWhatsapp,
  FaFire, FaRuler, FaArrowDown
} from 'react-icons/fa';

const ArushaPark = () => {
  // State variables for interactive features
  const [activeTab, setActiveTab] = useState('overview');
  const [activeEcosystem, setActiveEcosystem] = useState('forest');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);
  const [activeSeason, setActiveSeason] = useState('dry');
  const [selectedViewpoint, setSelectedViewpoint] = useState(null);
  const [selectedTripType, setSelectedTripType] = useState('standard');

  // Additional state variables for new sections
  const [activeTrail, setActiveTrail] = useState('fig-tree');
  const [activeHistory, setActiveHistory] = useState('establishment');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Park Statistics
  const parkStats = [
    {
      number: "552",
      label: "Square Kilometers",
      description: "Total park area"
    },
    {
      number: "400+",
      label: "Bird Species",
      description: "Including flamingos and waterfowl"
    },
    {
      number: "4,566",
      label: "Meters Height",
      description: "Mount Meru peak"
    },
    {
      number: "7",
      label: "Momela Lakes",
      description: "Alkaline lakes"
    }
  ];

  // Wildlife Data
  const wildlife = [
    {
      name: "Black-and-white Colobus Monkeys",
      image: "https://cms.londonzoo.org/sites/default/files/styles/responsive/public/1440/729/1/2022-11/DSC_6319-Edit.jpg.webp",
      description: "Distinctive monkeys found in the montane forest areas.",
      bestTime: "Early morning and late afternoon"
    },
    {
      name: "Blue Monkeys",
      image: "https://www.bioexplorer.net/images/Blue-monkey-f.jpg",
      description: "Commonly seen in the forest canopy.",
      bestTime: "Throughout the day"
    },
    {
      name: "Flamingos",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovNOZv8uo28CQJKwnM6ap--VB0-nAnJxmfw&s",
      description: "Found at the Momela Lakes, along with other water birds.",
      bestTime: "Early morning"
    }
  ];

  // Activities
  const activities = [
    {
      title: "Mount Meru Climb",
      icon: <FaMountain />,
      image: "https://www.tranquilkilimanjaro.com/wp-content/uploads/4-days-mount-meru.jpeg",
      description: "3-4 day ascent of Tanzania's second-highest peak.",
      duration: "3-4 days",
      difficulty: "Challenging"
    },
    {
      title: "Walking Safari",
      icon: <FaHiking />,
      image: "https://www.serengetitrips.com/wp-content/uploads/2023/04/Arusha-walking-tours-2-2.jpg",
      description: "Guided walks through diverse landscapes and forest trails.",
      duration: "2-3 hours",
      difficulty: "Moderate"
    },
    {
      title: "Canoe Safari",
      icon: <FaWater />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyz82WZg2zBLXwjnWv-nvmPqE_m__U5cQ0w&s",
      description: "Explore the Momela Lakes by canoe.",
      duration: "2-3 hours",
      difficulty: "Easy"
    }
  ];

  // Ecosystems Data
  const ecosystems = {
    forest: {
      title: "Montane Forest",
      icon: <FaTree />,
      description: "Rich montane forest habitat home to diverse primate species and birds.",
      features: ["Ancient trees", "Primate habitat", "Forest birds", "Walking trails"],
      image: "https://images.unsplash.com/photo-7890123456"
    },
    lakes: {
      title: "Momela Lakes",
      icon: <FaWater />,
      description: "Series of shallow alkaline lakes attracting numerous water birds.",
      features: ["Flamingo flocks", "Water birds", "Canoe safaris", "Scenic views"],
      image: "https://images.unsplash.com/photo-8901234567"
    },
    crater: {
      title: "Ngurdoto Crater",
      icon: <FaMountain />,
      description: "Often called 'Little Ngorongoro', this crater hosts diverse wildlife.",
      features: ["Buffalo herds", "Wetland birds", "Viewpoints", "Forest walks"],
      image: "https://images.unsplash.com/photo-9012345678"
    }
  };

  // Cultural Experiences
  const culturalExperiences = [
    {
      title: "Local Community Visits",
      icon: <FaUsers />,
      description: "Visit nearby villages and learn about local culture.",
      activities: ["Cultural tours", "Local crafts", "Traditional food", "Community projects"]
    },
    {
      title: "Meru Coffee Experience",
      icon: <FaLeaf />,
      description: "Learn about coffee cultivation on Mount Meru's slopes.",
      activities: ["Coffee tours", "Tasting sessions", "Farm visits", "Local markets"]
    }
  ];

  // Conservation Initiatives
  const conservationEfforts = [
    {
      title: "Forest Conservation",
      icon: <FaTree />,
      description: "Protecting the montane forest ecosystem and its inhabitants.",
      achievements: "Successful primate conservation and habitat protection."
    },
    {
      title: "Community Programs",
      icon: <FaHandshake />,
      description: "Working with local communities for sustainable tourism.",
      achievements: "Development of eco-tourism initiatives and education programs."
    }
  ];

  // Accommodation Options
  const accommodations = [
    {
      name: "Momela Wildlife Lodge",
      type: "Safari Lodge",
      features: [
        "Mountain views",
        "Restaurant & bar",
        "Guided walks",
        "Swimming pool",
        "Game drives"
      ],
      description: "Comfortable lodge with stunning views of Mount Meru and Kilimanjaro."
    },
    {
      name: "Mount Meru Huts",
      type: "Mountain Huts",
      features: [
        "Basic accommodation",
        "Dormitory style",
        "Camping facilities",
        "Mountain guides",
        "Equipment rental"
      ],
      description: "Basic but comfortable huts for Mount Meru climbers."
    }
  ];

  // Photo Gallery
  const photoGallery = [
    {
      url: "https://images.unsplash.com/photo-0123456789",
      title: "Mount Meru Summit",
      description: "Spectacular views from Tanzania's second-highest peak",
      credit: "Mountain Guide"
    },
    {
      url: "https://images.unsplash.com/photo-1234567890",
      title: "Momela Lakes",
      description: "Flamingos and other water birds at the alkaline lakes",
      credit: "Nature Photographer"
    },
    {
      url: "https://images.unsplash.com/photo-2345678901",
      title: "Forest Primates",
      description: "Black-and-white colobus monkeys in their natural habitat",
      credit: "Wildlife Photographer"
    }
  ];

  // Seasonal Weather Guide
  const seasonalWeather = {
    dry: {
      months: "June to October, December to February",
      temperature: "15°C - 25°C",
      rainfall: "Minimal",
      humidity: "Low",
      visibility: "Excellent",
      highlights: [
        "Clear views of Mount Kilimanjaro and Meru",
        "Best time for mountain climbing",
        "Comfortable temperatures for walking safaris",
        "Wildlife concentrated around water sources"
      ],
      tips: [
        "Book mountain climbs in advance",
        "Bring warm clothing for mornings",
        "Carry plenty of water",
        "Use sun protection"
      ]
    },
    wet: {
      months: "March to May, November",
      temperature: "18°C - 28°C",
      rainfall: "Moderate to Heavy",
      humidity: "High",
      visibility: "Variable",
      highlights: [
        "Lush green landscapes",
        "Waterfalls active",
        "Best for forest photography",
        "Fewer tourists"
      ],
      tips: [
        "Bring waterproof gear",
        "Check trail conditions",
        "Book flexible itineraries",
        "Use insect repellent"
      ]
    }
  };

  // Practical Information
  const practicalInfo = {
    fees: {
      international: "$45 per adult",
      resident: "$25 per adult",
      children: "50% discount for under 16",
      vehicle: "$40 per vehicle"
    },
    transportation: {
      car: {
        route: "45-minute drive from Arusha city",
        duration: "25km from city center",
        tips: "All vehicles suitable in dry season"
      },
      air: {
        nearest: "Kilimanjaro International Airport (JRO)",
        connections: "Daily flights from Dar es Salaam",
        transfer: "Airport transfers available"
      }
    },
    requirements: [
      "Park entry permit",
      "Valid passport/ID",
      "Climbing permits for Mount Meru",
      "Travel insurance"
    ],
    contacts: {
      emergency: "+255 123 456 789",
      office: "+255 987 654 321",
      email: "info@arushapark.com"
    }
  };

  // Photography Viewpoints
  const viewpoints = [
    {
      id: 1,
      name: "Momela Lakes Viewpoint",
      coordinates: { lat: -3.25, lng: 36.9 },
      description: "Panoramic views of the lakes and Mount Kilimanjaro",
      bestTime: "Early morning",
      photoTips: "Wide-angle lens for landscape shots"
    },
    {
      id: 2,
      name: "Mount Meru Summit",
      coordinates: { lat: -3.24, lng: 36.75 },
      description: "360-degree views of Northern Tanzania",
      bestTime: "Sunrise",
      photoTips: "Tripod essential for low light shots"
    },
    {
      id: 3,
      name: "Forest Canopy Walk",
      coordinates: { lat: -3.26, lng: 36.85 },
      description: "Perfect for primate and bird photography",
      bestTime: "Mid-morning",
      photoTips: "Telephoto lens for wildlife shots"
    }
  ];

  // Trip Types
  const tripTypes = {
    standard: {
      title: "Day Visit",
      description: "Perfect for short visits and game drives",
      duration: "1-2 days",
      highlights: [
        "Game drives",
        "Short walks",
        "Lake visits"
      ]
    },
    adventure: {
      title: "Mount Meru Climb",
      description: "Challenge yourself with a mountain ascent",
      duration: "3-4 days",
      highlights: [
        "Summit attempt",
        "Mountain huts",
        "Professional guides"
      ]
    },
    photography: {
      title: "Photography Focus",
      description: "Capture the park's diverse landscapes and wildlife",
      duration: "2-3 days",
      highlights: [
        "Best viewpoints",
        "Wildlife spots",
        "Photography guidance"
      ]
    },
    family: {
      title: "Family Adventure",
      description: "Kid-friendly activities and learning experiences",
      duration: "1-2 days",
      highlights: [
        "Easy walks",
        "Canoe rides",
        "Wildlife watching"
      ]
    }
  };

  // Essential Items
  const essentialItems = [
    {
      category: "Documents",
      icon: <FaPassport />,
      items: [
        "Valid passport",
        "Park permits",
        "Travel insurance",
        "Emergency contacts"
      ]
    },
    {
      category: "Clothing",
      icon: <FaSuitcase />,
      items: [
        "Hiking boots",
        "Rain jacket",
        "Warm layers",
        "Sun hat"
      ]
    },
    {
      category: "Equipment",
      icon: <FaCamera />,
      items: [
        "Camera gear",
        "Binoculars",
        "Day pack",
        "Water bottle"
      ]
    },
    {
      category: "Health & Safety",
      icon: <FaFirstAid />,
      items: [
        "First aid kit",
        "Sunscreen",
        "Insect repellent",
        "Altitude medication"
      ]
    }
  ];

  // Budget Estimates
  const budgetEstimates = {
    basic: {
      accommodation: "$50-100/night",
      activities: "$50-100/day",
      transportation: "$30-50/day",
      meals: "$20-40/day"
    },
    comfort: {
      accommodation: "$150-250/night",
      activities: "$100-200/day",
      transportation: "$80-120/day",
      meals: "$40-60/day"
    },
    luxury: {
      accommodation: "$300+/night",
      activities: "$200+/day",
      transportation: "$150+/day",
      meals: "$80+/day"
    }
  };

  // Contact Information
  const contactInfo = {
    whatsappLink: "https://wa.me/255622403223",
    email: "info@tanzaniacampingsafaris.com",
    phone: "+255 622 403 223"
  };

  // Hiking Trails Data
  const hikingTrails = {
    'fig-tree': {
      name: "Fig Tree Arch Trail",
      distance: "3.5 km",
      duration: "2-3 hours",
      difficulty: "Easy to Moderate",
      startPoint: "Momela Gate",
      highlights: [
        "Ancient fig trees",
        "Forest canopy views",
        "Colobus monkey sightings",
        "Bird watching spots"
      ],
      description: "A scenic trail passing through montane forest, featuring a natural arch formed by fig tree roots.",
      bestTime: "Early morning or late afternoon",
      tips: [
        "Wear sturdy hiking boots",
        "Bring binoculars for wildlife viewing",
        "Carry water and snacks",
        "Consider hiring a guide"
      ]
    },
    'crater-rim': {
      name: "Ngurdoto Crater Rim Trail",
      distance: "8.2 km",
      duration: "4-5 hours",
      difficulty: "Moderate",
      startPoint: "Ngurdoto Gate",
      highlights: [
        "Crater viewpoints",
        "Buffalo herds",
        "Wetland birds",
        "Forest vegetation"
      ],
      description: "A circular trail offering panoramic views of the crater floor and surrounding landscapes.",
      bestTime: "Morning hours for clear views",
      tips: [
        "Start early to avoid afternoon heat",
        "Bring a camera for panoramic shots",
        "Watch for changing weather",
        "Stay with your guide"
      ]
    },
    'meru-route': {
      name: "Mount Meru Summit Route",
      distance: "45 km round trip",
      duration: "3-4 days",
      difficulty: "Challenging",
      startPoint: "Momela Gate",
      highlights: [
        "Socialist Peak (4,562m)",
        "Ash cone views",
        "Alpine meadows",
        "Spectacular sunrise"
      ],
      description: "The main route to Mount Meru's summit, offering a challenging but rewarding climb.",
      bestTime: "Dry season (June-October)",
      tips: [
        "Acclimatize properly",
        "Book huts in advance",
        "Use professional guides",
        "Prepare for cold temperatures"
      ]
    }
  };

  // Park History Data
  const parkHistory = {
    establishment: {
      title: "Park Establishment",
      year: "1960",
      description: "Arusha National Park was established to protect the unique ecosystem around Mount Meru and provide a sanctuary for diverse wildlife species.",
      keyEvents: [
        "Initial protection of Mount Meru area",
        "Designation as a national park",
        "Integration of Ngurdoto Crater",
        "Addition of Momela Lakes region"
      ]
    },
    conservation: {
      title: "Conservation Milestones",
      periods: [
        {
          years: "1960s-1970s",
          achievements: "Establishment of basic infrastructure and ranger posts"
        },
        {
          years: "1980s-1990s",
          achievements: "Development of tourism facilities and walking safaris"
        },
        {
          years: "2000s-Present",
          achievements: "Implementation of community conservation programs"
        }
      ]
    },
    cultural: {
      title: "Cultural Heritage",
      description: "The park area has been home to various communities, including the Meru people, who have lived on the mountain's slopes for generations.",
      significance: [
        "Traditional forest use practices",
        "Sacred sites and ceremonies",
        "Local knowledge of flora and fauna",
        "Community conservation partnerships"
      ]
    }
  };

  // Wildlife Viewing Tips
  const wildlifeViewingTips = {
    general: [
      {
        title: "Best Viewing Times",
        tips: [
          "Early morning (6:00-9:00 AM)",
          "Late afternoon (4:00-6:30 PM)",
          "Overcast days for primate activity",
          "Full moon nights for nocturnal species"
        ]
      },
      {
        title: "Photography Tips",
        tips: [
          "Use telephoto lenses for wildlife",
          "Bring wide-angle for landscapes",
          "Consider tripod for low light",
          "Protect equipment from dust"
        ]
      }
    ],
    seasonal: {
      drySeasonTips: [
        "Focus on water sources",
        "Better visibility through vegetation",
        "More predictable animal movements",
        "Clearer mountain views"
      ],
      wetSeasonTips: [
        "Watch for migratory birds",
        "Follow fresh tracks",
        "Look for breeding behaviors",
        "Photograph dramatic skies"
      ]
    },
    speciesSpecific: {
      primates: [
        "Look for moving branches",
        "Listen for calls",
        "Check fruiting trees",
        "Stay quiet and patient"
      ],
      birds: [
        "Visit different habitats",
        "Use local guide knowledge",
        "Check lake edges",
        "Follow bird calls"
      ],
      mammals: [
        "Check open areas early morning",
        "Look for fresh tracks",
        "Watch for warning calls",
        "Stay downwind"
      ]
    }
  };

  // Flora Guide
  const floraGuide = {
    forestZone: {
      title: "Montane Forest Zone",
      elevation: "1,500-2,500m",
      keySpecies: [
        {
          name: "Yellowwood",
          scientificName: "Podocarpus latifolius",
          uses: "Timber, traditional medicine"
        },
        {
          name: "Wild Fig",
          scientificName: "Ficus thonningii",
          uses: "Wildlife food, shade"
        },
        {
          name: "Forest Olive",
          scientificName: "Olea capensis",
          uses: "Wood, fruit for wildlife"
        }
      ]
    },
    heathZone: {
      title: "Heath Zone",
      elevation: "2,500-3,500m",
      keySpecies: [
        {
          name: "Giant Heather",
          scientificName: "Erica arborea",
          uses: "Soil stabilization"
        },
        {
          name: "Mountain Sage",
          scientificName: "Artemisia afra",
          uses: "Traditional medicine"
        }
      ]
    },
    alpineZone: {
      title: "Alpine Zone",
      elevation: "Above 3,500m",
      keySpecies: [
        {
          name: "Giant Groundsel",
          scientificName: "Dendrosenecio kilimanjari",
          uses: "Ecological indicator"
        },
        {
          name: "Alpine Everlasting",
          scientificName: "Helichrysum newii",
          uses: "Medicinal"
        }
      ]
    }
  };

  // Geological Features
  const geologicalFeatures = {
    mountMeru: {
      title: "Mount Meru",
      type: "Stratovolcano",
      age: "500,000 years",
      lastEruption: "1910",
      features: [
        "Ash cone",
        "Parasitic cones",
        "Lava flows",
        "Crater rim"
      ],
      description: "Tanzania's second-highest mountain, formed through volcanic activity with a distinctive horseshoe-shaped crater."
    },
    ngurdotoCrater: {
      title: "Ngurdoto Crater",
      type: "Volcanic crater",
      diameter: "3.6 km",
      depth: "400 m",
      features: [
        "Crater floor marshes",
        "Forested walls",
        "Wildlife sanctuary",
        "Viewpoints"
      ],
      description: "A steep-sided crater acting as a natural enclosure for diverse wildlife and plant species."
    },
    momelaLakes: {
      title: "Momela Lakes",
      type: "Alkaline lakes",
      number: "Seven distinct lakes",
      features: [
        "Mineral-rich waters",
        "Varying colors",
        "Flamingo habitat",
        "Volcanic origin"
      ],
      description: "A series of shallow alkaline lakes formed through volcanic and tectonic activity."
    }
  };

  // Research and Education
  const researchPrograms = {
    ongoing: [
      {
        title: "Primate Behavior Study",
        duration: "2020-Present",
        focus: "Black-and-white colobus social structures",
        partners: ["Local Universities", "International Research Centers"]
      },
      {
        title: "Ecosystem Monitoring",
        duration: "2018-Present",
        focus: "Climate change impacts on montane forests",
        partners: ["TANAPA", "Environmental Research Institutes"]
      }
    ],
    educational: {
      programs: [
        {
          name: "School Visits Program",
          description: "Educational tours for local schools",
          activities: [
            "Guided walks",
            "Wildlife observation",
            "Conservation lectures",
            "Field activities"
          ]
        },
        {
          name: "Research Internships",
          description: "Opportunities for university students",
          areas: [
            "Wildlife monitoring",
            "Vegetation surveys",
            "Tourist impact studies",
            "Community engagement"
          ]
        }
      ]
    }
  };

  // Safety Guidelines
  const safetyGuidelines = {
    general: [
      {
        title: "Wildlife Safety",
        rules: [
          "Maintain safe distance from animals",
          "Never feed wildlife",
          "Stay in vehicles except at designated areas",
          "Follow ranger instructions"
        ]
      },
      {
        title: "Hiking Safety",
        rules: [
          "Stay on marked trails",
          "Hike in groups",
          "Carry sufficient water",
          "Inform rangers of plans"
        ]
      }
    ],
    emergency: {
      contacts: [
        {
          type: "Park Rangers",
          number: "+255 123 456 789"
        },
        {
          type: "Medical Emergency",
          number: "+255 987 654 321"
        }
      ],
      procedures: [
        "Report incidents immediately",
        "Stay calm and follow instructions",
        "Use emergency shelter if needed",
        "Keep emergency numbers handy"
      ]
    }
  };

  // Helper functions
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

  // Render the new sections
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Arusha National Park</h1>
          <p>Where Mount Meru Meets Wildlife Paradise</p>
        </div>
      </section>

      {/* Include all sections from LakeManyara.js template, but with Arusha-specific content */}
      {/* Park Overview Section */}
      <section className="park-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
          <h2>About Arusha National Park</h2>
              <p>Nestled in the shadow of Mount Meru, Arusha National Park is a gem offering diverse landscapes from montane forests to the Momela Lakes. Often overlooked, this park provides stunning views of both Mount Kilimanjaro and Mount Meru, along with unique wildlife experiences.</p>
              
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
              <img src="data:image/jpeg;base64,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" alt="Mount Meru Landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
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

      {/* Activities Section */}
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

      {/* Hiking Trails Section */}
      <section className="trails-section">
        <div className="container">
          <h2>Hiking Trails</h2>
          <div className="trails-tabs">
            {Object.keys(hikingTrails).map((trailKey) => (
              <button
                key={trailKey}
                className={`trail-tab ${activeTrail === trailKey ? 'active' : ''}`}
                onClick={() => setActiveTrail(trailKey)}
              >
                <FaHiking /> {hikingTrails[trailKey].name}
              </button>
            ))}
          </div>
          <div className="trail-content">
            <div className="trail-info">
              <h3>{hikingTrails[activeTrail].name}</h3>
              <div className="trail-stats">
                <span><FaRoute /> {hikingTrails[activeTrail].distance}</span>
                <span><FaClock /> {hikingTrails[activeTrail].duration}</span>
                <span><FaShieldAlt /> {hikingTrails[activeTrail].difficulty}</span>
              </div>
              <p>{hikingTrails[activeTrail].description}</p>
              <div className="trail-highlights">
                <h4>Trail Highlights</h4>
                <ul>
                  {hikingTrails[activeTrail].highlights.map((highlight, index) => (
                    <li key={index}><FaCheck /> {highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="trail-tips">
                <h4>Hiking Tips</h4>
                <ul>
                  {hikingTrails[activeTrail].tips.map((tip, index) => (
                    <li key={index}><FaExclamationCircle /> {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Park History Section */}
      <section className="history-section">
        <div className="container">
          <h2>Park History</h2>
          <div className="history-tabs">
            {Object.keys(parkHistory).map((period) => (
              <button
                key={period}
                className={`history-tab ${activeHistory === period ? 'active' : ''}`}
                onClick={() => setActiveHistory(period)}
              >
                {parkHistory[period].title}
              </button>
            ))}
          </div>
          <div className="history-content">
            {activeHistory === 'establishment' && (
              <div className="establishment-content">
                <h3>Establishment - {parkHistory.establishment.year}</h3>
                <p>{parkHistory.establishment.description}</p>
                <div className="key-events">
                  <h4>Key Events</h4>
                  <ul>
                    {parkHistory.establishment.keyEvents.map((event, index) => (
                      <li key={index}><FaBookmark /> {event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeHistory === 'conservation' && (
              <div className="conservation-content">
                <h3>Conservation Journey</h3>
                <div className="conservation-timeline">
                  {parkHistory.conservation.periods.map((period, index) => (
                    <div key={index} className="timeline-item">
                      <h4><FaClock /> {period.years}</h4>
                      <p><FaCheck /> {period.achievements}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeHistory === 'cultural' && (
              <div className="cultural-content">
                <h3>Cultural Heritage</h3>
                <p>{parkHistory.cultural.description}</p>
                <div className="cultural-significance">
                  <h4>Cultural Significance</h4>
                  <ul>
                    {parkHistory.cultural.significance.map((item, index) => (
                      <li key={index}><FaHeart /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Flora Guide Section */}
      <section className="flora-section">
        <div className="container">
          <h2>Flora Guide</h2>
          <div className="flora-zones">
            {Object.values(floraGuide).map((zone) => (
              <div key={zone.title} className="flora-zone-card">
                <h3>{zone.title}</h3>
                <p className="elevation">Elevation: {zone.elevation}</p>
                <div className="species-list">
                  {zone.keySpecies.map((species, index) => (
                    <div key={index} className="species-card">
                      <h4>{species.name}</h4>
                      <p className="scientific-name">{species.scientificName}</p>
                      <p className="uses">Uses: {species.uses}</p>
                    </div>
                  ))}
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geological Features Section */}
      <section className="geology-section">
        <div className="container">
          <h2>Geological Features</h2>
          <div className="geology-grid">
            {Object.values(geologicalFeatures).map((feature) => (
              <div key={feature.title} className="geology-card">
                <h3>{feature.title}</h3>
                <div className="feature-details">
                  <div className="feature-meta">
                    <span className="feature-type">
                      <FaMountain /> {feature.type}
                    </span>
                    {feature.age && (
                      <span className="feature-age">
                        <FaClock /> {feature.age}
                      </span>
                    )}
                    {feature.lastEruption && (
                      <span className="feature-age">
                        <FaFire /> Last eruption: {feature.lastEruption}
                      </span>
                    )}
                    {feature.diameter && (
                      <span className="feature-type">
                        <FaRuler /> Diameter: {feature.diameter}
                      </span>
                    )}
                    {feature.depth && (
                      <span className="feature-type">
                        <FaArrowDown /> Depth: {feature.depth}
                      </span>
                    )}
                    {feature.number && (
                      <span className="feature-type">
                        <FaWater /> {feature.number}
                      </span>
                    )}
                  </div>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-list">
                    <h4>Key Features</h4>
                    <ul>
                      {feature.features.map((item, index) => (
                        <li key={index}><FaCheck /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research and Education Section */}
      <section className="research-section">
        <div className="container">
          <h2>Research & Education</h2>
          <div className="research-programs">
            <h3>Ongoing Research</h3>
            <div className="programs-grid">
              {researchPrograms.ongoing.map((program, index) => (
                <div key={index} className="program-card">
                  <h4>{program.title}</h4>
                  <p className="duration">{program.duration}</p>
                  <p className="focus">{program.focus}</p>
                  <div className="partners">
                    <h5>Research Partners</h5>
                    <ul>
                      {program.partners.map((partner, idx) => (
                        <li key={idx}>{partner}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="educational-programs">
            <h3>Educational Programs</h3>
            <div className="programs-grid">
              {researchPrograms.educational.programs.map((program, index) => (
                <div key={index} className="program-card">
                  <h4>{program.name}</h4>
                  <p>{program.description}</p>
                  <div className="activities-list">
                    <h5>Activities</h5>
                    <ul>
                      {program.activities ? 
                        program.activities.map((activity, idx) => (
                          <li key={idx}><FaCheck /> {activity}</li>
                        )) :
                        program.areas.map((area, idx) => (
                          <li key={idx}><FaCheck /> {area}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines Section */}
      <section className="safety-section">
        <div className="container">
          <h2>Safety Guidelines</h2>
          <div className="safety-grid">
            {safetyGuidelines.general.map((category, index) => (
              <div key={index} className="safety-card">
                <h3>{category.title}</h3>
                <ul className="safety-rules">
                  {category.rules.map((rule, idx) => (
                    <li key={idx}><FaExclamationCircle /> {rule}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="emergency-card">
              <h3>Emergency Contacts</h3>
              <div className="emergency-contacts">
                {safetyGuidelines.emergency.contacts.map((contact, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-type">{contact.type}:</span>
                    <span className="contact-number">{contact.number}</span>
                  </div>
                ))}
              </div>
              <div className="emergency-procedures">
                <h4>Emergency Procedures</h4>
                <ul>
                  {safetyGuidelines.emergency.procedures.map((procedure, index) => (
                    <li key={index}><FaExclamationCircle /> {procedure}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
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
                <div className="form-group">
                  <select required>
                    <option value="">Select Activity</option>
                    <option value="meru-climb">Mount Meru Climb</option>
                    <option value="walking">Walking Safari</option>
                    <option value="canoe">Canoe Safari</option>
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

export default ArushaPark; 