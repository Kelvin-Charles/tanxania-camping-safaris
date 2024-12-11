import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaUtensils, FaWifi, FaShower, FaBed, FaCar, FaGlobe, FaCamera } from 'react-icons/fa';
import './CampingStyles.css';

const LuxuryCamping = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero luxury-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Luxury Camping Safaris</h1>
          <p>Experience the African wilderness in ultimate comfort and style</p>
        </div>
      </section>

      <section className="luxury-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Experience Luxury in the Wild</h2>
            <p>Our luxury camping safaris combine the thrill of the African wilderness with the comfort and amenities of a five-star hotel. Wake up to breathtaking views, indulge in gourmet meals, and enjoy personalized service in the heart of nature.</p>
            <div className="amenities-grid">
              {luxuryAmenities.map((amenity) => (
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

      <section className="luxury-packages">
        <div className="container">
          <h2>Our Luxury Safari Packages</h2>
          <div className="packages-grid">
            {luxuryPackages.map((pack) => (
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

const luxuryAmenities = [
  {
    id: 1,
    icon: <FaBed />,
    title: "Luxury Accommodation",
    description: "Spacious tents with premium bedding and furniture"
  },
  {
    id: 2,
    icon: <FaUtensils />,
    title: "Gourmet Dining",
    description: "Fine dining experience with professional chefs"
  },
  {
    id: 3,
    icon: <FaWifi />,
    title: "Modern Amenities",
    description: "Wi-Fi, charging stations, and en-suite bathrooms"
  },
  {
    id: 4,
    icon: <FaShower />,
    title: "Private Facilities",
    description: "Hot showers and luxury toiletries provided"
  }
];

const luxuryPackages = [
  {
    id: 1,
    title: "Serengeti Luxury Safari",
    description: "Experience the ultimate luxury safari in the heart of Serengeti National Park.",
    duration: "6 Days / 5 Nights",
    location: "Serengeti",
    groupSize: "2-6 people",
    rating: 5.0,
    price: 3999,
    image: "https://img.freepik.com/premium-photo/sunset-camping-african-savanna_1242797-3516.jpg?semt=ais_hybrid",
    highlights: [
      "Private luxury camp",
      "Gourmet dining",
      "Game drives",
      "Sundowner experiences"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Private 4x4 Vehicle" },
      { icon: <FaUtensils />, text: "All Meals Included" },
      { icon: <FaGlobe />, text: "Expert Guide" },
      { icon: <FaBed />, text: "Luxury Accommodation" }
    ]
  },
  // Add more packages...
];

export default LuxuryCamping; 