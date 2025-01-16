import React, { useState } from 'react';
import './FAQs.css';

const categories = [
  'All',
  'Safari Planning',
  'Accommodation',
  'Transportation',
  'Health & Safety',
  'Booking & Payment'
];

const faqData = {
  'Safari Planning': [
    {
      question: 'What is the best time to visit Tanzania for a safari?',
      answer: 'The best time for wildlife viewing is during the dry seasons (June to October and January to February). However, each season offers unique experiences. The wildebeest migration in the Serengeti occurs year-round but peaks in different areas at different times.'
    },
    {
      question: 'How long should I plan for a safari?',
      answer: 'We recommend a minimum of 5-7 days for a satisfying safari experience. This allows you to visit multiple parks and increases your chances of seeing diverse wildlife. Longer stays of 10-14 days enable you to combine safari with other experiences like beach time in Zanzibar.'
    },
    {
      question: 'Which parks should I visit?',
      answer: 'Popular circuits include the Northern Circuit (Serengeti, Ngorongoro, Tarangire) and the Southern Circuit (Ruaha, Selous). Your choice depends on your interests, time, and budget. We can help you plan the perfect itinerary based on your preferences.'
    }
  ],
  'Accommodation': [
    {
      question: 'What types of accommodation are available?',
      answer: 'We offer various options from luxury lodges to tented camps. Lodges provide hotel-like amenities, while tented camps offer a more authentic safari experience. All accommodations are carefully selected for comfort, safety, and proximity to wildlife areas.'
    },
    {
      question: 'Are the tented camps comfortable?',
      answer: 'Yes, our tented camps provide comfortable beds, en-suite bathrooms, and quality amenities. They combine authentic safari atmosphere with modern comforts. Each tent is spacious and well-furnished.'
    }
  ],
  'Transportation': [
    {
      question: 'What type of vehicles do you use?',
      answer: 'We use well-maintained 4x4 safari vehicles (Toyota Land Cruisers or similar) with pop-up roofs for game viewing. All vehicles have comfortable seating, charging points, and are equipped with first-aid kits and communication devices.'
    },
    {
      question: 'How many people share a safari vehicle?',
      answer: 'Our vehicles typically accommodate 4-6 guests, ensuring everyone has a window seat and access to the pop-up roof for optimal game viewing. Private vehicles can be arranged upon request.'
    }
  ],
  'Health & Safety': [
    {
      question: 'What vaccinations do I need?',
      answer: 'Yellow fever vaccination is required if arriving from certain countries. We recommend consulting your doctor about other vaccinations and malaria prophylaxis. Travel insurance with medical coverage is mandatory for all our safaris.'
    },
    {
      question: 'Is it safe to go on safari?',
      answer: 'Yes, safari tourism in Tanzania is very safe. Our experienced guides are trained in safety protocols, and all activities follow strict guidelines. We maintain constant communication with our camps and lodges, and vehicles are equipped with safety equipment.'
    }
  ],
  'Booking & Payment': [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 6-12 months in advance, especially for peak season (July-September) and if you have specific lodges in mind. Last-minute bookings are possible but may have limited options.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, credit cards, and other secure payment methods. A 30% deposit is required to confirm your booking, with the balance due 60 days before arrival.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our standard cancellation policy provides full refund (minus administrative fee) for cancellations 60+ days before arrival. Different terms apply for cancellations closer to the arrival date. We strongly recommend travel insurance.'
    }
  ]
};

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const heroImage = "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80";

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const filterFAQs = () => {
    if (activeCategory === 'All' && !searchQuery) {
      return faqData;
    }

    let filtered = {};
    Object.entries(faqData).forEach(([category, items]) => {
      if (activeCategory === 'All' || activeCategory === category) {
        const filteredItems = items.filter(
          item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredItems.length > 0) {
          filtered[category] = filteredItems;
        }
      }
    });
    return filtered;
  };

  return (
    <div className="faqs-container" style={{
      '--hero-bg': `url(${heroImage})`
    }}>
      <div className="faqs-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Tanzania safaris</p>
      </div>

      <div className="faqs-content">
        <div className="faqs-search">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="faq-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {Object.entries(filterFAQs()).map(([category, items]) => (
          <div key={category} className="faq-section">
            <h2>{category}</h2>
            {items.map((item, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleItem(category, index)}
                >
                  <h3>{item.question}</h3>
                  <button className={openItems[`${category}-${index}`] ? 'open' : ''}>
                    ▼
                  </button>
                </div>
                <div className={`faq-answer ${openItems[`${category}-${index}`] ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="contact-section">
          <h2>Still Have Questions?</h2>
          <p>Can't find the answer you're looking for? Please feel free to contact us.</p>
          <a href="/contact" className="contact-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default FAQs; 