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

const Rumanyika = () => {
  const parkInfo = {
    name: "Rumanyika-Karagwe National Park",
    tagline: "Historical Landscapes and Natural Beauty",
    description: `Rumanyika-Karagwe National Park combines historical significance with 
    natural beauty, featuring ancient kingdom sites, diverse wildlife, and spectacular 
    landscapes.`,
    
    highlights: [
      "Historical sites",
      "Cultural heritage",
      "Scenic landscapes",
      "Wildlife corridors",
      "Bird diversity",
      "Traditional kingdoms"
    ],

    activities: [
      {
        name: "Historical Tours",
        description: "Visit ancient kingdom sites",
        duration: "3-4 hours",
        difficulty: "Easy",
        bestTime: "Morning",
        price: "From $100 per person",
        includes: ["Guide", "Site fees", "Cultural demonstrations", "Refreshments"]
      },
      {
        name: "Game Viewing",
        description: "Wildlife spotting in natural habitats",
        duration: "4-6 hours",
        difficulty: "Moderate",
        bestTime: "Early morning/Late afternoon",
        price: "From $150 per person",
        includes: ["4x4 vehicle", "Expert guide", "Packed lunch", "Water"]
      },
      {
        name: "Cultural Heritage Tours",
        description: "Experience local traditions and history",
        duration: "Half day",
        difficulty: "Easy",
        bestTime: "Morning/Afternoon",
        price: "From $80 per person",
        includes: ["Cultural guide", "Traditional activities", "Local lunch"]
      }
    ],

    parkStatistics: {
      size: "1,500 square kilometers",
      established: "2019",
      elevation: "1,100-1,900 meters",
      annualVisitors: "Growing",
      historicalSites: "15+",
      birdSpecies: "250+"
    },

    trails: [
      {
        name: "Kingdom Trail",
        distance: "5 km",
        difficulty: "Easy",
        description: "Historical route through ancient kingdom sites",
        startPoint: [31.2500, -1.5000],
        type: "Loop",
        features: ["Historical ruins", "Cultural sites", "Scenic views"]
      },
      {
        name: "Wildlife Circuit",
        distance: "8 km",
        difficulty: "Moderate",
        description: "Game viewing circuit through diverse habitats",
        startPoint: [31.2600, -1.5100],
        type: "Circuit",
        features: ["Wildlife viewing", "Bird watching", "Photography"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Royal Palace Ruins",
        type: "Historical",
        description: "Ancient palace complex of Karagwe Kingdom",
        coordinates: [31.2500, -1.5000]
      },
      {
        name: "Traditional Iron Works",
        type: "Cultural",
        description: "Historical iron smelting sites",
        coordinates: [31.2600, -1.5100]
      },
      {
        name: "Wildlife Viewing Point",
        type: "Wildlife",
        description: "Prime location for game viewing",
        coordinates: [31.2700, -1.5200]
      }
    ],

    facilities: [
      {
        name: "Rumanyika Heritage Lodge",
        description: "Cultural-themed accommodation",
        amenities: ["En-suite rooms", "Restaurant", "Cultural center", "Wi-Fi"]
      },
      {
        name: "Historical Museum",
        description: "Learn about the kingdom's history",
        amenities: ["Exhibits", "Guide service", "Gift shop"]
      }
    ],

    bestTimeToVisit: {
      recommended: "June to September",
      peakSeason: "July to August",
      weather: {
        drySeasonTemp: "20-28°C",
        wetSeasonTemp: "22-30°C",
        rainfall: "March to May, October to December"
      }
    }
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.rumanyika.hero})`
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

            <div className="weather-info">
              <h3>Weather & Best Time to Visit</h3>
              <div className="weather-grid">
                <div className="weather-item">
                  <FaTemperatureHigh className="weather-icon" />
                  <span>Dry Season: {parkInfo.bestTimeToVisit.weather.drySeasonTemp}</span>
                </div>
                <div className="weather-item">
                  <FaCloudRain className="weather-icon" />
                  <span>Rainy Season: {parkInfo.bestTimeToVisit.weather.rainfall}</span>
                </div>
                <div className="weather-item">
                  <FaCalendarAlt className="weather-icon" />
                  <span>Best Time: {parkInfo.bestTimeToVisit.recommended}</span>
                </div>
              </div>
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
                  <span><FaCalendarAlt /> {activity.bestTime}</span>
                  <span className="price">{activity.price}</span>
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

      {/* Park Statistics - Updated to match Mahale exactly */}
      <section className="park-statistics">
        <div className="container">
          <h2>Park Statistics & Information</h2>
          <div className="statistics-grid">
            <div className="statistic-item">
              <div className="stat-icon">
                <FaTree />
              </div>
              <div className="stat-content">
                <h3>Size</h3>
                <p>{parkInfo.parkStatistics.size}</p>
              </div>
            </div>
            <div className="statistic-item">
              <div className="stat-icon">
                <FaCalendarAlt />
              </div>
              <div className="stat-content">
                <h3>Established</h3>
                <p>{parkInfo.parkStatistics.established}</p>
              </div>
            </div>
            <div className="statistic-item">
              <div className="stat-icon">
                <FaMountain />
              </div>
              <div className="stat-content">
                <h3>Elevation</h3>
                <p>{parkInfo.parkStatistics.elevation}</p>
              </div>
            </div>
            <div className="statistic-item">
              <div className="stat-icon">
                <FaLandmark />
              </div>
              <div className="stat-content">
                <h3>Historical Sites</h3>
                <p>{parkInfo.parkStatistics.historicalSites}</p>
              </div>
            </div>
            <div className="statistic-item">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <div className="stat-content">
                <h3>Annual Visitors</h3>
                <p>{parkInfo.parkStatistics.annualVisitors}</p>
              </div>
            </div>
            <div className="statistic-item">
              <div className="stat-icon">
                <FaBinoculars />
              </div>
              <div className="stat-content">
                <h3>Bird Species</h3>
                <p>{parkInfo.parkStatistics.birdSpecies}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="park-facilities">
        <div className="container">
          <h2>Park Facilities</h2>
          <div className="facilities-grid">
            {parkInfo.facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <h3>{facility.name}</h3>
                <p>{facility.description}</p>
                <div className="amenities-list">
                  <h4>Amenities:</h4>
                  <ul>
                    {facility.amenities.map((amenity, idx) => (
                      <li key={idx}><FaCheck /> {amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trails & Points of Interest */}
      <TrailMap 
        trails={parkInfo.trails}
        parkCenter={[31.2500, -1.5000]}
        pointsOfInterest={parkInfo.pointsOfInterest}
      />

      {/* Gallery */}
      <ParkGallery images={parkImages.rumanyika.gallery} />

      {/* Booking Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your Historical Adventure</h3>
              <p>Experience the rich cultural heritage and natural beauty of Rumanyika-Karagwe.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Expert cultural guides</li>
                <li><FaCheck /> Historical tours</li>
                <li><FaCheck /> Wildlife viewing</li>
                <li><FaCheck /> Local community interaction</li>
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

export default Rumanyika; 