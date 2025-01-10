import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaWater,
  FaBinoculars, FaCheck, FaUsers, FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const SaananeIsland = () => {
  const parkInfo = {
    name: "Saanane Island National Park",
    tagline: "Tanzania's Smallest National Park - A Lake Victoria Gem",
    description: `Saanane Island National Park, located in Lake Victoria near Mwanza city, 
    is Tanzania's smallest national park. This unique island sanctuary offers visitors an 
    intimate wildlife experience combined with spectacular views of Lake Victoria.`,
    
    highlights: [
      "Lake Victoria panoramas",
      "Rich bird diversity",
      "Small wildlife sanctuary",
      "Rock formations",
      "City proximity",
      "Educational center"
    ],

    activities: [
      {
        name: "Nature Walks",
        description: "Guided walks around the island's trails",
        duration: "1-2 hours",
        difficulty: "Easy"
      },
      {
        name: "Bird Watching",
        description: "Observe diverse water and land birds",
        duration: "2-3 hours",
        difficulty: "Easy"
      },
      {
        name: "Rock Climbing",
        description: "Explore unique rock formations",
        duration: "1-2 hours",
        difficulty: "Moderate"
      },
      {
        name: "Educational Tours",
        description: "Learn about island ecology and conservation",
        duration: "2 hours",
        difficulty: "Easy"
      }
    ],

    wildlife: {
      mammals: [
        "De-brazza's Monkeys",
        "Rock Hyrax",
        "Impala",
        "Tortoises",
        "Small mammals"
      ],
      birds: [
        "African Fish Eagles",
        "Herons",
        "Kingfishers",
        "Cormorants",
        "Weaverbirds"
      ],
      reptiles: [
        "Monitor Lizards",
        "Agama Lizards",
        "Various Snake Species"
      ]
    },

    practicalInfo: {
      bestTime: "Year-round",
      climate: {
        drySeasonTemp: "22-30°C",
        wetSeasonTemp: "24-32°C",
        rainfall: "March to May, October to December"
      },
      gettingThere: [
        "Boat transfer from Mwanza",
        "Walking distance from city center",
        "Regular ferry service",
        "Private boat hire"
      ],
      accommodation: [
        "Mwanza city hotels",
        "Picnic facilities",
        "Day trip destination",
        "No overnight stays on island"
      ]
    }
  };

  // Return JSX similar to BurigiChato structure
};

export default SaananeIsland; 