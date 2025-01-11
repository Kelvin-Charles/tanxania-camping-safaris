import React, { useState, useMemo } from 'react';
import { FaTimes, FaCalendarAlt, FaUsers, FaSun, FaMapMarkerAlt, FaCheck, FaInfoCircle, FaArrowRight, FaCompass, FaMapMarked, FaRoute, FaUmbrellaBeach, FaTree, FaMountain, FaWater, FaHippo, FaStar } from 'react-icons/fa';
import './CustomTripBuilder.css';

const destinations = {
  northern: {
    title: "Northern Circuit",
    parks: [
      {
        id: "serengeti",
        name: "Serengeti National Park",
        description: "Home to the Great Migration and endless plains",
        activities: ["Game drives", "Hot air balloon safaris", "Walking safaris"],
        recommendedDays: "3-5",
        bestTime: "June-October",
        highlights: ["Great Migration", "Big Five", "Endless Plains", "Kopjes", "Mara River"]
      },
      {
        id: "ngorongoro",
        name: "Ngorongoro Conservation Area",
        description: "World's largest intact volcanic caldera",
        activities: ["Game drives", "Cultural visits", "Hiking"],
        recommendedDays: "2-3",
        bestTime: "June-October",
        highlights: ["Crater Floor Safari", "Big Five", "Maasai Culture", "Olduvai Gorge"]
      },
      {
        id: "tarangire",
        name: "Tarangire National Park",
        description: "Famous for its ancient baobab trees and elephants",
        activities: ["Game drives", "Walking safaris", "Night safaris"],
        recommendedDays: "2-3",
        bestTime: "July-October",
        highlights: ["Elephant Herds", "Ancient Baobabs", "River Valley", "Bird Species"]
      },
      {
        id: "manyara",
        name: "Lake Manyara National Park",
        description: "Tree-climbing lions and flamingo-lined lake",
        activities: ["Game drives", "Bird watching", "Canopy walkway"],
        recommendedDays: "1-2",
        bestTime: "July-October",
        highlights: ["Tree-climbing Lions", "Flamingos", "Ground Water Forest", "Lake Views"]
      },
      {
        id: "kilimanjaro",
        name: "Kilimanjaro National Park",
        description: "Africa's highest peak and snow-capped mountain",
        activities: ["Mountain climbing", "Nature walks", "Cultural visits"],
        recommendedDays: "5-9",
        bestTime: "January-March, June-October",
        highlights: ["Summit Climb", "Diverse Climate Zones", "Unique Flora", "Spectacular Views"]
      },
      {
        id: "arusha",
        name: "Arusha National Park",
        description: "Home to Mount Meru and diverse wildlife",
        activities: ["Walking safaris", "Canoeing", "Mountain climbing"],
        recommendedDays: "1-2",
        bestTime: "June-February",
        highlights: ["Mount Meru", "Momella Lakes", "Colobus Monkeys", "Crater Views"]
      }
    ]
  },
  southern: {
    title: "Southern Circuit",
    parks: [
      {
        id: "nyerere",
        name: "Nyerere (Selous) National Park",
        description: "Africa's largest game reserve",
        activities: ["Boat safaris", "Game drives", "Walking safaris"],
        recommendedDays: "3-5",
        bestTime: "June-October",
        highlights: ["Rufiji River", "Wild Dogs", "Boat Safaris", "Remote Wilderness"]
      },
      {
        id: "ruaha",
        name: "Ruaha National Park",
        description: "Tanzania's largest national park",
        activities: ["Game drives", "Walking safaris", "Bird watching"],
        recommendedDays: "3-4",
        bestTime: "June-October",
        highlights: ["Large Elephant Herds", "Greater Kudu", "Ruaha River", "Predator Sightings"]
      },
      {
        id: "mikumi",
        name: "Mikumi National Park",
        description: "Tanzania's fourth-largest national park",
        activities: ["Game drives", "Walking safaris", "Bird watching"],
        recommendedDays: "2-3",
        bestTime: "June-October",
        highlights: ["Mkata Plains", "Wildlife Corridor", "Accessible Location", "Bird Species"]
      },
      {
        id: "udzungwa",
        name: "Udzungwa Mountains National Park",
        description: "Primate paradise and hiking destination",
        activities: ["Hiking", "Primate tracking", "Bird watching"],
        recommendedDays: "2-3",
        bestTime: "June-October",
        highlights: ["Endemic Primates", "Waterfalls", "Hiking Trails", "Bird Species"]
      }
    ]
  },
  western: {
    title: "Western Circuit",
    parks: [
      {
        id: "katavi",
        name: "Katavi National Park",
        description: "Remote wilderness with abundant wildlife",
        activities: ["Game drives", "Walking safaris", "Camping"],
        recommendedDays: "3-4",
        bestTime: "June-October",
        highlights: ["Hippo Pools", "Remote Location", "Large Buffalo Herds", "Paradise Plains"]
      },
      {
        id: "mahale",
        name: "Mahale Mountains National Park",
        description: "Chimpanzee tracking along Lake Tanganyika",
        activities: ["Chimp tracking", "Hiking", "Beach activities"],
        recommendedDays: "3-4",
        bestTime: "July-October",
        highlights: ["Chimpanzees", "Lake Tanganyika", "Mountain Forest", "Beach Activities"]
      },
      {
        id: "gombe",
        name: "Gombe National Park",
        description: "Jane Goodall's famous chimpanzee research site",
        activities: ["Chimp tracking", "Hiking", "Swimming"],
        recommendedDays: "2-3",
        bestTime: "July-October",
        highlights: ["Chimpanzees", "Research History", "Lake Activities", "Forest Walks"]
      }
    ]
  },
  coastal: {
    title: "Coastal Circuit",
    parks: [
      {
        id: "saadani",
        name: "Saadani National Park",
        description: "Where beach meets bush",
        activities: ["Game drives", "Boat safaris", "Beach activities"],
        recommendedDays: "2-3",
        bestTime: "June-September",
        highlights: ["Beach Safari", "Wami River", "Coastal Forest", "Marine Life"]
      },
      {
        id: "mafia",
        name: "Mafia Island Marine Park",
        description: "Premier diving and marine life destination",
        activities: ["Diving", "Snorkeling", "Whale watching"],
        recommendedDays: "3-4",
        bestTime: "October-March",
        highlights: ["Coral Reefs", "Whale Sharks", "Marine Life", "Beach Activities"]
      },
      {
        id: "zanzibar",
        name: "Zanzibar Island",
        description: "Spice island with pristine beaches",
        activities: ["Beach activities", "Spice tours", "Cultural visits"],
        recommendedDays: "4-7",
        bestTime: "June-October",
        highlights: ["Stone Town", "Spice Tours", "Beaches", "Marine Life"]
      },
      {
        id: "pemba",
        name: "Pemba Island",
        description: "Untouched island paradise",
        activities: ["Diving", "Snorkeling", "Cultural visits"],
        recommendedDays: "3-5",
        bestTime: "July-March",
        highlights: ["Pristine Reefs", "Diving Sites", "Local Culture", "Remote Beaches"]
      }
    ]
  }
};

