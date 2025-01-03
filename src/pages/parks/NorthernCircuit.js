import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaMapMarkerAlt, FaTree, FaPaw, FaClock, FaInfoCircle, FaCalendarAlt,
  FaUsers, FaCamera, FaStar, FaCompass, FaLeaf, FaMountain, FaSun,
  FaCloudRain, FaPlane, FaCar, FaHotel, FaBinoculars, FaRoute,
  FaGlobe, FaUmbrellaBeach, FaChild, FaDollarSign, FaHeart, FaChevronRight
} from 'react-icons/fa';
import './NorthernCircuit.css';

const NorthernCircuit = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const circuitFeatures = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Strategic Location",
      description: "Experience Africa's most iconic safari destination, perfectly positioned with direct access from Kilimanjaro International Airport and luxurious accommodations throughout the circuit"
    },
    {
      icon: <FaPaw />,
      title: "Unmatched Wildlife",
      description: "Witness over 2 million wildebeest in the Great Migration, all of the Big Five, and more than 500 bird species in their natural habitat"
    },
    {
      icon: <FaTree />,
      title: "Diverse Ecosystems",
      description: "Journey through 7 distinct ecosystems - from snow-capped peaks and ancient craters to endless savannas and pristine forests - all in one incredible safari adventure"
    },
    {
      icon: <FaClock />,
      title: "Year-round Adventure",
      description: "Every season offers unique spectacles: witness the Great Migration, newborn wildlife, or predator action, with perfect photography conditions throughout the year"
    }
  ];

  const circuitHighlights = {
    uniqueFeatures: [
      "World's largest intact volcanic caldera at Ngorongoro",
      "Africa's highest peak at Mount Kilimanjaro",
      "Endless plains of the Serengeti",
      "Ancient Maasai culture and traditions",
      "Diverse wildlife including rare species",
      "Spectacular Great Migration"
    ],
    activities: [
      "Game drives in state-of-the-art vehicles",
      "Walking safaris with expert guides",
      "Hot air balloon safaris over the Serengeti",
      "Cultural visits to Maasai villages",
      "Night game drives in select parks",
      "Mountain climbing and trekking"
    ]
  };

  const northernParks = [
    {
      id: 'kilimanjaro',
      name: 'Mount Kilimanjaro',
      image: 'https://img.freepik.com/free-photo/giraffe-wild_23-2151708974.jpg?semt=ais_hybrid',
      description: "Embark on the adventure of a lifetime to conquer Africa's highest peak. Experience five distinct climate zones as you journey from lush rainforest to arctic snow, culminating in the most spectacular sunrise view across Africa.",
      highlights: [
        'Summit at 5,895 meters (19,341 ft)',
        'Trek through 5 distinct climate zones',
        'Witness stunning sunrise above clouds',
        'Multiple routes for all skill levels'
      ],
      bestTime: 'January-March, June-October',
      duration: '5-9 days',
      difficulty: 'Challenging',
      features: [
        'Professional mountain guides',
        'High-quality camping equipment',
        'Safety protocols and oxygen supplies',
        'Porter support throughout trek'
      ]
    },
    {
      id: 'serengeti',
      name: 'Serengeti National Park',
      image: 'https://img.freepik.com/premium-photo/big-herd-wildebeest-savannah-great-migration_265142-4800.jpg?semt=ais_hybrid',
      description: "Step into nature's greatest theater where the Great Migration unfolds across endless plains. Witness millions of wildebeest and zebras in their eternal journey, alongside Africa's most impressive predator population.",
      highlights: [
        'Great Migration spectacle',
        'Big Five game viewing',
        'Hot air balloon safaris',
        'Luxury safari lodges'
      ],
      bestTime: 'June-October (Dry Season)',
      duration: '3-6 days',
      difficulty: 'Easy to Moderate',
      features: [
        'Migration viewing points',
        'Exclusive camping sites',
        'Professional photography hides',
        'Cultural interaction opportunities'
      ]
    },
    {
      id: 'ngorongoro',
      name: 'Ngorongoro Crater',
      image: 'https://img.freepik.com/premium-photo/family-lions-crater-ngorongoro-volcano_351981-1294.jpg?semt=ais_hybrid',
      description: "Descend into the world's largest intact volcanic caldera, a UNESCO World Heritage site. Experience unparalleled wildlife density and dramatic landscapes in this natural wonder.",
      highlights: [
        'Unique crater ecosystem',
        'Highest density of predators',
        'Rare black rhino sightings',
        'Maasai cultural experiences'
      ],
      bestTime: 'June-September',
      duration: '2-3 days',
      difficulty: 'Easy'
    },
    {
      id: 'tarangire',
      name: 'Tarangire National Park',
      image: 'https://img.freepik.com/free-photo/group-zebras-africa_181624-23764.jpg?t=st=1735855465~exp=1735859065~hmac=b4276590989aac1509d48da8a1386fbf4017a361f1625862a4ddec4c8750d511&w=1380',
      description: "Discover ancient baobab trees and massive elephant herds in this hidden gem. Experience intimate wildlife encounters along the life-giving Tarangire River.",
      highlights: [
        'Massive elephant populations',
        'Ancient baobab landscapes',
        'Excellent bird watching',
        'Night game drives'
      ],
      bestTime: 'July-October',
      duration: '2-3 days',
      difficulty: 'Easy'
    },
    {
      id: 'manyara',
      name: 'Lake Manyara National Park',
      image: 'https://img.freepik.com/free-photo/wide-angle-shot-flock-flamingoes-water-surrounded-by-trees_181624-10912.jpg?t=st=1735855548~exp=1735859148~hmac=086f6fc41e22585cf4fa95f565468bd270ce3061b724d8706742777c1a768efb&w=1380',
      description: "Explore the famous tree-climbing lions and diverse ecosystems, from groundwater forests to alkaline lakes. Experience unique wildlife behaviors in this compact yet diverse park.",
      highlights: [
        'Tree-climbing lions',
        'Flamingo-filled lake',
        'Canopy walkway',
        'Night safaris'
      ],
      bestTime: 'July-October, December-February',
      duration: '1-2 days',
      difficulty: 'Easy'
    },
    {
      id: 'arusha',
      name: 'Arusha National Park',
      image: 'https://img.freepik.com/free-photo/two-cute-giraffes-walking-green-trees-wilderness_181624-27905.jpg?t=st=1735855630~exp=1735859230~hmac=13cc29be3b685530a2ee7de6dac02cb684482fcae9a093a414bee748722d99f1&w=1380',
      description: "Begin your safari journey at the foot of Mount Meru. Experience diverse primate species, stunning crater lakes, and the perfect introduction to Tanzanian wildlife.",
      highlights: [
        'Mount Meru trekking',
        'Colobus monkey viewing',
        'Canoeing adventures',
        'Walking safaris'
      ],
      bestTime: 'June-February',
      duration: '1-2 days',
      difficulty: 'Easy to Moderate'
    }
  ];

  const seasonalHighlights = {
    drySeasonJunOct: [
      "Peak wildlife viewing with animals congregating around water sources",
      "Great Migration river crossings in the Serengeti",
      "Clear skies perfect for photography",
      "Comfortable temperatures and minimal rainfall",
      "Excellent conditions for walking safaris",
      "Best visibility for predator spotting"
    ],
    wetSeasonNovMay: [
      "Lush green landscapes and dramatic skies",
      "Bird watching paradise with migratory species",
      "Calving season in the Serengeti (February)",
      "Lower prices and fewer tourists",
      "Spectacular thunderstorms and rainbows",
      "Perfect for photography enthusiasts"
    ]
  };

  const practicalInfo = {
    bestTimeToVisit: {
      icon: <FaCalendarAlt />,
      title: "Best Time to Visit",
      details: [
        "Peak Season: June to October (Dry)",
        "Green Season: November to May (Wet)",
        "Migration: Year-round with peak July-October",
        "Photography: Year-round with different highlights"
      ]
    },
    gettingThere: {
      icon: <FaPlane />,
      title: "Getting There",
      details: [
        "International flights to Kilimanjaro Airport",
        "Domestic flights between parks available",
        "Road transfers and safari vehicles",
        "Charter flights for luxury safaris"
      ]
    },
    accommodation: {
      icon: <FaHotel />,
      title: "Accommodation",
      details: [
        "Luxury lodges and tented camps",
        "Mid-range safari camps",
        "Budget camping options",
        "Mobile camping during migration"
      ]
    }
  };

  const circuitAdvantages = {
    accessibility: {
      icon: <FaRoute />,
      title: "Easy Accessibility",
      points: [
        "Well-maintained roads connecting all parks",
        "Multiple domestic airports within the circuit",
        "Options for both driving and flying safaris",
        "Convenient access from Kilimanjaro International Airport"
      ]
    },
    diversity: {
      icon: <FaGlobe />,
      title: "Incredible Diversity",
      points: [
        "Experience all major East African ecosystems",
        "View over 400 bird species",
        "See all of Africa's Big Five",
        "Witness unique geological formations"
      ]
    },
    culture: {
      icon: <FaUsers />,
      title: "Rich Cultural Heritage",
      points: [
        "Traditional Maasai villages",
        "Local community projects",
        "Ancient archaeological sites",
        "Living cultural traditions"
      ]
    }
  };

  const safariExperiences = {
    classic: {
      title: "Classic Safari",
      duration: "7-10 days",
      description: "Perfect for first-time visitors, covering the essential highlights of the Northern Circuit.",
      includes: [
        "Serengeti National Park (3 days)",
        "Ngorongoro Crater (2 days)",
        "Tarangire National Park (2 days)",
        "Lake Manyara (1 day)"
      ]
    },
    comprehensive: {
      title: "Comprehensive Explorer",
      duration: "12-15 days",
      description: "An in-depth exploration of all parks with extended stays for maximum wildlife viewing.",
      includes: [
        "Serengeti National Park (4-5 days)",
        "Ngorongoro Crater (2-3 days)",
        "Tarangire National Park (2-3 days)",
        "Lake Manyara (1-2 days)",
        "Mount Kilimanjaro trek (optional)",
        "Arusha National Park (1 day)"
      ]
    },
    photography: {
      title: "Photography Focus",
      duration: "10-14 days",
      description: "Specially designed for photographers with optimal timing for light and wildlife activity.",
      includes: [
        "Extended time at key photography spots",
        "Special photography hides access",
        "Dawn and dusk game drives",
        "Seasonal migration following"
      ]
    }
  };

  const seasonalTips = {
    drySeasonTips: {
      title: "Dry Season (June-October)",
      weather: "Sunny, minimal rain, cooler temperatures",
      advantages: [
        "Excellent wildlife viewing",
        "Less vegetation for better visibility",
        "More predictable game drive conditions",
        "Comfortable temperatures"
      ],
      considerations: [
        "Peak season with higher rates",
        "More visitors at popular sites",
        "Advance booking essential",
        "Dusty conditions possible"
      ]
    },
    wetSeasonTips: {
      title: "Green Season (November-May)",
      weather: "Periodic rains, lush vegetation, warmer temperatures",
      advantages: [
        "Beautiful green landscapes",
        "Excellent bird watching",
        "Lower rates and fewer tourists",
        "Great for photography"
      ],
      considerations: [
        "Some roads may be challenging",
        "Wildlife more dispersed",
        "Brief afternoon showers",
        "Some camps may be closed"
      ]
    }
  };

  const uniqueExperiences = [
    {
      icon: <FaHeart />,
      title: "Exclusive Safari Experiences",
      points: [
        "Private hot air balloon safaris over the Serengeti plains",
        "Exclusive night game drives in selected areas",
        "Walking safaris with Maasai guides",
        "Photographic hides for professional wildlife photography",
        "Luxury mobile camping following the Great Migration",
        "Helicopter excursions over active volcanoes"
      ]
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Luxury & Comfort",
      points: [
        "5-star luxury lodges with infinity pools",
        "Exclusive private camps in prime locations",
        "Gourmet dining under the African stars",
        "Spa treatments with panoramic views",
        "Private villa accommodations for families",
        "Butler service and personalized attention"
      ]
    },
    {
      icon: <FaCamera />,
      title: "Perfect for Photography",
      points: [
        "Specially designed photography vehicles",
        "Expert photography guides available",
        "Perfect lighting conditions year-round",
        "Unique angles for crater photography",
        "Close encounters with wildlife",
        "Stunning landscape diversity"
      ]
    }
  ];

  const culturalHighlights = [
    {
      icon: <FaUsers />,
      title: "Cultural Immersion",
      description: "Experience authentic Maasai culture through village visits, traditional dances, and learning ancient customs directly from community elders"
    },
    {
      icon: <FaHeart />,
      title: "Local Traditions",
      description: "Participate in traditional ceremonies, learn about medicinal plants, and experience the legendary hospitality of Tanzania's indigenous peoples"
    },
    {
      icon: <FaChild />,
      title: "Community Impact",
      description: "Support local conservation efforts and community projects through responsible tourism, directly benefiting local schools and healthcare initiatives"
    }
  ];

  const practicalAdvantages = [
    {
      icon: <FaDollarSign />,
      title: "Value for Money",
      points: [
        "All-inclusive luxury packages available",
        "Multiple price points to suit all budgets",
        "Special offers during green season",
        "Group discounts for families",
        "Early booking benefits",
        "Customizable itineraries"
      ]
    },
    {
      icon: <FaPlane />,
      title: "Easy Access",
      points: [
        "Direct flights to Kilimanjaro Airport",
        "Convenient inter-park flights",
        "Modern road network between parks",
        "VIP airport services available",
        "Helicopter transfers optional",
        "Seamless logistics management"
      ]
    },
    {
      icon: <FaHotel />,
      title: "Accommodation Excellence",
      points: [
        "World-class luxury lodges",
        "Authentic tented camps",
        "Family-friendly resorts",
        "Exclusive private villas",
        "Eco-friendly options",
        "Strategic locations for game viewing"
      ]
    }
  ];

  return (
    <div className="northern-circuit">
      <div className="circuit-hero">
        <div className="hero-content">
          <h1>Northern Circuit Safari</h1>
          <p>Experience Tanzania's most iconic wildlife destinations</p>
        </div>
      </div>


      <section className="circuit-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card" data-stat="parks">
              <div className="stat-icon">
                <FaGlobe />
              </div>
              <div className="stat-content">
                <h3>6 Iconic Parks</h3>
                <p>Experience Africa's most renowned wildlife sanctuaries</p>
              </div>
            </div>

            <div className="stat-card" data-stat="wildlife">
              <div className="stat-icon">
                <FaPaw />
              </div>
              <div className="stat-content">
                <h3>Big Five Territory</h3>
                <p>Home to lion, leopard, elephant, rhino, and buffalo</p>
        </div>
      </div>

            <div className="stat-card" data-stat="route">
              <div className="stat-icon">
                <FaRoute />
              </div>
              <div className="stat-content">
                <h3>Perfect Safari Loop</h3>
                <p>Strategically connected parks for optimal wildlife viewing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="circuit-overview">
        <div className="overview-content">
          <h2>Africa's Ultimate Safari Experience</h2>
          <p className="overview-intro">
            Welcome to Tanzania's legendary Northern Safari Circuit, the crown jewel of African wildlife experiences. This masterfully crafted route connects the continent's most spectacular wildlife sanctuaries, offering an unparalleled journey through Earth's last great wilderness. From the endless plains of the Serengeti to the ancient caldera of Ngorongoro, every moment brings new wonders and unforgettable encounters with Africa's most iconic wildlife.
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
              <h3>Green Season (November-May)</h3>
              <ul>
                {seasonalHighlights.wetSeasonNovMay.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="circuit-advantages">
        <div className="container">
          <h2>Why Choose the Northern Circuit?</h2>
          <div className="advantages-grid">
            {Object.values(circuitAdvantages).map((advantage, index) => (
              <div className="advantage-card" key={index}>
                <div className="advantage-icon">{advantage.icon}</div>
                <h3>{advantage.title}</h3>
                <ul>
                  {advantage.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="safari-experiences">
        <div className="container">
          <h2>Safari Experiences</h2>
          <div className="experiences-grid">
            {Object.values(safariExperiences).map((experience, index) => (
              <div className="experience-card" key={index}>
                <h3>{experience.title}</h3>
                <div className="duration-badge">
                  <FaCalendarAlt />
                  <span>{experience.duration}</span>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-includes">
                  <h4>Itinerary Includes:</h4>
                  <ul>
                    {experience.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seasonal-guide">
        <div className="container">
          <h2>Seasonal Travel Guide</h2>
          <div className="seasons-grid">
            {Object.values(seasonalTips).map((season, index) => (
              <div 
                className="season-card" 
                key={index}
                data-season={season.title.toLowerCase().includes('dry') ? 'dry' : 'wet'}
              >
                <h3>{season.title}</h3>
                <div className="weather-info">
                  {season.title.toLowerCase().includes('dry') ? 
                    <FaSun /> : 
                    <FaCloudRain />
                  }
                  <p>{season.weather}</p>
                </div>
                <div className="season-details">
                  <div className="advantages">
                    <h4>Advantages</h4>
                    <ul>
                      {season.advantages.map((adv, idx) => (
                        <li key={idx}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="considerations">
                    <h4>Considerations</h4>
                    <ul>
                      {season.considerations.map((con, idx) => (
                        <li key={idx}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="unique-experiences">
        <div className="container">
          <h2>Extraordinary Experiences</h2>
          <div className="experiences-grid">
            {uniqueExperiences.map((experience, index) => (
              <div className="experience-card" key={index}>
                <div className="experience-icon">{experience.icon}</div>
                <h3>{experience.title}</h3>
                <ul>
                  {experience.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cultural-section">
        <div className="container">
          <h2>Cultural Heritage</h2>
          <div className="cultural-grid">
            {culturalHighlights.map((highlight, index) => (
              <div className="cultural-card" key={index}>
                <div className="cultural-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className="practical-advantages">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="advantages-grid">
            {practicalAdvantages.map((advantage, index) => (
              <div className="advantage-card" key={index}>
                <div className="advantage-icon">{advantage.icon}</div>
                <h3>{advantage.title}</h3>
                <ul>
                  {advantage.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      </section>

      <section className="parks-grid">
        <div className="container">
          <h2>Explore Our Iconic Parks</h2>
          <div className="parks-cards-grid">
        {northernParks.map(park => (
          <div 
            key={park.id} 
                className={`park-card ${hoveredCard === park.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(park.id)}
                onMouseLeave={() => setHoveredCard(null)}
            onClick={() => navigate(`/parks-reserves/northern/${park.id}`)}
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
                    <div className="duration">
                      <FaCalendarAlt />
                      <span>Duration: {park.duration}</span>
                </div>
              </div>

              <Link 
                to={`/parks-reserves/northern/${park.id}`} 
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

export default NorthernCircuit; 