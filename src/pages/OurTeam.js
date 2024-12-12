import React from 'react';
import './OurTeam.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaStar, FaQuoteRight, FaAward, FaCertificate, FaHandshake } from 'react-icons/fa';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Meena Tegemea",
      role: "Owner and Operation Director",
      position: "Specialist Tours & Travel Consultant East Africa",
      image: "https://www.gofansafaris.com/images/uploads/222x250/meena.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Beatrice Isaac Mushi",
      role: "Tanzania Tours and Travel Consultant",
      image: "https://www.gofansafaris.com/images/uploads/222x250/beatrice.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Judy Rhoda",
      role: "Kenya Tours and Travel Consultant",
      image: "https://www.gofansafaris.com/images/uploads/222x250/Judy-Rhoda.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "Shadrack Masinde",
      role: "Gofan Safaris Director Kenya",
      image: "https://www.gofansafaris.com/images/uploads/222x250/Shadrack-Masinde_gofan.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <div className="team-page">
      <div className="team-hero">
        <h1>Meet Our Team</h1>
        <p>Dedicated professionals committed to making your safari experience unforgettable</p>
      </div>

      <section className="team-intro">
        <div className="container">
          <h2>Our Professional Team</h2>
          <p className="team-description">
            Our success is built on the expertise and dedication of our experienced team members. 
            Each member brings unique skills and deep local knowledge to ensure you have the best possible safari experience.
          </p>
          <div className="team-stats">
            {teamStats.map((stat) => (
              <div key={stat.id} className="stat-item">
                {stat.icon}
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
              <div className="social-links">
                <a href={member.social.facebook}><FaFacebookF /></a>
                <a href={member.social.twitter}><FaTwitter /></a>
                <a href={member.social.linkedin}><FaLinkedinIn /></a>
                <a href={member.social.instagram}><FaInstagram /></a>
              </div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              {member.position && <p>{member.position}</p>}
            </div>
          </div>
        ))}
      </div>

      <section className="team-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                {value.icon}
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-testimonials">
        <div className="container">
          <h2>What Our Clients Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <FaQuoteRight className="quote-icon" />
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team">
        <div className="container">
          <h2>Join Our Team</h2>
          <p>We're always looking for passionate individuals to join our growing family</p>
          <div className="career-benefits">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="benefit-item">
                {benefit.icon}
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
          {/* <a href="/careers" className="join-button">View Open Positions</a> */}
        </div>
      </section>
    </div>
  );
};

const teamStats = [
  {
    id: 1,
    icon: <FaStar />,
    number: "15+",
    text: "Years Average Experience"
  },
  {
    id: 2,
    icon: <FaAward />,
    number: "50+",
    text: "Professional Guides"
  },
  {
    id: 3,
    icon: <FaCertificate />,
    number: "100%",
    text: "Certified Experts"
  }
];

const values = [
  {
    id: 1,
    icon: <FaHandshake />,
    title: "Professionalism",
    description: "We maintain the highest standards of service and professionalism in all our interactions."
  },
  {
    id: 2,
    icon: <FaStar />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery."
  },
  {
    id: 3,
    icon: <FaAward />,
    title: "Expertise",
    description: "Our team brings deep local knowledge and extensive experience to every safari."
  }
];

const testimonials = [
  {
    id: 1,
    text: "The expertise and friendliness of our guide made our safari truly unforgettable.",
    name: "Sarah Johnson",
    location: "United States",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    text: "Incredible attention to detail and knowledge of wildlife and local culture.",
    name: "Michael Chen",
    location: "Canada",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    text: "The team went above and beyond to ensure we had the perfect safari experience.",
    name: "Emma Wilson",
    location: "UK",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const benefits = [
  {
    id: 1,
    icon: <FaStar />,
    title: "Professional Growth",
    description: "Continuous learning and development opportunities"
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Great Team",
    description: "Work with passionate and experienced professionals"
  },
  {
    id: 3,
    icon: <FaAward />,
    title: "Recognition",
    description: "Rewards and recognition for exceptional performance"
  }
];

export default OurTeam; 