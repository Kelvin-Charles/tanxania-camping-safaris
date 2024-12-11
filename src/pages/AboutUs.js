import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaHotel, FaMountain, FaTree, FaUsers, FaGlobe, FaHandshake, FaAward, FaUmbrellaBeach, FaCamera, FaCompass, FaStar } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="hero-content">
          <h1>Your Premier African Safari Partner</h1>
          <p>Luxury, Midrange and Budget Safaris Across East Africa</p>
        </div>
      </section>

      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>Welcome to Tanzania Camping</h2>
              <p className="highlight-text">
                As a proud member of the American Society of Travel Agents (ASTA) and native African travel experts, 
                we operate from the heart of East Africa - with offices in Arusha, Tanzania and Nairobi, Kenya.
              </p>
              <p>
                Our satisfied customers from across the globe have consistently chosen us for their African adventures, 
                with many returning 4-5 times - a testament to our commitment to excellence and customer satisfaction.
              </p>
            </div>
            <div className="stats-container">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-item">
                  {stat.icon}
                  <h3>{stat.number}</h3>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="container">
          <div className="expertise-header">
            <h2>Our Expertise</h2>
            <div className="expertise-intro">
              <div className="expertise-image">
                <img src="https://img.freepik.com/free-photo/black-white-vintage-scene-with-people-migrating-rural-zones-old-times_23-2151295717.jpg?semt=ais_hybrid" 
                     alt="Safari expertise" />
              </div>
              <div className="expertise-description">
                <div className="expertise-text-content">
                  <h3>Professional Excellence</h3>
                  <p>
                    The company is run by a team of professionals who take nothing for granted to ensure you get only the best. 
                    Our Tour Guides understand the country intimately, combining their local birth knowledge with extensive studies 
                    of flora and fauna in all destinations.
                  </p>
                  <p>
                    We believe that only the very best is good enough and welcome you aboard our safari series. Join us as we take 
                    you on an unforgettable journey through Africa.
                  </p>
                  <div className="expertise-highlights">
                    <div className="highlight-item">
                      <FaUsers className="highlight-icon" />
                      <span>Expert Local Guides</span>
                    </div>
                    <div className="highlight-item">
                      <FaCompass className="highlight-icon" />
                      <span>Deep Local Knowledge</span>
                    </div>
                    <div className="highlight-item">
                      <FaStar className="highlight-icon" />
                      <span>Premium Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission & Vision</h2>
              <div className="mission-cards">
                <div className="mission-card">
                  <div className="card-icon">
                    <FaUsers />
                  </div>
                  <div className="card-content">
                    <h3>Professional Team</h3>
                    <p>The company is run by a team of professionals who take nothing for granted to ensure you get only the best. Our commitment to excellence drives every aspect of our service.</p>
                  </div>
                </div>
                
                <div className="mission-card">
                  <div className="card-icon">
                    <FaCompass />
                  </div>
                  <div className="card-content">
                    <h3>Expert Guides</h3>
                    <p>Our Tour Guides understand the country intimately, combining their local birth knowledge with extensive studies of flora and fauna in all destinations.</p>
                  </div>
                </div>

                <div className="mission-card">
                  <div className="card-icon">
                    <FaStar />
                  </div>
                  <div className="card-content">
                    <h3>Excellence Guaranteed</h3>
                    <p>We believe that only the very best is good enough and welcome you aboard our safari series. Join us as we take you on an unforgettable journey through Africa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-container">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                {service.icon}
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="commitment-section">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Commitment</h2>
            <div className="commitment-grid">
              {commitments.map((item) => (
                <div key={item.id} className="commitment-card">
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your African Adventure?</h2>
          <p>Let us help you create the perfect safari experience</p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="cta-button primary">Contact Us</Link>
            <Link to="/camping-tours" className="cta-button secondary">View Our Tours</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const stats = [
  {
    id: 1,
    icon: <FaGlobe />,
    number: "25+",
    text: "Years Experience"
  },
  {
    id: 2,
    icon: <FaUsers />,
    number: "10K+",
    text: "Happy Clients"
  },
  {
    id: 3,
    icon: <FaAward />,
    number: "100%",
    text: "Client Satisfaction"
  }
];

const services = [
  {
    id: 1,
    icon: <FaPlane />,
    title: "Safari Packages",
    items: [
      "Luxury Flying Safaris",
      "Budget Wildlife Tours",
      "Migration Safaris",
      "Private Guided Tours"
    ]
  },
  {
    id: 2,
    icon: <FaMountain />,
    title: "Adventure Tours",
    items: [
      "Mountain Climbing",
      "Camping Safaris",
      "Trekking Expeditions",
      "Gorilla Tracking"
    ]
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Cultural Experiences",
    items: [
      "Cultural Safaris",
      "Educational Tours",
      "School Programs",
      "Community Visits"
    ]
  },
  {
    id: 4,
    icon: <FaUmbrellaBeach />,
    title: "Holiday Packages",
    items: [
      "Beach Holidays",
      "Wedding Packages",
      "Conference Planning",
      "Eco-tourism Tours"
    ]
  }
];

const commitments = [
  {
    id: 1,
    icon: <FaHandshake />,
    title: "Direct Reservations",
    description: "We handle all bookings directly with no third parties involved, ensuring the best rates and service."
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Expert Local Guides",
    description: "Our trained guides combine local knowledge with extensive wildlife and cultural expertise."
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Global Reach",
    description: "Serving clients worldwide with personalized attention and local insights."
  },
  {
    id: 4,
    icon: <FaAward />,
    title: "Quality Assurance",
    description: "Member of ASTA, ensuring high standards and professional service."
  }
];

export default AboutUs; 