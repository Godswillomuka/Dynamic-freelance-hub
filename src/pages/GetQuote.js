import React from "react";
import "./GetQuote.css";

export default function GetQuote() {
  return (
    <div className="quote-page">
      {/* HERO */}
      <header className="quote-hero">
        <div className="hero-text">
          <h1>Request a Quote</h1>
          <p>
            Fill out the form below to get a detailed estimate for your project. 
            We offer personalized solutions tailored to your requirements.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1581091215364-0c9c3a7a1a4f?auto=format&fit=crop&w=1200&q=80"
            alt="Get a Quote"
          />
        </div>
      </header>

      {/* FORM + INFO */}
      <section className="quote-grid">
        {/* INFO PANEL */}
        <div className="info-panel">
          <h2>Why Request a Quote?</h2>
          <p>
            Our quote process ensures you get the right solution within your budget.
            It includes project analysis, cost breakdown, and timeline estimation.
          </p>
          <ul>
            <li>Free consultation and assessment of your project</li>
            <li>Transparent pricing without hidden fees</li>
            <li>Flexible timelines based on your needs</li>
            <li>Expert advice on design, printing, and branding</li>
          </ul>

          <div className="info-images">
            <img src="https://images.unsplash.com/photo-1515165562835-cd1b3c9383b1?auto=format&fit=crop&w=400&q=80" alt="design mockup" />
            <img src="https://images.unsplash.com/photo-1581091012184-8d5d1f08a1b3?auto=format&fit=crop&w=400&q=80" alt="team planning" />
            <img src="https://images.unsplash.com/photo-1573497019253-7c77e3d4f9db?auto=format&fit=crop&w=400&q=80" alt="project planning" />
          </div>
        </div>

        {/* QUOTE FORM */}
        <div className="quote-form">
          <h2>Get Your Personalized Quote</h2>
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
              <label>Service Required</label>
              <select>
                <option>Graphic Design</option>
                <option>Printing Solutions</option>
                <option>Branding & Identity</option>
                <option>Web Design & Development</option>
                <option>Event Branding</option>
              </select>
            </div>

            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Describe your project..." />
            </div>

            <button type="submit" className="primary-btn">Submit Request</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="quote-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Our team is eager to work with you. Get a detailed, transparent quote today.
        </p>
        <a href="/contact" className="primary-btn">Contact Us</a>
      </section>
    </div>
  );
}
