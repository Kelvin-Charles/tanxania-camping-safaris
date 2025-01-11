import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMountain, FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './Navbar.css';
import "./ParkRouter"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', text: 'Home' },
    { 
      text: 'All Trips',
      path: '/trips',
      submenu: [
        { path: '/trips', text: 'All Trips' },
        { path: '/trips/wildlife-safaris', text: 'Wildlife Safaris' },
        { path: '/trips/mountain-climbing', text: 'Mountain Climbing' },
        { path: '/trips/beach-holidays', text: 'Beach Holidays' },
        { path: '/trips/cultural-tours', text: 'Cultural Tours' },
        { path: '/trips/day-trips', text: 'Day Trips' },
        { path: '/trips/custom-safaris', text: 'Custom Safaris' }
      ]
    },
    { 
      text: 'Camping Tours',
      path: '/camping-tours',
      submenu: [
        { path: '/camping-tours/luxury', text: 'Luxury Camping' },
        { path: '/camping-tours/mid-range', text: 'Mid-Range Camping' },
        { path: '/camping-tours/budget', text: 'Budget Camping' },
        { path: '/camping-tours/day-trip', text: 'Day Trip' },
        { path: '/camping-tours/game-packages', text: 'Game Packages' },
        { path: '/camping-tours/mountain', text: 'Mountain Camping' },
        { path: '/camping-tours/photography', text: 'Photography Safaris' },
        { path: '/camping-tours/beach', text: 'Beach Camping' }
      ]
    },
    { 
      text: 'Parks & Reserves',
      path: '/parks-reserves',
      submenu: [
        { 
          text: 'Northern Circuit',
          path: '/parks-reserves/northern',
          nestedSubmenu: [
            { path: '/parks-reserves/northern/kilimanjaro', text: 'Mount Kilimanjaro' },
            { path: '/parks-reserves/northern/serengeti', text: 'Serengeti National Park' },
            { path: '/parks-reserves/northern/ngorongoro', text: 'Ngorongoro Crater' },
            { path: '/parks-reserves/northern/tarangire', text: 'Tarangire National Park' },
            { path: '/parks-reserves/northern/manyara', text: 'Lake Manyara National Park' },
            { path: '/parks-reserves/northern/arusha', text: 'Arusha National Park' }
          ]
        },
        { 
          text: 'Southern Circuit',
          path: '/parks-reserves/southern',
          nestedSubmenu: [
            { path: '/parks-reserves/southern/ruaha', text: 'Ruaha National Park' },
            { path: '/parks-reserves/southern/mikumi', text: 'Mikumi National Park' },
            { path: '/parks-reserves/southern/nyerere', text: 'Nyerere National Park' },
            { path: '/parks-reserves/southern/udzungwa', text: 'Udzungwa Mountains' },
            { path: '/parks-reserves/southern/katavi', text: 'Katavi National Park' }
          ]
        },
        { 
          text: 'Western Circuit',
          path: '/parks-reserves/western',
          nestedSubmenu: [
            { path: '/parks-reserves/western/gombe', text: 'Gombe National Park' },
            { path: '/parks-reserves/western/mahale', text: 'Mahale Mountains' },
            { path: '/parks-reserves/western/rubondo', text: 'Rubondo Island' },
            { path: '/parks-reserves/western/saanane', text: 'Saanane Island' },
            { path: '/parks-reserves/western/burigi-chato', text: 'Burigi-Chato' },
            { path: '/parks-reserves/western/ibanda-kyerwa', text: 'Ibanda-Kyerwa' },
            { path: '/parks-reserves/western/rumanyika', text: 'Rumanyika' },
            { path: '/parks-reserves/western/ugalla', text: 'Ugalla River' }
          ]
        },
        {
          text: 'Coastal & Islands',
          path: '/parks-reserves/coastal',
          nestedSubmenu: [
            { path: '/parks-reserves/coastal/saadani', text: 'Saadani National Park' },
            { path: '/parks-reserves/coastal/zanzibar', text: 'Zanzibar Archipelago' },
            { path: '/parks-reserves/coastal/mafia', text: 'Mafia Island' },
            { path: '/parks-reserves/coastal/pemba', text: 'Pemba Island' }
          ]
        }
      ]
    },
    { 
      text: 'Cultural',
      path: '/cultural',
      submenu: [
        { path: '/cultural/maasai', text: 'Maasai Culture' },
        { path: '/cultural/local-villages', text: 'Local Villages' },
        { path: '/cultural/traditions', text: 'Traditions' }
      ]
    },
    { path: '/experience', text: 'Experience' },
    { 
      text: 'About Us',
      path: '/about',
      submenu: [
        { path: '/about', text: 'About Us' },
        { path: '/about/team', text: 'Our Team' }
      ]
    },
    { path: '/contact-us', text: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="logo">
          <FaMountain />
          {['T', 'a', 'n', 'z', 'a', 'n', 'i', 'a'].map((letter, index) => (
            <span key={index} style={{'--i': index}}>
              {letter}
            </span>
          ))}
        </Link>

        <button 
          className="menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <div key={link.path} className="nav-item">
              <Link
                to={link.submenu ? '#' : link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={(e) => {
                  if (link.submenu) {
                    e.preventDefault();
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {link.text}
                {link.submenu && <FaChevronDown className="dropdown-icon" />}
              </Link>
              {link.submenu && (
                <div className="dropdown-menu">
                  {link.submenu.map((subItem) => (
                    <div key={subItem.path} className="dropdown-item">
                      {subItem.nestedSubmenu ? (
                        <div className="dropdown-item-content">
                          <Link
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.text}
                          </Link>
                          <FaChevronRight className="nested-arrow" />
                          <div className="nested-dropdown">
                            {subItem.nestedSubmenu.map((nestedItem) => (
                              <Link
                                key={nestedItem.path}
                                to={nestedItem.path}
                                className="dropdown-item"
                                onClick={() => setIsMenuOpen(false)}
                                title={nestedItem.title}
                              >
                                {nestedItem.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.text}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 