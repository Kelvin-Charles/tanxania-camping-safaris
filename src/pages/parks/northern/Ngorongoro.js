import React, { useState, useEffect, useRef } from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaSun, FaCamera, FaCar, FaBinoculars, FaCalendarAlt, FaCheckCircle, FaInfoCircle, FaWater, FaChevronLeft, FaChevronRight, FaCalendarCheck, FaWhatsapp, FaArrowRight, FaImages, FaTimes, FaSearchPlus, FaSync, FaExpand, FaUsers, FaGlobe, FaMountain, FaFeather, FaClock, FaStar, FaEye } from 'react-icons/fa';
import './Ngorongoro.css';
import { contactInfo } from '../../../config/contact';
import '../../../shared/styles/BookingForm.css';

const Ngorongoro = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeViewpoint, setActiveViewpoint] = useState('crater');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedZone, setSelectedZone] = useState(null);
  const [isZoneHovered, setIsZoneHovered] = useState(null);
  const [activeTab, setActiveTab] = useState('wildlife');
  const [selectedSeason, setSelectedSeason] = useState('dry');
  const [showPhotoTips, setShowPhotoTips] = useState(false);
  const [activeFact, setActiveFact] = useState(0);
  const [viewMode, setViewMode] = useState('aerial');
  const modelViewerRef = useRef(null);

  const viewpoints = [
    {
      id: 'crater',
      name: 'Crater Floor',
      description: 'Experience the vast expanse of the world\'s largest intact caldera',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.2000!2d35.5000!3f180!4f0!5f0.7820865974627469'
    },
    {
      id: 'viewpoint',
      name: 'Crater Rim Viewpoint',
      description: 'Stunning panoramic views of the entire crater',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.1667!2d35.5833!3f220!4f0!5f0.7820865974627469'
    },
    {
      id: 'olduvai',
      name: 'Olduvai Gorge',
      description: 'Visit the cradle of mankind and ancient archaeological sites',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-2.9951!2d35.3506!3f150!4f0!5f0.7820865974627469'
    },
    {
      id: 'maasai',
      name: 'Maasai Village',
      description: 'Experience the rich culture of the Maasai people',
      embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.2500!2d35.4167!3f180!4f0!5f0.7820865974627469'
    }
  ];

  const safariActivities = [
    {
      name: "Crater Game Drive",
      duration: "Full Day",
      difficulty: "Easy",
      season: "Year-round",
      description: "Explore the diverse wildlife in the world's largest intact volcanic caldera.",
      backgroundImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
      price: {
        standard: "From $350 per person",
        luxury: "From $550 per person"
      },
      highlights: [
        "Big Five viewing",
        "Flamingo-lined lake",
        "Dense wildlife population",
        "Stunning crater views"
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
          caption: "Lions in the crater"
        },
        {
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
          caption: "Elephants crossing the plains"
        },
        {
          url: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800",
          caption: "Flamingos at the lake"
        },
        {
          url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
          caption: "Black rhino sighting"
        }
      ]
    },
    {
      name: "Cultural Experience",
      duration: "Half Day",
      difficulty: "Easy",
      season: "Year-round",
      description: "Visit authentic Maasai villages and learn about their traditional way of life.",
      backgroundImage: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800",
      price: {
        standard: "From $150 per person",
        luxury: "From $250 per person (private tour)"
      },
      highlights: [
        "Traditional dances",
        "Village tour",
        "Cultural interaction",
        "Local crafts market"
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800",
          caption: "Maasai warriors performing traditional dance"
        },
        {
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
          caption: "Traditional Maasai village"
        },
        {
          url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
          caption: "Maasai craft market"
        },
        {
          url: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800",
          caption: "Cultural interaction"
        }
      ]
    },
    {
      name: "Olduvai Gorge Tour",
      duration: "Half Day",
      difficulty: "Easy",
      season: "Year-round",
      description: "Visit the cradle of mankind and discover ancient human fossils.",
      backgroundImage: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800",
      price: {
        standard: "From $200 per person",
        luxury: "From $350 per person"
      },
      highlights: [
        "Archaeological sites",
        "Museum visit",
        "Expert guides",
        "Historical insights"
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800",
          caption: "Olduvai Gorge museum"
        },
        {
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
          caption: "Archaeological excavation sites"
        },
        {
          url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
          caption: "Ancient fossil displays"
        },
        {
          url: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800",
          caption: "Historical artifacts"
        }
      ]
    }
  ];

  const wildlifeZones = {
    hippoPool: {
      title: 'Hippo Pool',
      description: 'A natural spring-fed pool where hundreds of hippos gather. The area is also frequented by elephants and various water birds.',
      coordinates: '200,150,50',
      species: [
        'Hippopotamus',
        'African Fish Eagle',
        'Yellow-billed Stork',
        'Egyptian Goose',
        'African Spoonbill'
      ],
      bestTime: 'Early morning and late afternoon',
      tips: 'Bring a telephoto lens for bird photography'
    },
    lionTerritory: {
      title: 'Lion Territory',
      description: 'The crater floor\'s short grass plains are home to several lion prides. This area offers some of the best predator viewing in Africa.',
      coordinates: '300,200,45',
      species: [
        'African Lion',
        'Spotted Hyena',
        'Black-backed Jackal',
        'Thomson\'s Gazelle',
        'Plains Zebra'
      ],
      bestTime: 'Early morning and late afternoon',
      tips: 'Look for vehicles gathered in one spot - often indicates lion presence'
    },
    rhino: {
      title: 'Black Rhino Sanctuary',
      description: 'Protected area within the crater where the endangered black rhinoceros can be spotted grazing in the grasslands.',
      coordinates: '400,250,55',
      species: [
        'Black Rhinoceros',
        'Buffalo',
        'Grant\'s Gazelle',
        'Crowned Crane',
        'Secretary Bird'
      ],
      bestTime: 'Early morning',
      tips: 'Use binoculars to scan the grasslands carefully'
    },
    flamingos: {
      title: 'Lake Magadi',
      description: 'A shallow alkaline lake that attracts thousands of lesser and greater flamingos, creating a stunning pink spectacle.',
      coordinates: '250,300,60',
      species: [
        'Lesser Flamingo',
        'Greater Flamingo',
        'Pelican',
        'Yellow-billed Stork',
        'African Sacred Ibis'
      ],
      bestTime: 'Midday when the light is best',
      tips: 'Best photographed from the crater rim for panoramic views'
    },
    elephantForest: {
      title: 'Lerai Forest',
      description: 'A yellow fever tree forest that provides shelter for the crater\'s elephant population and various forest-dwelling species.',
      coordinates: '350,350,40',
      species: [
        'African Elephant',
        'Vervet Monkey',
        'Bushbuck',
        'Leopard',
        'Various Forest Birds'
      ],
      bestTime: 'Late afternoon',
      tips: 'Look for elephants seeking shade during hot days'
    },
    wetlands: {
      title: 'Mandusi Swamp',
      description: 'A permanent swamp area that provides year-round water and attracts diverse wildlife.',
      coordinates: '450,400,45',
      species: [
        'Cape Buffalo',
        'Waterbuck',
        'Reed Buck',
        'Wattled Crane',
        'African Swamphen'
      ],
      bestTime: 'Early morning and late afternoon',
      tips: 'Great for bird photography, bring insect repellent'
    }
  };

  const seasonalWildlife = {
    dry: {
      title: 'Dry Season (June - October)',
      highlights: [
        'Large predator concentrations around water sources',
        'Easier wildlife spotting due to thin vegetation',
        'Best time for photography with clear skies',
        'Peak flamingo season at Lake Magadi'
      ],
      species: {
        common: ['Lion', 'Elephant', 'Black Rhino', 'Zebra', 'Wildebeest'],
        rare: ['Serval Cat', 'Golden Jackal', 'Bat-eared Fox']
      },
      conditions: {
        visibility: 'Excellent',
        photography: 'Optimal',
        accessibility: 'Very Good'
      }
    },
    wet: {
      title: 'Green Season (November - May)',
      highlights: [
        'Lush green landscapes',
        'Migratory birds present',
        'Newborn animals',
        'Dramatic cloud formations'
      ],
      species: {
        common: ['Flamingo', 'Buffalo', 'Hippo', 'Crowned Crane', 'Waterbuck'],
        rare: ['Leopard', 'Cheetah', 'African Wild Cat']
      },
      conditions: {
        visibility: 'Good',
        photography: 'Challenging but rewarding',
        accessibility: 'Moderate'
      }
    }
  };

  const photographyTips = {
    general: [
      {
        title: 'Best Light Times',
        tip: 'Golden hours (6-8am and 4-6pm) offer the best lighting for wildlife photography',
        icon: 'FaSun'
      },
      {
        title: 'Camera Settings',
        tip: 'Use fast shutter speeds (1/1000+) for wildlife and aperture f/5.6-f/8 for landscapes',
        icon: 'FaCamera'
      },
      {
        title: 'Positioning',
        tip: 'Position yourself with the sun behind you for best lighting on subjects',
        icon: 'FaCompass'
      }
    ],
    locations: [
      {
        spot: 'Crater Rim',
        bestFor: 'Panoramic shots and sunrise/sunset',
        equipment: 'Wide-angle lens (16-35mm)'
      },
      {
        spot: 'Lake Magadi',
        bestFor: 'Flamingo photography',
        equipment: 'Telephoto lens (400mm+)'
      },
      {
        spot: 'Lerai Forest',
        bestFor: 'Elephant portraits',
        equipment: 'Medium telephoto (70-200mm)'
      }
    ]
  };

  const wildlifeFacts = [
    {
      title: "Lion Pride Dynamics",
      description: "The Ngorongoro Crater is home to some of the densest known populations of lions in Africa. The unique enclosed ecosystem allows pride dynamics to be closely studied.",
      image: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee"
    },
    {
      title: "Black Rhino Sanctuary",
      description: "One of the last remaining sanctuaries for endangered black rhinos, the crater provides a safe haven for these magnificent creatures.",
      image: "https://images.unsplash.com/photo-1679678691006-0ad24fae3ab5"
    },
    {
      title: "Hippo Pool Ecosystem",
      description: "The crater's hippo pools support a complex ecosystem, providing vital nutrients for other species and maintaining the wetland balance.",
      image: "https://images.unsplash.com/photo-1674244588361-1a8ac9e4930e"
    },
    {
      title: "Flamingo Flocks",
      description: "Lake Magadi, within the crater, turns pink during certain seasons as thousands of flamingos gather to feed on algae.",
      image: "https://images.unsplash.com/photo-1676461602221-e6043b1a5143"
    }
  ];

  const birdSpecies = [
    {
      name: "Greater Flamingo",
      image: "https://images.unsplash.com/photo-1676461602221-e6043b1a5143",
      description: "Thousands of flamingos gather at Lake Magadi, creating a stunning pink spectacle",
      population: "80%",
      bestSeason: "November to April"
    },
    {
      name: "Crowned Crane",
      image: "https://images.unsplash.com/photo-1675467129869-d7848d2d6a37",
      description: "These majestic birds can often be seen performing their distinctive mating dance on the crater floor",
      population: "65%",
      bestSeason: "Year-round"
    },
    {
      name: "Kori Bustard",
      image: "https://images.unsplash.com/photo-1674828815544-775e1d31910d",
      description: "Africa's heaviest flying bird roams the crater floor grasslands",
      population: "55%",
      bestSeason: "June to October"
    },
    {
      name: "Secretary Bird",
      image: "https://images.unsplash.com/photo-1675889335685-4c67b8766cee",
      description: "These distinctive birds can be seen stalking through the grasslands hunting for prey",
      population: "45%",
      bestSeason: "Year-round"
    }
  ];

  const landscapes = [
    {
      name: "Crater Rim",
      image: "https://images.unsplash.com/photo-1674244588432-7379a0e8c88e",
      description: "The world's largest intact volcanic caldera, stretching 19km across",
      highlights: ["Panoramic Views", "Sunrise Spots", "Cloud Formations"],
      bestTime: "Early Morning"
    },
    {
      name: "Lake Magadi",
      image: "https://images.unsplash.com/photo-1676461602198-9675e3a15fd0",
      description: "A shallow alkaline lake that turns pink with flamingos during wet season",
      highlights: ["Bird Life", "Salt Flats", "Dramatic Colors"],
      bestTime: "Late Afternoon"
    },
    {
      name: "Lerai Forest",
      image: "https://images.unsplash.com/photo-1674828815499-c96c0eef3e88",
      description: "A yellow fever tree forest providing shade for elephants and other wildlife",
      highlights: ["Ancient Trees", "Wildlife Shelter", "Golden Light"],
      bestTime: "Midday"
    },
    {
      name: "Hippo Pool",
      image: "https://images.unsplash.com/photo-1674244588361-1a8ac9e4930e",
      description: "A natural spring-fed pool where hundreds of hippos gather",
      highlights: ["Wildlife Activity", "Water Features", "Bird Life"],
      bestTime: "Early Morning/Late Afternoon"
    }
  ];

  const toggleAutoRotate = () => {
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
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  const openGallery = (activityIndex) => {
    setActiveActivity(activityIndex);
    setActiveImage(0);
    setIsGalleryOpen(true);
  };

  const showWildlifeInfo = (zoneId) => {
    setSelectedZone(zoneId);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaSun':
        return <FaSun />;
      case 'FaCamera':
        return <FaCamera />;
      case 'FaCompass':
        return <FaMapMarkerAlt />;
      default:
        return null;
    }
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setActiveImage((prev) => 
      prev === safariActivities[activeActivity].gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImage((prev) => 
      prev === 0 ? safariActivities[activeActivity].gallery.length - 1 : prev - 1
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Add entrance animation class to cards
    const cards = document.querySelectorAll(`.${tab}-grid > *`);
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.opacity = '0';
      requestAnimationFrame(() => {
        card.style.opacity = '1';
      });
    });
  };

  const handleHotspotClick = (hotspotId) => {
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      switch(hotspotId) {
        case 'hotspot-1':
          modelViewer.cameraOrbit = "0deg 75deg 50%";
          modelViewer.fieldOfView = "30deg";
          break;
        case 'hotspot-2':
          modelViewer.cameraOrbit = "-45deg 65deg 30%";
          modelViewer.fieldOfView = "45deg";
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isGalleryOpen) return;
      
      switch(e.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeGallery();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen, activeActivity]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFact(prev => (prev + 1) % wildlifeFacts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    
    if (modelViewer) {
      modelViewer.addEventListener('load', () => {
        setIsLoading(false);
      });

      modelViewer.addEventListener('progress', (e) => {
        const progressBar = document.querySelector('.update-bar');
        if (progressBar) {
          progressBar.style.width = `${e.detail.totalProgress * 100}%`;
        }
      });

      // Handle camera transitions
      modelViewer.addEventListener('camera-change', () => {
        const progress = document.querySelector('.progress-bar');
        if (progress) {
          progress.classList.add('hide');
        }
      });
    }
  }, []);

  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Ngorongoro Conservation Area</h1>
          <p>The Eighth Wonder of the Natural World</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Ngorongoro</h2>
          <div className="overview-content">
            <div className="overview-grid">
              <div className="overview-text">
                <p className="lead-text">
                  Welcome to the Ngorongoro Conservation Area, a UNESCO World Heritage Site and one of Africa's most remarkable wildlife sanctuaries. Home to the world's largest intact volcanic caldera, this natural amphitheater spans 260 square kilometers and hosts an extraordinary concentration of wildlife.
                </p>
                <div className="overview-features">
                  <div className="feature-item">
                    <FaGlobe className="feature-icon" />
                    <h4>UNESCO Heritage</h4>
                    <p>Recognized globally for its outstanding universal value</p>
                  </div>
                  <div className="feature-item">
                    <FaMountain className="feature-icon" />
                    <h4>Volcanic Wonder</h4>
                    <p>World's largest unflooded and unbroken caldera</p>
                  </div>
                  <div className="feature-item">
                    <FaPaw className="feature-icon" />
                    <h4>Wildlife Haven</h4>
                    <p>Home to over 25,000 large animals</p>
                  </div>
                </div>
              </div>
              <div className="overview-stats">
                <div className="stat-card">
                  <span className="stat-number">260</span>
                  <span className="stat-label">Square Kilometers</span>
                  <span className="stat-desc">Crater Floor Area</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">2,000</span>
                  <span className="stat-label">Meters Deep</span>
                  <span className="stat-desc">Crater Depth</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">30,000+</span>
                  <span className="stat-label">Animals</span>
                  <span className="stat-desc">Resident Wildlife</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Bird Species</span>
                  <span className="stat-desc">Recorded Species</span>
                </div>
              </div>
            </div>
            
            <div className="crater-highlights">
              <div className="highlight-card">
                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800" alt="Wildlife" />
                <div className="highlight-content">
                  <h3>Rich Biodiversity</h3>
                  <p>Experience one of the highest densities of wildlife in Africa</p>
                </div>
              </div>
              <div className="highlight-card">
                <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800" alt="Maasai Culture" />
                <div className="highlight-content">
                  <h3>Cultural Heritage</h3>
                  <p>Home to traditional Maasai communities</p>
                </div>
              </div>
              <div className="highlight-card">
                <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=800" alt="Landscape" />
                <div className="highlight-content">
                  <h3>Dramatic Landscapes</h3>
                  <p>Witness breathtaking views and unique geology</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-attractions">
        <div className="container">
          <h2>Wildlife & Attractions</h2>
          
          <div className="wildlife-categories">
            <div className="category-tabs">
              <button 
                className={`tab-btn ${activeTab === 'wildlife' ? 'active' : ''}`}
                onClick={() => handleTabChange('wildlife')}
              >
                <FaPaw />
                <span>Wildlife</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'birds' ? 'active' : ''}`}
                onClick={() => handleTabChange('birds')}
              >
                <FaFeather />
                <span>Birds</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'landscapes' ? 'active' : ''}`}
                onClick={() => handleTabChange('landscapes')}
              >
                <FaMountain />
                <span>Landscapes</span>
              </button>
            </div>

            <div className="category-content">
              {activeTab === 'wildlife' && (
                <div className="wildlife-showcase">
                  <div className="wildlife-hero">
                    <video autoPlay muted loop className="hero-video">
                      <source src="/videos/ngorongoro-wildlife.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay">
                      <h3>Africa's Eden</h3>
                      <p>Home to over 25,000 large animals in one of the world's most pristine wildlife sanctuaries</p>
                    </div>
                  </div>

          <div className="wildlife-grid">
            <div className="wildlife-card">
                      <div className="card-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee" alt="Ngorongoro Lions" />
                      </div>
                      <div className="card-content">
                        <h4>Lions</h4>
                        <p>The crater hosts one of Africa's densest lion populations</p>
                        <div className="population-indicator">
                          <div className="indicator-bar" style={{width: '85%'}}></div>
                          <span>Population Density: High</span>
                        </div>
                      </div>
                    </div>

                    <div className="wildlife-card">
                      <div className="card-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1679678691006-0ad24fae3ab5" alt="Ngorongoro Black Rhino" />
                      </div>
                      <div className="card-content">
                        <h4>Black Rhino</h4>
                        <p>One of the last sanctuaries for endangered black rhinos</p>
                        <div className="population-indicator">
                          <div className="indicator-bar" style={{width: '45%'}}></div>
                          <span>Population Density: Moderate</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="wildlife-card">
                      <div className="card-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1674244588361-1a8ac9e4930e" alt="Ngorongoro Hippos" />
                      </div>
                      <div className="card-content">
                        <h4>Hippos</h4>
                        <p>Large pods gather in the crater's pools and wetlands</p>
                        <div className="population-indicator">
                          <div className="indicator-bar" style={{width: '75%'}}></div>
                          <span>Population Density: High</span>
                        </div>
                      </div>
                    </div>

                    <div className="wildlife-card">
                      <div className="card-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1676461602221-e6043b1a5143" alt="Ngorongoro Flamingos" />
                      </div>
                      <div className="card-content">
                        <h4>Flamingos</h4>
                        <p>Lake Magadi turns pink with thousands of flamingos</p>
                        <div className="population-indicator">
                          <div className="indicator-bar" style={{width: '90%'}}></div>
                          <span>Population Density: Very High</span>
              </div>
              </div>
            </div>

            <div className="wildlife-card">
                      <div className="card-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1674828815544-775e1d31910d" alt="Ngorongoro Elephants" />
                      </div>
                      <div className="card-content">
                        <h4>African Elephants</h4>
                        <p>Large herds roam the crater floor and forest areas</p>
                        <div className="population-indicator">
                          <div className="indicator-bar" style={{width: '70%'}}></div>
                          <span>Population Density: High</span>
              </div>
              </div>
            </div>

            <div className="wildlife-card">
                      <div className="card-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1674244588432-7379a0e8c88e" alt="Ngorongoro Buffalo" />
                      </div>
                      <div className="card-content">
                        <h4>Cape Buffalo</h4>
                        <p>Large herds graze on the crater's grasslands</p>
                        <div className="population-indicator">
                          <div className="indicator-bar" style={{width: '80%'}}></div>
                          <span>Population Density: High</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wildlife-facts">
                    <div className="fact-carousel">
                      {wildlifeFacts.map((fact, index) => (
                        <div key={index} className={`fact-slide ${index === activeFact ? 'active' : ''}`}>
                          <img src={fact.image} alt={fact.title} />
                          <div className="fact-content">
                            <h4>{fact.title}</h4>
                            <p>{fact.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="fact-navigation">
                      <button 
                        className="nav-btn prev" 
                        onClick={() => setActiveFact(prev => prev === 0 ? wildlifeFacts.length - 1 : prev - 1)}
                      >
                        <FaChevronLeft />
                      </button>
                      <div className="fact-indicators">
                        {wildlifeFacts.map((_, index) => (
                          <button
                            key={index}
                            className={`indicator ${index === activeFact ? 'active' : ''}`}
                            onClick={() => setActiveFact(index)}
                          />
                        ))}
                      </div>
                      <button 
                        className="nav-btn next"
                        onClick={() => setActiveFact(prev => (prev + 1) % wildlifeFacts.length)}
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'birds' && (
                <div className="birds-showcase">
                  <div className="birds-hero">
                    <img src="https://images.unsplash.com/photo-1572381823924-ff1c7b3f9950" alt="Birds of Ngorongoro" />
                    <div className="hero-overlay">
                      <h3>Birding Paradise</h3>
                      <p>Over 500 bird species call the crater their home</p>
                    </div>
                  </div>
                  
                  <div className="birds-grid">
                    {birdSpecies.map((bird, index) => (
                      <div key={index} className="bird-card">
                        <img src={bird.image} alt={bird.name} />
                        <div className="card-content">
                          <h4>{bird.name}</h4>
                          <p>{bird.description}</p>
                          <div className="bird-info">
                            <div className="population-indicator">
                              <div className="indicator-bar" style={{width: bird.population}}></div>
                              <span>Abundance: {bird.population}</span>
                            </div>
                            <div className="season-tag">Best: {bird.bestSeason}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'landscapes' && (
                <div className="landscapes-showcase">
                  <div className="landscapes-hero">
                    <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa" alt="Ngorongoro Landscapes" />
                    <div className="hero-overlay">
                      <h3>Natural Wonder</h3>
                      <p>A UNESCO World Heritage Site with breathtaking geological features</p>
                    </div>
                  </div>
                  
                  <div className="landscapes-grid">
                    {landscapes.map((landscape, index) => (
                      <div key={index} className="landscape-card">
                        <img src={landscape.image} alt={landscape.name} />
                        <div className="card-content">
                          <h4>{landscape.name}</h4>
                          <p>{landscape.description}</p>
                          <div className="highlights-list">
                            {landscape.highlights.map((highlight, i) => (
                              <span key={i} className="highlight-tag">{highlight}</span>
                            ))}
                          </div>
                          <div className="best-time">
                            <FaClock /> Best Time: {landscape.bestTime}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-spotting-guide">
        <div className="container">
          <h2>Wildlife Spotting Guide</h2>
          
          <div className="season-selector">
            <button 
              className={`season-btn ${selectedSeason === 'dry' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('dry')}
            >
              <FaSun />
              <span>Dry Season</span>
              <small>June - October</small>
            </button>
            <button 
              className={`season-btn ${selectedSeason === 'wet' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('wet')}
            >
              <FaLeaf />
              <span>Green Season</span>
              <small>November - May</small>
            </button>
          </div>

          <div className="spotting-guide-content">
            <div className="season-info">
              <h3>{seasonalWildlife[selectedSeason].title}</h3>
              <div className="season-highlights">
                {seasonalWildlife[selectedSeason].highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item" data-aos="fade-up" data-aos-delay={index * 100}>
                    <FaCheckCircle />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="species-grid">
                <div className="common-species">
                  <h4>Commonly Spotted</h4>
                  <div className="species-list">
                    {seasonalWildlife[selectedSeason].species.common.map((species, index) => (
                      <div key={index} className="species-tag" data-aos="zoom-in" data-aos-delay={index * 50}>
                        <FaPaw />
                        <span>{species}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rare-species">
                  <h4>Special Sightings</h4>
                  <div className="species-list">
                    {seasonalWildlife[selectedSeason].species.rare.map((species, index) => (
                      <div key={index} className="species-tag rare" data-aos="zoom-in" data-aos-delay={index * 50}>
                        <FaStar />
                        <span>{species}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="conditions-panel">
                <h4>Viewing Conditions</h4>
                <div className="conditions-grid">
                  {Object.entries(seasonalWildlife[selectedSeason].conditions).map(([key, value], index) => (
                    <div key={index} className="condition-card" data-aos="flip-left" data-aos-delay={index * 100}>
                      <div className="condition-icon">
                        {key === 'visibility' && <FaEye />}
                        {key === 'photography' && <FaCamera />}
                        {key === 'accessibility' && <FaCar />}
                      </div>
                      <h5>{key}</h5>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="interactive-map">
              <h3>Wildlife Zones</h3>
              <div className="map-container">
                <div className="map-image">
                  {/* Add your map image here */}
                  {Object.keys(wildlifeZones).map(zone => (
                    <div
                      key={zone}
                      className={`zone-marker ${selectedZone === zone ? 'active' : ''} ${isZoneHovered === zone ? 'hovered' : ''}`}
                      style={{ top: wildlifeZones[zone].coordinates.split(',')[0] + 'px', left: wildlifeZones[zone].coordinates.split(',')[1] + 'px' }}
                      onMouseEnter={() => setIsZoneHovered(zone)}
                      onMouseLeave={() => setIsZoneHovered(null)}
                      onClick={() => setSelectedZone(zone)}
                    >
                      <div className="marker-dot"></div>
                      <div className="zone-tooltip">
                        <h4>{wildlifeZones[zone].title}</h4>
                        <p>{wildlifeZones[zone].description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Experiences & Activities</h2>
          <div className="activities-grid">
            {safariActivities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-image" style={{backgroundImage: `url(${activity.backgroundImage})`}}>
                  <div className="activity-overlay">
                    <button className="view-gallery-btn" onClick={() => openGallery(index)}>
                      <FaImages /> View Gallery
                    </button>
                  </div>
                </div>
                <div className="activity-content">
                  <h3>{activity.name}</h3>
                  <div className="activity-details">
                    <span><FaCalendarAlt /> {activity.duration}</span>
                    <span><FaCheckCircle /> {activity.difficulty}</span>
                  </div>
                  <p>{activity.description}</p>
                  <div className="price-range">
                    <div className="price-option">
                      <span>Standard</span>
                      <strong>{activity.price.standard}</strong>
                    </div>
                    <div className="price-option">
                      <span>Luxury</span>
                      <strong>{activity.price.luxury}</strong>
                    </div>
                  </div>
                  <div className="highlights">
                    <h4>Highlights</h4>
                    <ul>
                      {activity.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Best Time to Visit Section */}
      <section className="best-time-section">
        <div className="container">
          <h2>Best Time to Visit</h2>
          <div className="season-timeline">
            <div className="season-card">
              <div className="season-header dry">
                <h3>Dry Season</h3>
                <span>June - October</span>
              </div>
              <ul className="season-features">
                <li>Best wildlife viewing</li>
                <li>Clear skies for photography</li>
                <li>Comfortable temperatures</li>
                <li>Less challenging roads</li>
              </ul>
            </div>
            <div className="season-card">
              <div className="season-header wet">
                <h3>Green Season</h3>
                <span>November - May</span>
              </div>
              <ul className="season-features">
                <li>Lush landscapes</li>
                <li>Bird watching paradise</li>
                <li>Lower rates</li>
                <li>Fewer tourists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="conservation-section">
        <div className="container">
          <h2>Conservation Efforts</h2>
          <div className="conservation-grid">
            <div className="conservation-card">
              <div className="conservation-icon">
                <FaPaw />
              </div>
              <h3>Wildlife Protection</h3>
              <p>Anti-poaching initiatives and wildlife monitoring programs to protect endangered species.</p>
            </div>
            <div className="conservation-card">
              <div className="conservation-icon">
                <FaLeaf />
              </div>
              <h3>Ecosystem Management</h3>
              <p>Sustainable management of the crater ecosystem and surrounding highlands.</p>
            </div>
            <div className="conservation-card">
              <div className="conservation-icon">
                <FaUsers />
              </div>
              <h3>Community Support</h3>
              <p>Working with local Maasai communities to preserve cultural heritage and sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Crater Visualization */}
      <section className="crater-3d-section">
        <div className="container">
          <h2>Explore the Crater in 3D</h2>
          <div className="crater-3d-content">
            <div className="crater-3d-controls">
              <button 
                className={`view-control-btn ${viewMode === 'aerial' ? 'active' : ''}`}
                onClick={() => setViewMode('aerial')}
              >
                <FaGlobe /> Aerial View
              </button>
              <button 
                className={`view-control-btn ${viewMode === 'ground' ? 'active' : ''}`}
                onClick={() => setViewMode('ground')}
              >
                <FaTree /> Ground Level
              </button>
              <button 
                className={`view-control-btn ${viewMode === 'rim' ? 'active' : ''}`}
                onClick={() => setViewMode('rim')}
              >
                <FaMountain /> Crater Rim
              </button>
            </div>

            <div className="crater-3d-viewer">
              <div className="viewer-container">
                <model-viewer
                  ref={modelViewerRef}
                  src="/models/ngorongoro-crater.glb"
                  alt="3D model of Ngorongoro Crater"
                  camera-controls
                  auto-rotate
                  rotation-per-second="30deg"
                  camera-orbit={viewMode === 'aerial' ? "0deg 90deg 100%" : 
                               viewMode === 'ground' ? "0deg 0deg 100%" : 
                               "45deg 45deg 100%"}
                  exposure="1"
                  shadow-intensity="1"
                  environment-image="/images/ngorongoro-hdri.hdr"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  ios-src="/models/ngorongoro-crater.usdz"
                >
                  <button slot="ar-button" className="ar-button">
                    <FaExpand /> View in AR
                  </button>

                  <div className={`progress-bar ${!isLoading ? 'hide' : ''}`}>
                    <div className="update-bar"></div>
                  </div>

                  <button 
                    className="hotspot" 
                    slot="hotspot-1" 
                    data-position="-1m 2m 1m"
                    onClick={() => handleHotspotClick('hotspot-1')}
                  >
                    <div className="hotspot-annotation">Crater Floor</div>
                  </button>
                  <button 
                    className="hotspot" 
                    slot="hotspot-2" 
                    data-position="2m 1m 0.5m"
                    onClick={() => handleHotspotClick('hotspot-2')}
                  >
                    <div className="hotspot-annotation">Lake Magadi</div>
                  </button>
                </model-viewer>
              </div>

              <div className="viewer-info">
                <div className="info-card">
                  <h3>Interactive Controls</h3>
                  <ul className="control-instructions">
                    <li><FaSync /> Rotate: Click and drag</li>
                    <li><FaSearchPlus /> Zoom: Scroll or pinch</li>
                    <li><FaPaw /> Move: Right-click and drag</li>
                    <li><FaExpand /> AR View: Click AR button</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section">
        <div className="container">
          <h2>Plan Your Visit</h2>
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
                <div className="form-group select-wrapper">
                  <select required>
                    <option value="">Select Activity</option>
                    <option value="crater">Crater Game Drive</option>
                    <option value="cultural">Cultural Experience</option>
                    <option value="olduvai">Olduvai Gorge Tour</option>
                    <option value="custom">Custom Tour</option>
                  </select>
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

      <section className="seasonal-wildlife-section">
        <div className="container">
          <h2>Seasonal Wildlife Guide</h2>
          <div className="season-tabs">
            <button 
              className={`season-tab ${selectedSeason === 'dry' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('dry')}
            >
              Dry Season
            </button>
            <button 
              className={`season-tab ${selectedSeason === 'wet' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('wet')}
            >
              Green Season
            </button>
          </div>
          
          <div className="season-content">
            <h3>{seasonalWildlife[selectedSeason].title}</h3>
            <div className="season-highlights">
              <div className="highlights-list">
                <h4>Highlights</h4>
                <ul>
                  {seasonalWildlife[selectedSeason].highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item fade-in">
                      <FaCheckCircle className="highlight-icon" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="species-overview">
                <div className="common-species">
                  <h4>Common Sightings</h4>
                  <div className="species-tags">
                    {seasonalWildlife[selectedSeason].species.common.map((species, index) => (
                      <span key={index} className="species-tag">{species}</span>
                    ))}
                  </div>
                </div>
                <div className="rare-species">
                  <h4>Special Sightings</h4>
                  <div className="species-tags rare">
                    {seasonalWildlife[selectedSeason].species.rare.map((species, index) => (
                      <span key={index} className="species-tag rare">{species}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Photography Tips Section */}
      <section className="photography-guide-section">
        <div className="container">
          <h2>Photography Guide</h2>
          <div className="photo-tips-grid">
            {photographyTips.general.map((tip, index) => (
              <div key={index} className="photo-tip-card">
                <div className="tip-icon">
                  {getIcon(tip.icon)}
                </div>
                <h4>{tip.title}</h4>
                <p>{tip.tip}</p>
              </div>
            ))}
            </div>
          
          <div className="location-specific-tips">
            <h3>Location-Specific Tips</h3>
            <div className="locations-grid">
              {photographyTips.locations.map((location, index) => (
                <div key={index} className="location-card">
                  <h4>{location.spot}</h4>
                  <p><strong>Best For:</strong> {location.bestFor}</p>
                  <p><strong>Recommended:</strong> {location.equipment}</p>
            </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ngorongoro; 