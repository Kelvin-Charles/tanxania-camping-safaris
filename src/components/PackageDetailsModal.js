import React from 'react';
import { FaTimes, FaClock, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './PackageDetailsModal.css';

const PackageDetailsModal = ({ package: pkg, onClose }) => {
  const navigate = useNavigate();
  
  if (!pkg) return null;

  const handleBookNow = () => {
    // Extract numeric price value and determine budget range
    const priceStr = pkg.price.replace(/[^0-9]/g, '');
    const price = parseInt(priceStr);
    
    let budgetRange;
    if (price <= 1000) budgetRange = "Under $1,000";
    else if (price <= 2000) budgetRange = "$1,000 - $2,000";
    else if (price <= 3000) budgetRange = "$2,000 - $3,000";
    else if (price <= 5000) budgetRange = "$3,000 - $5,000";
    else budgetRange = "Above $5,000";

    // Navigate to enquiry form with pre-filled data
    navigate('/enquiry', {
      state: {
        tripName: pkg.title,
        budgetRange: budgetRange
      }
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="logo-circle">
          <img 
            src="/images/logo.png" 
            alt="Tanzania Camping Logo" 
          />
        </div>

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
          <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsModal; 