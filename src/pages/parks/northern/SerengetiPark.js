import React, { useState, useEffect } from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaSun, FaCamera, FaCar, FaBinoculars, FaCalendarAlt, FaCheckCircle, FaInfoCircle, FaWater, FaChevronLeft, FaChevronRight, FaCalendarCheck, FaWhatsapp, FaArrowRight, FaImages, FaTimes, FaSearchPlus, FaSync, FaExpand } from 'react-icons/fa';
import './SerengetiPark.css';
import { contactInfo } from '../../../config/contact';
import '../../../shared/styles/BookingForm.css';

const SerengetiPark = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [pinchStart, setPinchStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [activeViewpoint, setActiveViewpoint] = useState('savannah');
  const [isLoading, setIsLoading] = useState(true);

  const viewpoints = [
    {
      id: 'savannah',
      name: 'Endless Plains',
      description: 'Experience the vast savannah that stretches to the horizon',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcFBkWHZxUzBkbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-2.3333333!2d34.8333333!3f180!4f0!5f0.7820865974627469'
    },
    {
      id: 'river',
      name: 'Mara River',
      description: 'Watch the dramatic river crossings during migration',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcFBkWHZxUzBkbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-1.5824!2d34.8234!3f220!4f0!5f0.7820865974627469'
    },
    {
      id: 'kopjes',
      name: 'Kopjes Viewpoint',
      description: 'Explore the iconic granite rock formations',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcFBkWHZxUzBkbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-2.4521!2d34.9012!3f150!4f0!5f0.7820865974627469'
    },
    {
      id: 'woodland',
      name: 'Acacia Woodland',
      description: 'Discover the beautiful acacia forests',
      embedCode: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.01234567891!2d34.8567!3d-2.3821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjInNTUuNiJTIDM0wrA1MScyNC4xIkU!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
    }
  ];

  const safariActivities = [
    {
      name: "Great Migration Safari",
      duration: "3-5 days",
      difficulty: "Easy",
      season: "Year-round (Peak: June-October)",
      description: "Witness the spectacular wildebeest migration, one of nature's greatest shows.",
      backgroundImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
      price: {
        standard: "From $450 per day",
        luxury: "From $850 per day"
      },
      highlights: [
        "Over 2 million wildebeest",
        "Dramatic river crossings",
        "Predator action",
        "Stunning savannah views"
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
          caption: "Dramatic river crossing during migration"
        },
        {
          url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=800",
          caption: "Massive herds moving across the plains"
        },
        {
          url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
          caption: "Lions following the migration"
        },
        {
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
          caption: "Zebras joining the great migration"
        }
      ]
    },
    {
      name: "Photography Safari",
      duration: "3-7 days",
      difficulty: "Easy",
      season: "Year-round",
      description: "Capture stunning wildlife and landscape photographs with expert guidance.",
      backgroundImage: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800",
      price: {
        standard: "From $500 per day",
        luxury: "From $900 per day"
      },
      highlights: [
        "Stunning wildlife and landscape photography",
        "Expert guidance",
        "Capture the beauty of Serengeti"
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800",
          caption: "Photography safari in Serengeti"
        },
        {
          url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
          caption: "Photographer capturing wildlife"
        },
        {
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
          caption: "Photographer with wildlife"
        },
        {
          url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
          caption: "Photographer with landscape"
        }
      ]
    },
    {
      name: "Balloon Safari",
      duration: "Half-day",
      difficulty: "Easy",
      season: "Year-round",
      description: "Soar above the plains for a bird's eye view of the Serengeti.",
      backgroundImage: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800",
      price: {
        standard: "From $599 per person",
        luxury: "From $799 per person (private flight)"
      },
      highlights: [
        "Sunrise views",
        "Aerial wildlife spotting",
        "Champagne breakfast",
        "Unique photography opportunities"
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800",
          caption: "Hot air balloon at sunrise"
        },
        {
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
          caption: "Aerial view of the Serengeti plains"
        },
        {
          url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
          caption: "Luxury bush breakfast setup"
        },
        {
          url: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800",
          caption: "Balloon landing in the savannah"
        }
      ]
    }
  ];

  const wildlifeSlides = [
    {
      image: "https://img.freepik.com/free-photo/lion-lying-grass-sunset_456031-34.jpg",
      title: "Lions of Serengeti",
      description: "The park hosts the largest lion population in Africa"
    },
    {
      image: "https://img.freepik.com/free-photo/leopard-resting-tree-branch-african-savanna_167946-146.jpg",
      title: "Elusive Leopards",
      description: "Often spotted in the Central Serengeti's Seronera Valley"
    },
    {
      image: "https://img.freepik.com/free-photo/herd-wildebeest-migration-crossing-mara-river_191645-2370.jpg",
      title: "The Great Migration",
      description: "Over 2 million wildebeest and zebras make this annual journey"
    },
    {
      image: "https://img.freepik.com/free-photo/cheetah-walking-savanna-looking-prey_167946-162.jpg",
      title: "Swift Cheetahs",
      description: "The fastest land animal thrives in Serengeti's open plains"
    }
  ];

  const openGallery = (index) => {
    setActiveActivity(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? safariActivities[activeActivity].gallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === safariActivities[activeActivity].gallery.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      // Pinch gesture
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setPinchStart(distance);
    } else {
      setTouchStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchStart) {
      // Handle pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scale = distance / pinchStart;
      if (scale > 1.2) setIsZoomed(true);
      if (scale < 0.8) setIsZoomed(false);
    } else if (isZoomed && e.touches.length === 1) {
      // Handle drag when zoomed
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      if (isDragging) {
        setDragPosition(prev => ({
          x: Math.min(Math.max(prev.x + (x - touchStart), -100), 100),
          y: Math.min(Math.max(prev.y + (y - touchStart), -100), 100)
        }));
      }
      setTouchStart(x);
    }
  };

  const handleTouchEnd = () => {
    setPinchStart(null);
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    const galleryContainer = document.querySelector('.gallery-container');
    if (!document.fullscreenElement) {
      if (galleryContainer.requestFullscreen) {
        galleryContainer.requestFullscreen();
      } else if (galleryContainer.webkitRequestFullscreen) {
        galleryContainer.webkitRequestFullscreen();
      } else if (galleryContainer.msRequestFullscreen) {
        galleryContainer.msRequestFullscreen();
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

  const resetZoom = () => {
    setIsZoomed(false);
    setDragPosition({ x: 0, y: 0 });
    setZoomPosition({ x: 50, y: 50 }); // Reset to center
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isGalleryOpen) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeGallery();
          break;
        case ' ':
          e.preventDefault(); // Prevent page scroll
          setIsZoomed(!isZoomed);
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'r':
          resetZoom();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen, isZoomed, toggleFullscreen, resetZoom]);

  const handleImageZoom = (e) => {
    if (!isZoomed) return;
    
    const image = e.target;
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    
    setZoomPosition({ x, y });
  };

  const toggleAutoRotate = () => {
    // Implementation for auto-rotate
  };

  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Serengeti National Park</h1>
          <p>The Endless Plains - Home of the Great Migration</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Serengeti</h2>
          <div className="overview-content">
            <p className="lead-text">
              The Serengeti, meaning "endless plains" in Maasai language, is Tanzania's oldest and most 
              popular national park. World-famous for its annual wildebeest migration and exceptional 
              predator viewing, it offers an unparalleled East African safari experience.
            </p>
            
            <div className="park-facts">
              <div className="fact-column">
                <h3>Key Features</h3>
                <ul>
                  <li>UNESCO World Heritage Site</li>
                  <li>14,750 square kilometers</li>
                  <li>Great Migration route</li>
                  <li>Highest concentration of large predators</li>
                </ul>
              </div>
              <div className="fact-column">
                <h3>Ecosystems</h3>
                <ul>
                  <li>Savannah Grasslands</li>
                  <li>Acacia Woodlands</li>
                  <li>Riverine Forests</li>
                  <li>Kopjes (Rock Formations)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, extending to Kenya</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Over 2 million wildebeest, zebras, and diverse predators</p>
            </div>
            <div className="feature">
              <FaSun />
              <h3>Climate</h3>
              <p>Warm and dry (June-October), Green season (November-May)</p>
            </div>
            <div className="feature">
              <FaCamera />
              <h3>Attractions</h3>
              <p>Migration, Big Five, Balloon Safaris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Activities Section */}
      <section className="activities-section">
        <div className="container">
          <h2>Safari Experiences</h2>
          <p className="section-intro">
            From witnessing the Great Migration to hot air balloon safaris, Serengeti offers diverse 
            wildlife experiences throughout the year.
          </p>
          
          <div className="activities-grid">
            {safariActivities.map((activity, index) => (
              <div className="activity-card" key={index}>
                <div 
                  className={`activity-image ${loadedImages[`activity-${index}`] ? 'loaded' : ''}`}
                >
                  <img
                    src={activity.backgroundImage}
                    alt={activity.name}
                    onLoad={() => handleImageLoad(`activity-${index}`)}
                  />
                  <div className="activity-badge">
                    <span className="duration">{activity.duration}</span>
                    <span className="difficulty">{activity.difficulty}</span>
                  </div>
                  <button className="gallery-trigger" onClick={() => openGallery(index)}>
                    <FaImages /> View Gallery ({activity.gallery.length} photos)
                  </button>
                </div>
                <div className="activity-content">
                  <div className="activity-header">
                    <h3>{activity.name}</h3>
                    <span className="season">{activity.season}</span>
                  </div>
                  <p className="activity-description">{activity.description}</p>
                  <div className="price-info">
                    <div className="price-option">
                      <span className="label">Standard</span>
                      <span className="price">{activity.price.standard}</span>
                    </div>
                    <div className="price-option luxury">
                      <span className="label">Luxury</span>
                      <span className="price">{activity.price.luxury}</span>
                    </div>
                  </div>
                  <div className="activity-highlights">
                    <h4>Highlights</h4>
                    <ul>
                      {activity.highlights.map((highlight, i) => (
                        <li key={i}>
                          <FaCheckCircle className="highlight-icon" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="activity-actions">
                    <button className="book-activity-btn">
                      Book This Experience
                      <FaArrowRight className="arrow-icon" />
                    </button>
                    <button className="inquiry-btn">
                      <FaInfoCircle /> Inquire More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="wildlife-section">
        <div className="container">
          <h2>Wildlife & Ecosystems</h2>
          <p className="section-intro">
            Discover the diverse wildlife and unique ecosystems that make Serengeti a natural wonder.
          </p>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img 
                  src="https://img.freepik.com/free-photo/wildebeest-zebras-migration-serengeti_167946-156.jpg" 
                  alt="Great Migration"
                  loading="lazy"
                />
              </div>
              <div className="wildlife-content">
                <h3>The Great Migration</h3>
                <p>Annual movement of over 2 million wildebeest, zebras, and gazelles across the Serengeti-Mara ecosystem.</p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <img 
                  src="https://img.freepik.com/free-photo/pride-lions-resting-savanna_167946-161.jpg" 
                  alt="Predators"
                  loading="lazy"
                />
              </div>
              <div className="wildlife-content">
                <h3>Big Cats Paradise</h3>
                <p>Home to large populations of lions, leopards, and cheetahs, making it Africa's premier predator viewing destination.</p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <img 
                  src="https://img.freepik.com/free-photo/african-elephants-walking-savanna_167946-158.jpg" 
                  alt="Elephants"
                  loading="lazy"
                />
              </div>
              <div className="wildlife-content">
                <h3>Elephant Herds</h3>
                <p>Large herds of African elephants roaming through ancient migration corridors.</p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <img 
                  src="https://img.freepik.com/free-photo/acacia-trees-serengeti-plains_167946-159.jpg" 
                  alt="Savanna"
                  loading="lazy"
                />
              </div>
              <div className="wildlife-content">
                <h3>Savanna Ecosystem</h3>
                <p>Vast grasslands dotted with iconic acacia trees, supporting diverse wildlife populations.</p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <img 
                  src="https://img.freepik.com/free-photo/hippos-cooling-river_167946-160.jpg" 
                  alt="River Life"
                  loading="lazy"
                />
              </div>
              <div className="wildlife-content">
                <h3>River Ecosystems</h3>
                <p>Mara and Grumeti rivers host hippos, crocodiles, and provide essential water sources.</p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <img 
                  src="https://img.freepik.com/free-photo/birds-serengeti_167946-157.jpg" 
                  alt="Birds"
                  loading="lazy"
                />
              </div>
              <div className="wildlife-content">
                <h3>Bird Life</h3>
                <p>Over 500 bird species, including ostriches, secretary birds, and various raptors.</p>
              </div>
            </div>

            <div className="wildlife-card wide-card">
              <div className="wildlife-image">
                <img 
                  src="https://img.freepik.com/free-photo/panoramic-shot-serengeti-ecosystem_167946-163.jpg" 
                  alt="Serengeti Ecosystem"
                  loading="lazy"
                />
              </div>
              <div className="wildlife-content">
                <h3>Complete Ecosystem</h3>
                <p>The Serengeti ecosystem is one of the oldest and most diverse on Earth. 
                This complex system supports millions of animals through a perfect balance of 
                grasslands, woodlands, rivers, and seasonal wetlands. The interaction between 
                wildlife, vegetation, and climate creates a unique environment that has remained 
                largely unchanged for millions of years.</p>
                <div className="ecosystem-stats">
                  <div className="stat">
                    <span className="number">70+</span>
                    <span className="label">Large Mammal Species</span>
                  </div>
                  <div className="stat">
                    <span className="number">500+</span>
                    <span className="label">Bird Species</span>
                  </div>
                  <div className="stat">
                    <span className="number">14,750</span>
                    <span className="label">Square Kilometers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="migration-tracker">
        <div className="container">
          <h2>Great Migration Tracker</h2>
          <p className="section-intro">
            Track the world's largest animal migration throughout the year.
          </p>
          <div className="migration-map">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021526.7351527889!2d34.57227974060668!3d-2.3278181861615327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182cf6e9796fa159%3A0x3789472aa1c3cfe4!2sSerengeti%20National%20Park!5e0!3m2!1sen!2sus!4v1709799171099!5m2!1sen!2sus"
                width="100%" 
                height="480"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="migration-info">
              <div className="current-location">
                <h3>Current Location: Northern Serengeti</h3>
                <p>Best viewing spots: Mara River, Kogatende Area</p>
              </div>
              <div className="migration-timeline">
                <div className="timeline-item active">
                  <span className="month">July-October</span>
                  <span className="location">Northern Serengeti & Masai Mara</span>
                  <p>River crossings at Mara River</p>
                </div>
                <div className="timeline-item">
                  <span className="month">November-December</span>
                  <span className="location">Eastern Serengeti</span>
                  <p>Moving south through Lobo area</p>
                </div>
                <div className="timeline-item">
                  <span className="month">January-March</span>
                  <span className="location">Southern Serengeti</span>
                  <p>Calving season in Ndutu area</p>
                </div>
                <div className="timeline-item">
                  <span className="month">April-June</span>
                  <span className="location">Western Corridor</span>
                  <p>Moving north through Grumeti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landscape-gallery">
        <div className="container">
          <h2>Serengeti Landscapes</h2>
          <p className="section-intro">
            Experience the diverse landscapes of Serengeti, from endless savannahs to acacia woodlands.
          </p>
          <div className="landscape-grid">
            <div className="landscape-card">
              <img 
                src="https://www.serengetiparktanzania.com/wp-content/uploads/2019/05/Serengeti-Savannah.jpg" 
                alt="Endless Plains"
              />
              <div className="landscape-overlay">
                <h3>Endless Plains</h3>
                <p>The iconic savannah that gives Serengeti its name</p>
              </div>
            </div>
            <div className="landscape-card">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2e0Y28o5-wXktu0I0073kCCJP9IP0yNrRQ&s" 
                alt="Kopjes"
              />
              <div className="landscape-overlay">
                <h3>Kopjes</h3>
                <p>Ancient granite rock formations, home to lions and leopards</p>
              </div>
            </div>
            <div className="landscape-card">
              <img 
                src="https://www.tarangirenationalparks.com/wp-content/uploads/2022/01/5929671980203625779.jpg" 
                alt="Endless Plains"
              />
              <div className="landscape-overlay">
                <h3>Endless Plains</h3>
                <p>The iconic savannah that gives Serengeti its name</p>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </section>

      <section className="wildlife-highlights">
        <div className="container">
          <h2>Wildlife Highlights</h2>
          <div className="wildlife-carousel">
            <button 
              className="carousel-btn prev" 
              onClick={() => setActiveSlide((prev) => (prev === 0 ? wildlifeSlides.length - 1 : prev - 1))}
            >
              <FaChevronLeft />
            </button>
            
            <div className="wildlife-slide">
              <img 
                src={wildlifeSlides[activeSlide].image} 
                alt={wildlifeSlides[activeSlide].title} 
              />
              <div className="slide-content">
                <h3>{wildlifeSlides[activeSlide].title}</h3>
                <p>{wildlifeSlides[activeSlide].description}</p>
              </div>
            </div>
            
            <button 
              className="carousel-btn next" 
              onClick={() => setActiveSlide((prev) => (prev === wildlifeSlides.length - 1 ? 0 : prev + 1))}
            >
              <FaChevronRight />
            </button>
            
            <div className="carousel-dots">
              {wildlifeSlides.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience-360">
        <div className="container">
          <h2>360° Virtual Experience</h2>
          <div className="virtual-tour-controls">
            <div className="viewpoint-selector">
              {viewpoints.map((point) => (
                <button 
                  key={point.id}
                  className={`viewpoint-btn ${activeViewpoint === point.id ? 'active' : ''}`}
                  onClick={() => {
                    setIsLoading(true);
                    setActiveViewpoint(point.id);
                  }}
                >
                  <span className="viewpoint-name">{point.name}</span>
                  <span className="viewpoint-hint">Click to view</span>
                </button>
              ))}
            </div>
            
            <div className="tour-actions">
              <button className="action-btn" onClick={toggleAutoRotate}>
                <FaSync /> Auto-Rotate
              </button>
              <button className="action-btn" onClick={toggleFullscreen}>
                <FaExpand /> Fullscreen
              </button>
            </div>
          </div>

          <div className={`virtual-tour ${isLoading ? 'loading' : ''}`}>
            <div className="loading-overlay" style={{ opacity: isLoading ? 1 : 0 }}>
              <div className="spinner"></div>
              <p>Loading viewpoint...</p>
            </div>
            
            <iframe 
              src={viewpoints.find(p => p.id === activeViewpoint).embedCode}
              width="100%" 
              height="500" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>

          <div className="virtual-tour-info">
            <div className="viewpoint-description">
              <h3>{viewpoints.find(p => p.id === activeViewpoint).name}</h3>
              <p>{viewpoints.find(p => p.id === activeViewpoint).description}</p>
            </div>
            <div className="tour-controls">
              <div className="control-hint">
                <span>🖱️ Drag to look around</span>
                <span>👆 Pinch to zoom</span>
                <span>⌨️ Arrow keys to navigate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="visit-info">
        <div className="container">
          <h2>Plan Your Visit</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaMapMarkerAlt />
              <h3>Getting There</h3>
              <p>Flights to Seronera Airstrip or drive from Arusha (325 km).</p>
            </div>
            <div className="info-card">
              <FaCalendarAlt />
              <h3>Best Time to Visit</h3>
              <p>June to October for migration; Year-round for general wildlife viewing.</p>
            </div>
            <div className="info-card">
              <FaCar />
              <h3>Safari Options</h3>
              <p>Game drives, balloon safaris, walking safaris, and photography tours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <h2>Plan Your Safari</h2>
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
                      <option value="">Number of People</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea placeholder="Special Requirements" rows="4"></textarea>
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

      {/* Add Gallery Modal */}
      {isGalleryOpen && (
        <div className="gallery-modal">
          <div className="gallery-overlay" onClick={closeGallery}></div>
          <div className="gallery-container">
            <button className="close-gallery" onClick={closeGallery}>
              <FaTimes />
            </button>
            <div 
              className={`gallery-image-container ${isZoomed ? 'zoomed' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={() => !isDragging && setIsZoomed(!isZoomed)}
            >
              <img 
                src={safariActivities[activeActivity].gallery[activeImage].url} 
                alt={safariActivities[activeActivity].gallery[activeImage].caption}
                className="gallery-image"
                onMouseMove={handleImageZoom}
                style={{
                  transform: isZoomed ? `scale(2.5) translate(${dragPosition.x}px, ${dragPosition.y}px)` : 'none',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                }}
              />
              <div className="zoom-instructions">
                <FaSearchPlus /> {isZoomed ? 'Pinch or click to zoom out' : 'Pinch or click to zoom in'}
              </div>
            </div>
            
            <div className="gallery-controls">
              <div className="keyboard-shortcuts">
                <span>← → Navigate</span>
                <span>Space Zoom</span>
                <span>F Fullscreen</span>
                <span>R Reset</span>
                <span>Esc Close</span>
              </div>
            </div>

            <div className="gallery-thumbnails">
              {safariActivities[activeActivity].gallery.map((image, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image.url} 
                    alt={`Thumbnail ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="gallery-info">
              <h3>{safariActivities[activeActivity].name}</h3>
              <p className="gallery-caption">
                {safariActivities[activeActivity].gallery[activeImage].caption}
              </p>
              <div className="gallery-nav">
                <button onClick={prevImage} className="nav-button">
                  <FaChevronLeft /> Previous
                </button>
                <span className="image-counter">
                  {activeImage + 1} / {safariActivities[activeActivity].gallery.length}
                </span>
                <button onClick={nextImage} className="nav-button">
                  Next <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SerengetiPark; 