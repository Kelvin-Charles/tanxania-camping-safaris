import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaCamera, FaCar, FaUtensils, FaBinoculars, FaSun, FaTree } from 'react-icons/fa';
import './CampingStyles.css';

const DayTrip = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero day-trip-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Day Trip Safaris</h1>
          <p>Experience Tanzania's wildlife wonders in a single unforgettable day</p>
        </div>
      </section>

      <section className="trip-overview">
        <div className="container">
          <h2>Available Day Trips</h2>
          <div className="trips-grid">
            {dayTrips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <div className="trip-image">
                  <img src={trip.image} alt={trip.title} />
                  <span className="trip-duration">
                    <FaClock /> {trip.duration}
                  </span>
                </div>
                <div className="trip-content">
                  <h3>{trip.title}</h3>
                  <p>{trip.description}</p>
                  <div className="trip-features">
                    <div className="feature">
                      <FaMapMarkerAlt />
                      <span>{trip.location}</span>
                    </div>
                    <div className="feature">
                      <FaUsers />
                      <span>{trip.groupSize}</span>
                    </div>
                    <div className="feature">
                      <FaStar />
                      <span>{trip.rating} Rating</span>
                    </div>
                  </div>
                  <div className="trip-highlights">
                    {trip.highlights.map((highlight, index) => (
                      <div key={index} className="highlight">
                        <FaCamera />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="trip-inclusions">
                    <h4>Included in the trip:</h4>
                    <div className="inclusion-grid">
                      {trip.inclusions.map((inclusion, index) => (
                        <div key={index} className="inclusion-item">
                          {inclusion.icon}
                          <span>{inclusion.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="trip-footer">
                    <div className="price">
                      <span className="amount">From ${trip.price}</span>
                      <span className="per">per person</span>
                    </div>
                    <Link to={`/booking/${trip.id}`} className="book-button">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const dayTrips = [
  {
    id: 1,
    title: "Tarangire National Park Safari",
    description: "Experience the incredible elephant herds and ancient baobab trees in Tarangire National Park.",
    duration: "Full Day (12 hours)",
    location: "Tarangire",
    groupSize: "2-6 people",
    rating: 4.9,
    price: 299,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
    highlights: [
      "Elephant herds viewing",
      "Ancient baobab trees",
      "Big cats spotting",
      "Bird watching"
    ],
    inclusions: [
      { icon: <FaCar />, text: "4x4 Safari Vehicle" },
      { icon: <FaUtensils />, text: "Lunch & Refreshments" },
      { icon: <FaBinoculars />, text: "Professional Guide" },
      { icon: <FaCamera />, text: "Photo Opportunities" }
    ]
  },
  // Add more day trips...
];

export default DayTrip; 