import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaCampground, FaUtensils, FaBinoculars, FaCar, FaTree, FaLeaf } from 'react-icons/fa';
import './CampingStyles.css';

const BudgetCamping = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero budget-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Budget Camping Safaris</h1>
          <p>Experience the authentic African wilderness without breaking the bank</p>
        </div>
      </section>

      <section className="camping-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Affordable Adventure</h2>
            <p>Our budget camping safaris offer an authentic wilderness experience at an affordable price. 
            Perfect for adventurous travelers who want to get close to nature while keeping costs down.</p>
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
          <h2>Budget Safari Packages</h2>
          <div className="packages-grid">
            {budgetPackages.map((pack) => (
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
                        <FaLeaf />
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
    title: "Basic Camping",
    description: "Comfortable tents with basic camping equipment provided"
  },
  {
    id: 2,
    icon: <FaUtensils />,
    title: "Camp Meals",
    description: "Simple but nutritious meals prepared by our camp cook"
  },
  {
    id: 3,
    icon: <FaBinoculars />,
    title: "Game Drives",
    description: "Exciting wildlife viewing in 4x4 safari vehicles"
  },
  {
    id: 4,
    icon: <FaTree />,
    title: "Public Campsites",
    description: "Stay at scenic public campsites within the parks"
  }
];

const budgetPackages = [
  {
    id: 1,
    title: "Serengeti Budget Safari",
    description: "Experience the incredible wildlife of Serengeti National Park with our budget-friendly camping option.",
    duration: "4 Days / 3 Nights",
    location: "Serengeti",
    groupSize: "4-8 people",
    rating: 4.7,
    price: 799,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    highlights: [
      "Serengeti wildlife viewing",
      "Basic camping experience",
      "Shared game drives",
      "Public campsite stays"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Shared Safari Vehicle" },
      { icon: <FaUtensils />, text: "Simple Meals" },
      { icon: <FaCampground />, text: "Basic Camping" },
      { icon: <FaBinoculars />, text: "Game Drives" }
    ]
  },
  {
    id: 2,
    title: "Tarangire & Ngorongoro Budget Tour",
    description: "Visit two of Tanzania's most famous parks with our economical camping safari.",
    duration: "3 Days / 2 Nights",
    location: "Tarangire & Ngorongoro",
    groupSize: "4-8 people",
    rating: 4.6,
    price: 599,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
    highlights: [
      "Elephant herds in Tarangire",
      "Crater floor game drive",
      "Basic camping",
      "Group experience"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Shared Vehicle" },
      { icon: <FaUtensils />, text: "Camp Meals" },
      { icon: <FaCampground />, text: "Basic Tents" },
      { icon: <FaBinoculars />, text: "Game Drives" }
    ]
  },
  {
    id: 3,
    title: "Lake Manyara Budget Safari",
    description: "Perfect short safari for budget travelers wanting to see Tanzania's wildlife.",
    duration: "2 Days / 1 Night",
    location: "Lake Manyara",
    groupSize: "4-8 people",
    rating: 4.5,
    price: 399,
    image: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49",
    highlights: [
      "Tree-climbing lions",
      "Lake Manyara birds",
      "Basic camping",
      "Affordable safari"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Shared Transport" },
      { icon: <FaUtensils />, text: "Simple Meals" },
      { icon: <FaCampground />, text: "Basic Camping" },
      { icon: <FaBinoculars />, text: "Game Drives" }
    ]
  }
];

export default BudgetCamping; 