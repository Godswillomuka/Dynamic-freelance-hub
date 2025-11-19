import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <header className="contact-hero">
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>
            We’re here to help bring your ideas to life. Contact us for project
            inquiries, collaborations, support, or custom design solutions. Our
            team responds within 24 hours.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1559136656-3db4a1d4f8a4?auto=format&fit=crop&w=1200&q=80"
            alt="Contact"
          />
        </div>
      </header>

      {/* CONTACT GRID */}
      <section className="contact-grid">
        {/* CONTACT DETAILS */}
        <div className="contact-details">
          <h2>Reach Us Directly</h2>
          <p>We’re always available through any of the channels below.</p>

          <div className="detail-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126509.png"
              alt="phone"
            />
            <div>
              <h4>Phone</h4>
              <p>+254 712 345 678</p>
            </div>
          </div>

          <div className="detail-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="email"
            />
            <div>
              <h4>Email</h4>
              <p>support@dynamicfreelancehub.com</p>
            </div>
          </div>

          <div className="detail-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535188.png"
              alt="location"
            />
            <div>
              <h4>Office Location</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="social-icons">
            <h3>Follow Us</h3>
            <div className="icons-row">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="fb" />
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="twitter" />
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="ig" />
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <p>Fill the form and our team will get back shortly.</p>

          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What do you want to discuss?" />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Type your message..."></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <h2>Find Us</h2>
        <p>Our office is located in the heart of Nairobi.</p>

        <div className="map-wrapper">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="office"
          />
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
            alt="workspace"
          />
          <img
            src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80"
            alt="team"
          />
        </div>

        <iframe
          title="map"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.05732766923!2d36.8074!3d-1.2921"
          loading="lazy"
        ></iframe>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let’s discuss your requirements and deliver a solution tailored to your goals.</p>
        <a href="/get-quote" className="primary-btn">Get a Quote</a>
      </section>
    </div>
  );
}
