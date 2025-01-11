import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaMountain,
  FaSwimmer, FaBinoculars, FaUserGraduate, FaChartLine, FaCheck,
  FaUsers, FaCalendarCheck, FaWhatsapp, FaBed, FaUtensils, FaWifi,
  FaHiking, FaBookReader, FaHandHoldingHeart, FaGlobeAfrica, FaLandmark
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const IbandaKyerwa = () => {
  const parkInfo = {
    name: "Ibanda-Kyerwa National Park",
    tagline: "Untamed Wilderness of Western Tanzania",
    description: `A newly established park protecting vital wildlife corridors 
    and offering visitors an authentic, off-the-beaten-path safari experience 
    combined with rich cultural heritage.`,
    
    highlights: [
      "Remote wilderness",
      "Diverse wildlife",
      "River systems",
      "Cultural heritage",
      "Pristine landscapes",
      "Traditional communities"
    ],

    activities: [
      {
        name: "Game Drives",
        description: "Explore remote wilderness areas",
        duration: "Full day",
        difficulty: "Moderate",
        bestTime: "Early morning/Late afternoon",
        price: "From $180 per person",
        includes: ["4x4 vehicle", "Expert guide", "Packed lunch", "Water"]
      },
      {
        name: "Cultural Visits",
        description: "Visit local communities",
        duration: "Half day",
        difficulty: "Easy",
        bestTime: "Morning",
        price: "From $60 per person",
        includes: ["Local guide", "Cultural demonstrations", "Traditional lunch"]
      },
      {
        name: "Nature Walks",
        description: "Guided walks in wildlife areas",
        duration: "2-3 hours",
        difficulty: "Moderate",
        bestTime: "Early morning",
        price: "From $50 per person",
        includes: ["Armed ranger", "Wildlife guide", "Refreshments"]
      }
    ],

    parkStatistics: {
      size: "2,000 square kilometers",
      established: "2019",
      elevation: "1,200-1,800 meters",
      annualVisitors: "Growing",
      wildlife: "Diverse species",
      birdSpecies: "200+"
    },

    trails: [
      {
        name: "River Trail",
        distance: "8 km",
        difficulty: "Moderate",
        description: "Follow the river system",
        startPoint: [31.0000, -1.2000],
        type: "Linear",
        features: ["River views", "Wildlife spotting", "Bird watching"]
      },
      {
        name: "Cultural Heritage Trail",
        distance: "5 km",
        difficulty: "Easy",
        description: "Visit traditional villages and cultural sites",
        startPoint: [31.0100, -1.2100],
        type: "Loop",
        features: ["Cultural sites", "Local communities", "Scenic views"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Wildlife Corridor",
        type: "Wildlife",
        description: "Important migration route for wildlife",
        coordinates: [31.0000, -1.2000]
      },
      {
        name: "Traditional Village",
        type: "Cultural",
        description: "Experience local culture and traditions",
        coordinates: [31.0100, -1.2100]
      },
      {
        name: "River Viewpoint",
        type: "Scenic",
        description: "Panoramic views of river system",
        coordinates: [31.0200, -1.2200]
      }
    ],

    facilities: [
      {
        name: "Ibanda Safari Lodge",
        description: "Comfortable wilderness accommodation",
        amenities: ["En-suite rooms", "Restaurant", "Viewing deck"]
      },
      {
        name: "Community Campsite",
        description: "Basic camping facilities",
        amenities: ["Camping area", "Basic washrooms", "Fire pits"]
      }
    ],

    bestTimeToVisit: {
      recommended: "June to September",
      peakSeason: "July to August",
      weather: {
        drySeasonTemp: "20-30°C",
        wetSeasonTemp: "22-32°C",
        rainfall: "March to May, October to December"
      }
    }
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.ibandaKyerwa.hero})`
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
                  <FaLeaf className="highlight-icon" />
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
                <div className="activity-includes">
                  <h4>Includes:</h4>
                  <ul>
                    {activity.includes.map((item, idx) => (
                      <li key={idx}><FaCheck /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Park Statistics */}
      <section className="park-statistics">
        <div className="container">
          <h2>Park Statistics</h2>
          <div className="statistics-grid">
            <div className="statistic-item">
              <FaTree className="stat-icon" />
              <h3>Park Size</h3>
              <p>{parkInfo.parkStatistics.size}</p>
            </div>
            <div className="statistic-item">
              <FaCalendarAlt className="stat-icon" />
              <h3>Established</h3>
              <p>{parkInfo.parkStatistics.established}</p>
            </div>
            <div className="statistic-item">
              <FaMountain className="stat-icon" />
              <h3>Elevation</h3>
              <p>{parkInfo.parkStatistics.elevation}</p>
            </div>
            <div className="statistic-item">
              <FaPaw className="stat-icon" />
              <h3>Wildlife</h3>
              <p>{parkInfo.parkStatistics.wildlife}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trails & Points of Interest */}
      <TrailMap 
        trails={parkInfo.trails}
        parkCenter={[31.0000, -1.2000]}
        pointsOfInterest={parkInfo.pointsOfInterest}
      />

      {/* Gallery */}
      <ParkGallery images={parkImages.ibandaKyerwa.gallery} />

      {/* Booking Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your Wilderness Adventure</h3>
              <p>Experience the untamed beauty and cultural heritage of Ibanda-Kyerwa.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Expert local guides</li>
                <li><FaCheck /> Cultural experiences</li>
                <li><FaCheck /> Wildlife viewing</li>
                <li><FaCheck /> Community interaction</li>
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

export default IbandaKyerwa; 