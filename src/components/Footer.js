import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

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
          {/* Brand Info Section */}
          <div className="footer-section">
            <h3>Dynamic Freelance Hub</h3>
            <p>
              Your trusted partner for premium printing and branding solutions. 
              We bring your vision to life with exceptional quality and service.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><FontAwesomeIcon icon={faEnvelope} /> info@dynamicfreelancehub.com</p>
              <p><FontAwesomeIcon icon={faPhone} /> +254 700 123 456</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nairobi, Kenya</p>
            </div>
          </div>
          
          {/* Services Section */}
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
          
          {/* Quick Links Section */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#contact">Get Quote</a></li>
              <li><a href="#contact">FAQ</a></li>
              <li><a href="#contact">Terms & Conditions</a></li>
              <li><a href="#contact">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Business Hours Section */}
          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="business-hours">
              <p><strong>Monday - Friday</strong><br />8:00 AM - 7:00 PM</p>
              <p><strong>Saturday</strong><br />9:00 AM - 4:00 PM</p>
              <p><strong>Sunday</strong><br />Closed</p>
            </div>
          </div>
          
          {/* Social Links Section */}
          <div className="footer-section social-section">
            <h4>Follow Us</h4>
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
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter-section-stretch">
            <div className="newsletter">
              <h5>Stay Connected</h5>
              <p>Join our mailing list for the latest news and offers</p>
              <form className="newsletter-form">
                <div className="newsletter-form-row">
                  <input type="email" placeholder="username@gmail.com" required />
                  <button type="submit" className="btn">Subscribe</button>
                </div>
              </form>
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