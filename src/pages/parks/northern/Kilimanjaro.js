import React, { useState } from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaMountain, FaCamera, FaHiking, FaBinoculars, FaCalendarAlt, FaCheckCircle, FaInfoCircle, FaWater, FaArrowRight, FaCalendarCheck, FaWhatsapp, FaSync, FaExpand } from 'react-icons/fa';
import './Kilimanjaro.css';
import { contactInfo } from '../../../config/contact';
import '../../../shared/styles/BookingForm.css';

const Kilimanjaro = () => {
  const [activeViewpoint, setActiveViewpoint] = useState('summit');
  const [isLoading, setIsLoading] = useState(true);

  const climbingRoutes = [
    {
      name: "Machame Route",
      duration: "6-7 days",
      difficulty: "Moderate-Difficult",
      distance: "90-100 kms",
      success_rate: "90%",
      description: "Known as the 'Whiskey Route', this is the most scenic and popular path. Offers excellent acclimatization and stunning views through varied terrain.",
      highlights: [
        "Spectacular views",
        "Good acclimatization profile",
        "Beautiful rainforest section",
        "Varied landscape and scenery"
      ],
      camps: ["Machame Camp", "Shira Camp", "Barranco Camp", "Barafu Camp"]
    },
    {
      name: "Marangu Route",
      duration: "5-6 days",
      difficulty: "Moderate",
      distance: "75 kms",
      success_rate: "85%",
      description: "Known as the 'Coca-Cola Route', it's the only route offering hut accommodations. The most direct path to the summit.",
      highlights: [
        "Comfortable hut accommodation",
        "Gradual slope for climbing",
        "Good for beginners",
        "Shortest route to the summit"
      ],
      camps: ["Mandara Hut", "Horombo Hut", "Kibo Hut"]
    },
    {
      name: "Lemosho Route",
      duration: "7-8 days",
      difficulty: "Moderate",
      success_rate: "90%",
      description: "One of the newer and more scenic routes, offering excellent acclimatization and high summit success rates.",
      highlights: [
        "Remote wilderness experience",
        "High success rate",
        "Beautiful forest trails",
        "Great acclimatization profile"
      ],
      camps: ["Mti Mkubwa", "Shira 2 Camp", "Barranco Camp", "Barafu Camp"]
    }
  ];

  const preparationGuide = {
    essentialGear: [
      {
        category: "Clothing",
        items: [
          "Waterproof jacket and pants",
          "Insulated down jacket",
          "Thermal base layers",
          "Fleece layers",
          "Hiking pants",
          "Warm hat and sun hat",
          "Gloves (thin liner and thick winter gloves)",
          "Hiking socks (multiple pairs)"
        ]
      },
      {
        category: "Footwear",
        items: [
          "Waterproof hiking boots (well broken in)",
          "Gaiters",
          "Camp shoes/sandals",
          "Thick wool socks"
        ]
      },
      {
        category: "Equipment",
        items: [
          "4-season sleeping bag",
          "Headlamp with extra batteries",
          "Trekking poles",
          "Daypack (30-35L)",
          "Water bottles/hydration system"
        ]
      }
    ],
    healthPreparation: [
      {
        title: "Physical Fitness",
        description: "Start training at least 3-4 months before your climb. Focus on:",
        items: [
          "Cardiovascular endurance",
          "Strength training",
          "Long hiking sessions",
          "Stair climbing exercises"
        ]
      },
      {
        title: "Medical Preparation",
        description: "Consult your doctor and consider:",
        items: [
          "Altitude sickness medication",
          "Required vaccinations",
          "Personal medications",
          "Travel insurance"
        ]
      }
    ],
    acclimatizationTips: [
      "Walk slowly ('pole pole' in Swahili)",
      "Drink plenty of water (3-4 liters daily)",
      "Eat regular meals",
      "Sleep at lower altitude than highest point reached",
      "Take acclimatization days seriously"
    ]
  };

  const viewpoints = [
    {
      id: 'summit',
      name: 'Uhuru Peak',
      description: 'Experience the view from Africa\'s highest point at 5,895m',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.0674245!2d37.3555908!3f180!4f0!5f0.7820865974627469'
    },
    {
      id: 'machame',
      name: 'Machame Route',
      description: 'View the scenic Machame route through the rainforest',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.1019!2d37.2687!3f220!4f0!5f0.7820865974627469'
    },
    {
      id: 'shira',
      name: 'Shira Plateau',
      description: 'Explore the vast Shira Plateau with its unique alpine desert',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.0486!2d37.2106!3f150!4f0!5f0.7820865974627469'
    },
    {
      id: 'kibo',
      name: 'Kibo Crater',
      description: 'View the magnificent Kibo crater and its glaciers',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.0675!2d37.3537!3f180!4f0!5f0.7820865974627469'
    },
    {
      id: 'mawenzi',
      name: 'Mawenzi Peak',
      description: 'Discover Kilimanjaro\'s second highest peak',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.0899!2d37.4538!3f180!4f0!5f0.7820865974627469'
    }
  ];

  const toggleAutoRotate = () => {
    // Implementation for auto-rotate functionality
    const iframe = document.querySelector('.virtual-tour iframe');
    if (iframe) {
      const currentSrc = iframe.src;
      if (currentSrc.includes('!3f')) {
        const newSrc = currentSrc.replace(/!3f\d+/, '!3f' + ((parseInt(currentSrc.match(/!3f(\d+)/)[1]) + 90) % 360));
        iframe.src = newSrc;
      }
    }
  };

  const toggleFullscreen = () => {
    const tourContainer = document.querySelector('.virtual-tour');
    if (!document.fullscreenElement) {
      if (tourContainer.requestFullscreen) {
        tourContainer.requestFullscreen();
      } else if (tourContainer.webkitRequestFullscreen) {
        tourContainer.webkitRequestFullscreen();
      } else if (tourContainer.msRequestFullscreen) {
        tourContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Mount Kilimanjaro National Park</h1>
          <p>Africa's Highest Peak - The Roof of Africa</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Mount Kilimanjaro</h2>
          <div className="overview-content">
            <p className="lead-text">
              Mount Kilimanjaro, Africa's highest peak and the world's highest free-standing mountain, 
              rises majestically to 5,895 meters (19,341 feet) above sea level. This UNESCO World Heritage 
              site is a dormant volcano composed of three volcanic cones: Kibo, Mawenzi, and Shira.
            </p>
            
            <div className="mountain-facts">
              <div className="fact-column">
                <h3>Unique Features</h3>
                <ul>
                  <li>World's highest free-standing mountain</li>
                  <li>Africa's highest peak</li>
                  <li>One of the world's largest volcanoes</li>
                  <li>Home to five distinct climate zones</li>
                </ul>
              </div>
              <div className="fact-column">
                <h3>Climate Zones</h3>
                <ul>
                  <li>Cultivation Zone (800m-1,800m)</li>
                  <li>Forest Zone (1,800m-2,800m)</li>
                  <li>Heath and Moorland (2,800m-4,000m)</li>
                  <li>Alpine Desert (4,000m-5,000m)</li>
                  <li>Arctic Summit (5,000m+)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, near Moshi town</p>
            </div>
            <div className="feature">
              <FaMountain />
              <h3>Height</h3>
              <p>5,895 meters (19,341 feet) above sea level</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Ecosystem</h3>
              <p>Five distinct climate zones from rainforest to arctic</p>
            </div>
            <div className="feature">
              <FaHiking />
              <h3>Routes</h3>
              <p>Seven official routes to the summit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="climbing-routes">
        <div className="container">
          <h2>Popular Climbing Routes</h2>
          <p className="section-intro">
            There are six officially approved routes to reach Uhuru Peak. Each route offers unique 
            scenic views and varying degrees of difficulty. The success rate of reaching the summit 
            largely depends on the chosen route and duration of the climb.
          </p>
          
          <div className="routes-grid">
            {climbingRoutes.map((route, index) => (
              <div key={index} className="route-card">
                <div className="route-header">
                  <h3>{route.name}</h3>
                  <span className="success-rate">{route.success_rate} Success Rate</span>
                </div>
                
                <div className="route-details">
                  <div className="detail-item">
                    <FaHiking />
                    <span>Duration: {route.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FaMountain />
                    <span>Difficulty: {route.difficulty}</span>
                  </div>
                </div>

                <p className="route-description">{route.description}</p>

                <div className="route-highlights">
                  <h4>Route Highlights</h4>
                  <ul>
                    {route.highlights.map((highlight, i) => (
                      <li key={i}><FaCheckCircle /> {highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="route-camps">
                  <h4>Major Camps</h4>
                  <div className="camps-list">
                    {route.camps.map((camp, i) => (
                      <span key={i} className="camp-tag">{camp}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="preparation-guide">
        <div className="container">
          <h2>Preparation Guide</h2>
          <p className="section-intro">
            Proper preparation is crucial for a successful Kilimanjaro climb. Below are essential 
            guidelines to help you prepare for your adventure.
          </p>

          <div className="prep-content">
            <div className="prep-section gear">
              <h3>Essential Gear</h3>
              <div className="gear-categories">
                {preparationGuide.essentialGear.map((category, index) => (
                  <div key={index} className="gear-category">
                    <h4>{category.category}</h4>
                    <ul>
                      {category.items.map((item, i) => (
                        <li key={i}><FaCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="prep-section health">
              <h3>Health & Fitness</h3>
              <div className="health-prep">
                {preparationGuide.healthPreparation.map((section, index) => (
                  <div key={index} className="health-category">
                    <h4>{section.title}</h4>
                    <p>{section.description}</p>
                    <ul>
                      {section.items.map((item, i) => (
                        <li key={i}><FaCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="prep-section acclimatization">
              <h3>Acclimatization Tips</h3>
              <div className="tips-container">
                <ul>
                  {preparationGuide.acclimatizationTips.map((tip, index) => (
                    <li key={index}><FaCheckCircle /> {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Nature & Climate Zones</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/kilimanjaro-rainforest_181624-6365.jpg" alt="Rainforest Zone" />
              </div>
              <div className="wildlife-content">
                <h3>Rainforest Zone</h3>
                <p>Lush forest with diverse wildlife, including Colobus monkeys and unique bird species.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/alpine-desert_181624-6366.jpg" alt="Alpine Desert" />
              </div>
              <div className="wildlife-content">
                <h3>Alpine Desert</h3>
                <p>Dramatic landscapes with unique high-altitude vegetation.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/arctic-summit_181624-6367.jpg" alt="Arctic Summit" />
              </div>
              <div className="wildlife-content">
                <h3>Arctic Summit</h3>
                <p>Snow-capped peak with glaciers and breathtaking views.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Activities & Routes</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b" 
                  alt="Machame Route - Kilimanjaro" 
                />
                <div className="route-badge success">90% Success Rate</div>
              </div>
              <div className="activity-content">
                <div className="route-header">
                  <h3>Machame Route</h3>
                  <span className="difficulty moderate">Moderate</span>
                </div>
                <div className="route-quick-facts">
                  <div className="fact">
                    <FaCalendarAlt />
                    <span>6-7 days</span>
                  </div>
                  <div className="fact">
                    <FaMountain />
                    <span>4,800m</span>
                  </div>
                  <div className="fact">
                    <FaHiking />
                    <span>64km</span>
                  </div>
                </div>
                <p>The most scenic 'Whiskey' route with excellent acclimatization profile.</p>
                <button className="learn-more-btn">Learn More <FaArrowRight /></button>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://images.unsplash.com/photo-1650668302197-7f556c34cb91" 
                  alt="Marangu Route - Kilimanjaro" 
                />
                <div className="route-badge success">85% Success Rate</div>
              </div>
              <div className="activity-content">
                <div className="route-header">
                  <h3>Marangu Route</h3>
                  <span className="difficulty moderate">Moderate</span>
                </div>
                <div className="route-quick-facts">
                  <div className="fact">
                    <FaCalendarAlt />
                    <span>5-6 days</span>
                  </div>
                  <div className="fact">
                    <FaMountain />
                    <span>4,800m</span>
                  </div>
                  <div className="fact">
                    <FaHiking />
                    <span>75km</span>
                  </div>
                </div>
                <p>Classic 'Coca-Cola' route with comfortable hut accommodations.</p>
                <button className="learn-more-btn">Learn More <FaArrowRight /></button>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kDfgxlbCqel_seq9B86BU9D16pGS3Z9dKA&s" 
                  alt="Lemosho Route - Kilimanjaro" 
                />
                <div className="route-badge success">90% Success Rate</div>
              </div>
              <div className="activity-content">
                <div className="route-header">
                  <h3>Lemosho Route</h3>
                  <span className="difficulty moderate">Moderate</span>
                </div>
                <div className="route-quick-facts">
                  <div className="fact">
                    <FaCalendarAlt />
                    <span>7-8 days</span>
                  </div>
                  <div className="fact">
                    <FaMountain />
                    <span>4,800m</span>
                  </div>
                  <div className="fact">
                    <FaHiking />
                    <span>100km</span>
                  </div>
                </div>
                <p>Remote and scenic with high summit success rates.</p>
                <button className="learn-more-btn">Learn More <FaArrowRight /></button>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_LPlGEdhZcCimMg_oP-LJ8oD_TpsDEEhcw&s" 
                  alt="Rongai Route - Kilimanjaro" 
                />
                <div className="route-badge success">Unique Perspective</div>
              </div>
              <div className="activity-content">
                <div className="route-header">
                  <h3>Rongai Route</h3>
                  <span className="difficulty easy">Easy</span>
                </div>
                <div className="route-quick-facts">
                  <div className="fact">
                    <FaCalendarAlt />
                    <span>6-7 days</span>
                  </div>
                  <div className="fact">
                    <FaMountain />
                    <span>4,800m</span>
                  </div>
                  <div className="fact">
                    <FaHiking />
                    <span>64km</span>
                  </div>
                </div>
                <p>The only northern approach, offering unique perspectives and wildlife sightings.</p>
                <button className="learn-more-btn">Learn More <FaArrowRight /></button>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://images.unsplash.com/photo-1612456225451-bb8d10d0131d" 
                  alt="Northern Circuit - Kilimanjaro" 
                />
                <div className="route-badge success">Scenic Route</div>
              </div>
              <div className="activity-content">
                <div className="route-header">
                  <h3>Shiro Route</h3>
                  <span className="difficulty moderate">Moderate</span>
                </div>
                <div className="route-quick-facts">
                  <div className="fact">
                    <FaCalendarAlt />
                    <span>8-9 days</span>
                  </div>
                  <div className="fact">
                    <FaMountain />
                    <span>4,800m</span>
                  </div>
                  <div className="fact">
                    <FaHiking />
                    <span>100km</span>
                  </div>
                </div>
                <p>The longest and most scenic route circumnavigating the mountain.</p>
                <button className="learn-more-btn">Learn More <FaArrowRight /></button>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5kfLVL-lSlt-QBwc5MTb2_4L8CzVQ7fGcg&s" 
                  alt="Umbwe Route - Kilimanjaro" 
                />
                <div className="route-badge success">Steep Route</div>
              </div>
              <div className="activity-content">
                <div className="route-header">
                  <h3>Umbwe Route</h3>
                  <span className="difficulty hard">Hard</span>
                </div>
                <div className="route-quick-facts">
                  <div className="fact">
                    <FaCalendarAlt />
                    <span>5-6 days</span>
                  </div>
                  <div className="fact">
                    <FaMountain />
                    <span>4,800m</span>
                  </div>
                  <div className="fact">
                    <FaHiking />
                    <span>64km</span>
                  </div>
                </div>
                <p>The steepest and most direct route to the summit.</p>
                <button className="learn-more-btn">Learn More <FaArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-info">
        <div className="container">
          <h2>Climbing Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaMapMarkerAlt />
              <h3>How to Get There</h3>
              <p>Fly to Kilimanjaro International Airport or drive from Arusha (about 2 hours).</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Climb</h3>
              <p>January-March and June-October are the best climbing seasons.</p>
            </div>
            <div className="info-card">
              <FaHiking />
              <h3>Essential Gear</h3>
              <p>Proper climbing gear, warm clothing, and high-altitude equipment required.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-360">
        <div className="container">
          <h2>360° Virtual Experience</h2>
          <div className="virtual-tour">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1710144433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.0674245!2d37.3555908!3f180!4f0!5f0.7820865974627469" 
              width="100%" 
              height="500" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="virtual-tour-info">
            <p>Experience the majesty of Mount Kilimanjaro and its surrounding landscapes before your visit.</p>
            <div className="tour-controls">
              <span>💡 Tip: Use your mouse or touch to look around in 360°</span>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <h2>Plan Your Kilimanjaro Adventure</h2>
          <div className="booking-container">
            <div className="booking-form">
              <h3>Inquire Now</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Number of Climbers</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group select-wrapper">
                  <select required>
                    <option value="">Select Route</option>
                    <option value="marangu">Marangu Route (5-6 days)</option>
                    <option value="machame">Machame Route (6-7 days)</option>
                    <option value="lemosho">Lemosho Route (7-8 days)</option>
                    <option value="rongai">Rongai Route (6-7 days)</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Special Requirements or Questions" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <FaCalendarCheck /> Request Booking
                </button>
              </form>
            </div>
            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <div className="contact-options">
                <a href={contactInfo.whatsappLink} className="whatsapp-btn">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <div className="contact-info">
                  <p>Email: {contactInfo.email}</p>
                  <p>Phone: {contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kilimanjaro; 