import React from "react";
import "./BusinessCardDesign.css";

export default function BusinessCardDesign() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Business Card Design</h1>
          <p>
            Make a lasting impression with custom business card designs that reflect your brand’s personality and professionalism.
            We combine creativity, clarity, and attention to detail to craft cards that leave your clients remembering you.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-images">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="Business cards 1" />
          <img src="https://images.unsplash.com/photo-1580910051074-2a9dbf1f84df" alt="Business cards 2" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Why Business Cards Still Matter</h2>
          <p>
            In a digital-first world, a tangible business card can make your brand memorable. It's often the first piece of design your clients
            physically interact with, setting the tone for your professionalism and creativity.
          </p>
          <p>
            At <strong>Dynamic Freelance Hub</strong>, we design business cards that stand out, ensuring that your brand identity is instantly recognizable,
            easy to read, and visually engaging.
          </p>
          <p>
            We incorporate unique layouts, premium finishes, and high-quality materials to make every card feel special. Whether minimalistic or bold, 
            your card will communicate your brand's story at a glance.
          </p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1592928309334-b79d8e3d9f33" alt="Business card showcase" />
          <img src="https://images.unsplash.com/photo-1551817958-20204f8d0f61" alt="Business card stack" />
        </div>
      </section>

      {/* DESIGN OPTIONS */}
      <section className="design-options">
        <h2>Our Design Options</h2>
        <div className="options-grid">
          <div className="option-box">
            <h3>Minimal & Elegant</h3>
            <p>Sleek, professional designs for modern businesses and corporate clients.</p>
            <img src="https://images.unsplash.com/photo-1610136949820-24eb69fc8e76" alt="Minimal design" />
          </div>
          <div className="option-box">
            <h3>Creative & Bold</h3>
            <p>Vibrant colors and creative layouts that stand out in any stack.</p>
            <img src="https://images.unsplash.com/photo-1604152135912-04a5a70a19a2" alt="Bold design" />
          </div>
          <div className="option-box">
            <h3>Custom Illustrations</h3>
            <p>Unique artwork to give your cards a personalized, artistic touch.</p>
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1abf2a" alt="Illustration" />
          </div>
          <div className="option-box">
            <h3>Premium Finishes</h3>
            <p>Embossing, foiling, spot UV, or textured paper for a luxurious feel.</p>
            <img src="https://images.unsplash.com/photo-1612831455545-5e9121c4d37f" alt="Premium finish" />
          </div>
          <div className="option-box">
            <h3>Double-Sided Cards</h3>
            <p>Maximize space and impact with carefully balanced front and back designs.</p>
            <img src="https://images.unsplash.com/photo-1612832025795-0cc0bde84f0d" alt="Double-sided cards" />
          </div>
          <div className="option-box">
            <h3>Eco-Friendly Materials</h3>
            <p>Recycled paper options that are sustainable without compromising quality.</p>
            <img src="https://images.unsplash.com/photo-1598514982502-c2c13c3c3e07" alt="Eco-friendly cards" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Business Card Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Consultation</h3>
            <p>Discuss your brand, style preferences, and desired impact.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Concept & Draft</h3>
            <p>Create initial design concepts and layouts for review.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Refinement</h3>
            <p>Revise based on feedback to perfect colors, fonts, and graphics.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Finalization & Delivery</h3>
            <p>Deliver print-ready files or physical cards with premium finishing options.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Make Your First Impression Count</h2>
        <p>Get custom business cards designed today and leave a lasting impression on every client.</p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
