import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaDollarSign,
  FaBed, FaUtensils, FaWifi, FaHiking, FaBookReader, FaHandHoldingHeart,
  FaGlobeAfrica, FaUserGraduate, FaChartLine, FaCheck, FaUsers,
  FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';
import './WesternParks.css';
import TrailMap from '../../../components/TrailMap';
import { parkImages } from '../../../config/images';
import ParkGallery from '../../../components/ParkGallery';

const Gombe = () => {
  const parkInfo = {
    name: "Gombe National Park",
    tagline: "Chimpanzee Paradise & Jane Goodall's Legacy",
    description: `Gombe National Park, made famous by Jane Goodall's groundbreaking research, 
    offers an intimate wildlife experience along the shores of Lake Tanganyika. This small but 
    remarkable park has been the site of the longest-running chimpanzee research project in the world.`,
    
    highlights: [
      "Close encounters with wild chimpanzees",
      "Jane Goodall Research Institute",
      "Lake Tanganyika beaches",
      "Pristine forest trails",
      "Rich primate diversity",
      "Scientific research opportunities"
    ],

    activities: [
      {
        name: "Chimpanzee Tracking",
        description: "Follow habituated chimps through the forest with expert guides",
        duration: "4-6 hours",
        difficulty: "Moderate",
        bestTime: "Early morning",
        price: "From $100 per person",
        includes: ["Guide fees", "Park entry", "Research contribution"]
      },
      {
        name: "Forest Hiking",
        description: "Explore pristine forest trails with stunning lake views",
        duration: "2-4 hours",
        difficulty: "Moderate",
        bestTime: "Morning/Afternoon",
        includes: ["Guide fees", "Water", "Trail maps"]
      },
      {
        name: "Lake Activities",
        description: "Swimming, snorkeling, and boat trips on Lake Tanganyika",
        duration: "Flexible",
        difficulty: "Easy",
        includes: ["Equipment rental", "Safety briefing", "Guide"]
      },
      {
        name: "Research Center Visit",
        description: "Learn about ongoing chimpanzee research and conservation",
        duration: "2 hours",
        difficulty: "Easy",
        includes: ["Expert guide", "Documentary viewing", "Q&A session"]
      }
    ],

    wildlife: {
      primates: [
        {
          name: "Chimpanzees",
          scientificName: "Pan troglodytes",
          population: "Around 100 individuals",
          behavior: "Complex social structure, tool use, hunting"
        },
        {
          name: "Red-tailed Monkeys",
          scientificName: "Cercopithecus ascanius",
          population: "Common throughout forest"
        },
        {
          name: "Olive Baboons",
          scientificName: "Papio anubis",
          population: "Several troops present"
        }
      ],
      birds: [
        "Fish Eagles",
        "Palm-nut Vultures",
        "Tropical Boubou",
        "Ross's Turaco",
        "Peter's Twinspot"
      ],
      other: [
        "Forest Butterflies",
        "Bush Pigs",
        "Red-legged Sun Squirrels",
        "Bushbucks",
        "Monitor Lizards"
      ]
    },

    practicalInfo: {
      bestTime: {
        peak: "June to October (Dry Season)",
        shoulder: "December to February",
        avoid: "March to May (Heavy rains)"
      },
      climate: {
        drySeasonTemp: "25-30°C",
        wetSeasonTemp: "28-35°C",
        rainfall: "Heaviest from March to May",
        humidity: "High year-round"
      },
      gettingThere: [
        {
          method: "Air",
          details: "Flights to Kigoma, then boat transfer",
          duration: "2-3 hours total"
        },
        {
          method: "Boat",
          details: "Lake transfer from Kigoma",
          duration: "1-2 hours"
        }
      ],
      accommodation: [
        {
          name: "Gombe Forest Lodge",
          type: "Luxury",
          features: ["Lake views", "Full board", "Guided activities"]
        },
        {
          name: "Research Station Hostel",
          type: "Budget",
          features: ["Basic amenities", "Shared facilities"]
        },
        {
          name: "Camping",
          type: "Adventure",
          features: ["Designated sites", "Basic facilities"]
        }
      ]
    },

    conservation: {
      significance: `Gombe represents one of the most important primate research sites globally, 
      contributing significantly to our understanding of chimpanzee behavior and ecology.`,
      challenges: [
        "Human population pressure",
        "Limited park size",
        "Climate change impacts",
        "Forest corridor preservation"
      ],
      initiatives: [
        {
          name: "TACARE Program",
          description: "Community-based conservation initiative"
        },
        {
          name: "Chimpanzee Health Monitoring",
          description: "Regular health checks and research"
        },
        {
          name: "Forest Restoration",
          description: "Buffer zone reforestation projects"
        }
      ]
    },

    culturalSignificance: {
      history: `The park gained international recognition through Jane Goodall's 
      pioneering research beginning in 1960.`,
      research: [
        "Longest continuous wild primate study",
        "Tool use discovery",
        "Social behavior insights",
        "Conservation methodologies"
      ],
      localCommunities: [
        "Traditional fishing practices",
        "Environmental education programs",
        "Sustainable tourism initiatives"
      ]
    },

    gallery: [
      {
        url: "/images/parks/gombe/chimps.jpg",
        title: "Chimpanzee Family",
        description: "Mother and infant in natural habitat"
      },
      {
        url: "/images/parks/gombe/lake.jpg",
        title: "Lake Tanganyika",
        description: "Pristine beaches and crystal waters"
      }
      // Add more gallery images
    ],

    researchPrograms: {
      current: [
        {
          name: "Chimpanzee Behavioral Studies",
          description: "Ongoing research into social dynamics and tool use",
          institution: "Jane Goodall Institute",
          duration: "Continuous since 1960"
        },
        {
          name: "Forest Health Monitoring",
          description: "Assessment of habitat quality and biodiversity",
          institution: "Tanzania Wildlife Research Institute",
          duration: "Annual surveys"
        },
        {
          name: "Community Conservation",
          description: "Study of human-wildlife interaction patterns",
          institution: "Multiple Partners",
          duration: "Ongoing"
        }
      ],
      publications: [
        {
          title: "60 Years at Gombe",
          author: "Jane Goodall",
          year: 2020,
          type: "Book"
        },
        // Add more publications
      ]
    },

    visitorExperience: {
      bestPractices: [
        "Maintain silence during chimp tracking",
        "Stay with your guide at all times",
        "Keep minimum 7 meters distance from chimps",
        "No flash photography",
        "Maximum 6 people per tracking group"
      ],
      whatToBring: [
        "Hiking boots",
        "Rain gear",
        "Camera (no flash)",
        "Water bottle",
        "Insect repellent",
        "Sun protection"
      ],
      healthSafety: {
        requirements: [
          "Medical fitness certificate",
          "Travel insurance",
          "Yellow fever vaccination"
        ],
        facilities: [
          "Park medical station",
          "Emergency evacuation service",
          "First aid trained guides"
        ]
      }
    },

    lodgeAmenities: {
      luxury: {
        name: "Gombe Forest Lodge",
        features: [
          "En-suite bathrooms",
          "Lake view terraces",
          "Restaurant & bar",
          "Wi-Fi in common areas",
          "Solar power",
          "Laundry service"
        ],
        dining: [
          "Full board accommodation",
          "International cuisine",
          "Special dietary options",
          "Packed lunches for activities"
        ]
      },
      budget: {
        name: "Research Station Hostel",
        features: [
          "Shared facilities",
          "Basic amenities",
          "Communal kitchen",
          "Research library access"
        ]
      }
    },

    seasonalHighlights: {
      drySeasonJunOct: [
        "Peak chimp viewing",
        "Easier forest trails",
        "Best photography conditions",
        "Comfortable temperatures"
      ],
      wetSeasonNovMay: [
        "Lush forest scenery",
        "Bird breeding season",
        "Fewer visitors",
        "Challenging but rewarding tracking"
      ],
      yearRound: [
        "Chimpanzee research",
        "Lake activities",
        "Cultural visits",
        "Educational programs"
      ]
    },

    educationalPrograms: {
      types: [
        {
          name: "Student Field Trips",
          duration: "1-5 days",
          activities: ["Guided tours", "Research observation", "Conservation workshops"]
        },
        {
          name: "Research Internships",
          duration: "1-6 months",
          requirements: ["University enrollment", "Research proposal", "Academic reference"]
        },
        {
          name: "Community Outreach",
          focus: ["Environmental education", "Sustainable practices", "Wildlife conservation"]
        }
      ],
      facilities: [
        "Research library",
        "Educational center",
        "Laboratory access",
        "Lecture space"
      ]
    },

    parkStatistics: {
      size: "52 square kilometers",
      established: "1968",
      elevation: "773-1500 meters",
      annualVisitors: "~1000",
      researchPublications: "500+",
      chimpPopulation: {
        current: "~100",
        studied: "Multiple generations since 1960"
      }
    },

    trails: [
      {
        name: "Jane's Peak Trail",
        distance: "3.2 km",
        difficulty: "Moderate",
        description: "Climb to the peak where Jane Goodall conducted her research",
        startPoint: [29.6280, -4.6680],
        elevation: "727m gain",
        type: "Out and back",
        features: [
          "Research viewpoints",
          "Chimp territory",
          "Lake vistas",
          "Historical sites"
        ],
        waypoints: [
          {
            name: "Jane's Peak",
            coordinates: [29.6285, -4.6685],
            description: "Historic research observation point"
          }
        ]
      },
      {
        name: "Kakombe Valley Trail",
        distance: "2.5 km",
        difficulty: "Easy",
        description: "Follow the valley stream through chimp territory",
        startPoint: [29.6290, -4.6670],
        type: "Loop",
        features: [
          "Stream views",
          "Bird watching",
          "Chimp feeding areas",
          "Forest canopy"
        ]
      }
    ],

    pointsOfInterest: [
      {
        name: "Jane Goodall Research Center",
        coordinates: [29.6285, -4.6675],
        type: "Research",
        description: "Historic research facility and education center"
      },
      {
        name: "Chimp Feeding Station",
        coordinates: [29.6295, -4.6680],
        type: "Wildlife",
        description: "Historic feeding area and observation point"
      },
      {
        name: "Lake Beach",
        coordinates: [29.6275, -4.6670],
        type: "Recreation",
        description: "Swimming and relaxation spot on Lake Tanganyika"
      },
      {
        name: "Visitor Center",
        coordinates: [29.6280, -4.6665],
        type: "Facility",
        description: "Information, exhibits, and tour arrangements"
      }
    ],

    parkCenter: [29.6285, -4.6675]
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.gombe.hero})`
  };

  return (
    <div className="park-page">
      <section className="park-hero" style={parkHeroStyle}>
        <div className="hero-content">
          <h1>{parkInfo.name}</h1>
          <p>{parkInfo.tagline}</p>
        </div>
      </section>

      {/* Park Overview */}
      <section className="park-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Park Overview</h2>
            <p>{parkInfo.description}</p>
            
            <div className="key-highlights">
              <h3>Key Highlights</h3>
              <div className="highlights-grid">
                {parkInfo.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <FaLeaf className="highlight-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="park-activities">
        <div className="container">
          <h2>Activities & Experiences</h2>
          <div className="activities-grid">
            {parkInfo.activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
                <div className="activity-meta">
                  <span><FaClock /> {activity.duration}</span>
                  <span><FaMapMarkerAlt /> {activity.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="practical-info">
        <div className="container">
          <h2>Plan Your Visit</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3><FaCalendarAlt /> Best Time to Visit</h3>
              <p>{parkInfo.practicalInfo.bestTime.peak} (Peak), {parkInfo.practicalInfo.bestTime.shoulder} (Shoulder), Avoid {parkInfo.practicalInfo.bestTime.avoid}</p>
            </div>
            <div className="info-card">
              <h3><FaTemperatureHigh /> Climate</h3>
              <ul>
                <li>Dry Season: {parkInfo.practicalInfo.climate.drySeasonTemp}</li>
                <li>Wet Season: {parkInfo.practicalInfo.climate.wetSeasonTemp}</li>
                <li>{parkInfo.practicalInfo.climate.rainfall}</li>
                <li>Humidity: {parkInfo.practicalInfo.climate.humidity}</li>
              </ul>
            </div>
            <div className="info-card">
              <h3><FaShip /> Getting There</h3>
              <ul>
                {parkInfo.practicalInfo.gettingThere.map((item, index) => (
                  <li key={index}>{item.method}: {item.details} ({item.duration} hours total)</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="conservation">
        <div className="container">
          <h2>Conservation & Research</h2>
          <p>{parkInfo.conservation.significance}</p>
          <div className="conservation-initiatives">
            {parkInfo.conservation.initiatives.map((initiative, index) => (
              <div key={index} className="initiative-item">
                <FaTree className="initiative-icon" />
                <span>{initiative.name}: {initiative.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="cultural-significance">
        <div className="container">
          <h2>Cultural Significance</h2>
          <p>{parkInfo.culturalSignificance.history}</p>
          <div className="research-initiatives">
            <h3>Research Initiatives</h3>
            <ul>
              {parkInfo.culturalSignificance.research.map((research, index) => (
                <li key={index}>{research}</li>
              ))}
            </ul>
          </div>
          <div className="local-communities">
            <h3>Local Communities</h3>
            <ul>
              {parkInfo.culturalSignificance.localCommunities.map((community, index) => (
                <li key={index}>{community}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* New Research Programs Section */}
      <section className="research-programs">
        <div className="container">
          <h2><FaUserGraduate /> Research Programs</h2>
          <div className="current-research">
            <h3>Current Studies</h3>
            <div className="research-grid">
              {parkInfo.researchPrograms.current.map((program, index) => (
                <div key={index} className="research-card">
                  <h4>{program.name}</h4>
                  <p>{program.description}</p>
                  <div className="research-meta">
                    <span><FaGlobeAfrica /> {program.institution}</span>
                    <span><FaClock /> {program.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Experience Section */}
      <section className="visitor-experience">
        <div className="container">
          <h2>Visitor Information</h2>
          <div className="experience-grid">
            <div className="best-practices">
              <h3>Best Practices</h3>
              <ul>
                {parkInfo.visitorExperience.bestPractices.map((practice, index) => (
                  <li key={index}>{practice}</li>
                ))}
              </ul>
            </div>
            <div className="packing-list">
              <h3>What to Bring</h3>
              <ul>
                {parkInfo.visitorExperience.whatToBring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Highlights Section */}
      <section className="seasonal-highlights">
        <div className="container">
          <h2>Seasonal Park Highlights</h2>
          <div className="seasons-grid">
            <div className="season-card">
              <h3>Dry Season (Jun-Oct)</h3>
              <ul>
                {parkInfo.seasonalHighlights.drySeasonJunOct.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            {/* Add other season cards */}
          </div>
        </div>
      </section>

      {/* Park Statistics Section */}
      <section className="park-statistics">
        <div className="container">
          <h2><FaChartLine /> Park Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Park Size</h3>
              <p>{parkInfo.parkStatistics.size}</p>
            </div>
            <div className="stat-card">
              <h3>Established</h3>
              <p>{parkInfo.parkStatistics.established}</p>
            </div>
            <div className="stat-card">
              <h3>Elevation</h3>
              <p>{parkInfo.parkStatistics.elevation}</p>
            </div>
            <div className="stat-card">
              <h3>Chimpanzee Population</h3>
              <p>{parkInfo.parkStatistics.chimpPopulation.current}</p>
            </div>
            <div className="stat-card">
              <h3>Research History</h3>
              <p>{parkInfo.parkStatistics.researchPublications} publications</p>
              </div>
            <div className="stat-card">
              <h3>Annual Visitors</h3>
              <p>{parkInfo.parkStatistics.annualVisitors}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="educational-programs">
        <div className="container">
          <h2><FaBookReader /> Educational Opportunities</h2>
          <div className="programs-grid">
            {parkInfo.educationalPrograms.types.map((program, index) => (
              <div key={index} className="program-card">
                <h3>{program.name}</h3>
                <p>Duration: {program.duration}</p>
                <ul>
                  {program.activities?.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Park Trails & Points of Interest */}
      <section className="park-trails">
        <div className="container">
          <h2><FaMapMarkerAlt /> Park Trails & Points of Interest</h2>
          
          <div className="trails-grid">
            <div className="trails-list">
              <h3>Hiking Trails</h3>
              <div className="trail-cards">
                {parkInfo.trails.map((trail, index) => (
                  <div key={index} className="trail-card">
                    <h4>{trail.name}</h4>
                    <div className="trail-info">
                      <span><FaHiking /> {trail.distance}</span>
                      <span><FaMapMarkerAlt /> {trail.difficulty}</span>
                    </div>
                    <p>{trail.description}</p>
                    <div className="trail-features">
                      {trail.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="points-list">
              <h3>Points of Interest</h3>
              <div className="poi-cards">
                {parkInfo.pointsOfInterest.map((point, index) => (
                  <div key={index} className="poi-card">
                    <h4>{point.name}</h4>
                    <span className="poi-type">{point.type}</span>
                    <p>{point.description}</p>
              </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ParkGallery images={parkImages.gombe.gallery} />

      
      {/* Book Your Visit Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your Gombe Adventure</h3>
              <p>Experience the extraordinary world of chimpanzees and follow in the footsteps of Jane Goodall. Let us help you plan your perfect visit to Gombe National Park.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Personalized itineraries</li>
                <li><FaCheck /> Expert local guides</li>
                <li><FaCheck /> Comfortable accommodation</li>
                <li><FaCheck /> Research center visits</li>
              </ul>
              <div className="booking-cta">
                <button className="btn-primary">Start Planning</button>
                <button className="btn-secondary">Contact Us</button>
              </div>
            </div>
            <div className="booking-features">
              <div className="feature-card">
                <FaCalendarAlt />
                <h4>Flexible Dates</h4>
                <p>Choose from year-round availability</p>
              </div>
              <div className="feature-card">
                <FaUsers />
                <h4>Group Size</h4>
                <p>Small groups for optimal experience</p>
              </div>
              <div className="feature-card">
                <FaClock />
                <h4>Duration</h4>
                <p>2-5 day visits recommended</p>
              </div>
              <div className="feature-card">
                <FaHandHoldingHeart />
                <h4>Conservation</h4>
                <p>Support research and conservation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Visit Section with Booking Form */}
      <section className="booking-section">
        <div className="container">
          <h2>Plan Your Gombe Adventure</h2>
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
                      <option value="">Number of Visitors</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group select-wrapper">
                  <select required>
                    <option value="">Select Activity</option>
                    <option value="chimp-tracking">Chimpanzee Tracking</option>
                    <option value="research">Research Center Visit</option>
                    <option value="hiking">Forest Hiking</option>
                    <option value="lake">Lake Activities</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Special Requirements or Questions" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <FaCalendarCheck /> Request Booking
                </button>
              </form>
            </div>
            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <div className="contact-options">
                <a href="https://wa.me/yournumber" className="whatsapp-btn">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <div className="contact-info">
                  <p>Email: info@tanzaniasafaris.com</p>
                  <p>Phone: +255 123 456 789</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gombe; 