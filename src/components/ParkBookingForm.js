import React, { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { contactInfo } from '../config/contact';
import './ParkBookingForm.css';

const ParkBookingForm = ({ parkName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    groupSize: '',
    accommodation: 'luxury',
    activities: [],
    specialRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <h3>Book Your Visit to {parkName}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dates">Preferred Dates</label>
              <input
                type="date"
                id="dates"
                name="dates"
                value={formData.dates}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="groupSize">Group Size</label>
              <input
                type="number"
                id="groupSize"
                name="groupSize"
                min="1"
                value={formData.groupSize}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="accommodation">Preferred Accommodation</label>
            <select
              id="accommodation"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
            >
              <option value="luxury">Luxury Lodge</option>
              <option value="midrange">Mid-range Lodge</option>
              <option value="budget">Budget Camping</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequirements">Special Requirements</label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Booking Request
          </button>
        </form>
      </div>

      <div className="direct-contact">
        <h4>Or Contact Us Directly:</h4>
        <div className="contact-methods">
          <a href={`tel:${contactInfo.phone}`} className="contact-method">
            <FaPhone /> {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.bookingEmail}`} className="contact-method">
            <FaEnvelope /> {contactInfo.bookingEmail}
          </a>
          <a 
            href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`} 
            className="contact-method whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>
        <p className="office-hours">
          <FaCalendarAlt /> {contactInfo.officeHours}
        </p>
      </div>
    </div>
  );
};

export default ParkBookingForm; 