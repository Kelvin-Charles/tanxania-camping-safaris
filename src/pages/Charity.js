import React from 'react';
import './Charity.css';

const initiatives = [
  {
    id: 1,
    title: 'Education Support',
    image: '/images/charity/education.jpg',
    description: 'Providing educational resources and scholarships to local communities, empowering the next generation through learning opportunities and skill development programs.'
  },
  {
    id: 2,
    title: 'Wildlife Conservation',
    image: '/images/charity/wildlife.jpg',
    description: 'Supporting local conservation efforts to protect Tanzania\'s diverse wildlife and their habitats through anti-poaching initiatives and habitat preservation programs.'
  },
  {
    id: 3,
    title: 'Community Development',
    image: '/images/charity/community.jpg',
    description: 'Implementing sustainable development projects that improve infrastructure, healthcare access, and economic opportunities in local communities.'
  }
];

const impactStats = [
  {
    number: '1,000+',
    text: 'Students Supported'
  },
  {
    number: '50+',
    text: 'Community Projects'
  },
  {
    number: '25,000',
    text: 'Trees Planted'
  },
  {
    number: '100+',
    text: 'Local Jobs Created'
  }
];

const partners = [
  {
    id: 1,
    name: 'Wildlife Conservation Society',
    logo: '/images/charity/partners/wcs.png'
  },
  {
    id: 2,
    name: 'Tanzania Education Foundation',
    logo: '/images/charity/partners/tef.png'
  },
  {
    id: 3,
    name: 'Community Development Initiative',
    logo: '/images/charity/partners/cdi.png'
  },
  {
    id: 4,
    name: 'Environmental Protection Agency',
    logo: '/images/charity/partners/epa.png'
  }
];

const Charity = () => {
  const heroImage = "https://images.unsplash.com/photo-1526555197164-7937b8fa4e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80";

  return (
    <div className="charity-container" style={{
      '--hero-bg': `url(${heroImage})`
    }}>
      <div className="charity-hero">
        <h1>Making a Difference</h1>
        <p>Supporting local communities and wildlife conservation in Tanzania</p>
      </div>

      <div className="charity-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Tanzania Camping Safaris, we believe in responsible tourism that benefits both our visitors
            and local communities. Through our charitable initiatives, we work to preserve Tanzania's
            natural heritage while supporting sustainable development in the communities we serve.
          </p>
        </section>

        <section className="initiatives-grid">
          {initiatives.map(initiative => (
            <div key={initiative.id} className="initiative-card">
              <div className="initiative-image">
                <img src={initiative.image} alt={initiative.title} />
              </div>
              <div className="initiative-content">
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="impact-item">
                <div className="impact-number">{stat.number}</div>
                <div className="impact-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="get-involved">
          <h2>Get Involved</h2>
          <p>
            Your safari adventure can make a lasting impact. A portion of every booking goes directly
            to supporting our community and conservation initiatives. You can also choose to make
            additional contributions or participate in our volunteer programs.
          </p>
          <a href="/donate" className="donate-button">Make a Donation</a>
        </section>

        <section className="partners-section">
          <h2>Our Partners</h2>
          <div className="partners-grid">
            {partners.map(partner => (
              <div key={partner.id} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Charity; 