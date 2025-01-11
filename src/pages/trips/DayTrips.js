import React, { useState, useMemo } from 'react';
import { FaSortAmountDown, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { safariPackages } from '../../data/safariPackages';
import PackageDetailsModal from '../../components/PackageDetailsModal';
import './AllTrips.css';

const DayTrips = () => {
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Get all day trip packages
  const dayTripPackages = useMemo(() => {
    const packages = new Set();
    Object.values(safariPackages.categories).forEach(category => {
      category.packages
        .filter(pkg => pkg.categories.includes('Day Trips'))
        .forEach(pkg => packages.add(pkg));
    });
    return Array.from(packages);
  }, []);

  // Sort packages
  const sortedPackages = useMemo(() => {
    return [...dayTripPackages].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return 0;
      }
    });
  }, [sortBy, dayTripPackages]);

  return (
    <div className="all-trips-page">
      <div className="trips-hero">
        <h1>Day Trips in Tanzania</h1>
        <p>Perfect short excursions to experience Tanzania's highlights in a single day</p>
      </div>

      <div className="trips-filters">
        <div className="sort-options">
          <FaSortAmountDown />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>

      <div className="trips-grid">
        {sortedPackages.map(trip => (
          <div key={trip.id} className="trip-card">
            <div className="trip-image">
              <img src={trip.image} alt={trip.title} />
              <div className="trip-categories">
                {trip.categories.map((cat, index) => (
                  <span key={index} className="trip-category">{cat}</span>
                ))}
              </div>
            </div>
            <div className="trip-content">
              <h3>{trip.title}</h3>
              <div className="trip-meta">
                <span><FaClock /> {trip.duration}</span>
                <span><FaCalendarAlt /> Best: {trip.bestTime}</span>
                {trip.parkId && (
                  <span><FaMapMarkerAlt /> {trip.parkId.charAt(0).toUpperCase() + trip.parkId.slice(1)}</span>
                )}
              </div>
              <p className="trip-description">{trip.description}</p>
              <div className="trip-footer">
                <div className="trip-price">{trip.price}</div>
                <button 
                  className="view-trip-btn"
                  onClick={() => setSelectedPackage(trip)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <PackageDetailsModal 
          package={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
        />
      )}
    </div>
  );
};

export default DayTrips; 