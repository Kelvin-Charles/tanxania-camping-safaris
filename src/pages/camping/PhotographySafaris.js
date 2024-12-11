import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaCamera, FaCar, FaLightbulb, FaGraduationCap, FaCompass } from 'react-icons/fa';
import './CampingStyles.css';

const PhotographySafaris = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero photography-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Photography Safaris</h1>
          <p>Capture the magic of Tanzania's wildlife and landscapes</p>
        </div>
      </section>

      <section className="photography-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Expert Photography Tours</h2>
            <p>Join our specialized photography safaris led by professional wildlife photographers. Perfect your skills while experiencing Africa's most photogenic locations.</p>
            <div className="amenities-grid">
              {photoFeatures.map((feature) => (
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

      <section className="photography-packages">
        <div className="container">
          <h2>Photography Safari Packages</h2>
          <div className="packages-grid">
            {photoPackages.map((pack) => (
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
                        <FaCamera />
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

const photoFeatures = [
  {
    id: 1,
    icon: <FaCamera />,
    title: "Expert Guidance",
    description: "Professional photographers to guide and teach you"
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Photography Workshops",
    description: "Daily tutorials and practical sessions"
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    title: "Skill Development",
    description: "Learn advanced wildlife photography techniques"
  },
  {
    id: 4,
    icon: <FaCompass />,
    title: "Prime Locations",
    description: "Access to the best photography spots"
  }
];

const photoPackages = [
  {
    id: 1,
    title: "Migration Photography Safari",
    description: "Capture the great wildebeest migration in its full glory with expert guidance.",
    duration: "7 Days / 6 Nights",
    location: "Serengeti",
    groupSize: "4-6 photographers",
    rating: 5.0,
    price: 3999,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    highlights: [
      "Migration river crossings",
      "Big cat photography",
      "Landscape techniques",
      "Night photography"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Photography Vehicle" },
      { icon: <FaCamera />, text: "Equipment Support" },
      { icon: <FaGraduationCap />, text: "Daily Workshops" },
      { icon: <FaLightbulb />, text: "Expert Guidance" }
    ]
  },
  {
    id: 2,
    title: "Big Five Photo Safari",
    description: "Focus on capturing Tanzania's iconic Big Five with professional guidance.",
    duration: "5 Days / 4 Nights",
    location: "Multiple Parks",
    groupSize: "4-6 photographers",
    rating: 4.9,
    price: 2999,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
    highlights: [
      "Big Five sightings",
      "Action photography",
      "Light techniques",
      "Portfolio development"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Specialized Vehicle" },
      { icon: <FaCamera />, text: "Technical Support" },
      { icon: <FaGraduationCap />, text: "Expert Training" },
      { icon: <FaLightbulb />, text: "Photo Reviews" }
    ]
  }
];

export default PhotographySafaris; 