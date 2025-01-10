import React, { useState } from 'react';
import { FaVrCardboard, FaPlay, FaPause, FaExpand, FaInfoCircle, FaCompass, FaMapMarked, FaStreetView } from 'react-icons/fa';

const VirtualTour = ({ tourData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = React.useRef(null);
  const [activeHighlight, setActiveHighlight] = useState(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <section className="virtual-tour">
      <div className="container">
        <h2><FaVrCardboard /> Virtual Park Experience</h2>
        <div className="tour-content">
          <div className="video-container">
            {tourData.videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={tourData.videoUrl}
                  poster={tourData.thumbnailUrl}
                  controls={false}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="video-controls">
                  <button onClick={togglePlay}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button onClick={toggleFullscreen}>
                    <FaExpand />
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src={tourData.tourUrl}
                title="Virtual Park Tour"
                allowFullScreen
                loading="lazy"
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            )}
          </div>
          <div className="tour-highlights">
            <h3><FaCompass /> Tour Highlights</h3>
            <div className="highlights-grid">
              {tourData.highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className={`highlight-card ${activeHighlight === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveHighlight(index)}
                  onMouseLeave={() => setActiveHighlight(null)}
                >
                  <div className="highlight-image">
                    <img src={highlight.image} alt={highlight.title} />
                    <div className="highlight-overlay">
                      <FaStreetView className="view-icon" />
                      <span>View Location</span>
                    </div>
                  </div>
                  <div className="highlight-content">
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                    <div className="highlight-features">
                      {highlight.features?.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tour-navigation">
            <div className="nav-card">
              <FaMapMarked className="nav-icon" />
              <div className="nav-content">
                <h4>Interactive Navigation</h4>
                <ul>
                  <li>Click and drag to look around</li>
                  <li>Use arrow keys to move</li>
                  <li>Double-click points of interest</li>
                  <li>Scroll to zoom in/out</li>
                </ul>
              </div>
            </div>
            <div className="nav-card">
              <FaInfoCircle className="nav-icon" />
              <div className="nav-content">
                <h4>Viewing Tips</h4>
                <ul>
                  <li>Best experienced in landscape mode</li>
                  <li>Use VR headset for immersion</li>
                  <li>Enable HD for better quality</li>
                  <li>Stable internet recommended</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour; 