import React from 'react';
import { 
  FaLeaf, FaPaw, FaTree, FaClock, FaMapMarkerAlt, FaCalendarAlt,
  FaTemperatureHigh, FaCloudRain, FaCamera, FaShip, FaFish,
  FaWater, FaBinoculars, FaCheck, FaUsers, FaCalendarCheck, FaWhatsapp
} from 'react-icons/fa';
import TrailMap from '../../../components/TrailMap';
import ParkGallery from '../../../components/ParkGallery';
import { parkImages } from '../../../config/images';
import './WesternParks.css';

const Rubondo = () => {
  const parkInfo = {
    name: "Rubondo Island National Park",
    tagline: "Lake Victoria's Island Paradise",
    description: `Rubondo Island National Park is a unique water-locked ecosystem in Lake Victoria, 
    offering pristine forests, diverse wildlife, and excellent bird watching opportunities. This 
    hidden gem combines the thrill of forest exploration with the serenity of lake adventures.`,
    
    highlights: [
      "Chimpanzee habituation",
      "Sport fishing",
      "Bird watching paradise",
      "Forest walks",
      "Lake Victoria activities",
      "Pristine beaches"
    ],

    activities: [
      {
        name: "Sport Fishing",
        description: "World-class Nile Perch fishing in Lake Victoria",
        duration: "Half/Full day",
        difficulty: "Moderate",
        bestTime: "Early morning/Late afternoon",
        price: "From $120 per person",
        includes: ["Fishing equipment", "Expert guide", "Boat", "Refreshments"]
      },
      {
        name: "Chimpanzee Tracking",
        description: "Track semi-habituated chimps in forest habitat",
        duration: "3-4 hours",
        difficulty: "Moderate",
        includes: ["Guide", "Water", "Tracking permits"]
      },
      {
        name: "Bird Watching",
        description: "Observe diverse water and forest birds",
        duration: "2-3 hours",
        difficulty: "Easy",
        includes: ["Bird guide", "Binoculars", "Species checklist"]
      }
    ],

    trails: [
      {
        name: "Forest Loop Trail",
        distance: "5 km",
        difficulty: "Moderate",
        description: "Circular trail through pristine forest",
        startPoint: [31.8676, -2.3684],
        elevation: "100m gain",
        type: "Loop",
        features: ["Forest canopy", "Wildlife viewing", "Bird spots"],
        waypoints: [
          {
            name: "Canopy Lookout",
            coordinates: [31.8690, -2.3690],
            description: "Elevated viewing point"
          }
        ]
      },
      {
        name: "Coastal Trail",
        distance: "3 km",
        difficulty: "Easy",
        description: "Scenic walk along Lake Victoria shore",
        startPoint: [31.8650, -2.3670],
        type: "Linear",
        features: ["Beach views", "Fishing spots", "Bird watching"]
      }
    ],

    pointsOfInterest: [
      {
        name: "Fish Landing Site",
        coordinates: [31.8650, -2.3670],
        type: "Facility",
        description: "Main fishing and boat launch area"
      },
      {
        name: "Chimp Forest",
        coordinates: [31.8690, -2.3690],
        type: "Wildlife",
        description: "Primary chimpanzee habitat"
      },
      {
        name: "Bird Paradise",
        coordinates: [31.8670, -2.3680],
        type: "Wildlife",
        description: "Prime bird watching location"
      }
    ],

    practicalInfo: {
      bestTime: {
        peak: "June to August (Dry Season)",
        shoulder: "December to February",
        avoid: "March to May (Heavy rains)"
      },
      climate: {
        drySeasonTemp: "22-28°C",
        wetSeasonTemp: "24-30°C",
        rainfall: "Heaviest from March to May",
        humidity: "Moderate to high"
      },
      gettingThere: [
        {
          method: "Air",
          details: "Flights to Rubondo airstrip",
          duration: "2.5 hours from Arusha"
        },
        {
          method: "Boat",
          details: "Lake transfer from Kasenda",
          duration: "2-3 hours"
        }
      ],
      accommodation: [
        {
          name: "Rubondo Island Camp",
          type: "Luxury",
          features: ["Lake views", "Full board", "Guided activities"]
        },
        {
          name: "Bandas",
          type: "Mid-range",
          features: ["Self-catering", "Basic facilities"]
        },
        {
          name: "Camping",
          type: "Budget",
          features: ["Designated sites", "Basic amenities"]
        }
      ]
    },

    conservation: {
      significance: `Rubondo Island serves as a crucial sanctuary for endangered species 
      and represents a unique island ecosystem in Lake Victoria. The park plays a vital 
      role in protecting both aquatic and terrestrial wildlife.`,
      initiatives: [
        "Chimpanzee rehabilitation",
        "Fish species protection",
        "Forest conservation",
        "Bird habitat preservation",
        "Community fishing programs"
      ]
    },

    // Add virtualTour and other sections similar to Mahale...
  };

  return (
    <div className="park-page">
      {/* Similar structure to Mahale with components */}
      {/* Include all sections as in Mahale */}
    </div>
  );
};

export default Rubondo; 