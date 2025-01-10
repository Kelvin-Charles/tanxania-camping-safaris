import React, { useState, useEffect } from 'react';
import { 
  FaTimes, FaChevronLeft, FaChevronRight, 
  FaCamera, FaLeaf, FaHiking, FaMapMarked,
  FaExpand, FaCompress, FaDownload, FaShare
} from 'react-icons/fa';
import './ParkGallery.css';

const ParkGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [slideshow, setSlideshow] = useState(false);

  const categories = ['all', 'wildlife', 'landscape', 'activities'];

  const filteredImages = activeTab === 'all' 
    ? images 
    : images.filter(img => img.category === activeTab);

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setSelectedImage(newIndex);
    }
  };

  useEffect(() => {
    let interval;
    if (slideshow && selectedImage !== null) {
      interval = setInterval(() => {
        navigateImage(1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [slideshow, selectedImage]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const downloadImage = (url, title) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${title}.jpg`;
        link.click();
      });
  };

  return (
    <section className="park-gallery">
      <div className="container">
        <h2>Photo Gallery</h2>
        
        <div className="gallery-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`gallery-tab ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openImage(index)}
            >
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="image-viewer">
          <div className="viewer-overlay" onClick={closeImage} />
          <div className="viewer-content">
            <button className="close-button" onClick={closeImage}>
              <FaTimes />
            </button>
            <button 
              className="nav-button prev" 
              onClick={() => navigateImage(-1)}
              disabled={selectedImage === 0}
            >
              <FaChevronLeft />
            </button>
            <div className="viewer-image">
              <img 
                src={filteredImages[selectedImage].url} 
                alt={filteredImages[selectedImage].title} 
              />
              <div className="image-caption">
                <h3>{filteredImages[selectedImage].title}</h3>
                <p>{filteredImages[selectedImage].description}</p>
                <span className="image-meta">
                  {filteredImages[selectedImage].location} | {filteredImages[selectedImage].date}
                </span>
              </div>
            </div>
            <button 
              className="nav-button next" 
              onClick={() => navigateImage(1)}
              disabled={selectedImage === filteredImages.length - 1}
            >
              <FaChevronRight />
            </button>
            <div className="viewer-controls">
              <button 
                className="control-button"
                onClick={() => setSlideshow(!slideshow)}
              >
                {slideshow ? 'Pause' : 'Play'} Slideshow
              </button>
              <button 
                className="control-button"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
              <button 
                className="control-button"
                onClick={() => downloadImage(
                  filteredImages[selectedImage].url,
                  filteredImages[selectedImage].title
                )}
              >
                <FaDownload /> Download
              </button>
              <button 
                className="control-button"
                onClick={() => {
                  navigator.share({
                    title: filteredImages[selectedImage].title,
                    text: filteredImages[selectedImage].description,
                    url: window.location.href
                  });
                }}
              >
                <FaShare /> Share
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ParkGallery; 