import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaFish, FaWater,
  FaBinoculars, FaCheck, FaUsers, FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const Ugalla = () => {
  const parkInfo = {
    name: "Ugalla River National Park",
    tagline: "Wild Rivers and Remote Wilderness",
    description: `A pristine wilderness area along the Ugalla River system, 
    offering exceptional wildlife viewing and fishing opportunities in a 
    remote setting.`,
    
    highlights: [
      "River ecosystem",
      "Sport fishing",
      "Remote safaris",
      "Bird diversity",
      "Pristine wilderness",
      "Authentic experience"
    ],

    activities: [
      {
        name: "Sport Fishing",
        description: "Fish in pristine river waters",
        duration: "Full day",
        difficulty: "Moderate",
        includes: ["Equipment", "Guide", "Boat", "Permits"]
      },
      {
        name: "Game Drives",
        description: "Explore remote wilderness",
        duration: "Full day",
        difficulty: "Challenging",
        includes: ["4x4 vehicle", "Expert guide", "Supplies"]
      }
    ],

    trails: [
      {
        name: "River Circuit",
        distance: "12 km",
        difficulty: "Challenging",
        description: "Follow the Ugalla River",
        startPoint: [31.8500, -5.5000],
        type: "Circuit",
        features: ["River views", "Wildlife", "Fishing spots"]
      }
    ],

    practicalInfo: {
      bestTime: {
        peak: "June to October",
        avoid: "November to May (Rains)"
      },
      gettingThere: [
        {
          method: "Road",
          details: "4x4 access only",
          duration: "Full day from Tabora"
        }
      ],
      accommodation: [
        {
          name: "Ugalla River Camp",
          type: "Tented Camp",
          features: ["River views", "Basic amenities"]
        }
      ]
    }
  };

  return (
    <div className="park-page">
      {/* Similar structure */}
    </div>
  );
};

export default Ugalla; 