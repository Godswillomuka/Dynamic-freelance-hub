import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle">
              Ready to bring your creative vision to life? Contact us for project inquiries, 
              collaborations, or custom design solutions. Our team responds within 24 hours.
            </p>
            <div className="contact-stats">
              <div className="contact-stat">
                <h3>24h</h3>
                <p>Response Time</p>
              </div>
              <div className="contact-stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="contact-stat">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="contact-hero-image">
            <img
              src="https://images.unsplash.com/photo-1559136656-3db4a1d4f8a4?auto=format&fit=crop&w=600&q=80"
              alt="Our creative team collaborating"
            />
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-main-section">
        <div className="contact-section-container">
          <div className="contact-grid">
            {/* CONTACT DETAILS */}
            <div className="contact-details">
              <h2 className="contact-section-title">Reach Us Directly</h2>
              <p className="contact-section-description">
                We're always available through any of the channels below. 
                Don't hesitate to reach out for quick responses.
              </p>

              <div className="contact-detail-box">
                <div className="contact-detail-icon">📞</div>
                <div className="contact-detail-content">
                  <h4>Phone & WhatsApp</h4>
                  <p>+254 746 808 099</p>
                  <span>Available 8AM - 6PM EAT</span>
                </div>
              </div>

              <div className="contact-detail-box">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-content">
                  <h4>Email Address</h4>
                  <p>freelancehub3@gmail.com</p>
                  <span>We reply within 24 hours</span>
                </div>
              </div>

              <div className="contact-detail-box">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-content">
                  <h4>Office Location</h4>
                  <p>Nairobi, Kenya</p>
                  <span>Visit by appointment</span>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Our Journey</h3>
                <p>Stay updated with our latest projects and insights</p>
                <div className="social-links-container">
                  <a href="https://facebook.com" aria-label="Facebook" className="social-link">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="social-name">Facebook</span>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram" className="social-link">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="social-name">Instagram</span>
                  </a>
                  <a href="https://twitter.com" aria-label="Twitter" className="social-link">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="social-name">Twitter</span>
                  </a>
                  <a href="https://tiktok.com" aria-label="TikTok" className="social-link">
                    <FontAwesomeIcon icon={faTiktok} />
                    <span className="social-name">TikTok</span>
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="social-link">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <span className="social-name">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h2 className="contact-section-title">Send Us a Message</h2>
                <p className="contact-section-description">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address" 
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number" 
                  />
                </div>

                <div className="contact-form-group">
                  <label>Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What do you want to discuss?" 
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label>Your Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="contact-location-section">
        <div className="contact-section-container">
          <h2 className="contact-section-title">Visit Our Creative Space</h2>
          <p className="contact-section-description">
            Our office is located in the heart of Nairobi, designed to inspire creativity and collaboration.
          </p>
          
          <div className="location-gallery">
            <div className="location-image">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                alt="Our modern workspace"
              />
              <div className="location-overlay">
                <h4>Creative Workspace</h4>
                <p>Designed for innovation</p>
              </div>
            </div>
            <div className="location-image">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Meeting area"
              />
              <div className="location-overlay">
                <h4>Meeting Area</h4>
                <p>Client collaboration space</p>
              </div>
            </div>
            <div className="location-image">
              <img
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80"
                alt="Production area"
              />
              <div className="location-overlay">
                <h4>Production Zone</h4>
                <p>Quality printing & finishing</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                title="Our location in Nairobi"
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.158178898!2d36.749834375!3d-1.3637697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0536e99db38d%3A0x5d3c5c1d7b12f8b6!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-info">
              <h4>📍 Dynamic Freelance Hub</h4>
              <p><strong>Nairobi, Kenya</strong></p>
              <p>📅 Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>📅 Saturday: 9:00 AM - 2:00 PM</p>
              <p>📅 Sunday: Closed</p>
              <button className="map-direction-btn" onClick={() => window.open('https://maps.google.com/?q=Nairobi,Kenya', '_blank')}>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="contact-section-container">
          <div className="contact-cta-content">
            <h2 className="contact-section-title">Ready to Start Your Project?</h2>
            <p className="contact-section-description">
              Let's discuss your requirements and deliver a solution tailored to your goals. 
              Get a free consultation and project estimate.
            </p>
            <div className="contact-cta-actions">
              <a href="/get-quote" className="contact-cta-btn contact-cta-primary">
                Get Free Quote
              </a>
              <a href="/portfolio" className="contact-cta-btn contact-cta-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}