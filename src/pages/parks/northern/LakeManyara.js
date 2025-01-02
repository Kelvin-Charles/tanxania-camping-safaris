import React, { useState } from 'react';
import './LakeManyara.css';
import {
  FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, 
  FaHiking, FaBinoculars, FaCompass, FaCalendarAlt, FaSun, 
  FaCloudRain, FaMountain, FaDove, FaInfoCircle, FaMapMarked,
  FaUsers, FaClock, FaRoute, FaShieldAlt
} from 'react-icons/fa';

const LakeManyara = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Park Statistics
  const parkStats = [
    {
      number: "330",
      label: "Square Kilometers",
      description: "Total park area including the lake"
    },
    {
      number: "1,000+",
      label: "Bird Species",
      description: "Including flamingos and pelicans"
    },
    {
      number: "2-3",
      label: "Days Recommended",
      description: "Ideal duration for visit"
    },
    {
      number: "670",
      label: "Meters Elevation",
      description: "Above sea level"
    }
  ];

  // Wildlife Data
  const wildlife = [
    {
      name: "Tree-Climbing Lions",
      image: "https://images.unsplash.com/photo-1545406213-c22c0c5af303",
      description: "Lake Manyara is famous for its tree-climbing lions, a behavior rarely seen in other locations.",
      bestTime: "Early morning and late afternoon"
    },
    {
      name: "Pink Flamingos",
      image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75",
      description: "Thousands of flamingos gather at the lake, creating a stunning pink spectacle.",
      bestTime: "Year-round, best during wet season"
    },
    {
      name: "African Elephants",
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174",
      description: "Large herds of elephants can be seen in the groundwater forest.",
      bestTime: "Dry season (June to October)"
    }
  ];

  // Activities
  const activities = [
    {
      title: "Game Drives",
      icon: <FaRoute />,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      description: "Explore diverse landscapes and spot wildlife in open-sided vehicles.",
      duration: "3-4 hours",
      difficulty: "Easy"
    },
    {
      title: "Bird Watching",
      icon: <FaBinoculars />,
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53",
      description: "Over 400 species of birds make this park a bird-watcher's paradise.",
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      title: "Walking Safari",
      icon: <FaHiking />,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      description: "Get close to nature with guided walks through the forest.",
      duration: "2-3 hours",
      difficulty: "Moderate"
    }
  ];

  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Lake Manyara National Park</h1>
          <p>Where Lions Climb Trees and Flamingos Paint the Lake Pink</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>About Lake Manyara</h2>
              <p>Lake Manyara National Park is a compact yet diverse ecosystem where the Great Rift Valley escarpment meets an ancient soda lake. The park is renowned for its tree-climbing lions, vast flocks of flamingos, and diverse landscapes ranging from dense groundwater forest to acacia woodlands.</p>
              
              <div className="key-stats">
                {parkStats.map((stat, index) => (
                  <div className="stat-item" key={index}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                    <p>{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801" alt="Lake Manyara Landscape" />
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Incredible Wildlife</h2>
          <div className="wildlife-grid">
            {wildlife.map((animal, index) => (
              <div className="wildlife-card" key={index}>
                <div className="wildlife-image">
                  <img src={animal.image} alt={animal.name} />
                </div>
                <div className="wildlife-info">
                  <h3><FaPaw /> {animal.name}</h3>
                  <p>{animal.description}</p>
                  <div className="best-time">
                    <FaClock /> Best time: {animal.bestTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Park Activities</h2>
          <div className="activity-cards">
            {activities.map((activity, index) => (
              <div className="activity-card" key={index}>
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                </div>
                <div className="activity-content">
                  <h3>{activity.icon} {activity.title}</h3>
                  <p>{activity.description}</p>
                  <div className="activity-details">
                    <span><FaClock /> {activity.duration}</span>
                    <span><FaShieldAlt /> {activity.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="visit-info">
        <div className="container">
          <h2>Essential Visit Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaCalendarAlt />
              <h3>Best Time to Visit</h3>
              <p>Dry season (June to October) for wildlife viewing</p>
              <p>Wet season (November to May) for bird watching</p>
            </div>
            <div className="info-card">
              <FaClock />
              <h3>Park Hours</h3>
              <p>6:00 AM to 6:00 PM daily</p>
              <p>Night game drives available with special permission</p>
            </div>
            <div className="info-card">
              <FaRoute />
              <h3>Getting There</h3>
              <p>126 km west of Arusha</p>
              <p>Accessible by road or air (Manyara Airstrip)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LakeManyara; 