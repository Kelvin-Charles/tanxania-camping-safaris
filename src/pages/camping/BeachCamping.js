import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaUmbrellaBeach, FaSwimmer, FaWater, FaUtensils, FaCampground, FaSun } from 'react-icons/fa';
import './CampingStyles.css';

const BeachCamping = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero beach-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Beach Camping Adventures</h1>
          <p>Experience the magic of Tanzania's pristine beaches with our exclusive camping packages</p>
        </div>
      </section>

      <section className="camping-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Coastal Paradise Camping</h2>
            <p>Combine the thrill of camping with the serenity of Tanzania's beautiful coastline. 
            Wake up to ocean views, enjoy water activities, and experience the perfect beach getaway.</p>
            <div className="amenities-grid">
              {beachFeatures.map((feature) => (
                <div key={feature.id} className="amenity-item">
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="camping-packages">
        <div className="container">
          <h2>Beach Camping Packages</h2>
          <div className="packages-grid">
            {beachPackages.map((pack) => (
              <div key={pack.id} className="package-card">
                <div className="package-image">
                  <img src={pack.image} alt={pack.title} />
                  <span className="package-duration">
                    <FaClock /> {pack.duration}
                  </span>
                </div>
                <div className="package-content">
                  <h3>{pack.title}</h3>
                  <p>{pack.description}</p>
                  <div className="package-features">
                    <div className="feature">
                      <FaMapMarkerAlt />
                      <span>{pack.location}</span>
                    </div>
                    <div className="feature">
                      <FaUsers />
                      <span>{pack.groupSize}</span>
                    </div>
                    <div className="feature">
                      <FaStar />
                      <span>{pack.rating} Rating</span>
                    </div>
                  </div>
                  <div className="package-highlights">
                    {pack.highlights.map((highlight, index) => (
                      <div key={index} className="highlight">
                        <FaWater />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="package-inclusions">
                    <h4>Package Includes:</h4>
                    <div className="inclusion-grid">
                      {pack.inclusions.map((inclusion, index) => (
                        <div key={index} className="inclusion-item">
                          {inclusion.icon}
                          <span>{inclusion.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="package-footer">
                    <div className="price">
                      <span className="amount">From ${pack.price}</span>
                      <span className="per">per person</span>
                    </div>
                    <Link to={`/booking/${pack.id}`} className="book-button">
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

const beachFeatures = [
  {
    id: 1,
    icon: <FaUmbrellaBeach />,
    title: "Beachfront Camping",
    description: "Premium camping spots with direct beach access"
  },
  {
    id: 2,
    icon: <FaSwimmer />,
    title: "Water Activities",
    description: "Swimming, snorkeling, and water sports"
  },
  {
    id: 3,
    icon: <FaCampground />,
    title: "Quality Equipment",
    description: "High-quality camping gear for beach conditions"
  },
  {
    id: 4,
    icon: <FaSun />,
    title: "Beach Amenities",
    description: "Beach chairs, umbrellas, and cooling facilities"
  }
];

const beachPackages = [
  {
    id: 1,
    title: "Zanzibar Beach Camping",
    description: "Experience the pristine beaches of Zanzibar with our luxury beach camping package.",
    duration: "4 Days / 3 Nights",
    location: "Zanzibar",
    groupSize: "2-6 people",
    rating: 4.9,
    price: 899,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f",
    highlights: [
      "Private beach access",
      "Sunset views",
      "Water activities",
      "Beach bonfire"
    ],
    inclusions: [
      { icon: <FaCampground />, text: "Beachfront Camping" },
      { icon: <FaUtensils />, text: "Fresh Seafood" },
      { icon: <FaSwimmer />, text: "Water Sports" },
      { icon: <FaUmbrellaBeach />, text: "Beach Equipment" }
    ]
  },
  {
    id: 2,
    title: "Pemba Island Escape",
    description: "Discover the secluded beaches and crystal-clear waters of Pemba Island.",
    duration: "5 Days / 4 Nights",
    location: "Pemba Island",
    groupSize: "2-4 people",
    rating: 4.8,
    price: 1199,
    image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b",
    highlights: [
      "Secluded beaches",
      "Snorkeling trips",
      "Island tours",
      "Local cuisine"
    ],
    inclusions: [
      { icon: <FaCampground />, text: "Private Camp" },
      { icon: <FaUtensils />, text: "All Meals" },
      { icon: <FaSwimmer />, text: "Snorkeling Gear" },
      { icon: <FaUmbrellaBeach />, text: "Beach Activities" }
    ]
  },
  {
    id: 3,
    title: "Mafia Island Adventure",
    description: "Experience world-class diving and pristine beaches on Mafia Island.",
    duration: "6 Days / 5 Nights",
    location: "Mafia Island",
    groupSize: "2-6 people",
    rating: 4.7,
    price: 1499,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f",
    highlights: [
      "Diving spots",
      "Marine life",
      "Beach camping",
      "Island exploration"
    ],
    inclusions: [
      { icon: <FaCampground />, text: "Beach Camping" },
      { icon: <FaUtensils />, text: "Full Board" },
      { icon: <FaSwimmer />, text: "Diving Equipment" },
      { icon: <FaUmbrellaBeach />, text: "Island Tours" }
    ]
  }
];

export default BeachCamping; 