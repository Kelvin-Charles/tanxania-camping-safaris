import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSortAmountDown, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { safariPackages } from '../../data/safariPackages';
import CustomTripBuilder from '../../components/CustomTripBuilder';
import './AllTrips.css';

const AllTrips = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  const categories = [
    { id: 'all', name: 'All Trips' },
    { id: 'wildlife', name: 'Wildlife Safaris' },
    { id: 'mountain', name: 'Mountain Climbing' },
    { id: 'beach', name: 'Beach Holidays' },
    { id: 'cultural', name: 'Cultural Tours' },
    { id: 'day', name: 'Day Trips' }
  ];

  return (
    <div className="all-trips-page">
      <div className="trips-hero">
        <h1>Tanzania Safari & Adventure Trips</h1>
        <p>Discover our carefully curated collection of unforgettable experiences</p>
        <button 
          className="custom-trip-btn"
          onClick={() => setShowCustomBuilder(!showCustomBuilder)}
        >
          Create Custom Trip
        </button>
      </div>

      {showCustomBuilder ? (
        <CustomTripBuilder onClose={() => setShowCustomBuilder(false)} />
      ) : (
        <>
          <div className="trips-filters">
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

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
            {Object.entries(safariPackages.categories)
              .filter(([key]) => activeCategory === 'all' || key === activeCategory)
              .map(([key, category]) => (
                category.packages.map(trip => (
                  <div key={trip.id} className="trip-card">
                    <div className="trip-image">
                      <img src={trip.image} alt={trip.title} />
                      <div className="trip-category">{category.name}</div>
                    </div>
                    <div className="trip-content">
                      <h3>{trip.title}</h3>
                      <div className="trip-meta">
                        <span><FaClock /> {trip.duration}</span>
                        <span><FaCalendarAlt /> Best: {trip.bestTime}</span>
                      </div>
                      <p className="trip-description">{trip.description}</p>
                      <div className="trip-footer">
                        <div className="trip-price">{trip.price}</div>
                        <Link to={`/trips/${key}/${trip.id}`} className="view-trip-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllTrips; 