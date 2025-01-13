import React, { useState, useEffect } from 'react';
import { FaTree, FaClock, FaDollarSign, FaUsers, FaChevronDown, FaChevronUp, FaStar, FaCheck, FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaCamera, FaGlobe, FaLeaf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollExperiences = (direction) => {
    const container = document.querySelector('.experiences-grid');
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const experiences = [
    {
      id: 1,
      title: "Safari Adventure",
      description: "Experience the thrill of wildlife up close",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800",
      icon: "🦁",
      duration: "3 Days",
      price: 299,
      groupSize: "Max 6",
      categories: ["nature", "popular"],
      highlights: [
        "Game drives in Serengeti",
        "Luxury camping",
        "Professional guides",
        "All meals included"
      ],
      included: [
        "Transportation",
        "Accommodation",
        "Meals & Drinks",
        "Expert Guide"
      ],
      schedule: [
        { time: "Day 1", activity: "Arrival and evening game drive" },
        { time: "Day 2", activity: "Full day safari experience" },
        { time: "Day 3", activity: "Morning drive and departure" }
      ],
      pricingOptions: [
        {
          name: "Standard Package",
          price: 299,
          description: "Perfect for small groups"
        },
        {
          name: "Premium Package",
          price: 499,
          description: "Luxury accommodation included"
        }
      ]
    },
    {
      id: 2,
      title: "Cultural Experience",
      description: "Immerse in Maasai traditions",
      image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=800",
      icon: "👥",
      duration: "2 Days",
      price: 199,
      groupSize: "Max 8",
      categories: ["culture"],
      highlights: [
        "Traditional dance performances",
        "Craft workshops",
        "Local cuisine tasting",
        "Village tour"
      ],
      included: [
        "Cultural guide",
        "Traditional meals",
        "Craft materials",
        "Village donations"
      ],
      schedule: [
        { time: "Day 1", activity: "Village welcome and activities" },
        { time: "Day 2", activity: "Workshops and farewell" }
      ],
      pricingOptions: [
        {
          name: "Basic Experience",
          price: 199,
          description: "Full cultural immersion"
        },
        {
          name: "Extended Stay",
          price: 299,
          description: "Including overnight in traditional housing"
        }
      ]
    },
    {
      id: 3,
      title: "Mountain Trek",
      description: "Climb Mount Kilimanjaro",
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=800",
      icon: "🗻",
      duration: "7 Days",
      price: 999,
      groupSize: "Max 10",
      categories: ["adventure", "popular"],
      highlights: [
        "Professional climbing guides",
        "Quality equipment",
        "Summit certificate",
        "Safety briefings"
      ],
      included: [
        "Climbing gear",
        "Mountain meals",
        "Camping equipment",
        "Emergency support"
      ],
      schedule: [
        { time: "Day 1-2", activity: "Acclimatization and base camp" },
        { time: "Day 3-5", activity: "Ascending the mountain" },
        { time: "Day 6-7", activity: "Summit and descent" }
      ],
      pricingOptions: [
        {
          name: "Group Climb",
          price: 999,
          description: "Join other climbers"
        },
        {
          name: "Private Expedition",
          price: 1499,
          description: "Personalized climbing experience"
        }
      ]
    },
    {
      id: 4,
      title: "Beach Paradise",
      description: "Relax on Zanzibar's pristine beaches",
      image: "https://images.unsplash.com/photo-1548813435-a23412df3e27?auto=format&fit=crop&w=800",
      icon: "🏖️",
      duration: "5 Days",
      price: 799,
      groupSize: "Max 12",
      categories: ["beach", "popular"],
      highlights: [
        "White sandy beaches",
        "Snorkeling adventures",
        "Sunset cruises",
        "Local seafood dining"
      ],
      included: [
        "Beach accommodation",
        "Water activities",
        "Island tours",
        "Airport transfers"
      ],
      schedule: [
        { time: "Day 1", activity: "Arrival and beach relaxation" },
        { time: "Day 2-3", activity: "Water sports and island exploration" },
        { time: "Day 4-5", activity: "Leisure and departure" }
      ],
      pricingOptions: [
        { name: "Standard Package", price: 799, description: "Beachfront resort stay" },
        { name: "Luxury Package", price: 1299, description: "Premium villa with private beach" }
      ]
    },
    {
      id: 5,
      title: "Photography Tour",
      description: "Capture Tanzania's stunning moments",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800",
      icon: "📸",
      duration: "6 Days",
      price: 899,
      groupSize: "Max 8",
      categories: ["photography"],
      highlights: [
        "Professional photography guides",
        "Wildlife photography",
        "Landscape shots",
        "Cultural portraits"
      ],
      included: [
        "Photography workshops",
        "Transport in photo-friendly vehicle",
        "Accommodation",
        "Park fees"
      ],
      schedule: [
        { time: "Day 1-2", activity: "Serengeti wildlife photography" },
        { time: "Day 3-4", activity: "Cultural and landscape photography" },
        { time: "Day 5-6", activity: "Advanced techniques and departure" }
      ],
      pricingOptions: [
        { name: "Basic Package", price: 899, description: "Group photography tour" },
        { name: "Private Package", price: 1499, description: "One-on-one photography guidance" }
      ]
    },
    {
      id: 6,
      title: "Birdwatching Safari",
      description: "Discover Tanzania's exotic birds",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800",
      icon: "🦜",
      duration: "4 Days",
      price: 599,
      groupSize: "Max 6",
      categories: ["nature"],
      highlights: [
        "Expert bird guides",
        "Lake Manyara birds",
        "Photography opportunities",
        "Bird species identification"
      ],
      included: [
        "Birding equipment",
        "Specialized guides",
        "Accommodation",
        "All meals"
      ],
      schedule: [
        { time: "Day 1", activity: "Introduction to birdwatching" },
        { time: "Day 2-3", activity: "Bird spotting and photography" },
        { time: "Day 4", activity: "Final expedition and departure" }
      ],
      pricingOptions: [
        { name: "Group Tour", price: 599, description: "Shared birding experience" },
        { name: "Private Tour", price: 899, description: "Customized birding adventure" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const stats = document.querySelector('.hero-stats');
      if (stats && !animatedStats) {
        const rect = stats.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimatedStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedStats]);

  const filterCategories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'nature', name: 'Nature & Wildlife' },
    { id: 'culture', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'popular', name: 'Most Popular' }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const filteredExperiences = experiences.filter(exp => 
    selectedCategory === 'all' || exp.categories.includes(selectedCategory)
  );

  const stats = [
    { number: '1000+', label: 'Happy Travelers' },
    { number: '50+', label: 'Unique Experiences' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '10+', label: 'Years of Excellence' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800",
      title: "Wildlife Encounters",
      description: "Up close with nature's finest",
      category: "wildlife",
      location: "Serengeti National Park",
      date: "June 2023"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=800",
      title: "Cultural Immersion",
      description: "Connect with local traditions",
      category: "culture",
      location: "Maasai Village",
      date: "July 2023"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1548813435-a23412df3e27?auto=format&fit=crop&w=800",
      title: "Coastal Paradise",
      description: "Relax on pristine beaches",
      category: "beach",
      location: "Zanzibar",
      date: "August 2023"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?auto=format&fit=crop&w=800",
      title: "Adventure Time",
      description: "Thrilling experiences await",
      category: "adventure",
      location: "Mount Kilimanjaro",
      date: "September 2023"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800",
      title: "Bird Watching",
      description: "Discover exotic bird species",
      category: "wildlife",
      location: "Lake Manyara",
      date: "October 2023"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800",
      title: "Local Cuisine",
      description: "Taste authentic flavors",
      category: "culture",
      location: "Stone Town",
      date: "November 2023"
    }
  ];

  const galleryCategories = [
    { id: 'all', name: 'All Photos', icon: <FaGlobe /> },
    { id: 'wildlife', name: 'Wildlife', icon: <FaLeaf /> },
    { id: 'culture', name: 'Culture', icon: <FaUsers /> },
    { id: 'beach', name: 'Beaches', icon: <FaHeart /> },
    { id: 'adventure', name: 'Adventure', icon: <FaCamera /> }
  ];

  return (
    <div className="experience-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Tanzania's Magic</h1>
          <p>Embark on extraordinary journeys that blend adventure, culture, and natural wonders</p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-experience">
        <div className="featured-content">
          <h2>Why Choose Our Experiences?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🌟</div>
              <h3>Expert Local Guides</h3>
              <p>Knowledgeable guides who bring stories to life</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👥</div>
              <h3>Small Groups</h3>
              <p>Intimate experiences with personalized attention</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <h3>Sustainable Tourism</h3>
              <p>Eco-friendly practices protecting our heritage</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💫</div>
              <h3>Authentic Encounters</h3>
              <p>Genuine connections with nature and culture</p>
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

        <div className="experiences-container">
          <button className="scroll-button scroll-left" onClick={() => scrollExperiences('left')}>
            <FaChevronLeft />
          </button>

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
                  <div className="rating">
                    {'★'.repeat(5)}
                  </div>
                  <p>{exp.description}</p>
                  
                  {expandedCard === exp.id && (
                    <div className="expanded-content">
                      <div className="highlights-section">
                        <h4>Experience Highlights</h4>
                        <ul>
                          {exp.highlights.map((highlight, index) => (
                            <li key={index}><FaCheck /> {highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="included-section">
                        <h4>What's Included</h4>
                        <ul>
                          {exp.included.map((item, index) => (
                            <li key={index}><FaCheck /> {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="schedule-section">
                        <h4>Daily Schedule</h4>
                        {exp.schedule.map((item, index) => (
                          <div key={index} className="schedule-item">
                            <span className="time">{item.time}</span>
                            <span className="activity">{item.activity}</span>
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
                          Book Now <FaCalendarAlt />
                        </button>
                        <button className="inquire">
                          Inquire <FaMapMarkerAlt />
                        </button>
                      </div>
                    </div>
                  )}
                  
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

          <button className="scroll-button scroll-right" onClick={() => scrollExperiences('right')}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      <section className="fun-facts">
        <h2>Fun Facts About Tanzania</h2>
        <div className="facts-container">
          <div className="fact-card">
            <div className="fact-icon">🦁</div>
            <h3>Wildlife Paradise</h3>
            <p>Home to over 20% of Africa's large mammals and the famous Big Five</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🗻</div>
            <h3>Kilimanjaro</h3>
            <p>Africa's highest peak and the world's highest free-standing mountain</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🏖️</div>
            <h3>Zanzibar</h3>
            <p>Pristine beaches and rich cultural heritage in the Spice Islands</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🦒</div>
            <h3>Serengeti</h3>
            <p>Witness the Great Migration, one of nature's most spectacular shows</p>
          </div>
        </div>
      </section>

      <section className="kids-corner">
        <h2>Kids' Safari Adventure</h2>
        <div className="kids-activities-container">
          <button className="scroll-button scroll-left" onClick={() => document.querySelector('.kids-activities').scrollBy({ left: -300, behavior: 'smooth' })}>
            <FaChevronLeft />
          </button>
          
          <div className="kids-activities">
            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800" alt="Junior Rangers" />
              <div className="activity-content">
                <h3>Junior Rangers Program</h3>
                <p>Young explorers learn about wildlife and conservation</p>
                <ul className="activity-features">
                  <li>🎯 Wildlife tracking skills</li>
                  <li>📸 Safari photography lessons</li>
                  <li>🎨 Nature art workshops</li>
                  <li>🔍 Guided nature walks</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=800" alt="Cultural Discovery" />
              <div className="activity-content">
                <h3>Cultural Discovery</h3>
                <p>Interactive cultural experiences for young minds</p>
                <ul className="activity-features">
                  <li>🎵 Traditional music lessons</li>
                  <li>💃 Maasai dance workshops</li>
                  <li>🎨 Local craft making</li>
                  <li>👕 Traditional dress-up</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800" alt="Safari Adventures" />
              <div className="activity-content">
                <h3>Mini Safari Adventures</h3>
                <p>Safe and exciting wildlife encounters for kids</p>
                <ul className="activity-features">
                  <li>🦁 Animal spotting games</li>
                  <li>🚙 Kid-friendly game drives</li>
                  <li>📝 Safari diary making</li>
                  <li>🎮 Wildlife quiz challenges</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?auto=format&fit=crop&w=800" alt="Nature Explorers" />
              <div className="activity-content">
                <h3>Nature Explorers Club</h3>
                <p>Hands-on learning about Tanzania's ecosystems</p>
                <ul className="activity-features">
                  <li>🌿 Plant identification</li>
                  <li>🦋 Insect discovery walks</li>
                  <li>🎨 Nature journaling</li>
                  <li>🔬 Mini science experiments</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800" alt="Kids' Cooking" />
              <div className="activity-content">
                <h3>Little Chefs Program</h3>
                <p>Fun cooking experiences with local ingredients</p>
                <ul className="activity-features">
                  <li>🥘 Simple recipe making</li>
                  <li>🌱 Garden harvesting</li>
                  <li>🍪 Baking activities</li>
                  <li>👨‍🍳 Chef certificates</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800" alt="Adventure Sports" />
              <div className="activity-content">
                <h3>Kids' Adventure Sports</h3>
                <p>Safe and supervised outdoor activities</p>
                <ul className="activity-features">
                  <li>🚲 Beginner bike trails</li>
                  <li>🏹 Archery lessons</li>
                  <li>🧗‍♂️ Rock climbing basics</li>
                  <li>🏅 Adventure badges</li>
                </ul>
              </div>
            </div>
          </div>

          <button className="scroll-button scroll-right" onClick={() => document.querySelector('.kids-activities').scrollBy({ left: 300, behavior: 'smooth' })}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      <section className="photo-gallery">
        <h2>Captured Moments</h2>
        <p className="gallery-subtitle">Explore our collection of unforgettable experiences</p>
        
        <div className="gallery-categories">
          {galleryCategories.map(category => (
            <button
              key={category.id}
              className={`gallery-category-btn ${selectedGalleryCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedGalleryCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-container">
          {galleryImages
            .filter(img => selectedGalleryCategory === 'all' || img.category === selectedGalleryCategory)
            .map(image => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <div className="gallery-meta">
                    <span><FaMapMarkerAlt /> {image.location}</span>
                    <span><FaCalendarAlt /> {image.date}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <div className="modal-meta">
                  <span><FaMapMarkerAlt /> {selectedImage.location}</span>
                  <span><FaCalendarAlt /> {selectedImage.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Let us help you create unforgettable memories in Tanzania</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Start Planning</button>
            <button className="cta-button secondary">Download Guide</button>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Experience; 