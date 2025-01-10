import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaHiking, FaWater,
  FaBinoculars, FaCheck, FaUsers, FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const IbandaKyerwa = () => {
  const parkInfo = {
    name: "Ibanda-Kyerwa National Park",
    tagline: "Untamed Wilderness of Western Tanzania",
    description: `A newly established park protecting vital wildlife corridors 
    and offering visitors an authentic, off-the-beaten-path safari experience.`,
    
    highlights: [
      "Remote wilderness",
      "Diverse wildlife",
      "River systems",
      "Cultural heritage",
      "Pristine landscapes",
      "Traditional communities"
    ],

    activities: [
      {
        name: "Game Drives",
        description: "Explore remote wilderness areas",
        duration: "Full day",
        difficulty: "Moderate",
        includes: ["4x4 vehicle", "Guide", "Packed lunch"]
      },
      {
        name: "Cultural Visits",
        description: "Visit local communities",
        duration: "Half day",
        difficulty: "Easy",
        includes: ["Local guide", "Cultural demonstrations"]
      }
    ],

    trails: [
      {
        name: "River Trail",
        distance: "8 km",
        difficulty: "Moderate",
        description: "Follow the river system",
        startPoint: [31.0000, -1.2000],
        type: "Linear",
        features: ["River views", "Wildlife spotting", "Bird watching"]
      }
    ],

    practicalInfo: {
      bestTime: {
        peak: "June to September",
        avoid: "March to May"
      },
      gettingThere: [
        {
          method: "Road",
          details: "Access from Bukoba",
          duration: "3-4 hours"
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

export default IbandaKyerwa; 