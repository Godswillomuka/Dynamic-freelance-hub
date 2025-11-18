import React from "react";
import "./LogoDesign.css";

export default function LogoDesign() {
  return (
    <div className="logo-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Professional Logo Design</h1>
          <p>
            A logo is the face of your brand. We create unique, memorable, and versatile logos that
            convey your brand identity clearly and professionally. Stand out in your industry with
            designs tailored to your vision.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1581091870621-91f8a4607d16?auto=format&fit=crop&w=800&q=80"
            alt="Logo design concept"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>What Makes a Great Logo?</h2>
          <p>
            A great logo is more than just a pretty icon. It communicates your brand values,
            personality, and industry relevance in a single visual mark.
          </p>
          <p>
            Our team combines creativity with strategic thinking. We explore color theory,
            typography, and design principles to craft logos that leave a lasting impression.
          </p>
          <p>
            From minimalist modern marks to bold, illustrative designs, we ensure your logo
            works across all mediums — print, digital, merchandise, and signage.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1601758123927-3e9b3ebff54f?auto=format&fit=crop&w=800&q=80"
            alt="Designing logo sketches"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <h2>Why Choose Our Logo Design Service?</h2>
        <div className="why-grid">
          <div className="why-item">
            <h3>Creative & Original</h3>
            <p>We craft one-of-a-kind logos that truly represent your brand story.</p>
          </div>
          <div className="why-item">
            <h3>Versatile & Scalable</h3>
            <p>Our logos work perfectly on business cards, websites, billboards, and merchandise.</p>
          </div>
          <div className="why-item">
            <h3>Strategic Design</h3>
            <p>We combine design trends with market research for maximum brand impact.</p>
          </div>
          <div className="why-item">
            <h3>Unlimited Revisions</h3>
            <p>We refine the design until it aligns with your vision and expectations.</p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Logo Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Discovery</h3>
            <p>
              Understand your brand, audience, and goals to define the direction for the logo design.
            </p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Concept Development</h3>
            <p>
              Sketch multiple ideas, explore typography, colors, and symbols for your brand identity.
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Design Refinement</h3>
            <p>
              Convert selected concepts into polished digital designs, iterating based on feedback.
            </p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Final Delivery</h3>
            <p>
              Deliver logo files in all necessary formats: vector, PNG, JPG, and brand guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery">
        <h2>Portfolio of Our Logo Designs</h2>
        <p>Here are some of our recent logo projects across various industries and styles.</p>
        <div className="gallery-grid">
          <img
            src="https://images.unsplash.com/photo-1601924582971-17f4498a02a2?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 1"
          />
          <img
            src="https://images.unsplash.com/photo-1567969730971-0f6a0b0a91e2?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 2"
          />
          <img
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 3"
          />
          <img
            src="https://images.unsplash.com/photo-1602524810853-6a6f3b6d28a0?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 4"
          />
          <img
            src="https://images.unsplash.com/photo-1602524810833-6a6f3b6d28a0?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 5"
          />
          <img
            src="https://images.unsplash.com/photo-1602524810823-6a6f3b6d28a0?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 6"
          />
          <img
            src="https://images.unsplash.com/photo-1581091870621-91f8a4607d16?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 7"
          />
          <img
            src="https://images.unsplash.com/photo-1601758123927-3e9b3ebff54f?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 8"
          />
          <img
            src="https://images.unsplash.com/photo-1601924582971-17f4498a02a2?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 9"
          />
          <img
            src="https://images.unsplash.com/photo-1567969730971-0f6a0b0a91e2?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 10"
          />
          <img
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 11"
          />
          <img
            src="https://images.unsplash.com/photo-1602524810853-6a6f3b6d28a0?auto=format&fit=crop&w=400&q=80"
            alt="Logo sample 12"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Elevate Your Brand?</h2>
        <p>
          Let’s design a logo that communicates your brand’s story and leaves a lasting impression.
        </p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
