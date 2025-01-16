import React from 'react';
import './TravelAdvice.css';

const adviceCards = [
  {
    id: 1,
    title: 'Health & Vaccinations',
    image: '/images/travel-advice/health.jpg',
    description: 'Essential health information and required vaccinations for traveling to Tanzania.',
    tips: [
      'Yellow fever vaccination required',
      'Malaria prophylaxis recommended',
      'Travel insurance mandatory',
      'Bring personal medications',
      'Stay hydrated at all times'
    ]
  },
  {
    id: 2,
    title: 'What to Pack',
    image: '/images/travel-advice/packing.jpg',
    description: 'Comprehensive packing guide for your Tanzania safari adventure.',
    tips: [
      'Lightweight, neutral-colored clothing',
      'Sun protection (hat, sunscreen, sunglasses)',
      'Comfortable walking shoes',
      'Camera and binoculars',
      'Insect repellent'
    ]
  },
  {
    id: 3,
    title: 'Weather & Climate',
    image: '/images/travel-advice/weather.jpg',
    description: 'Understanding Tanzania\'s seasons and weather patterns for optimal trip planning.',
    tips: [
      'Dry seasons: June-October & January-February',
      'Wet seasons: March-May & November-December',
      'Pack for varying temperatures',
      'Early mornings can be cool',
      'Afternoon heat can be intense'
    ]
  }
];

const importantInfo = [
  {
    icon: '🛂',
    title: 'Visa Requirements',
    description: 'Most visitors need a tourist visa. Available on arrival or online in advance.'
  },
  {
    icon: '💰',
    title: 'Currency',
    description: 'Tanzanian Shilling (TZS). US Dollars widely accepted in tourist areas.'
  },
  {
    icon: '🔌',
    title: 'Power & Adapters',
    description: '230V supply. British-style socket with three square pins.'
  },
  {
    icon: '📱',
    title: 'Communication',
    description: 'Mobile networks available in most areas. Wi-Fi in major hotels.'
  }
];

const TravelAdvice = () => {
  const heroImage = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";

  return (
    <div className="travel-advice-container" style={{
      '--hero-bg': `url(${heroImage})`
    }}>
      <div className="travel-advice-hero">
        <h1>Travel Advice</h1>
        <p>Essential information to help you prepare for your Tanzania safari adventure</p>
      </div>

      <div className="travel-advice-content">
        <div className="advice-grid">
          {adviceCards.map(card => (
            <div key={card.id} className="advice-card">
              <div className="advice-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="advice-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="advice-list">
                  {card.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="important-info">
          <h2>Important Information</h2>
          <div className="info-grid">
            {importantInfo.map((info, index) => (
              <div key={index} className="info-item">
                <i>{info.icon}</i>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-support">
          <h3>Need More Information?</h3>
          <p>Our team is here to help you prepare for your Tanzania adventure. Contact us with any questions about travel requirements, safety, or general inquiries.</p>
          <a href="/contact" className="contact-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default TravelAdvice; 