import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaWater,
  FaBinoculars, FaCheck, FaUsers, FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const BurigiChato = () => {
  const parkInfo = {
    name: "Burigi-Chato National Park",
    tagline: "Tanzania's Newest Wilderness Frontier",
    description: `Burigi-Chato National Park, established in 2019, represents Tanzania's 
    commitment to conservation with vast savannas, wetlands, and diverse wildlife. This 
    emerging destination offers authentic safari experiences away from crowded circuits.`,
    
    highlights: [
      "Untouched wilderness",
      "Rich biodiversity",
      "Lake Burigi scenery",
      "Authentic safari experience",
      "Diverse ecosystems",
      "Cultural heritage"
    ],

    activities: [
      {
        name: "Game Drives",
        description: "Explore vast savanna plains and spot diverse wildlife",
        duration: "Full day/Half day",
        difficulty: "Easy",
        bestTime: "Early morning/Late afternoon",
        includes: ["4x4 vehicle", "Expert guide", "Refreshments"]
      },
      {
        name: "Boat Safaris",
        description: "Navigate Lake Burigi's pristine waters",
        duration: "2-3 hours",
        difficulty: "Easy",
        includes: ["Boat ride", "Guide", "Safety equipment"]
      }
    ],

    trails: [
      {
        name: "Savanna Circuit",
        distance: "15 km",
        difficulty: "Moderate",
        description: "Game viewing circuit through savanna",
        startPoint: [31.5000, -2.1500],
        type: "Loop",
        features: ["Wildlife viewing", "Scenic vistas", "Grasslands"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Lake Burigi",
        coordinates: [31.4800, -2.1400],
        type: "Landscape",
        description: "Scenic lake with abundant wildlife"
      },
      {
        name: "Ranger Post",
        coordinates: [31.5100, -2.1600],
        type: "Facility",
        description: "Park headquarters and information center"
      }
    ],

    practicalInfo: {
      bestTime: {
        peak: "June to September",
        shoulder: "January to February",
        avoid: "March to May (Heavy rains)"
      },
      climate: {
        drySeasonTemp: "20-30°C",
        wetSeasonTemp: "22-32°C",
        rainfall: "Bimodal pattern"
      },
      gettingThere: [
        {
          method: "Road",
          details: "Access from Bukoba or Kahama",
          duration: "4-6 hours drive"
        }
      ]
    }
  };

  return (
    <div className="park-page">
      <section className="park-hero burigi-hero">
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

      {/* Wildlife Section */}
      <section className="wildlife-section">
        <div className="container">
          <h2>Wildlife & Nature</h2>
          <div className="wildlife-grid">
            <div className="wildlife-category">
              <h3>Mammals</h3>
              <ul>
                {parkInfo.wildlife.mammals.map((animal, index) => (
                  <li key={index}>{animal}</li>
                ))}
              </ul>
            </div>
            <div className="wildlife-category">
              <h3>Birds</h3>
              <ul>
                {parkInfo.wildlife.birds.map((bird, index) => (
                  <li key={index}>{bird}</li>
                ))}
              </ul>
            </div>
            <div className="wildlife-category">
              <h3>Aquatic Life</h3>
              <ul>
                {parkInfo.wildlife.aquatic.map((species, index) => (
                  <li key={index}>{species}</li>
                ))}
              </ul>
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
              <h3><FaMapMarkerAlt /> Getting There</h3>
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

      {/* Gallery Section */}
      <section className="park-gallery">
        <div className="container">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {parkInfo.gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.url} alt={image.title} />
                <div className="gallery-caption">
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="book-visit">
        <div className="container">
          <h2>Book Your Visit</h2>
          <div className="booking-grid">
            <div className="booking-info">
              <h3>Plan Your {parkInfo.name} Adventure</h3>
              <p>Experience the untamed wilderness of Tanzania's newest national park. Let us help you plan your perfect safari adventure.</p>
              <ul className="booking-highlights">
                <li><FaCheck /> Personalized itineraries</li>
                <li><FaCheck /> Expert local guides</li>
                <li><FaCheck /> Comfortable accommodation</li>
                <li><FaCheck /> Authentic experiences</li>
              </ul>
              <div className="booking-cta">
                <button className="btn-primary">Start Planning</button>
                <button className="btn-secondary">Contact Us</button>
              </div>
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
                      <option value="3-5">3-5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group select-wrapper">
                  <select required>
                    <option value="">Select Activity</option>
                    {parkInfo.activities.map((activity, index) => (
                      <option key={index} value={activity.name}>{activity.name}</option>
                    ))}
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

export default BurigiChato; 