import React, { useState } from 'react';
import './BookingForm.css';
import { FaCalendar, FaUsers, FaClock, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const BookingForm = ({ packageDetails, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    startDate: '',
    specialRequirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', { ...formData, package: packageDetails });
    // Show success message
    alert('Thank you for your booking request! We will contact you shortly.');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <h2>Book Your Safari</h2>
        <h3>{packageDetails.title}</h3>
        <p className="package-price">From ${packageDetails.price} per person</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <FaUser className="form-icon" />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <FaPhone className="form-icon" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <FaUsers className="form-icon" />
          <select
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <FaCalendar className="form-icon" />
          <input
            type="date"
            name="startDate"
            required
            value={formData.startDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <textarea
            name="specialRequirements"
            placeholder="Special Requirements or Questions"
            value={formData.specialRequirements}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="package-summary">
          <h4>Package Highlights</h4>
          <ul>
            {packageDetails.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm; 