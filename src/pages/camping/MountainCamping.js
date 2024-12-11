import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaMountain, FaCompass, FaShieldAlt, FaUtensils, FaCampground, FaLeaf } from 'react-icons/fa';
import './CampingStyles.css';

const MountainCamping = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero mountain-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Mountain Camping Adventures</h1>
          <p>Experience the majesty of Tanzania's peaks with our guided mountain camping trips</p>
        </div>
      </section>

      <section className="camping-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Mountain Camping Experience</h2>
            <p>From Kilimanjaro to Mount Meru, our mountain camping trips offer the perfect blend of adventure and comfort. 
            Expert guides, quality equipment, and spectacular views await you on these unforgettable journeys.</p>
            <div className="amenities-grid">
              {mountainFeatures.map((feature) => (
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
          <h2>Mountain Camping Packages</h2>
          <div className="packages-grid">
            {mountainPackages.map((pack) => (
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

const mountainFeatures = [
  {
    id: 1,
    icon: <FaMountain />,
    title: "Expert Mountain Guides",
    description: "Certified guides with extensive mountain experience"
  },
  {
    id: 2,
    icon: <FaCompass />,
    title: "Safe Routes",
    description: "Well-planned routes with safety considerations"
  },
  {
    id: 3,
    icon: <FaCampground />,
    title: "Quality Equipment",
    description: "High-quality camping gear for mountain conditions"
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Safety First",
    description: "Comprehensive safety protocols and equipment"
  }
];

const mountainPackages = [
  {
    id: 1,
    title: "Kilimanjaro Machame Route",
    description: "Trek to the roof of Africa via the scenic Machame Route, perfect for experienced hikers.",
    duration: "7 Days / 6 Nights",
    location: "Mount Kilimanjaro",
    groupSize: "2-12 people",
    rating: 4.9,
    price: 2499,
    image: "https://images.unsplash.com/photo-1521150932951-303a95503ed3",
    highlights: [
      "Summit Africa's highest peak",
      "Scenic camping spots",
      "Diverse ecological zones",
      "Stunning sunrise views"
    ],
    inclusions: [
      { icon: <FaCampground />, text: "Mountain Camping" },
      { icon: <FaUtensils />, text: "All Meals" },
      { icon: <FaCompass />, text: "Expert Guide" },
      { icon: <FaShieldAlt />, text: "Safety Equipment" }
    ]
  },
  {
    id: 2,
    title: "Mount Meru Expedition",
    description: "Perfect acclimatization trek and stunning views of Kilimanjaro from Tanzania's second-highest peak.",
    duration: "4 Days / 3 Nights",
    location: "Mount Meru",
    groupSize: "2-8 people",
    rating: 4.8,
    price: 1499,
    image: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49",
    highlights: [
      "Technical climbing sections",
      "Wildlife viewing",
      "Spectacular views",
      "Less crowded routes"
    ],
    inclusions: [
      { icon: <FaCampground />, text: "Mountain Huts" },
      { icon: <FaUtensils />, text: "Full Board" },
      { icon: <FaCompass />, text: "Professional Guide" },
      { icon: <FaShieldAlt />, text: "Safety Gear" }
    ]
  },
  {
    id: 3,
    title: "Ol Doinyo Lengai Trek",
    description: "Climb the active volcano known as the 'Mountain of God' in Maasai culture.",
    duration: "3 Days / 2 Nights",
    location: "Ol Doinyo Lengai",
    groupSize: "2-6 people",
    rating: 4.7,
    price: 1299,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    highlights: [
      "Active volcano climb",
      "Night summit attempt",
      "Unique landscapes",
      "Cultural experience"
    ],
    inclusions: [
      { icon: <FaCampground />, text: "Base Camp Stay" },
      { icon: <FaUtensils />, text: "All Meals" },
      { icon: <FaCompass />, text: "Local Guide" },
      { icon: <FaShieldAlt />, text: "Emergency Equipment" }
    ]
  }
];

export default MountainCamping; 