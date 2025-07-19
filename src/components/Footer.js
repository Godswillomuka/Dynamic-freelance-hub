import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          {/* This section will now only contain the main brand info */}
          <div className="footer-section">
            <h3>Dynamic Freelance Hub</h3>
            <p>
              Your trusted partner for premium printing and branding solutions. 
              We bring your vision to life with exceptional quality and service.
            </p>
          </div>
          
          {/* New section for Contact Us, separate from the main brand info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><FontAwesomeIcon icon={faEnvelope} /> info@dynamicfreelancehub.com</p>
              <p><FontAwesomeIcon icon={faPhone} /> +254 700 123 456</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nairobi, Kenya</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Digital Printing</a></li>
              <li><a href="#services">Large Format Printing</a></li>
              <li><a href="#services">Brand Identity Design</a></li>
              <li><a href="#services">Packaging Solutions</a></li>
              <li><a href="#services">Promotional Products</a></li>
              <li><a href="#services">Office Stationery</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#contact">Get Quote</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* New section for Business Hours, separate from social links */}
          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="business-hours">
              <p><strong>Monday - Friday</strong><br />8:00 AM - 7:00 PM</p>
              <p><strong>Saturday</strong><br />9:00 AM - 4:00 PM</p>
              <p><strong>Sunday</strong><br />Closed</p>
            </div>
          </div>
          
          {/* New section for Social Links, separate from business hours */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links-container">
              <a href="#" aria-label="Facebook" className="social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" aria-label="Instagram" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" aria-label="Twitter" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" aria-label="LinkedIn" className="social-link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>&copy; {currentYear} Dynamic Freelance Hub. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;