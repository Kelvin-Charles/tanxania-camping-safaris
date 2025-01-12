import React, { useState } from 'react';
import { FaTree, FaCity, FaBiking, FaDove, FaCamera, FaUtensils, FaMountain, FaWater, 
         FaChevronDown, FaChevronUp, FaCalendarAlt, FaDollarSign, FaClock, FaUsers,
         FaMapMarkerAlt, FaPaw, FaLeaf } from 'react-icons/fa';
import PhotoLearningModule from '../components/PhotoLearningModule';
import WildlifeQuizModule from '../components/WildlifeQuizModule';
import './Experience.css';

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSpot, setActiveSpot] = useState(null);
  const [showPhotoModule, setShowPhotoModule] = useState(false);
  const [showQuizModule, setShowQuizModule] = useState(false);

  const adventureSpots = [
    {
      id: 1,
      name: "Serengeti National Park",
      description: "Home to the great wildebeest migration and endless plains",
      icon: <FaPaw />,
      top: "28%",
      left: "38%",
      images: [
        "/images/westernCirciut/serengeti1.jpg",
        "/images/westernCirciut/serengeti2.jpg"
      ]
    },
    {
      id: 2,
      name: "Mount Kilimanjaro",
      description: "Africa's highest peak and the world's highest free-standing mountain",
      icon: <FaMountain />,
      top: "38%",
      left: "65%",
      images: [
        "/images/westernCirciut/kilimanjaro1.jpg",
        "/images/westernCirciut/kilimanjaro2.jpg"
      ]
    },
    {
      id: 3,
      name: "Ngorongoro Crater",
      description: "World's largest intact volcanic caldera and wildlife haven",
      icon: <FaLeaf />,
      top: "35%",
      left: "48%",
      images: [
        "/images/westernCirciut/ngorongoro1.jpg",
        "/images/westernCirciut/ngorongoro2.jpg"
      ]
    },
    {
      id: 4,
      name: "Tarangire National Park",
      description: "Famous for its large elephant herds and ancient baobab trees",
      icon: <FaTree />,
      top: "42%",
      left: "55%",
      images: [
        "/images/westernCirciut/tarangire1.jpg",
        "/images/westernCirciut/tarangire2.jpg"
      ]
    },
    {
      id: 5,
      name: "Zanzibar",
      description: "Pristine beaches and historic Stone Town",
      icon: <FaWater />,
      top: "48%",
      left: "75%",
      images: [
        "/images/Beaches/zanzibar.jpg",
        "/images/Beaches/zanzibar-beach.jpg"
      ]
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const filterCategories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'culture', name: 'Culture' },
    { id: 'nature', name: 'Nature' },
  ];

  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.categories.includes(selectedCategory));

  const mapHotspots = [
    {
      id: 1,
      name: "Serengeti National Park",
      position: { top: "20%", left: "90%" },
      description: "Home to the Great Migration and endless plains of wildlife. Experience the world's most spectacular wildlife show.",
      images: [
        "/images/serengeti/wildebeest.jpg",
        "/images/serengeti/lion.jpg"
      ]
    },
    {
      id: 2,
      name: "Mount Kilimanjaro",
      position: { top: "25%", left: "100%" },
      description: "Africa's highest peak and the world's highest free-standing mountain. Challenge yourself to reach Uhuru Peak.",
      images: [
        "/images/kilimanjaro/summit.jpg",
        "/images/kilimanjaro/climbers.jpg"
      ]
    },
    {
      id: 3,
      name: "Ngorongoro Crater",
      position: { top: "30%", left: "95%" },
      description: "World's largest intact volcanic caldera and a UNESCO World Heritage site. Spot the Big Five in their natural habitat.",
      images: [
        "/images/ngorongoro/crater.jpg",
        "/images/ngorongoro/wildlife.jpg"
      ]
    },
    {
      id: 4,
      name: "Zanzibar Archipelago",
      position: { top: "55%", left: "100%" },
      description: "Pristine beaches, historic Stone Town, and spice plantations. Experience the perfect blend of culture and relaxation.",
      images: [
        "/images/zanzibar/beach.jpg",
        "/images/zanzibar/stonetown.jpg"
      ]
    },
    {
      id: 5,
      name: "Tarangire National Park",
      position: { top: "35%", left: "99%" },
      description: "Famous for its ancient baobab trees and large elephant herds. Witness incredible wildlife in a unique landscape.",
      images: [
        "/images/westernCirciut/tarangire1.jpg",
        "/images/westernCirciut/tarangire2.jpg"
      ]
    }
  ];

  const InteractiveMap = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);

    return (
      <section className="interactive-map-section">
        <h2>Explore Tanzania's Treasures</h2>
        <div className="map-container">
          <div className="map-hotspots">
            {mapHotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="map-hotspot"
                style={{ top: hotspot.position.top, left: hotspot.position.left }}
                onMouseEnter={() => setActiveHotspot(hotspot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className="hotspot-icon">
                  <FaMapMarkerAlt />
                </div>
                {activeHotspot === hotspot.id && (
                  <div className="hotspot-info">
                    <h4>{hotspot.name}</h4>
                    <p>{hotspot.description}</p>
                    <div className="hotspot-images">
                      {hotspot.images.map((img, index) => (
                        <img 
                          key={index} 
                          src={img} 
                          alt={`${hotspot.name} ${index + 1}`}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="experience-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Extraordinary Experiences</h1>
          <p>Discover the magic of Tanzania through immersive adventures</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Unique Experiences</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-experience">
        <div className="featured-content">
          <h2>Why Choose Our Experiences?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🌟</div>
              <h3>Local Expertise</h3>
              <p>Guided by experienced locals who know every hidden gem</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👥</div>
              <h3>Small Groups</h3>
              <p>Intimate experiences with maximum personal attention</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <h3>Sustainable Tourism</h3>
              <p>Eco-friendly practices that protect our natural heritage</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💫</div>
              <h3>Authentic Encounters</h3>
              <p>Real connections with nature, culture, and communities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experiences-section">
        <h2>Our Signature Experiences</h2>
        
        <div className="category-filter">
          {filterCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
      </div>

      <div className="experiences-grid">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className={`experience-card ${expandedCard === exp.id ? 'expanded' : ''}`}>
              <div className="card-image" style={{ backgroundImage: `url(${exp.image})` }}>
                <div className="card-overlay">
                  <div className="card-icon">{exp.icon}</div>
                </div>
                <div className="card-quick-info">
                  <span><FaClock /> {exp.duration}</span>
                  <span><FaDollarSign /> From ${exp.price}</span>
                  <span><FaUsers /> {exp.groupSize}</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                
                <div className="card-details">
                  <div className="highlights">
                    <h4>Highlights</h4>
                    <ul>
                      {exp.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {expandedCard === exp.id && (
                    <div className="expanded-content">
                      <div className="included-section">
                        <h4>What's Included</h4>
                        <ul>
                          {exp.included.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="schedule-section">
                        <h4>Schedule</h4>
                        {exp.schedule.map((time, index) => (
                          <div key={index} className="schedule-item">
                            <span className="time">{time.time}</span>
                            <span className="activity">{time.activity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pricing-section">
                        <h4>Pricing Options</h4>
                        {exp.pricingOptions.map((option, index) => (
                          <div key={index} className="price-option">
                            <div className="option-header">
                              <h5>{option.name}</h5>
                              <span className="price">${option.price}</span>
                            </div>
                            <p>{option.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="booking-actions">
                        <button className="book-now">
                          <FaCalendarAlt /> Book Now
                        </button>
                        <button className="inquire">
                          Request Custom Date
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  className="toggle-details" 
                  onClick={() => toggleCard(exp.id)}
                >
                  {expandedCard === exp.id ? (
                    <>Show Less <FaChevronUp /></>
                  ) : (
                    <>Show More <FaChevronDown /></>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Adventurers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p>"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                    <span className="experience-date">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fun-facts-section">
        <h2>Fun Facts About Tanzania</h2>
        <div className="fun-facts-grid">
          <div className="fun-fact-card">
            <div className="fact-icon">🦁</div>
            <h3>Did You Know?</h3>
            <p>Tanzania's Serengeti is home to the largest lion population in Africa!</p>
            <div className="fact-animation">
              <div className="lion-paw-prints"></div>
            </div>
          </div>
          <div className="fun-fact-card">
            <div className="fact-icon">🗻</div>
            <h3>Amazing!</h3>
            <p>Mount Kilimanjaro is Africa's highest mountain and the world's highest free-standing mountain!</p>
            <div className="fact-animation">
              <div className="mountain-clouds"></div>
            </div>
          </div>
          <div className="fun-fact-card">
            <div className="fact-icon">🦒</div>
            <h3>Wow!</h3>
            <p>Giraffes can run as fast as 35 miles per hour! That's faster than an Olympic sprinter!</p>
            <div className="fact-animation">
              <div className="running-giraffe"></div>
            </div>
          </div>
          <div className="fun-fact-card">
            <div className="fact-icon">🦩</div>
            <h3>Cool!</h3>
            <p>Lake Natron turns pink because of special algae, and millions of flamingos visit it!</p>
            <div className="fact-animation">
              <div className="flying-flamingos"></div>
            </div>
          </div>
        </div>
      </section>

      <InteractiveMap />

      <section className="kids-corner">
        <h2>Kids' Safari Adventure Corner</h2>
        <div className="kids-activities">
          <div className="activity-card">
            <div className="activity-icon">🎨</div>
            <h3>Safari Art Studio</h3>
            <p>Create your own wildlife masterpiece! Download coloring pages featuring Tanzania's amazing animals.</p>
            <div className="activity-features">
              <span>✓ Printable Pages</span>
              <span>✓ Coloring Guide</span>
              <span>✓ Fun Facts</span>
            </div>
            <button className="activity-button" onClick={() => window.open('/downloads/safari-coloring-book.pdf')}>
              Start Drawing
            </button>
          </div>
          
          <div className="activity-card">
            <div className="activity-icon">🎮</div>
            <h3>Wildlife Quiz Challenge</h3>
            <p>Test your knowledge about African animals in our interactive quiz and earn explorer badges!</p>
            <div className="activity-features">
              <span>✓ Multiple Levels</span>
              <span>✓ Digital Badges</span>
              <span>✓ Learn & Play</span>
            </div>
            <button 
              className="activity-button" 
              onClick={() => setShowQuizModule(true)}
            >
              Start Quiz
            </button>
          </div>

          <div className="activity-card">
            <div className="activity-icon">📸</div>
            <h3>Junior Photography Tips</h3>
            <p>Learn amazing wildlife photography tricks and share your best shots in our young explorers' gallery!</p>
            <div className="activity-features">
              <span>✓ Photo Tips</span>
              <span>✓ Safety Guide</span>
              <span>✓ Photo Gallery</span>
            </div>
            <button 
              className="activity-button" 
              onClick={() => setShowPhotoModule(true)}
            >
              Learn More
            </button>
          </div>

          <div className="activity-card">
            <div className="activity-icon">🦁</div>
            <h3>Animal Tracker Game</h3>
            <p>Become a wildlife detective! Learn to identify animal tracks and sounds in our interactive game.</p>
            <div className="activity-features">
              <span>✓ Track Guide</span>
              <span>✓ Sound Library</span>
              <span>✓ Mini Games</span>
            </div>
            <button className="activity-button" onClick={() => window.location.href = '/kids/tracker'}>
              Start Adventure
            </button>
          </div>
        </div>
      </section>

      <section className="virtual-safari">
        <h2>Virtual Safari Experience</h2>
        <div className="virtual-safari-content">
          <div className="safari-preview">
            <div className="preview-screen">
              <video poster="/images/safari-preview.jpg" className="preview-video">
                <source src="/videos/safari-preview.mp4" type="video/mp4" />
              </video>
              <button className="play-button">
                <span className="play-icon">▶</span>
                Start Virtual Tour
              </button>
            </div>
          </div>
          <div className="safari-features">
            <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <h4>360° Views</h4>
              <p>Explore the wilderness in immersive 360-degree video</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🦁</span>
              <h4>Live Cameras</h4>
              <p>Watch real-time wildlife at popular waterholes</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎧</span>
              <h4>Nature Sounds</h4>
              <p>Listen to authentic African wilderness sounds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="eco-education">
        <h2>Learn & Protect</h2>
        <div className="eco-content">
          <div className="eco-card conservation">
            <h3>Wildlife Conservation</h3>
            <div className="eco-animation">
              <div className="animated-animals"></div>
            </div>
            <p>Discover how we protect Tanzania's amazing wildlife</p>
            <ul className="eco-list">
              <li>Anti-poaching efforts</li>
              <li>Habitat preservation</li>
              <li>Community education</li>
            </ul>
          </div>
          <div className="eco-card environment">
            <h3>Environmental Care</h3>
            <div className="eco-animation">
              <div className="animated-plants"></div>
            </div>
            <p>Join our mission to keep Tanzania beautiful</p>
            <ul className="eco-list">
              <li>Plastic reduction</li>
              <li>Tree planting</li>
              <li>Clean water projects</li>
            </ul>
          </div>
          <div className="eco-card culture">
            <h3>Cultural Heritage</h3>
            <div className="eco-animation">
              <div className="animated-culture"></div>
            </div>
            <p>Help preserve traditional ways of life</p>
            <ul className="eco-list">
              <li>Local crafts support</li>
              <li>Language preservation</li>
              <li>Traditional music</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Let us help you create unforgettable memories in Tanzania</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Start Planning</button>
            <button className="cta-button secondary">Download Brochure</button>
        </div>
      </div>
      </section>

      {showPhotoModule && (
        <PhotoLearningModule 
          isOpen={showPhotoModule} 
          onClose={() => setShowPhotoModule(false)} 
        />
      )}

      {showQuizModule && (
        <WildlifeQuizModule 
          isOpen={showQuizModule} 
          onClose={() => setShowQuizModule(false)} 
        />
      )}
    </div>
  );
};

const experiences = [
  {
    id: 1,
    title: "Nature Walks & Hiking",
    icon: <FaTree />,
    image: "/images/westernCirciut/hiking.jpg",
    description: "Immerse yourself in Tanzania's diverse landscapes on guided nature walks through pristine wilderness.",
    duration: "4-6 hours",
    price: 89,
    groupSize: "2-8 people",
    categories: ['nature', 'popular'],
    highlights: [
      "Expert naturalist guides",
      "Wildlife tracking",
      "Bird watching opportunities",
      "Beautiful photography spots"
    ],
    included: [
      "Professional guide",
      "Safety equipment",
      "Snacks and water",
      "Transport from/to hotel",
      "First aid kit"
    ],
    schedule: [
      { time: "7:00 AM", activity: "Hotel pickup" },
      { time: "8:00 AM", activity: "Safety briefing and equipment check" },
      { time: "8:30 AM", activity: "Start of guided walk" },
      { time: "10:30 AM", activity: "Rest and refreshments" },
      { time: "12:30 PM", activity: "Return journey" },
      { time: "1:30 PM", activity: "Hotel drop-off" }
    ],
    pricingOptions: [
      {
        name: "Standard Tour",
        price: 89,
        description: "Group tour with up to 8 participants"
      },
      {
        name: "Private Tour",
        price: 159,
        description: "Exclusive tour for your group only"
      },
      {
        name: "Photography Focus",
        price: 129,
        description: "Extended tour with photography guidance"
      }
    ]
  },
  {
    id: 2,
    title: "Cultural City Tours",
    icon: <FaCity />,
    image: "/images/culturalTours/maasai-village.jpg",
    description: "Experience the vibrant culture and rich history of Tanzania's most fascinating cities.",
    duration: "Full Day",
    price: 129,
    groupSize: "4-12 people",
    categories: ['culture', 'popular'],
    highlights: [
      "Local market visits",
      "Historical landmarks",
      "Art galleries",
      "Traditional crafts"
    ],
    included: [
      "Local guide",
      "Museum entries",
      "Traditional lunch",
      "Craft workshop",
      "Transport"
    ],
    schedule: [
      { time: "8:00 AM", activity: "Meet at city center" },
      { time: "9:00 AM", activity: "Historical district tour" },
      { time: "11:00 AM", activity: "Local market visit" },
      { time: "1:00 PM", activity: "Traditional lunch" },
      { time: "2:30 PM", activity: "Craft workshop" },
      { time: "4:30 PM", activity: "Tour conclusion" }
    ],
    pricingOptions: [
      {
        name: "Basic Tour",
        price: 129,
        description: "Full day city tour with all essentials"
      },
      {
        name: "Premium Experience",
        price: 199,
        description: "Including exclusive craft workshop and dinner"
      }
    ]
  },
  // ... similar detailed structure for other experiences ...
];

const testimonials = [
  {
    id: 1,
    quote: "The nature walk experience was absolutely incredible. Our guide's knowledge of local flora and fauna made every moment fascinating.",
    name: "Sarah Johnson",
    location: "United Kingdom",
    avatar: "/images/culturalTours/testimonial1.jpg",
    rating: 5,
    date: "December 2023"
  },
  {
    id: 2,
    quote: "The photography safari exceeded all my expectations. I got shots I never thought possible!",
    name: "Michael Chen",
    location: "Canada",
    avatar: "/images/culturalTours/testimonial2.jpg",
    rating: 5,
    date: "January 2024"
  },
  {
    id: 3,
    quote: "Climbing Kilimanjaro with this team was the adventure of a lifetime. Professional, safe, and inspiring.",
    name: "Andreas Mueller",
    location: "Germany",
    avatar: "/images/culturalTours/testimonial3.jpg",
    rating: 5,
    date: "November 2023"
  }
];

export default Experience; 