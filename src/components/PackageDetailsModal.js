import React from 'react';
import { FaTimes, FaClock, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import './PackageDetailsModal.css';

const PackageDetailsModal = ({ package: pkg, onClose }) => {
  if (!pkg) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <div className="modal-image">
            <img src={pkg.image} alt={pkg.title} />
            <div className="modal-categories">
              {pkg.categories.map((cat, index) => (
                <span key={index} className="modal-category">{cat}</span>
              ))}
            </div>
          </div>
          <div className="modal-title">
            <h2>{pkg.title}</h2>
            <div className="modal-meta">
              <span><FaClock /> {pkg.duration}</span>
              <span><FaUsers /> {pkg.groupSize}</span>
              <span><FaCalendarAlt /> Best Time: {pkg.bestTime}</span>
              {pkg.parkId && (
                <span><FaMapMarkerAlt /> {pkg.parkId.charAt(0).toUpperCase() + pkg.parkId.slice(1)}</span>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <h3>Overview</h3>
            <p>{pkg.description}</p>
          </div>

          <div className="modal-highlights">
            <h3>Highlights</h3>
            <ul>
              {pkg.highlights.map((highlight, index) => (
                <li key={index}><FaCheck /> {highlight}</li>
              ))}
            </ul>
          </div>

          <div className="modal-itinerary">
            <h3>Detailed Itinerary</h3>
            <div className="itinerary-timeline">
              {pkg.itinerary.map((day, index) => (
                <div key={index} className="itinerary-day">
                  <div className="day-header">
                    <span className="day-number">Day {day.day}</span>
                    <h4>{day.title}</h4>
                  </div>
                  <p className="day-description">{day.description}</p>
                  
                  <div className="day-activities">
                    <h5>Activities</h5>
                    <ul>
                      {day.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>

                  {day.meals && (
                    <div className="day-meals">
                      <h5>Meals</h5>
                      <ul>
                        {Object.entries(day.meals).map(([meal, detail]) => (
                          <li key={meal}><strong>{meal}:</strong> {detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {day.accommodation && (
                    <div className="day-accommodation">
                      <h5>Accommodation</h5>
                      <p>{day.accommodation}</p>
                    </div>
                  )}

                  {day.included && (
                    <div className="day-included">
                      <h5>Included</h5>
                      <ul>
                        {day.included.map((item, idx) => (
                          <li key={idx}><FaCheck /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="price-section">
            <span className="price-label">Price per person</span>
            <span className="price-amount">{pkg.price}</span>
          </div>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsModal; 