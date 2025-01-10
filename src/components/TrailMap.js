import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { 
  FaRoute, FaInfoCircle, FaMapMarkerAlt, FaMountain, 
  FaWater, FaBuilding, FaArrowUp 
} from 'react-icons/fa';

const TrailMap = ({ trails, parkCenter, pointsOfInterest }) => {
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: parkCenter[1],
    lng: parkCenter[0]
  };

  // Add map options for satellite view
  const mapOptions = {
    mapTypeId: 'satellite',  // Set default map type to satellite
    mapTypeControl: true,    // Show map type control
    mapTypeControlOptions: {
      style: 2,  // HORIZONTAL_BAR style
      position: 3,  // TOP_RIGHT position
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
    },
    zoomControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true
  };

  return (
    <section className="trail-map">
      <div className="container">
        <h2><FaRoute /> Park Trails & Points of Interest</h2>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            options={mapOptions}  // Add the options here
          >
            {/* Trail Markers */}
            {trails.map((trail, index) => (
              <Marker
                key={`trail-${index}`}
                position={{
                  lat: trail.startPoint[1],
                  lng: trail.startPoint[0]
                }}
                icon={{
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  scaledSize: { width: 32, height: 32 }
                }}
                onClick={() => setSelectedMarker({ ...trail, type: 'trail' })}
              />
            ))}

            {/* Points of Interest Markers */}
            {pointsOfInterest?.map((poi, index) => (
              <Marker
                key={`poi-${index}`}
                position={{
                  lat: poi.coordinates[1],
                  lng: poi.coordinates[0]
                }}
                icon={{
                  url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                  scaledSize: { width: 32, height: 32 }
                }}
                onClick={() => setSelectedMarker({ ...poi, type: 'poi' })}
              />
            ))}

            {/* Info Window for selected marker */}
            {selectedMarker && (
              <InfoWindow
                position={
                  selectedMarker.type === 'trail' 
                    ? {
                        lat: selectedMarker.startPoint[1],
                        lng: selectedMarker.startPoint[0]
                      }
                    : {
                        lat: selectedMarker.coordinates[1],
                        lng: selectedMarker.coordinates[0]
                      }
                }
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div className="info-window-content">
                  <h3>{selectedMarker.name}</h3>
                  <p>{selectedMarker.description}</p>
                  {selectedMarker.type === 'trail' && (
                    <>
                      <p><strong>Distance:</strong> {selectedMarker.distance}</p>
                      <p><strong>Difficulty:</strong> {selectedMarker.difficulty}</p>
                    </>
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>

        {/* Trail Information */}
        <div className="trail-info-grid">
          <div className="trail-list">
            <h3>Hiking Trails</h3>
            {trails.map((trail, index) => (
              <div key={index} className="trail-item">
                <h4>{trail.name}</h4>
                <div className="trail-details">
                  <span><FaRoute /> {trail.distance}</span>
                  <span><FaMountain /> {trail.difficulty}</span>
                </div>
                <p>{trail.description}</p>
              </div>
            ))}
          </div>

          {pointsOfInterest && (
            <div className="poi-list">
              <h3>Points of Interest</h3>
              {pointsOfInterest.map((poi, index) => (
                <div key={index} className="poi-item">
                  <FaMapMarkerAlt className="poi-icon" />
                  <div className="poi-details">
                    <h4>{poi.name}</h4>
                    <p>{poi.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrailMap; 