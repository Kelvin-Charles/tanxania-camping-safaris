import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaChevronRight } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3>About Us</h3>
            <p>
              Experience the magic of Tanzania with our expert-guided tours. We specialize in creating unforgettable safari adventures, 
              combining luxury camping with authentic wildlife experiences.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li><Link to="/"><FaChevronRight />Home</Link></li>
              <li><Link to="/about-us"><FaChevronRight />About Us</Link></li>
              <li><Link to="/camping-tours"><FaChevronRight />Camping Tours</Link></li>
              <li><Link to="/parks-reserves"><FaChevronRight />Parks & Reserves</Link></li>
              <li><Link to="/contact-us"><FaChevronRight />Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/camping-tours"><FaChevronRight />Luxury Camping</Link></li>
              <li><Link to="/cultural"><FaChevronRight />Cultural Tours</Link></li>
              <li><Link to="/experience"><FaChevronRight />Safari Experience</Link></li>
              <li><Link to="/parks-reserves"><FaChevronRight />Wildlife Tours</Link></li>
              <li><Link to="/camping-tours"><FaChevronRight />Adventure Tours</Link></li>
            </ul>
          </div>

          <div className="footer-section contact-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <div>
                  <strong>Location:</strong>
                  <p>Arusha, Tanzania</p>
                </div>
              </li>
              <li>
                <FaPhone />
                <div>
                  <strong>Call Us:</strong>
                  <p>+255 123 456 789</p>
                </div>
              </li>
              <li>
                <FaEnvelope />
                <div>
                  <strong>Email Us:</strong>
                  <p>info@tanzaniacamping.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Tanzania Camping. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
