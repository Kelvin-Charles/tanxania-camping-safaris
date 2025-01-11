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

const Rubondo = () => {
  const parkInfo = {
    name: "Rubondo Island National Park",
    tagline: "A Pristine Island Paradise in Lake Victoria",
    description: `Rubondo Island National Park is a unique ecosystem where dense forest 
    meets Lake Victoria's waters. This island sanctuary is home to diverse wildlife including 
    chimpanzees, sitatunga antelopes, and numerous bird species, offering an extraordinary 
    blend of forest and aquatic experiences.`,
    
    highlights: [
      "Pristine island ecosystem",
      "Wild chimpanzee population",
      "Sport fishing adventures",
      "Rare sitatunga antelopes",
      "Rich birdlife diversity",
      "Lake Victoria experiences"
    ],

    activities: [
      {
        name: "Sport Fishing",
        description: "World-class fishing for Nile Perch",
        duration: "4-8 hours",
        difficulty: "Moderate",
        bestTime: "Early morning/Late afternoon",
        price: "From $120 per person",
        includes: ["Fishing equipment", "Expert guide", "Boat", "Refreshments"]
      },
      {
        name: "Forest Walks",
        description: "Guided walks through pristine forest",
        duration: "2-4 hours",
        difficulty: "Easy to Moderate",
        bestTime: "Morning",
        price: "From $80 per person",
        includes: ["Nature guide", "Bird watching", "Wildlife tracking"]
      },
      {
        name: "Boat Safaris",
        description: "Explore the island's shores by boat",
        duration: "3-4 hours",
        difficulty: "Easy",
        bestTime: "Sunset",
        price: "From $100 per person",
        includes: ["Boat trip", "Wildlife viewing", "Swimming stops"]
      }
    ],

    parkStatistics: {
      size: "457 square kilometers",
      established: "1977",
      elevation: "1,100-1,300 meters",
      annualVisitors: "~800",
      habitatTypes: "Forest, Wetland, Grassland",
      birdSpecies: "300+"
    },

    trails: [
      {
        name: "Forest Trail",
        distance: "3.5 km",
        difficulty: "Moderate",
        description: "Walk through ancient forest with chances to spot chimps",
        startPoint: [32.8500, -2.3000],
        type: "Loop",
        features: ["Chimp habitat", "Bird watching", "Forest views"]
      },
      {
        name: "Coastal Walk",
        distance: "2.8 km",
        difficulty: "Easy",
        description: "Scenic coastal trail with lake views",
        startPoint: [32.8600, -2.3100],
        type: "Linear",
        features: ["Beach access", "Bird watching", "Fishing spots"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Fishing Spots",
        type: "Activity",
        description: "Prime locations for catching Nile Perch",
        coordinates: [32.8500, -2.3000]
      },
      {
        name: "Bird Watching Points",
        type: "Wildlife",
        description: "Excellent spots for observing water birds",
        coordinates: [32.8600, -2.3100]
      },
      {
        name: "Chimp Territory",
        type: "Wildlife",
        description: "Areas where chimps are commonly spotted",
        coordinates: [32.8700, -2.3200]
      }
    ],

    facilities: [
      {
        name: "Rubondo Island Camp",
        description: "Luxury tented accommodation",
        amenities: ["En-suite bathrooms", "Restaurant", "Bar", "Wi-Fi"]
      },
      {
        name: "Fishing Lodge",
        description: "Specialized fishing facilities",
        amenities: ["Equipment rental", "Guide services", "Storage"]
      }
    ],

    bestTimeToVisit: {
      recommended: "June to October",
      peakSeason: "July to September",
      weather: {
        drySeasonTemp: "22-28°C",
        wetSeasonTemp: "24-30°C",
        rainfall: "March to May, November to December"
      }
    }
  };

  const parkHeroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                     url(${parkImages.rubondo.hero})`
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
        parkCenter={[32.8500, -2.3000]}
        pointsOfInterest={parkInfo.pointsOfInterest}
      />

      {/* Gallery */}
      <ParkGallery images={parkImages.rubondo.gallery} />

      {/* Booking Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your Island Adventure</h3>
              <p>Experience the unique blend of forest and lake experiences.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Expert fishing guides</li>
                <li><FaCheck /> Chimp tracking</li>
                <li><FaCheck /> Lake activities</li>
                <li><FaCheck /> Forest walks</li>
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

export default Rubondo; 