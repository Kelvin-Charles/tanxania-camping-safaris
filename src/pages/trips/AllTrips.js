import React, { useState, useMemo } from 'react';
import { FaFilter, FaSortAmountDown, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { safariPackages } from '../../data/safariPackages';
import CustomTripBuilder from '../../components/CustomTripBuilder';
import PackageDetailsModal from '../../components/PackageDetailsModal';
import './AllTrips.css';

const AllTrips = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Trips' },
    { id: 'wildlife', name: 'Wildlife Safaris' },
    { id: 'mountain', name: 'Mountain Climbing' },
    { id: 'beach', name: 'Beach Holidays' },
    { id: 'cultural', name: 'Cultural Tours' },
    { id: 'day', name: 'Day Trips' }
  ];

  // Get all packages across categories
  const allPackages = useMemo(() => {
    const packages = new Set();
    Object.values(safariPackages.categories).forEach(category => {
      category.packages.forEach(pkg => packages.add(pkg));
    });
    return Array.from(packages);
  }, []);

  // Filter and sort packages
  const filteredPackages = useMemo(() => {
    let packages = activeCategory === 'all' 
      ? allPackages
      : allPackages.filter(pkg => pkg.categories.includes(categories.find(cat => cat.id === activeCategory)?.name));

    // Sort packages
    return [...packages].sort((a, b) => {
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
  }, [activeCategory, sortBy, allPackages, categories]);

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
            {filteredPackages.map(trip => (
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
        </>
      )}
    </div>
  );
};

export default AllTrips; 