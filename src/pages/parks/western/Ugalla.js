import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaMountain,
  FaSwimmer, FaBinoculars, FaUserGraduate, FaChartLine, FaCheck,
  FaUsers, FaCalendarCheck, FaWhatsapp, FaBed, FaUtensils, FaWifi,
  FaHiking, FaBookReader, FaHandHoldingHeart, FaGlobeAfrica, FaFish
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const Ugalla = () => {
  const parkInfo = {
    name: "Ugalla River National Park",
    tagline: "Wild Rivers and Remote Wilderness",
    description: `A pristine wilderness area along the Ugalla River system, 
    offering exceptional wildlife viewing and fishing opportunities in a 
    remote setting.`,
    
    highlights: [
      "River ecosystem",
      "Sport fishing",
      "Remote safaris",
      "Bird diversity",
      "Pristine wilderness",
      "Authentic experience"
    ],

    activities: [
      {
        name: "Sport Fishing",
        description: "Fish in pristine river waters",
        duration: "Full day",
        difficulty: "Moderate",
        bestTime: "Early morning/Late afternoon",
        price: "From $150 per person",
        includes: ["Equipment", "Guide", "Boat", "Permits", "Refreshments"]
      },
      {
        name: "Game Drives",
        description: "Explore remote wilderness",
        duration: "Full day",
        difficulty: "Challenging",
        bestTime: "Early morning",
        price: "From $200 per person",
        includes: ["4x4 vehicle", "Expert guide", "Packed lunch", "Water"]
      },
      {
        name: "Bird Watching",
        description: "Observe diverse river and forest birds",
        duration: "Half day",
        difficulty: "Easy",
        bestTime: "Morning",
        price: "From $100 per person",
        includes: ["Guide", "Binoculars", "Bird checklist"]
      }
    ],

    parkStatistics: {
      size: "3,865 square kilometers",
      established: "2019",
      elevation: "1,000-1,500 meters",
      annualVisitors: "Limited",
      fishSpecies: "50+",
      birdSpecies: "300+"
    },

    trails: [
      {
        name: "River Circuit",
        distance: "12 km",
        difficulty: "Challenging",
        description: "Follow the Ugalla River",
        startPoint: [31.8500, -5.5000],
        type: "Circuit",
        features: ["River views", "Wildlife", "Fishing spots"]
      },
      {
        name: "Forest Trail",
        distance: "6 km",
        difficulty: "Moderate",
        description: "Through miombo woodland",
        startPoint: [31.8600, -5.5100],
        type: "Linear",
        features: ["Bird watching", "Forest wildlife", "Photography"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Prime Fishing Spot",
        type: "Activity",
        description: "Best location for catching Tiger Fish",
        coordinates: [31.8500, -5.5000]
      },
      {
        name: "River Confluence",
        type: "Scenic",
        description: "Meeting point of rivers",
        coordinates: [31.8600, -5.5100]
      },
      {
        name: "Wildlife Viewing Point",
        type: "Wildlife",
        description: "Excellent game viewing location",
        coordinates: [31.8700, -5.5200]
      }
    ],

    facilities: [
      {
        name: "Ugalla River Camp",
        description: "Basic tented accommodation",
        amenities: ["Solar power", "Hot water", "Dining area"]
      },
      {
        name: "Fishing Station",
        description: "Equipment and guide center",
        amenities: ["Tackle shop", "Boat hire", "Guide services"]
      }
    ],

    bestTimeToVisit: {
      recommended: "June to October",
      peakSeason: "July to September",
      weather: {
        drySeasonTemp: "20-32°C",
        wetSeasonTemp: "22-34°C",
        rainfall: "November to April"
      }
    }
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.ugalla.hero})`
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
              <FaFish className="stat-icon" />
              <h3>Fish Species</h3>
              <p>{parkInfo.parkStatistics.fishSpecies}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trails & Points of Interest */}
      <TrailMap 
        trails={parkInfo.trails}
        parkCenter={[31.8500, -5.5000]}
        pointsOfInterest={parkInfo.pointsOfInterest}
      />

      {/* Gallery */}
      <ParkGallery images={parkImages.ugalla.gallery} />

      {/* Booking Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your River Adventure</h3>
              <p>Experience the untamed wilderness of Ugalla River.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Expert fishing guides</li>
                <li><FaCheck /> Quality equipment</li>
                <li><FaCheck /> Remote safaris</li>
                <li><FaCheck /> River experiences</li>
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

export default Ugalla; 