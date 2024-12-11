import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaCamera, FaCar, FaBinoculars, FaTree, FaUtensils, FaPaw } from 'react-icons/fa';
import './CampingStyles.css';

const GamePackages = () => {
  return (
    <div className="camping-page">
      <section className="camping-hero game-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Game Viewing Packages</h1>
          <p>Experience the thrill of African wildlife in their natural habitat</p>
        </div>
      </section>

      <section className="game-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Wildlife Safari Adventures</h2>
            <p>Our carefully crafted game packages offer the ultimate wildlife viewing experience. 
            From the great migration to the big five, witness nature's most spectacular moments.</p>
            <div className="amenities-grid">
              {gameFeatures.map((feature) => (
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

      <section className="game-packages">
        <div className="container">
          <h2>Available Game Packages</h2>
          <div className="packages-grid">
            {gamePackages.map((pack) => (
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
                  <div className="wildlife-highlights">
                    <h4>Wildlife Highlights:</h4>
                    {pack.wildlife.map((animal, index) => (
                      <div key={index} className="highlight">
                        <FaPaw />
                        <span>{animal}</span>
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

      <section className="wildlife-guide">
        <div className="container">
          <h2>Wildlife Viewing Guide</h2>
          <div className="guide-grid">
            {wildlifeGuide.map((item) => (
              <div key={item.id} className="guide-card">
                <img src={item.image} alt={item.title} />
                <div className="guide-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="best-time">
                    <FaClock />
                    <span>Best Time: {item.bestTime}</span>
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

const gameFeatures = [
  {
    id: 1,
    icon: <FaBinoculars />,
    title: "Expert Guides",
    description: "Professional guides with extensive wildlife knowledge"
  },
  {
    id: 2,
    icon: <FaCar />,
    title: "Safari Vehicles",
    description: "Comfortable 4x4 vehicles with viewing windows"
  },
  {
    id: 3,
    icon: <FaCamera />,
    title: "Photo Opportunities",
    description: "Perfect spots for wildlife photography"
  },
  {
    id: 4,
    icon: <FaTree />,
    title: "Natural Habitats",
    description: "Visit diverse ecosystems and habitats"
  }
];

const gamePackages = [
  {
    id: 1,
    title: "Great Migration Safari",
    description: "Witness the spectacular wildebeest migration across the Serengeti-Mara ecosystem.",
    duration: "7 Days / 6 Nights",
    location: "Serengeti",
    groupSize: "2-6 people",
    rating: 5.0,
    price: 2999,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    wildlife: [
      "Wildebeest",
      "Zebras",
      "Lions",
      "Crocodiles",
      "Hippos"
    ],
    inclusions: [
      { icon: <FaCar />, text: "4x4 Safari Vehicle" },
      { icon: <FaUtensils />, text: "Full Board Meals" },
      { icon: <FaBinoculars />, text: "Game Drives" },
      { icon: <FaCamera />, text: "Photo Guide" }
    ]
  },
  {
    id: 2,
    title: "Big Five Adventure",
    description: "Track the legendary Big Five in Tanzania's most renowned national parks.",
    duration: "5 Days / 4 Nights",
    location: "Multiple Parks",
    groupSize: "2-6 people",
    rating: 4.9,
    price: 2499,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
    wildlife: [
      "Lion",
      "Elephant",
      "Buffalo",
      "Leopard",
      "Rhino"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Private Vehicle" },
      { icon: <FaUtensils />, text: "All Meals" },
      { icon: <FaBinoculars />, text: "Expert Guide" },
      { icon: <FaCamera />, text: "Photography Tips" }
    ]
  },
  {
    id: 3,
    title: "Predator Experience",
    description: "Focus on tracking and observing Africa's magnificent predators.",
    duration: "4 Days / 3 Nights",
    location: "Serengeti & Ngorongoro",
    groupSize: "2-4 people",
    rating: 4.8,
    price: 1999,
    image: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49",
    wildlife: [
      "Lions",
      "Cheetahs",
      "Leopards",
      "Hyenas",
      "Jackals"
    ],
    inclusions: [
      { icon: <FaCar />, text: "Game Drives" },
      { icon: <FaUtensils />, text: "Full Board" },
      { icon: <FaBinoculars />, text: "Tracking Guide" },
      { icon: <FaCamera />, text: "Photo Sessions" }
    ]
  }
];

const wildlifeGuide = [
  {
    id: 1,
    title: "Great Migration",
    description: "Annual movement of over 2 million wildebeest and zebras across the Serengeti-Mara ecosystem.",
    bestTime: "July to October",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
  },
  {
    id: 2,
    title: "Big Five Viewing",
    description: "Best opportunities to spot lion, leopard, elephant, rhino, and buffalo in their natural habitat.",
    bestTime: "June to October",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
  },
  {
    id: 3,
    title: "Bird Watching",
    description: "Over 500 bird species including flamingos, eagles, and endemic species.",
    bestTime: "November to April",
    image: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49"
  }
];

export default GamePackages; 