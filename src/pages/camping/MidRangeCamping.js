import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaUtensils, FaCampground, FaShower, FaCar, FaBinoculars, FaTree } from 'react-icons/fa';
import './CampingStyles.css';

const MidRangeCamping = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero midrange-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Mid-Range Camping Safaris</h1>
          <p>Perfect balance of comfort and authentic safari experience</p>
        </div>
      </section>

      <section className="camping-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Comfortable Safari Adventures</h2>
            <p>Our mid-range camping safaris offer the perfect balance between comfort and authenticity. Experience the true spirit of African wilderness while enjoying essential amenities and comfortable accommodations.</p>
            <div className="amenities-grid">
              {campingAmenities.map((amenity) => (
                <div key={amenity.id} className="amenity-item">
                  {amenity.icon}
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="camping-packages">
        <div className="container">
          <h2>Mid-Range Safari Packages</h2>
          <div className="packages-grid">
            {midrangePackages.map((pack) => (
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
                        <FaTree />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="package-inclusions">
                    <h4>Included in the package:</h4>
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

const campingAmenities = [
  {
    id: 1,
    icon: <FaCampground />,
    title: "Quality Tents",
    description: "Spacious tents with comfortable bedding and basic furniture"
  },
  {
    id: 2,
    icon: <FaUtensils />,
    title: "Good Meals",
    description: "Fresh, locally-sourced meals prepared by experienced cooks"
  },
  {
    id: 3,
    icon: <FaShower />,
    title: "Basic Facilities",
    description: "Clean shared bathrooms and hot water availability"
  },
  {
    id: 4,
    icon: <FaBinoculars />,
    title: "Game Drives",
    description: "Daily guided game drives in 4x4 vehicles"
  }
];

const midrangePackages = [
  {
    id: 1,
    title: "Serengeti Migration Trail",
    description: "Follow the great wildebeest migration through the Serengeti plains while enjoying comfortable camping accommodations.",
    duration: "5 Days / 4 Nights",
    location: "Serengeti",
    groupSize: "2-8 people",
    rating: 4.8,
    price: 1999,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    highlights: [
      "Witness the great migration",
      "Comfortable camping",
      "Professional guides",
      "Authentic safari experience"
    ],
    inclusions: [
      { icon: <FaCar />, text: "4x4 Safari Vehicle" },
      { icon: <FaUtensils />, text: "Full Board Meals" },
      { icon: <FaCampground />, text: "Quality Camping" },
      { icon: <FaBinoculars />, text: "Game Drives" }
    ]
  },
  {
    id: 2,
    title: "Tarangire & Ngorongoro Adventure",
    description: "Explore the elephant paradise of Tarangire and the wildlife-rich Ngorongoro Crater.",
    duration: "4 Days / 3 Nights",
    location: "Tarangire & Ngorongoro",
    groupSize: "2-8 people",
    rating: 4.7,
    price: 1599,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
    highlights: [
      "Elephant herds in Tarangire",
      "Crater floor game drive",
      "Comfortable camping",
      "Cultural visits"
    ],
    inclusions: [
      { icon: <FaCar />, text: "4x4 Safari Vehicle" },
      { icon: <FaUtensils />, text: "Full Board Meals" },
      { icon: <FaCampground />, text: "Quality Camping" },
      { icon: <FaBinoculars />, text: "Game Drives" }
    ]
  },
  {
    id: 3,
    title: "Lake Manyara & Serengeti Explorer",
    description: "Discover the tree-climbing lions of Lake Manyara and the endless plains of Serengeti.",
    duration: "6 Days / 5 Nights",
    location: "Lake Manyara & Serengeti",
    groupSize: "2-8 people",
    rating: 4.9,
    price: 2299,
    image: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49",
    highlights: [
      "Tree-climbing lions",
      "Serengeti plains",
      "Comfortable camping",
      "Bird watching"
    ],
    inclusions: [
      { icon: <FaCar />, text: "4x4 Safari Vehicle" },
      { icon: <FaUtensils />, text: "Full Board Meals" },
      { icon: <FaCampground />, text: "Quality Camping" },
      { icon: <FaBinoculars />, text: "Game Drives" }
    ]
  }
];

export default MidRangeCamping; 