import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaHiking, FaLandmark,
  FaBinoculars, FaCheck, FaUsers, FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const Rumanyika = () => {
  const parkInfo = {
    name: "Rumanyika-Karagwe National Park",
    tagline: "Historical Landscapes and Natural Beauty",
    description: `Rumanyika-Karagwe National Park combines historical significance with 
    natural beauty, featuring ancient kingdom sites, diverse wildlife, and spectacular 
    landscapes.`,
    
    highlights: [
      "Historical sites",
      "Cultural heritage",
      "Scenic landscapes",
      "Wildlife corridors",
      "Bird diversity",
      "Traditional kingdoms"
    ],

    activities: [
      {
        name: "Historical Tours",
        description: "Visit ancient kingdom sites and cultural landmarks",
        duration: "3-4 hours",
        difficulty: "Easy"
      },
      {
        name: "Game Viewing",
        description: "Wildlife spotting in natural habitats",
        duration: "4-6 hours",
        difficulty: "Moderate"
      }
    ],

    wildlife: {
      mammals: [
        "Elephants",
        "Buffalo",
        "Various Antelope Species",
        "Primates"
      ],
      birds: [
        "Raptors",
        "Forest Birds",
        "Grassland Species"
      ]
    }
  };

  // Return JSX similar to BurigiChato structure
};

export default Rumanyika; 