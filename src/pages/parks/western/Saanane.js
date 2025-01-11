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

const Saanane = () => {
  const parkInfo = {
    name: "Saanane Island National Park",
    tagline: "Tanzania's Smallest National Park - A Lake Victoria Gem",
    description: `Saanane Island National Park, located in Lake Victoria near Mwanza city, 
    is Tanzania's smallest national park. This unique island sanctuary offers visitors an 
    intimate wildlife experience combined with spectacular views of Lake Victoria.`,
    
    highlights: [
      "Lake Victoria panoramas",
      "Rich bird diversity",
      "Small wildlife sanctuary",
      "Rock formations",
      "City proximity",
      "Educational center"
    ],

    activities: [
      {
        name: "Nature Walks",
        description: "Guided walks around the island's trails",
        duration: "1-2 hours",
        difficulty: "Easy",
        bestTime: "Early morning/Late afternoon",
        price: "From $30 per person",
        includes: ["Guide", "Entry fees", "Information booklet"]
      },
      {
        name: "Bird Watching",
        description: "Observe diverse water and land birds",
        duration: "2-3 hours",
        difficulty: "Easy",
        bestTime: "Early morning",
        price: "From $40 per person",
        includes: ["Bird guide", "Binoculars", "Species checklist"]
      }
    ],

    parkStatistics: {
      size: "2.18 square kilometers",
      established: "2013",
      elevation: "1,140 meters",
      annualVisitors: "~5,000",
      birdSpecies: "150+",
      mammals: "17 species"
    },

    trails: [
      {
        name: "Island Circuit",
        distance: "2 km",
        difficulty: "Easy",
        description: "Complete loop around the island",
        startPoint: [32.8930, -2.0644],
        type: "Loop",
        features: ["Lake views", "Wildlife spots", "Rock formations"]
      },
      {
        name: "Rock Trail",
        distance: "0.5 km",
        difficulty: "Moderate",
        description: "Path through unique rock formations",
        startPoint: [32.8935, -2.0645],
        type: "Linear",
        features: ["Rock climbing", "Scenic views", "Photography points"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Main Viewpoint",
        type: "Scenic",
        description: "Panoramic views of Lake Victoria and Mwanza",
        coordinates: [32.8930, -2.0644]
      },
      {
        name: "Bird Hide",
        type: "Wildlife",
        description: "Prime location for bird watching",
        coordinates: [32.8935, -2.0645]
      }
    ],

    facilities: [
      {
        name: "Visitor Center",
        description: "Educational displays and information",
        amenities: ["Exhibits", "Gift shop", "Rest rooms"]
      },
      {
        name: "Picnic Areas",
        description: "Scenic spots for day visits",
        amenities: ["Tables", "Shade", "Waste bins"]
      }
    ],

    bestTimeToVisit: {
      recommended: "June to October",
      peakSeason: "July to September",
      weather: {
        drySeasonTemp: "22-30°C",
        wetSeasonTemp: "24-32°C",
        rainfall: "March to May, October to December"
      }
    }
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.saanane.hero})`
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
              <FaUsers className="stat-icon" />
              <h3>Annual Visitors</h3>
              <p>{parkInfo.parkStatistics.annualVisitors}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trails & Points of Interest */}
      <TrailMap 
        trails={parkInfo.trails}
        parkCenter={[32.8930, -2.0644]}
        pointsOfInterest={parkInfo.pointsOfInterest}
      />

      {/* Gallery */}
      <ParkGallery images={parkImages.saanane.gallery} />

      {/* Booking Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your Island Adventure</h3>
              <p>Experience the unique blend of urban wildlife and Lake Victoria views.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Expert guides</li>
                <li><FaCheck /> Educational tours</li>
                <li><FaCheck /> Bird watching</li>
                <li><FaCheck /> Rock climbing</li>
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

export default Saanane; 