import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUsers, FaClock, FaCheck } from 'react-icons/fa';
import './ParkPackages.css';

const ParkPackages = ({ packages, parkName }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <section className="park-packages">
      <div className="container">
        <h2>{parkName} Safari Packages</h2>
        <div className="packages-grid">
          {packages.map(pkg => (
            <motion.div 
              key={pkg.id}
              className="package-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} />
                <span className="package-duration">
                  <FaClock /> {pkg.duration}
                </span>
              </div>
              <div className="package-content">
                <h3>{pkg.title}</h3>
                <p className="package-description">{pkg.description}</p>
                <div className="package-highlights">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <FaCheck /> {highlight}
                    </div>
                  ))}
                </div>
                <div className="package-footer">
                  <div className="package-price">
                    <span>From</span>
                    <h4>${pkg.price}</h4>
                    <span>per person</span>
                  </div>
                  <button 
                    className="view-itinerary-btn"
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Itinerary Modal */}
      {selectedPackage && (
        <div className="modal-overlay">
          <div className="itinerary-modal">
            <h2>{selectedPackage.title}</h2>
            <div className="itinerary-overview">
              <div className="overview-item">
                <FaCalendar />
                <span>{selectedPackage.duration}</span>
              </div>
              <div className="overview-item">
                <FaUsers />
                <span>{selectedPackage.groupSize}</span>
              </div>
            </div>
            <div className="itinerary-days">
              {selectedPackage.itinerary.map((day, index) => (
                <div key={index} className="itinerary-day">
                  <h3>Day {day.day}: {day.title}</h3>
                  <p>{day.description}</p>
                  <ul>
                    {day.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <button 
                className="book-now-btn"
                onClick={() => setShowBookingForm(true)}
              >
                Book Now
              </button>
              <button 
                className="close-btn"
                onClick={() => setSelectedPackage(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="modal-overlay">
          <div className="booking-modal">
            {/* Add booking form here */}
          </div>
        </div>
      )}
    </section>
  );
};

export default ParkPackages; 