const accommodationTypes = [
  {
    id: 'luxury',
    name: 'Luxury Lodges',
    description: 'Premium accommodations with exceptional service',
    features: ['Private pools', 'Gourmet dining', 'Spa services', 'Butler service']
  },
  {
    id: 'midrange',
    name: 'Mid-range Lodges',
    description: 'Comfortable stays with good amenities',
    features: ['Restaurant', 'Pool', 'Wi-Fi', 'Game viewing decks']
  },
  {
    id: 'budget',
    name: 'Budget Camps',
    description: 'Basic but comfortable accommodations',
    features: ['Shared facilities', 'Simple meals', 'Camping experience']
  },
  {
    id: 'camping',
    name: 'Mobile Camping',
    description: 'Authentic safari experience under canvas',
    features: ['Private camps', 'Bush dining', 'Star gazing', 'Close to nature']
  }
];

const CustomTripBuilder = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [tripDetails, setTripDetails] = useState({
    startDate: '',
    duration: '',
    groupSize: '',
    budget: '',
    specialRequests: ''
  });
  const [selectedPark, setSelectedPark] = useState(null);

  const handleDestinationSelect = (park) => {
    setSelectedDestinations(prev => {
      const exists = prev.find(p => p.id === park.id);
      if (exists) {
        return prev.filter(p => p.id !== park.id);
      }
      return [...prev, park];
    });
  };

  const handleParkClick = (park) => {
    setSelectedPark(park);
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const canProceed = useMemo(() => {
    switch (step) {
      case 1:
        return selectedDestinations.length > 0;
      case 2:
        return selectedAccommodation !== null;
      case 3:
        return tripDetails.startDate && tripDetails.duration && tripDetails.groupSize;
      default:
        return true;
    }
  }, [step, selectedDestinations, selectedAccommodation, tripDetails]);

  const getCircuitIcon = (circuit) => {
    switch(circuit) {
      case 'northern':
        return <FaCompass />;
      case 'southern':
        return <FaMapMarked />;
      case 'western':
        return <FaRoute />;
      case 'coastal':
        return <FaUmbrellaBeach />;
      default:
        return <FaMapMarkerAlt />;
    }
  };

  const getCircuitDescription = (circuit) => {
    switch(circuit) {
      case 'northern':
        return 'Home to the famous Serengeti and Ngorongoro Crater';
      case 'southern':
        return 'Discover the remote wilderness of Ruaha and Selous';
      case 'western':
        return 'Experience untouched nature and chimpanzee tracking';
      case 'coastal':
        return 'Combine beach and bush in unique coastal parks';
      default:
        return '';
    }
  };

  const getParkIcon = (parkId) => {
    switch(parkId) {
      case 'serengeti':
        return <FaHippo />;
      case 'ngorongoro':
        return <FaMountain />;
      case 'tarangire':
        return <FaTree />;
      case 'manyara':
        return <FaWater />;
      default:
        return <FaMapMarkerAlt />;
    }
  };

  const renderDestinations = () => (
    <>
      <div className="builder-header">
        <h1>Design Your Perfect Safari</h1>
        <p>Choose from Tanzania's most spectacular destinations to create your dream safari experience</p>
      </div>
      
      {Object.entries(destinations).map(([circuit, { title, parks }]) => (
        <div key={circuit} className="destination-circuit">
          <div className="circuit-header">
            <div className="circuit-icon">
              {getCircuitIcon(circuit)}
            </div>
            <div className="circuit-title">
              <h3>{title}</h3>
              <p>{getCircuitDescription(circuit)}</p>
            </div>
          </div>
          
          <div className="destination-grid">
            {parks.map(park => {
              const isSelected = selectedDestinations.find(p => p.id === park.id);
              const isFeatured = park.id === 'serengeti' || park.id === 'ngorongoro' || 
                               park.id === 'ruaha' || park.id === 'mahale';

  return (
                <div
                  key={park.id}
                  className={`destination-card ${isSelected ? 'selected' : ''} ${park.id === 'arusha' || park.id === 'kilimanjaro' ? 'large-card' : ''}`}
                  onClick={() => handleDestinationSelect(park)}
                >
                  {isFeatured && (
                    <div className="card-status">
                      <FaStar /> Popular
                    </div>
                  )}
                  
                  {isSelected && (
                    <div className="select-indicator">
                      <FaCheck />
                    </div>
                  )}
                  
                  <div className="card-content">
                    <h4 className="destination-title">
                      {getParkIcon(park.id)} {park.name}
                    </h4>
                    
                    <div className="park-info">
                      <div className="info-row">
                        <FaCalendarAlt />
                        <span>{park.recommendedDays} days</span>
                      </div>
                      <div className="info-row">
                        <FaSun />
                        <span>{park.bestTime}</span>
                      </div>
                    </div>
                    
                    <div className="highlights">
                      <div className="highlight-content">
                        {park.highlights.map((highlight, index) => (
                          <div key={index} className="highlight-item">
                            <FaCheck /> {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      
      {selectedDestinations.length > 0 && (
        <div className="builder-actions">
          <button
            className="next-btn"
            onClick={() => setStep(prev => prev + 1)}
          >
            Continue with {selectedDestinations.length} destination{selectedDestinations.length > 1 ? 's' : ''} <FaArrowRight />
          </button>
        </div>
      )}
    </>
  );

  const renderAccommodation = () => (
      <div className="builder-section">
      <h2>Choose Your Accommodation Style</h2>
      <p className="section-description">Select your preferred type of accommodation</p>
      
      <div className="destination-grid">
        {accommodationTypes.map(type => (
          <div
            key={type.id}
            className={`destination-card ${selectedAccommodation === type.id ? 'selected' : ''}`}
            onClick={() => setSelectedAccommodation(type.id)}
          >
            <div className="destination-info">
              <h4>{type.name}</h4>
              <p>{type.description}</p>
              <ul>
                {type.features.map(feature => (
                  <li key={feature}><FaCheck /> {feature}</li>
                ))}
              </ul>
            </div>
            </div>
          ))}
        </div>
      </div>
  );

  const renderTripDetails = () => (
      <div className="builder-section">
      <h2>Trip Details</h2>
      <p className="section-description">Tell us more about your travel plans</p>
      
      <form className="trip-details-form" onSubmit={handleDetailsSubmit}>
        <div className="form-group">
          <label><FaCalendarAlt /> Start Date</label>
            <input 
              type="date" 
              value={tripDetails.startDate}
            onChange={e => setTripDetails(prev => ({ ...prev, startDate: e.target.value }))}
            required
            />
          </div>
        
        <div className="form-group">
          <label><FaCalendarAlt /> Duration (days)</label>
            <input 
              type="number" 
              min="1"
              value={tripDetails.duration}
            onChange={e => setTripDetails(prev => ({ ...prev, duration: e.target.value }))}
            required
            />
          </div>
        
        <div className="form-group">
            <label><FaUsers /> Group Size</label>
            <input 
              type="number"
              min="1"
              value={tripDetails.groupSize}
            onChange={e => setTripDetails(prev => ({ ...prev, groupSize: e.target.value }))}
            required
            />
          </div>
        
        <div className="form-group">
          <label>Budget Range (USD)</label>
          <select
            value={tripDetails.budget}
            onChange={e => setTripDetails(prev => ({ ...prev, budget: e.target.value }))}
            required
          >
            <option value="">Select budget range</option>
            <option value="budget">$200-500 per day</option>
            <option value="midrange">$500-800 per day</option>
            <option value="luxury">$800+ per day</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Special Requests</label>
          <textarea
            value={tripDetails.specialRequests}
            onChange={e => setTripDetails(prev => ({ ...prev, specialRequests: e.target.value }))}
            placeholder="Any special requirements or preferences?"
            rows="4"
          />
        </div>
      </form>
      </div>
  );

  const renderSummary = () => (
    <div className="trip-summary">
      <div className="summary-section">
        <h3>Selected Destinations</h3>
        <div className="selected-destinations">
          {selectedDestinations.map(destination => (
            <div key={destination.id} className="selected-destination-card">
              <img src={destination.image} alt={destination.name} />
              <div className="destination-details">
                <h4>{destination.name}</h4>
                <p>{destination.recommendedDays} days recommended</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="summary-section">
        <h3>Trip Details</h3>
        <div className="details-grid">
          <div className="detail-item">
            <FaCalendarAlt />
            <span>Start Date:</span>
            <strong>{new Date(tripDetails.startDate).toLocaleDateString()}</strong>
          </div>
          <div className="detail-item">
            <FaCalendarAlt />
            <span>Duration:</span>
            <strong>{tripDetails.duration} days</strong>
          </div>
          <div className="detail-item">
            <FaUsers />
            <span>Group Size:</span>
            <strong>{tripDetails.groupSize} people</strong>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt />
            <span>Accommodation:</span>
            <strong>{accommodationTypes.find(t => t.id === selectedAccommodation)?.name}</strong>
            </div>
        </div>
      </div>

      <button className="submit-btn" onClick={() => console.log('Submit trip request')}>
        Request Quote
      </button>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderDestinations();
      case 2:
        return renderAccommodation();
      case 3:
        return renderTripDetails();
      case 4:
        return renderSummary();
      default:
        return null;
    }
  };

  return (
    <div className="custom-trip-builder">
      <button className="close-btn" onClick={onClose}>
        <FaTimes />
      </button>
      
      <div className="builder-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
          Choose Destinations
        </div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
          Select Accommodation
        </div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
          Trip Details
        </div>
        <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
          Summary
        </div>
      </div>

      {renderStep()}
      
      {selectedPark && step === 1 && (
        <div className="floating-details">
          <div className="details-header">
            <img src={selectedPark.image} alt={selectedPark.name} />
            <div className="details-overlay">
              <h3>{selectedPark.name}</h3>
              <p>{selectedPark.description}</p>
            </div>
          </div>
          <div className="details-content">
            <div className="details-section">
              <h4>Activities</h4>
              <ul>
                {selectedPark.activities.map(activity => (
                  <li key={activity}><FaCheck /> {activity}</li>
                ))}
              </ul>
            </div>
            <div className="details-section">
              <h4>Highlights</h4>
              <ul>
                {selectedPark.highlights.map(highlight => (
                  <li key={highlight}><FaCheck /> {highlight}</li>
                ))}
              </ul>
            </div>
            <div className="details-meta">
              <span><FaCalendarAlt /> {selectedPark.recommendedDays} days recommended</span>
              <span><FaSun /> Best time: {selectedPark.bestTime}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="builder-actions">
        {step > 1 && (
          <button className="back-btn" onClick={() => setStep(prev => prev - 1)}>
            Back
          </button>
        )}
        {step < 4 && (
          <button
            className="next-btn"
            onClick={() => setStep(prev => prev + 1)}
            disabled={!canProceed}
          >
            {step === 3 ? 'Review Trip' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomTripBuilder; 