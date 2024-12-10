import React from 'react';
import './CampingTours.css';
import { FaUsers, FaCampground, FaUtensils, FaMapMarkedAlt } from 'react-icons/fa';

const CampingTours = () => {
  const tours = [
    {
      id: 1,
      title: "Serengeti Adventure Safari",
      image: "/images/serengeti-camp.jpg",
      duration: "4 Days",
      description: "Experience the wild beauty of Serengeti with luxury camping under the stars. Watch the great migration and enjoy authentic safari experiences.",
      price: "$899",
      features: [
        { icon: <FaCampground />, text: "Luxury Camping" },
        { icon: <FaUsers />, text: "Max 6 People" },
        { icon: <FaUtensils />, text: "Full Board" },
        { icon: <FaMapMarkedAlt />, text: "Guided Tours" }
      ]
    },
    {
      id: 2,
      title: "Ngorongoro Crater Safari",
      image: "/images/ngorongoro-camp.jpg",
      duration: "3 Days",
      description: "Discover the eighth wonder of the world with our exclusive camping experience in the Ngorongoro Conservation Area.",
      price: "$799",
      features: [
        { icon: <FaCampground />, text: "Premium Camping" },
        { icon: <FaUsers />, text: "Max 4 People" },
        { icon: <FaUtensils />, text: "Full Board" },
        { icon: <FaMapMarkedAlt />, text: "Expert Guide" }
      ]
    },
    {
      id: 3,
      title: "Tarangire Wildlife Camp",
      image: "/images/tarangire-camp.jpg",
      duration: "5 Days",
      description: "Immerse yourself in the wilderness of Tarangire National Park with our comfortable camping facilities and expert guides.",
      price: "$999",
      features: [
        { icon: <FaCampground />, text: "Deluxe Camping" },
        { icon: <FaUsers />, text: "Max 8 People" },
        { icon: <FaUtensils />, text: "Full Board" },
        { icon: <FaMapMarkedAlt />, text: "Game Drives" }
      ]
    }
  ];

  return (
    <div className="camping-tours">
      <div className="camping-header">
        <h1>Camping Tours</h1>
        <p>Experience the authentic African wilderness with our carefully crafted camping safaris. 
           Immerse yourself in nature while enjoying comfortable accommodations and expert guidance.</p>
      </div>

      <div className="tours-container">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-item">
            <div className="tour-image">
              <img src={tour.image} alt={tour.title} />
              <span className="tour-duration">{tour.duration}</span>
            </div>
            <div className="tour-content">
              <h3 className="tour-title">{tour.title}</h3>
              <div className="tour-features">
                {tour.features.map((feature, index) => (
                  <span key={index} className="tour-feature">
                    {feature.icon} {feature.text}
                  </span>
                ))}
              </div>
              <p className="tour-description">{tour.description}</p>
              <div className="tour-details">
                <span className="tour-price">{tour.price}</span>
                <button className="tour-button">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampingTours; 