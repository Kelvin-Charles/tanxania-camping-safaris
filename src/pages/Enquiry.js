import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaUser, FaEnvelope, FaGlobe, FaPhone, FaUsers, FaChild, FaCalendarAlt, FaDollarSign, FaHotel, FaTimes, FaMapMarkedAlt, FaCompass, FaInfoCircle, FaLightbulb } from 'react-icons/fa';
import { safariPackages } from '../data/safariPackages';
import { useLocation, useNavigate } from 'react-router-dom';
import './Enquiry.css';

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

const Enquiry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showCircuits, setShowCircuits] = useState(false);
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
  const [showSubjectSuggestions, setShowSubjectSuggestions] = useState(false);

  const circuits = [
    {
      id: 'northern',
      name: 'Northern Circuit',
      description: 'Explore Serengeti, Ngorongoro, and more',
      image: '/images/Photography.jpeg'
    },
    {
      id: 'southern',
      name: 'Southern Circuit',
      description: 'Discover Ruaha, Selous, and Mikumi',
      image: 'https://djgq6xwsalyrg.cloudfront.net/assets/animal7.jpg'
    },
    {
      id: 'western',
      name: 'Western Circuit',
      description: 'Visit Gombe, Mahale, and Katavi',
      image: 'https://djgq6xwsalyrg.cloudfront.net/assets/chimpanzee.jpg'
    },
    {
      id: 'coastal',
      name: 'Coastal Circuit',
      description: 'Experience Zanzibar, Mafia, and coastal wonders',
      image: 'https://djgq6xwsalyrg.cloudfront.net/assets/zanzibar3.jpg'
    }
  ];

  // Add common enquiry subjects
  const commonSubjects = [
    "Trip Planning and Itinerary",
    "Pricing and Payment Details",
    "Accommodation Options",
    "Transportation Arrangements",
    "Special Requirements",
    "Group Booking",
    "Custom Tour Request",
    "Wildlife Viewing Opportunities",
    "Best Time to Visit",
    "Safety and Health Information"
  ];

  // Generate suggested subject based on trip name
  const getSuggestedSubject = (tripName) => {
    if (!tripName) return "";
    
    // Find the package details from safariPackages
    const selectedPackage = allPackages.find(pkg => pkg.title === tripName);
    
    if (selectedPackage) {
      // If it's a package with duration, include it in the subject
      if (selectedPackage.duration) {
        return `Enquiry about ${tripName} (${selectedPackage.duration})`;
      }
    }
    return `Enquiry about ${tripName}`;
  };

  // Add this function to generate subjects based on trip details
  const generateSubjectSuggestions = () => {
    if (!formData.tripName) return [];
    
    const selectedPackage = allPackages.find(pkg => pkg.title === formData.tripName);
    if (!selectedPackage) return [];

    const suggestions = [
      `Enquiry about ${formData.tripName} Tour Package`,
      `${formData.tripName} Booking Information Request`,
      `${formData.tripName} Tour Details and Availability`,
      `Planning ${formData.tripName} Adventure`,
      `${formData.tripName} Tour Package Consultation`
    ];

    if (selectedPackage.duration) {
      suggestions.push(`${selectedPackage.duration} ${formData.tripName} Tour Enquiry`);
    }

    if (formData.accommodation) {
      suggestions.push(`${formData.tripName} Tour with ${formData.accommodation} Stay`);
    }

    return suggestions;
  };

  useEffect(() => {
    if (location.state) {
      const suggestedSubject = location.state.tripName ? `Enquiry about ${location.state.tripName}` : '';
      setFormData(prev => ({
        ...prev,
        tripName: location.state.tripName || prev.tripName,
        budget: location.state.budgetRange || prev.budget,
        subject: suggestedSubject || prev.subject
      }));
    }
  }, [location.state]);

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
    setShowCongrats(true);
  };

  const handleExplore = () => {
    setShowCongrats(false);
    setShowCircuits(true);
  };

  const handleCircuitSelect = (circuitId) => {
    setShowCircuits(false);
    navigate(`/parks-reserves/${circuitId}`);
  };

  // Get all unique packages from safariPackages
  const allPackages = Object.values(safariPackages.categories).flatMap(category => category.packages);
  const uniquePackages = [...new Set(allPackages.map(pkg => pkg.title))].sort();

  // Budget ranges
  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $2,000",
    "$2,000 - $3,000",
    "$3,000 - $5,000",
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

  return (
    <div className="enquiry-page">
      <div className="enquiry-background"></div>
      <div className="logo-container">
        <div className="circle-avatar">
          <img src="/images/logo.png" alt="Tanzania Camping Logo" className="logo-image" />
        </div>
      </div>
      <div className="enquiry-container">
        <h1>Book Your Adventure</h1>
        <p className="subtitle">Fill out the form below to start planning your perfect trip</p>
        
        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-group">
            <label htmlFor="tripName">
              <FaGlobe className="icon" />
              Trip Name
            </label>
            {location.state?.tripName ? (
              <div className="readonly-wrapper">
                <input
                  type="text"
                  id="tripName"
                  name="tripName"
                  value={formData.tripName}
                  readOnly
                  className="readonly-input"
                  onClick={() => {}} // Empty handler to ensure cursor shows
                />
                <div className="readonly-tooltip">
                  This field cannot be edited as it's pre-filled from your selected trip
                </div>
              </div>
            ) : (
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
            )}
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
              <span className="tooltip-icon">
                <FaInfoCircle className="info-icon" />
                <span className="tooltip-text">Include country code (e.g., +255 for Tanzania)</span>
              </span>
            </label>
            <div className="phone-input-container">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  // Only allow numbers, +, and spaces
                  if (/^[0-9+ ]*$/.test(value)) {
                    // Ensure it starts with +
                    const formattedValue = value.startsWith('+') ? value : '+' + value;
                    setFormData(prev => ({
                      ...prev,
                      phone: formattedValue
                    }));
                  }
                }}
                required
                placeholder="+XXX XXXXXXXXX"
                pattern="^\+[0-9]{1,4}[0-9 ]{8,}$"
                title="Please enter a valid phone number with country code (e.g., +255 123456789)"
              />
            </div>
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
              {location.state?.budgetRange ? (
                <div className="readonly-wrapper">
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    readOnly
                    className="readonly-input"
                    onClick={() => {}} // Empty handler to ensure cursor shows
                  />
                  <div className="readonly-tooltip">
                    This field cannot be edited as it's determined by your selected trip
                  </div>
                </div>
              ) : (
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
              )}
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
              {location.state?.tripName && (
                <span className="tooltip-icon">
                  <FaInfoCircle className="info-icon" />
                  <span className="tooltip-text">
                    We've suggested a subject based on your selected trip: "{formData.tripName}". 
                    You can use this suggestion or write your own subject.
                  </span>
                </span>
              )}
            </label>
            <div className="subject-input-group">
              <div className="subject-input-wrapper">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={formData.tripName ? "Enter subject or click generate for suggestions" : "Enter your subject"}
                  className={location.state?.tripName ? "suggested-input" : ""}
                />
                {formData.tripName && (
                  <button
                    type="button"
                    className="generate-subject-btn"
                    onClick={() => setShowSubjectSuggestions(!showSubjectSuggestions)}
                  >
                    <FaLightbulb className="icon" /> Generate
                  </button>
                )}
              </div>
              {showSubjectSuggestions && (
                <div className="subject-suggestions-dropdown">
                  {generateSubjectSuggestions().map((suggestion, index) => (
                    <div
                      key={index}
                      className="subject-suggestion-item"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, subject: suggestion }));
                        setShowSubjectSuggestions(false);
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
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

      {showCongrats && (
        <div className="modal-overlay">
          <div className="congrats-modal">
            {/* <button className="modal-close" onClick={() => setShowCongrats(false)}>
              <FaTimes />
            </button> */}
            <div className="congrats-content">
              <div className="congrats-icon">🎉</div>
              <h2>Thank You for Choosing Us!</h2>
              <p>We're thrilled to be part of your Tanzanian adventure. Our team can't wait to help you explore the breathtaking beauty of our country and create unforgettable memories.</p>
              <p>Get ready for an amazing journey through Tanzania's wonders!</p>
              <button className="explore-btn" onClick={handleExplore}>
                <FaCompass /> Explore Tanzania
              </button>
            </div>
          </div>
        </div>
      )}

      {showCircuits && (
        <div className="modal-overlay">
          <div className="circuits-modal">
            {/* <button className="modal-close" onClick={() => setShowCircuits(false)}>
              <FaTimes />
            </button> */}
            <div className="circuits-content">
              <h2>Discover Our Circuits</h2>
              <p>Choose a circuit to begin your adventure</p>
              <div className="circuits-grid">
                {circuits.map(circuit => (
                  <div 
                    key={circuit.id} 
                    className="circuit-card"
                    onClick={() => handleCircuitSelect(circuit.id)}
                  >
                    <div className="circuit-image">
                      <img src={circuit.image} alt={circuit.name} />
                    </div>
                    <div className="circuit-info">
                      <h3>{circuit.name}</h3>
                      <p>{circuit.description}</p>
                      <FaMapMarkedAlt className="circuit-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry; 