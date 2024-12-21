import React, { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaBed, FaCar, FaUsers } from 'react-icons/fa';
import './CustomTripBuilder.css';

const CustomTripBuilder = () => {
  const [tripDetails, setTripDetails] = useState({
    destinations: [],
    startDate: '',
    duration: 1,
    groupSize: 2,
    accommodation: 'luxury',
    activities: [],
    transportation: 'private'
  });

  const destinations = [
    { id: 'serengeti', name: 'Serengeti', minDays: 2 },
    { id: 'ngorongoro', name: 'Ngorongoro', minDays: 1 },
    { id: 'kilimanjaro', name: 'Kilimanjaro', minDays: 5 },
    { id: 'zanzibar', name: 'Zanzibar', minDays: 3 }
  ];

  const activities = [
    { id: 'game-drive', name: 'Game Drives', price: 150 },
    { id: 'walking-safari', name: 'Walking Safari', price: 100 },
    { id: 'cultural-tour', name: 'Cultural Tours', price: 80 },
    { id: 'balloon-safari', name: 'Balloon Safari', price: 500 }
  ];

  const accommodationTypes = [
    { id: 'luxury', name: 'Luxury Lodge', pricePerNight: 500 },
    { id: 'midrange', name: 'Tented Camp', pricePerNight: 300 },
    { id: 'budget', name: 'Basic Camping', pricePerNight: 150 }
  ];

  const handleDestinationChange = (destId) => {
    const newDestinations = tripDetails.destinations.includes(destId)
      ? tripDetails.destinations.filter(d => d !== destId)
      : [...tripDetails.destinations, destId];
    
    setTripDetails({
      ...tripDetails,
      destinations: newDestinations
    });
  };

  const handleActivityChange = (activityId) => {
    const newActivities = tripDetails.activities.includes(activityId)
      ? tripDetails.activities.filter(a => a !== activityId)
      : [...tripDetails.activities, activityId];
    
    setTripDetails({
      ...tripDetails,
      activities: newActivities
    });
  };

  const calculateEstimatedPrice = () => {
    const basePrice = tripDetails.destinations.length * 200;
    const accommodationPrice = accommodationTypes.find(a => a.id === tripDetails.accommodation).pricePerNight * tripDetails.duration;
    const activitiesPrice = tripDetails.activities.reduce((total, actId) => {
      return total + activities.find(a => a.id === actId).price;
    }, 0);
    
    return basePrice + accommodationPrice + activitiesPrice;
  };

  return (
    <div className="custom-trip-builder">
      <h2>Build Your Custom Safari</h2>
      
      <div className="builder-section">
        <h3><FaMapMarkerAlt /> Choose Destinations</h3>
        <div className="destinations-grid">
          {destinations.map(dest => (
            <div 
              key={dest.id}
              className={`destination-card ${tripDetails.destinations.includes(dest.id) ? 'selected' : ''}`}
              onClick={() => handleDestinationChange(dest.id)}
            >
              <h4>{dest.name}</h4>
              <p>Minimum stay: {dest.minDays} days</p>
            </div>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3><FaCalendar /> Trip Details</h3>
        <div className="trip-details-grid">
          <div className="detail-input">
            <label>Start Date</label>
            <input 
              type="date" 
              value={tripDetails.startDate}
              onChange={(e) => setTripDetails({...tripDetails, startDate: e.target.value})}
            />
          </div>
          <div className="detail-input">
            <label>Duration (Days)</label>
            <input 
              type="number" 
              min="1"
              value={tripDetails.duration}
              onChange={(e) => setTripDetails({...tripDetails, duration: parseInt(e.target.value)})}
            />
          </div>
          <div className="detail-input">
            <label><FaUsers /> Group Size</label>
            <input 
              type="number"
              min="1"
              value={tripDetails.groupSize}
              onChange={(e) => setTripDetails({...tripDetails, groupSize: parseInt(e.target.value)})}
            />
          </div>
        </div>
      </div>

      <div className="builder-section">
        <h3><FaBed /> Accommodation</h3>
        <div className="accommodation-options">
          {accommodationTypes.map(acc => (
            <div 
              key={acc.id}
              className={`accommodation-card ${tripDetails.accommodation === acc.id ? 'selected' : ''}`}
              onClick={() => setTripDetails({...tripDetails, accommodation: acc.id})}
            >
              <h4>{acc.name}</h4>
              <p>${acc.pricePerNight} per night</p>
            </div>
          ))}
        </div>
      </div>

      <div className="builder-section">
        <h3>Activities</h3>
        <div className="activities-grid">
          {activities.map(activity => (
            <div 
              key={activity.id}
              className={`activity-card ${tripDetails.activities.includes(activity.id) ? 'selected' : ''}`}
              onClick={() => handleActivityChange(activity.id)}
            >
              <h4>{activity.name}</h4>
              <p>${activity.price} per person</p>
            </div>
          ))}
        </div>
      </div>

      <div className="trip-summary">
        <h3>Trip Summary</h3>
        <div className="summary-details">
          <p>Destinations: {tripDetails.destinations.length}</p>
          <p>Duration: {tripDetails.duration} days</p>
          <p>Group Size: {tripDetails.groupSize} people</p>
          <p>Activities: {tripDetails.activities.length}</p>
          <p className="estimated-price">
            Estimated Price: ${calculateEstimatedPrice()} per person
          </p>
        </div>
        <button className="request-quote-btn">Request Detailed Quote</button>
      </div>
    </div>
  );
};

export default CustomTripBuilder; 