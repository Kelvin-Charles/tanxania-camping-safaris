import React from 'react';
import '../western/ParkStyles.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaWater, FaCamera, FaHiking, FaBinoculars } from 'react-icons/fa';

const LakeManyara = () => {
  return (
    <div className="park-page">
      <section className="park-hero">
        <div className="hero-content">
          <h1>Lake Manyara National Park</h1>
          <p>Home of Tree-Climbing Lions and Pink Flamingos</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Lake Manyara</h2>
          <p>Lake Manyara National Park is a compact gem of Tanzania's Rift Valley, combining an alkaline lake, dense woodlands, and grassy floodplains. Famous for its tree-climbing lions and large flocks of flamingos, the park offers a diverse safari experience.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, part of the Northern Safari Circuit</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>330 square kilometers including the lake</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>Lake, groundwater forest, acacia woodland, and floodplains</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Tree-climbing lions, elephants, and diverse birdlife</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Wildlife & Nature</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/tree-climbing-lions_181624-6359.jpg" alt="Tree-Climbing Lions" />
              </div>
              <div className="wildlife-content">
                <h3>Tree-Climbing Lions</h3>
                <p>Famous tree-climbing lions that rest in acacia trees during hot days.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/flamingos-lake-manyara_181624-6360.jpg" alt="Flamingos" />
              </div>
              <div className="wildlife-content">
                <h3>Flamingos</h3>
                <p>Large flocks of flamingos and other water birds at the lake.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://img.freepik.com/free-photo/forest-elephants_181624-6361.jpg" alt="Forest Wildlife" />
              </div>
              <div className="wildlife-content">
                <h3>Forest Wildlife</h3>
                <p>Elephants, baboons, and diverse wildlife in the groundwater forest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Activities & Attractions</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/game-drive-manyara_181624-6362.jpg" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Explore diverse habitats and spot unique wildlife.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/canopy-walkway_181624-6363.jpg" alt="Canopy Walkway" />
              </div>
              <div className="activity-content">
                <h3>Canopy Walkway</h3>
                <p>Treetop walk through the forest canopy.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://img.freepik.com/free-photo/bird-watching-manyara_181624-6364.jpg" alt="Bird Watching" />
              </div>
              <div className="activity-content">
                <h3>Bird Watching</h3>
                <p>Over 400 bird species including flamingos and pelicans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-info">
        <div className="container">
          <h2>Visitor Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaMapMarkerAlt />
              <h3>How to Get There</h3>
              <p>126 km from Arusha. Accessible by road or flights to nearby airstrip.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>June to October (dry season) for wildlife viewing. November to December and March to May for birds.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Binoculars, camera, light clothing, and insect repellent.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LakeManyara; 