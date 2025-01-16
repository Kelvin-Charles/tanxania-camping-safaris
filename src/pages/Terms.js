import React from 'react';
import './Terms.css';

const Terms = () => {
  const heroImage = "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80";
  const patternImage = "https://www.transparenttextures.com/patterns/diamond-upholstery.png";

  return (
    <div className="terms-container" style={{
      '--hero-bg': `url(${heroImage})`,
      '--pattern-bg': `url(${patternImage})`
    }}>
      <div className="terms-hero">
        <h1>Terms & Conditions</h1>
        <p>Please read our terms and conditions carefully before booking your safari adventure</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>Booking Terms</h2>
          <p>
            Welcome to Tanzania Camping Safaris. By making a booking with us, you agree to be bound by these terms and conditions. 
            Please read them carefully as they contain important information about your rights and obligations.
          </p>
          
          <h3>Booking Process</h3>
          <ul>
            <li>A deposit of 30% of the total safari cost is required to confirm your booking</li>
            <li>Full payment must be received at least 30 days prior to the safari start date</li>
            <li>For bookings made within 30 days of departure, full payment is required immediately</li>
            <li>All payments must be made in US Dollars unless otherwise agreed</li>
            <li>Booking confirmation will be sent via email once deposit is received</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Cancellation Policy</h2>
          <p>
            We understand that circumstances may arise that lead to the cancellation of your safari. 
            Our cancellation policy is designed to be fair while protecting our commitments to suppliers and staff.
          </p>
          <ul>
            <li>60+ days before departure: Full refund minus $100 administrative fee</li>
            <li>30-59 days before departure: 50% of total safari cost</li>
            <li>15-29 days before departure: 75% of total safari cost</li>
            <li>Less than 15 days before departure: No refund</li>
          </ul>
          
          <div className="terms-note">
            <h4>Important Note</h4>
            <p>
              We strongly recommend purchasing comprehensive travel insurance to cover any unforeseen 
              circumstances that may lead to trip cancellation, medical emergencies, or other travel-related issues.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>Safari Conduct</h2>
          <h3>Your Responsibilities</h3>
          <ul>
            <li>Follow all safety instructions provided by guides and camp staff</li>
            <li>Respect wildlife and maintain safe distances as advised by guides</li>
            <li>Adhere to park rules and regulations at all times</li>
            <li>Respect local customs and communities during your visit</li>
            <li>Maintain proper documentation (passports, visas, etc.)</li>
            <li>Inform us of any medical conditions or dietary requirements</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Liability & Insurance</h2>
          <p>
            Tanzania Camping Safaris takes all reasonable steps to ensure your safety and enjoyment. 
            However, safari activities involve inherent risks, and we operate under the following conditions:
          </p>
          <ul>
            <li>Personal travel insurance is mandatory for all safari participants</li>
            <li>Insurance should cover medical emergencies, evacuation, and trip cancellation</li>
            <li>We are not liable for circumstances beyond our control (weather, flight delays, etc.)</li>
            <li>Participants are responsible for their personal belongings throughout the safari</li>
            <li>Medical conditions must be disclosed during booking</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Changes & Amendments</h2>
          <p>While we strive to operate all safaris as described in the itinerary, we reserve certain rights:</p>
          <ul>
            <li>To modify itineraries due to weather, safety, or other circumstances</li>
            <li>To provide alternative arrangements of similar or higher quality</li>
            <li>To decline or remove participants if their conduct endangers themselves or others</li>
            <li>To adjust prices due to significant currency fluctuations or park fee changes</li>
          </ul>
        </section>

        <div className="contact-info">
          <h2>Questions About Our Terms?</h2>
          <p className="contact-intro">Our team is here to help clarify any points and ensure you have a clear understanding of our terms.</p>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="question">Your Question</label>
              <textarea id="question" placeholder="Type your question here..." rows="4" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Question</button>
          </form>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@tanzaniacampingsafaris.com">info@tanzaniacampingsafaris.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+255123456789">+255 123 456 789</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Available Monday to Friday, 9:00 AM - 6:00 PM (EAT)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 