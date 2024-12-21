import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaStar, FaFilter } from 'react-icons/fa';
import './SafariPackages.css';

const safariData = {
  categories: [
    'All',
    'Wildlife Safaris',
    'Mountain Climbing',
    'Cultural Tours',
    'Beach Holidays',
    'Day Trips'
  ],
  packages: [
    {
      id: 1,
      title: '5 Days Serengeti & Ngorongoro Safari',
      category: 'Wildlife Safaris',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      duration: '5 Days',
      price: 'From $2,400',
      rating: 4.9,
      reviews: 28,
      highlights: [
        'Serengeti National Park',
        'Ngorongoro Crater',
        'Big Five Viewing',
        'Luxury Camping'
      ],
      description: "Experience Tanzania's most iconic wildlife destinations in comfort and style.",
      destinations: ['Serengeti', 'Ngorongoro'],
      bestTime: 'June-October'
    },
    {
      id: 2,
      title: '7 Days Kilimanjaro Machame Route',
      category: 'Mountain Climbing',
      image: 'https://images.unsplash.com/photo-1589308454676-22c0253bb86a',
      duration: '7 Days',
      price: 'From $2,800',
      rating: 4.8,
      reviews: 35,
      highlights: [
        'Summit Africa\'s Highest Peak',
        'Scenic Machame Route',
        'Professional Guides',
        'Quality Equipment'
      ],
      description: 'Climb Mount Kilimanjaro via the scenic Machame Route with experienced guides.',
      destinations: ['Kilimanjaro'],
      bestTime: 'January-March, June-October'
    },
    // Add more packages...
  ]
};

const SafariPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');

  const filteredPackages = safariData.packages.filter(pkg => 
    selectedCategory === 'All' || pkg.category === selectedCategory
  );

  return (
    <div className="safari-packages">
      <div className="hero-section">
        <h1>Tanzania Safari Packages</h1>
        <p>Discover the best of Tanzania with our carefully curated safari experiences</p>
      </div>

      <div className="filters-section">
        <div className="category-filters">
          {safariData.categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="sort-filter">
          <FaFilter />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>

      <div className="packages-grid">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
              <div className="package-category">{pkg.category}</div>
            </div>
            <div className="package-content">
              <h3>{pkg.title}</h3>
              <div className="package-meta">
                <span><FaClock /> {pkg.duration}</span>
                <span><FaMapMarkerAlt /> {pkg.destinations.join(', ')}</span>
                <span><FaCalendar /> Best: {pkg.bestTime}</span>
              </div>
              <div className="package-rating">
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(pkg.rating) ? 'filled' : ''} />
                  ))}
                </span>
                <span className="rating-text">{pkg.rating} ({pkg.reviews} reviews)</span>
              </div>
              <ul className="package-highlights">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <p className="package-description">{pkg.description}</p>
              <div className="package-footer">
                <div className="package-price">{pkg.price}</div>
                <Link to={`/safari/${pkg.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafariPackages; 