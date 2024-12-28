import { contactInfo } from '../config/contact';

// Update in contact form component
<div className="quick-contact">
  <h3>Quick Contact</h3>
  <div className="contact-options">
    <a href={contactInfo.whatsappLink} className="whatsapp-btn">
      <FaWhatsapp /> Chat on WhatsApp
    </a>
    <div className="contact-info">
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
    </div>
  </div>
</div> 