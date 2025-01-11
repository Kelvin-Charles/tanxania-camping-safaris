import { contactInfo } from '../config/contact';

// Update in Contact page
<div className="contact-details">
  <div className="contact-method">
    <FaPhone />
    <h3>Phone</h3>
    <p>{contactInfo.phone}</p>
  </div>
  <div className="contact-method">
    <FaEnvelope />
    <h3>Email</h3>
    <p>{contactInfo.email}</p>
  </div>
  <div className="contact-method">
    <FaWhatsapp />
    <h3>WhatsApp</h3>
    <a href={contactInfo.whatsappLink}>Chat with us</a>
  </div>
</div> 