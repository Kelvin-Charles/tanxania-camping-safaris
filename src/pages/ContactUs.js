import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaClock, FaPlane, FaHotel, FaQuestionCircle } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Let us help you plan your perfect African safari adventure</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info-wrapper">
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>We'll get back to you as soon as possible</p>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="What is this about?" required />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Tell us about your travel plans..." rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-icon">→</span>
              </button>
            </form>
          </div>

          <div className="contact-card">
            <div className="card-header">
              <h2>Tanzania Central Reservations Office</h2>
              <p>Your gateway to an unforgettable African safari experience</p>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h3>Address</h3>
                  <p>P.o.Box 13498,</p>
                  <p>Levolosi, Plot.18F Arusha Tanzania (EA)</p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>Meena Tegemea: info@tanzaniacampingsafaris.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone />
                <div>
                  <h3>Phone</h3>
                  <p>Mobile: +255 754 303 873</p>
                </div>
              </div>

              <div className="contact-item">
                <FaWhatsapp />
                <div>
                  <h3>WhatsApp</h3>
                  <p>+255 622 403 223 (Tanzania)</p>
                </div>
              </div>

              <div className="contact-item">
                <FaClock />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="license-info">
              <p>Travel Licence Class "A"</p>
            </div>
          </div>
        </div>

        <section className="quick-services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {quickServices.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="social-connect">
          <h2>Connect With Us</h2>
          <div className="social-grid">
            <div className="social-card facebook">
              <div className="social-header">
                <FaFacebookF />
                <h3>Facebook</h3>
              </div>
              <div className="social-content">
                <div 
                  className="fb-page" 
                  data-href="https://web.facebook.com/TanzaniaCamping"
                  data-tabs="timeline"
                  data-width="500"
                  data-height="500"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true">
                </div>
              </div>
            </div>

            <div className="social-card instagram">
              <div className="social-header">
                <FaInstagram />
                <h3>Instagram</h3>
              </div>
              <div className="instagram-feed">
                <iframe
                  src={`https://www.instagram.com/gofansafaris/embed`}
                  width="100%"
                  height="470px"
                  frameBorder="0"
                  scrolling="yes"
                  allowTransparency="true"
                ></iframe>
              </div>
            </div>

            <div className="social-card youtube">
              <div className="social-header">
                <FaYoutube />
                <h3>YouTube</h3>
              </div>
              <div className="youtube-feed">
                <iframe
                  width="100%"
                  height="470px"
                  src="https://www.youtube.com/embed/lq2g2MggY3E?si=4obCql8gK5BHnOYb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div className="faq-question">
                  <FaQuestionCircle />
                  <h3>{faq.question}</h3>
                </div>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="map-section">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17695.953691183702!2d36.6715602356772!3d-3.3636012214400357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d3570b6c277%3A0x6cf32424a5115d7f!2sTanzania%20Camping%20Safaris!5e1!3m2!1sen!2snl!4v1736645073322!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
          
          <div className="map-overlay">
            <h2>Find Us Here</h2>
            <p>Visit our office in Arusha, Tanzania</p>
            
            <div className="directions-info">
              <div className="direction-item">
                <h3>From Kilimanjaro International Airport (JRO)</h3>
                <ul>
                  <li>Distance: ~45 km (45-60 minutes drive)</li>
                  <li>Take Arusha-Moshi Highway towards Arusha</li>
                  <li>Enter Arusha city via Moshi Road</li>
                  <li>Turn right at Levolosi Junction</li>
                  <li>Our office is located at Plot 18F</li>
                </ul>
              </div>
              
              <div className="direction-item">
                <h3>From Arusha Airport (ARK)</h3>
                <ul>
                  <li>Distance: ~8 km (15-20 minutes drive)</li>
                  <li>Head north on Sokoine Road</li>
                  <li>Continue to Levolosi area</li>
                  <li>Office is visible from main road</li>
                </ul>
              </div>

              <div className="transport-options">
                <h3>Transport Options</h3>
                <ul>
                  <li>Airport Shuttle Service (pre-book)</li>
                  <li>Local Taxi Services</li>
                  <li>Uber/Bolt available</li>
                </ul>
              </div>

              <div className="landmark-info">
                <h3>Notable Landmarks</h3>
                <p>Near Levolosi Secondary School</p>
                <p>5 minutes from Clock Tower</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const quickServices = [
  {
    id: 1,
    icon: <FaPlane />,
    title: "Travel Planning",
    description: "Complete travel arrangements including flights, transfers, and accommodations"
  },
  {
    id: 2,
    icon: <FaHotel />,
    title: "Accommodation",
    description: "Luxury lodges and tented camps across Tanzania"
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey"
  }
];

const faqs = [
  {
    id: 1,
    question: "What is the best time to visit Tanzania?",
    answer: "The best time depends on your interests. June to October is ideal for wildlife viewing, while December to March is great for bird watching and witnessing the wildebeest calving season."
  },
  {
    id: 2,
    question: "How do I book a safari?",
    answer: "You can book by contacting us via email, phone, or WhatsApp. We'll help you choose the perfect itinerary and handle all arrangements."
  },
  {
    id: 3,
    question: "What should I pack for a safari?",
    answer: "Essential items include comfortable clothing in neutral colors, sun protection, camera, binoculars, and any personal medications."
  },
  {
    id: 4,
    question: "Are your safaris suitable for families?",
    answer: "Yes, we offer family-friendly safaris with accommodations and activities suitable for all ages."
  }
];

export default ContactUs; 