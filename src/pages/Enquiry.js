import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaUser, FaEnvelope, FaGlobe, FaPhone, FaUsers, FaChild, FaCalendarAlt, FaDollarSign, FaHotel } from 'react-icons/fa';
import { safariPackages } from '../data/safariPackages';
import './Enquiry.css';

const Enquiry = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    tripName: '',
    name: '',
    email: '',
    country: '',
    phone: '',
    adults: '',
    children: '',
    subject: '',
    message: '',
    budget: '',
    accommodation: ''
  });

  // Get all unique packages from safariPackages
  const allPackages = Object.values(safariPackages.categories).flatMap(category => category.packages);
  const uniquePackages = [...new Set(allPackages.map(pkg => pkg.title))].sort();

  // Budget ranges
  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $2,000",
    "$2,000 - $3,000",
    "$3,000 - $4,000",
    "$4,000 - $5,000",
    "Above $5,000"
  ];

  // Accommodation types
  const accommodationTypes = [
    "Luxury Lodge",
    "Tented Camp",
    "Standard Lodge",
    "Budget Hotel",
    "Camping",
    "Mixed Accommodation"
  ];

  // Comprehensive list of countries
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, estimatedArrivalDate: selectedDate });
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-background"></div>
      <div className="logo-container">
        <div className="circle-avatar">
          <img 
            src="/images/logo.png" 
            alt="Tanzania Camping Logo" 
            className="logo-image"
          />
        </div>
      </div>
      <div className="enquiry-container">
        <h1>Book Your Adventure</h1>
        <p className="subtitle">Fill out the form below to start planning your perfect trip</p>
        
        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-group">
            <label htmlFor="tripName">
              <FaGlobe className="icon" />
              Select Trip
            </label>
            <select
              id="tripName"
              name="tripName"
              value={formData.tripName}
              onChange={handleChange}
              required
            >
              <option value="">Select a Trip</option>
              {uniquePackages.map((title, index) => (
                <option key={index} value={title}>{title}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              <FaUser className="icon" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="icon" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">
              <FaGlobe className="icon" />
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <FaPhone className="icon" />
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="adults">
                <FaUsers className="icon" />
                No. of Adults
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                required
                min="1"
                placeholder="Adults"
              />
            </div>

            <div className="form-group half">
              <label htmlFor="children">
                <FaChild className="icon" />
                No. of Children
              </label>
              <input
                type="number"
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                placeholder="Children"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="arrivalDate">
              <FaCalendarAlt className="icon" />
              Estimated Arrival Date
            </label>
            <DatePicker
              id="arrivalDate"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Select arrival date"
              required
              className="date-picker"
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="budget">
                <FaDollarSign className="icon" />
                Budget Per Person
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select Budget Range</option>
                {budgetRanges.map((range, index) => (
                  <option key={index} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div className="form-group half">
              <label htmlFor="accommodation">
                <FaHotel className="icon" />
                Preferred Accommodation
              </label>
              <select
                id="accommodation"
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                required
              >
                <option value="">Select Accommodation Type</option>
                {accommodationTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">
              Enquiry Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter enquiry subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message or special requirements"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry; 