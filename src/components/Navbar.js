import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMountain, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

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
      text: 'Camping Tours',
      path: '/camping-tours',
      submenu: [
        { path: '/camping-tours/luxury', text: 'Luxury Camping' },
        { path: '/camping-tours/budget', text: 'Budget Camping' },
        { path: '/camping-tours/family', text: 'Family Camping' },
        { path: '/camping-tours/group', text: 'Group Camping' }
      ]
    },
    { 
      text: 'Parks & Reserves',
      path: '/parks-reserves',
      submenu: [
        { path: '/parks-reserves/serengeti', text: 'Serengeti' },
        { path: '/parks-reserves/ngorongoro', text: 'Ngorongoro' },
        { path: '/parks-reserves/tarangire', text: 'Tarangire' },
        { path: '/parks-reserves/manyara', text: 'Lake Manyara' }
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
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => !link.submenu && setIsMenuOpen(false)}
              >
                {link.text}
                {link.submenu && <FaChevronDown className="dropdown-icon" />}
              </Link>
              {link.submenu && (
                <div className="dropdown-menu">
                  {link.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.text}
                    </Link>
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