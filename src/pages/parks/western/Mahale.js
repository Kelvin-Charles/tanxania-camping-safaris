import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaMountain,
  FaSwimmer, FaBinoculars, FaUserGraduate, FaChartLine, FaCheck,
  FaUsers, FaCalendarCheck, FaWhatsapp, FaBed, FaUtensils, FaWifi,
  FaHiking, FaBookReader, FaHandHoldingHeart, FaGlobeAfrica, FaLandmark, FaInfoCircle
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const Mahale = () => {
  const parkInfo = {
    name: "Mahale Mountains National Park",
    tagline: "Where Mountains Meet Lake Tanganyika",
    description: `Mahale Mountains National Park is a pristine wilderness paradise 
    where forested mountains cascade down to the crystal-clear waters of Lake Tanganyika. 
    Home to some of Africa's last remaining wild chimpanzees, this remote park offers an 
    unparalleled blend of wildlife experiences and stunning natural beauty.`,
    
    highlights: [
      "Wild chimpanzee tracking",
      "Pristine mountain forests",
      "Crystal-clear Lake Tanganyika",
      "Remote wilderness experience",
      "Diverse primate population",
      "Beach-forest combination"
    ],

    activities: [
      {
        name: "Chimpanzee Tracking",
        description: "Trek through mountain forests to observe wild chimps",
        duration: "4-8 hours",
        difficulty: "Challenging",
        bestTime: "Early morning",
        price: "From $150 per person",
        includes: ["Expert guide", "Park fees", "Water"]
      },
      {
        name: "Lake Activities",
        description: "Swimming, snorkeling, and fishing in Lake Tanganyika",
        duration: "Flexible",
        difficulty: "Easy to Moderate",
        includes: ["Equipment", "Safety gear", "Guide"]
      },
      {
        name: "Mountain Hiking",
        description: "Explore the Mahale Mountains' diverse terrain",
        duration: "2-6 hours",
        difficulty: "Moderate to Challenging",
        includes: ["Guide", "Trail maps", "Emergency support"]
      }
    ],

    trails: [
      {
        name: "Kasoje Trail",
        distance: "4.5 km",
        difficulty: "Challenging",
        description: "Primary chimp tracking route through mountain forest",
        startPoint: [29.7591, -6.1689],
        elevation: "800m gain",
        type: "Out and back",
        features: ["Chimp habitat", "Forest canopy", "Mountain views"],
        waypoints: [
          {
            name: "Forest Entry",
            coordinates: [29.7591, -6.1689],
            description: "Trail start point"
          },
          {
            name: "Viewing Point",
            coordinates: [29.7622, -6.1701],
            description: "Lake Tanganyika panorama"
          }
        ]
      },
      {
        name: "Beach Trail",
        distance: "2.8 km",
        difficulty: "Easy",
        description: "Scenic coastal walk along Lake Tanganyika",
        startPoint: [29.7566, -6.1673],
        type: "Linear",
        features: ["Beach views", "Swimming spots", "Bird watching"]
      }
    ],

    parkCenter: [29.9285, -6.1675],

    pointsOfInterest: [
      {
        name: "Chimp Territory",
        coordinates: [29.9280, -6.1689],
        type: "Wildlife",
        description: "Prime chimpanzee viewing area"
      },
      {
        name: "Research Station",
        coordinates: [29.9290, -6.1701],
        type: "Facility",
        description: "Scientific research base"
      },
      {
        name: "Lake Beach",
        coordinates: [29.9266, -6.1673],
        type: "Landscape",
        description: "Prime swimming and relaxation spot"
      }
    ],

    gallery: [
      {
        url: parkImages.mahale.gallery[0],
        title: "Mountain Chimpanzees",
        description: "Wild chimpanzees in their natural habitat"
      },
      {
        url: parkImages.mahale.gallery[1],
        title: "Lake Tanganyika",
        description: "Crystal clear waters and pristine beaches"
      },
      {
        url: parkImages.mahale.gallery[2],
        title: "Forest Trails",
        description: "Hiking paths through pristine forest"
      }
    ],

    practicalInfo: {
      bestTime: "May to October (Dry Season)",
      climate: {
        drySeasonTemp: "25-30°C",
        wetSeasonTemp: "28-35°C",
        rainfall: "Heaviest from November to April"
      },
      gettingThere: [
        "Scheduled flights to Mahale airstrip",
        "Boat transfer along Lake Tanganyika",
        "Charter flights available",
        "Combined air and boat access"
      ],
      accommodation: [
        "Luxury beach lodges",
        "Tented forest camps",
        "Bandas on the beach",
        "Basic camping facilities"
      ]
    },

    conservation: {
      significance: `Mahale Mountains National Park protects one of Africa's most 
      studied chimpanzee populations and their pristine forest habitat, while also 
      preserving the unique ecosystem where mountains meet one of Africa's great lakes.`,
      initiatives: [
        "Chimpanzee conservation",
        "Forest habitat protection",
        "Community-based conservation",
        "Sustainable tourism practices",
        "Research programs"
      ]
    },

    lodgeAmenities: {
      luxury: {
        name: "Mahale Mountains Lodge",
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
        name: "Research Camp",
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
        "Clear mountain views",
        "Comfortable hiking",
        "Best photography"
      ],
      wetSeasonNovMay: [
        "Lush landscapes",
        "Waterfalls active",
        "Fewer visitors",
        "Bird breeding season"
      ],
      yearRound: [
        "Chimpanzee tracking",
        "Lake activities",
        "Research opportunities",
        "Cultural visits"
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
      size: "1,613 km²",
      established: "1985",
      elevation: "773-2,462m",
      chimps: "~800 individuals",
      research: "Since 1965",
      annualVisitors: "~1,500",
      species: {
        mammals: "82 species",
        birds: "355 species",
        plants: "2,200 species"
      }
    },

    culturalSignificance: {
      history: `The Mahale Mountains have been home to various indigenous communities 
      for generations, with deep cultural connections to the forest and lake.`,
      localCommunities: [
        "Tongwe people - Traditional forest inhabitants",
        "Lake shore fishing communities",
        "Traditional honey collectors",
        "Cultural heritage sites"
      ],
      traditions: [
        "Forest spiritual sites",
        "Traditional fishing methods",
        "Indigenous knowledge of plants",
        "Cultural ceremonies"
      ]
    },

    visitorInformation: {
      guidelines: [
        "Maintain 10m distance from chimps",
        "No flash photography",
        "Maximum group size of 6",
        "Follow guide instructions",
        "Stay on marked trails"
      ],
      facilities: [
        "Visitor center",
        "Research station",
        "Medical facility",
        "Gift shop",
        "Viewing platforms"
      ],
      safety: [
        "Always follow guide instructions",
        "Carry sufficient water",
        "Wear appropriate footwear",
        "Bring rain gear",
        "Stay in groups"
      ]
    }
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.mahale.hero})`
  };

  const galleryImages = parkInfo.gallery.map((image, index) => ({
    id: index + 1,
    url: image.url,
    title: image.title,
    description: image.description,
    category: 'wildlife',
    location: 'Mahale Mountains National Park',
    date: 'June 2023'
  }));

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
              <p>{parkInfo.practicalInfo.bestTime}</p>
            </div>
            <div className="info-card">
              <h3><FaTemperatureHigh /> Climate</h3>
              <ul>
                <li>Dry Season: {parkInfo.practicalInfo.climate.drySeasonTemp}</li>
                <li>Wet Season: {parkInfo.practicalInfo.climate.wetSeasonTemp}</li>
                <li>{parkInfo.practicalInfo.climate.rainfall}</li>
              </ul>
            </div>
            <div className="info-card">
              <h3><FaShip /> Getting There</h3>
              <ul>
                {parkInfo.practicalInfo.gettingThere.map((item, index) => (
                  <li key={index}>{item}</li>
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
                <span>{initiative}</span>
              </div>
            ))}
              </div>
            </div>
      </section>

      {/* Educational Programs */}
      <section className="educational-programs">
        {/* Same as Gombe */}
      </section>

      {/* Cultural Significance Section */}
      <section className="cultural-significance">
        <div className="container">
          <h2><FaLandmark /> Cultural Heritage</h2>
          <p>{parkInfo.culturalSignificance.history}</p>
          <div className="cultural-grid">
            <div className="cultural-card">
              <h3>Local Communities</h3>
              <ul>
                {parkInfo.culturalSignificance.localCommunities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="cultural-card">
              <h3>Traditional Practices</h3>
              <ul>
                {parkInfo.culturalSignificance.traditions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="visitor-information">
        <div className="container">
          <h2><FaInfoCircle /> Visitor Guidelines</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Park Guidelines</h3>
              <ul>
                {parkInfo.visitorInformation.guidelines.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h3>Facilities</h3>
              <ul>
                {parkInfo.visitorInformation.facilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h3>Safety</h3>
              <ul>
                {parkInfo.visitorInformation.safety.map((item, index) => (
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
          <h2><FaCalendarAlt /> Seasonal Park Highlights</h2>
          <div className="season-grid">
            <div className="season-card">
              <h3>Dry Season (Jun-Oct)</h3>
              <ul>
                {parkInfo.seasonalHighlights.drySeasonJunOct.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="season-card">
              <h3>Wet Season (Nov-May)</h3>
              <ul>
                {parkInfo.seasonalHighlights.wetSeasonNovMay.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="season-card">
              <h3>Year-Round</h3>
              <ul>
                {parkInfo.seasonalHighlights.yearRound.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
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
              <h3>Chimpanzees</h3>
              <p>{parkInfo.parkStatistics.chimps}</p>
              </div>
            <div className="stat-card">
              <h3>Research History</h3>
              <p>{parkInfo.parkStatistics.research}</p>
              </div>
            <div className="stat-card">
              <h3>Annual Visitors</h3>
              <p>{parkInfo.parkStatistics.annualVisitors}</p>
            </div>
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
      <ParkGallery images={parkImages.mahale.gallery} />

      {/* Book Your Visit Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your Mahale Adventure</h3>
              <p>Experience the extraordinary world of chimpanzees in their natural habitat. Let us help you plan your perfect mountain and lake adventure.</p>
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
          <h2>Plan Your Mahale Adventure</h2>
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
                      <option value="1-2">1-2 (Recommended)</option>
                      <option value="3-4">3-4</option>
                      <option value="5-6">5-6 (Maximum)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group select-wrapper">
                  <select required>
                    <option value="">Select Activity</option>
                    {parkInfo.activities.map((activity, index) => (
                      <option key={index} value={activity.name.toLowerCase().replace(/\s+/g, '-')}>
                        {activity.name} ({activity.duration})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Special Requirements (e.g., fitness level, dietary restrictions, specific interests)" 
                    rows="4"
                  ></textarea>
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

export default Mahale; 