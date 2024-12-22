import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkedAlt, FaTree, FaCamera, FaClock, FaRoute, FaInfoCircle, FaImage } from 'react-icons/fa';
import { allParks } from '../data/parks';
import './ParkPage.css';

const ParkPage = () => {
  const { circuit, parkId } = useParams();
  const park = allParks[parkId];
  const [activeImage, setActiveImage] = useState(null);

  console.log('Circuit:', circuit);
  console.log('ParkId:', parkId);
  console.log('Available parks:', Object.keys(allParks));
  console.log('Found park:', park);

  if (!park) return (
    <div className="park-not-found">
      <h1>Park Not Found</h1>
      <p>Sorry, we couldn't find the park you're looking for.</p>
      <p>Circuit: {circuit}, Park ID: {parkId}</p>
      <p>Available Parks: {Object.keys(allParks).join(', ')}</p>
    </div>
  );

  return (
    <div className="park-page">
      <div className="park-hero">
        <div className="hero-content">
          <h1>{park.name}</h1>
          <p className="park-subtitle">{park.title}</p>
        </div>
      </div>

      <div className="park-content">
        {park.introduction && (
          <section className="park-introduction">
            <h2>Introduction</h2>
            {park.introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        )}

        {park.highlights && (
          <section className="park-highlights">
            <h2>Highlights</h2>
            <ul>
              {park.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </section>
        )}

        {park.bestTime && (
          <section className="best-time-section">
            <h2><FaCalendarAlt /> Best Time to Visit</h2>
            <p className="season-overview">{park.bestTime.details}</p>
            <div className="seasons-grid">
              {park.bestTime.seasons.map((season, index) => (
                <div key={index} className="season-card">
                  <h3>{season.name}</h3>
                  <p>{season.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {park.activities && (
          <section className="park-activities">
            <h2><FaTree /> Activities</h2>
            <div className="activities-grid">
              {park.activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>
                  <p className="activity-details">{activity.details}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {park.routes && (
          <section className="climbing-routes">
            <h2><FaMapMarkedAlt /> Climbing Routes</h2>
            <div className="routes-grid">
              {park.routes.map((route, index) => (
                <div key={index} className="route-card">
                  <h3>{route.name}</h3>
                  <div className="route-details">
                    <p><strong>Duration:</strong> {route.duration}</p>
                    <p><strong>Difficulty:</strong> {route.difficulty}</p>
                  </div>
                  <p>{route.description}</p>
                  {route.highlights && (
                    <ul className="route-highlights">
                      {route.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {park.gallery && (
          <section className="park-gallery">
            <h2><FaImage /> Photo Gallery</h2>
            <div className="gallery-grid">
              {park.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className="gallery-item"
                  onClick={() => setActiveImage(image)}
                >
                  <img src={image.url} alt={image.title} />
                  <div className="gallery-item-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {park.itineraries && (
          <section className="itineraries-section">
            <h2><FaRoute /> Popular Itineraries</h2>
            {park.itineraries.map((itinerary, index) => (
              <div key={index} className="itinerary-card">
                <div className="itinerary-header">
                  <h3>{itinerary.name}</h3>
                  <div className="itinerary-meta">
                    <span><FaClock /> {itinerary.days.length} Days</span>
                    <span className="difficulty">{itinerary.difficulty}</span>
                    <span className="price">{itinerary.price}</span>
                  </div>
                </div>
                
                <div className="itinerary-days">
                  {itinerary.days.map((day, idx) => (
                    <div key={idx} className="day-card">
                      <div className="day-header">
                        <span className="day-number">Day {day.day}</span>
                        <h4>{day.title}</h4>
                      </div>
                      <div className="day-details">
                        <div className="day-stats">
                          {day.altitude && (
                            <span><FaMapMarkedAlt /> Altitude: {day.altitude}</span>
                          )}
                          {day.distance && (
                            <span><FaRoute /> Distance: {day.distance}</span>
                          )}
                          {day.time && (
                            <span><FaClock /> Time: {day.time}</span>
                          )}
                        </div>
                        <p>{day.description}</p>
                        <ul className="day-highlights">
                          {day.highlights.map((highlight, hidx) => (
                            <li key={hidx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="itinerary-inclusions">
                  <div className="included">
                    <h4>Included</h4>
                    <ul>
                      {itinerary.included.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="excluded">
                    <h4>Not Included</h4>
                    <ul>
                      {itinerary.excluded.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {park.practicalInfo && (
          <section className="practical-info">
            <h2><FaInfoCircle /> Practical Information</h2>
            <div className="info-grid">
              <div className="info-card preparation">
                <h3>Preparation</h3>
                <ul>
                  {park.practicalInfo.preparation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="info-card weather">
                <h3>Weather</h3>
                <div className="weather-details">
                  <div>
                    <h4>Seasons</h4>
                    <p>Dry Season: {park.practicalInfo.weather.seasons.dry}</p>
                    <p>Wet Season: {park.practicalInfo.weather.seasons.wet}</p>
                  </div>
                  <div>
                    <h4>Temperatures</h4>
                    <p>Base: {park.practicalInfo.weather.temperatures.base}</p>
                    <p>Summit: {park.practicalInfo.weather.temperatures.summit}</p>
                  </div>
                </div>
              </div>
              <div className="info-card equipment">
                <h3>Equipment</h3>
                <div className="equipment-lists">
                  <div>
                    <h4>Essential</h4>
                    <ul>
                      {park.practicalInfo.equipment.essential.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Recommended</h4>
                    <ul>
                      {park.practicalInfo.equipment.recommended.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {activeImage && (
        <div className="image-modal" onClick={() => setActiveImage(null)}>
          <div className="modal-content">
            <img src={activeImage.url} alt={activeImage.title} />
            <div className="modal-caption">
              <h3>{activeImage.title}</h3>
              <p>{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkPage; 