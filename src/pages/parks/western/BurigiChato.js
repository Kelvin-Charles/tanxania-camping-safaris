import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaMountain,
  FaSwimmer, FaBinoculars, FaUserGraduate, FaChartLine, FaCheck,
  FaUsers, FaCalendarCheck, FaWhatsapp, FaBed, FaUtensils, FaWifi,
  FaHiking, FaBookReader, FaHandHoldingHeart, FaGlobeAfrica
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const BurigiChato = () => {
  const parkInfo = {
    name: "Burigi-Chato National Park",
    tagline: "Tanzania's Newest Wildlife Paradise",
    description: `A pristine wilderness area offering exceptional wildlife viewing 
    opportunities and stunning landscapes. This newly established park combines savanna, 
    woodland, and lake habitats to create a unique ecosystem.`,
    
    highlights: [
      "Diverse wildlife populations",
      "Scenic savanna landscapes",
      "Lake Victoria shoreline",
      "Pristine wilderness",
      "Excellent bird watching",
      "Cultural experiences"
    ],

    activities: [
      {
        name: "Game Drives",
        description: "Explore vast savanna plains",
        duration: "Full day/Half day",
        difficulty: "Easy",
        bestTime: "Early morning/Late afternoon",
        price: "From $150 per person",
        includes: ["Vehicle", "Guide", "Refreshments"]
      },
      {
        name: "Walking Safaris",
        description: "Guided nature walks",
        duration: "2-3 hours",
        difficulty: "Moderate",
        bestTime: "Morning",
        includes: ["Armed ranger", "Water", "First aid"]
      },
      {
        name: "Boat Safaris",
        description: "Lake Victoria excursions",
        duration: "3-4 hours",
        difficulty: "Easy",
        includes: ["Boat", "Guide", "Life jackets"]
      }
    ],

    parkStatistics: {
      size: "4,707 square kilometers",
      established: "2019",
      elevation: "1,100-1,750 meters",
      annualVisitors: "Growing",
      wildlife: "Big Five present",
      birdSpecies: "350+"
    },

    trails: [
      {
        name: "Savanna Trail",
        distance: "5 km",
        difficulty: "Moderate",
        description: "Walking safari through game-rich areas",
        features: ["Wildlife viewing", "Bird watching", "Scenic views"]
      },
      {
        name: "Lake Shore Trail",
        distance: "3 km",
        difficulty: "Easy",
        description: "Scenic walk along Lake Victoria",
        features: ["Water birds", "Lake views", "Fishing spots"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Game Viewing Area",
        type: "Wildlife",
        description: "Prime location for spotting big game"
      },
      {
        name: "Bird Watching Point",
        type: "Wildlife",
        description: "Excellent spot for birding enthusiasts"
      },
      {
        name: "Lake Victoria Viewpoint",
        type: "Landscape",
        description: "Panoramic views of the lake"
      }
    ],

    seasonalHighlights: {
      drySeasonJunOct: [
        "Peak wildlife viewing",
        "Comfortable temperatures",
        "Best photography conditions",
        "Easy road access"
      ],
      wetSeasonNovMay: [
        "Lush landscapes",
        "Migratory birds",
        "Fewer visitors",
        "Dramatic skies"
      ],
      yearRound: [
        "Game drives",
        "Bird watching",
        "Boat safaris",
        "Cultural visits"
      ]
    },

    practicalInfo: {
      bestTime: "June to October (Dry Season)",
      climate: {
        drySeasonTemp: "20-30°C",
        wetSeasonTemp: "22-32°C",
        rainfall: "Heaviest from March to May"
      },
      gettingThere: [
        "Road access from Mwanza",
        "Charter flights available",
        "4x4 vehicle recommended",
        "Transfer services"
      ]
    }
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.burigiChato.hero})`
  };

  return (
    <div className="park-page">
      {/* Hero Section */}
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
            
            <div className="highlights-grid">
              {parkInfo.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <FaCheck className="highlight-icon" />
                  <span>{highlight}</span>
            </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="park-activities">
        <div className="container">
          <h2>Park Activities</h2>
          <div className="activities-grid">
            {parkInfo.activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
                <div className="activity-meta">
                  <span><FaClock /> {activity.duration}</span>
                  <span><FaHiking /> {activity.difficulty}</span>
                </div>
                <ul className="activity-includes">
                  {activity.includes.map((item, idx) => (
                    <li key={idx}><FaCheck /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
              </div>
      </section>

      {/* Park Statistics */}
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
              <h3>Wildlife</h3>
              <p>{parkInfo.parkStatistics.wildlife}</p>
            </div>
            <div className="stat-card">
              <h3>Bird Species</h3>
              <p>{parkInfo.parkStatistics.birdSpecies}</p>
              </div>
            <div className="stat-card">
              <h3>Annual Visitors</h3>
              <p>{parkInfo.parkStatistics.annualVisitors}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trails & Points of Interest */}
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
      <ParkGallery images={parkImages.burigiChato.gallery} />

      {/* Book Your Visit */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your Safari Adventure</h3>
              <p>Experience the untamed wilderness of Burigi-Chato. Let us help you plan your perfect safari adventure.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Customized itineraries</li>
                <li><FaCheck /> Professional guides</li>
                <li><FaCheck /> Quality accommodations</li>
                <li><FaCheck /> Transport arrangements</li>
              </ul>
            </div>
            
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
                      <option value="3-4">3-4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Special Requirements" 
                    rows="4"
                  ></textarea>
            </div>
                <button type="submit" className="submit-btn">
                  <FaCalendarCheck /> Request Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BurigiChato; 