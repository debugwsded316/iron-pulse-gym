import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">CONTACT US</h2>
        <p className="section-subtitle">Get in touch with us</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Visit Us</h3>
            <p>📍 123 Fitness Street, Gym City, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@ironpulse.com</p>
            
            <h3>Hours</h3>
            <p>Mon-Fri: 6AM - 10PM</p>
            <p>Sat: 8AM - 8PM</p>
            <p>Sun: 8AM - 6PM</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <textarea 
                rows="5" 
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;