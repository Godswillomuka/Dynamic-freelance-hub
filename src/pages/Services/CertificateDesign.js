import React from "react";
import "./CertificateDesign.css";

export default function CertificateDesign() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Certificate Design</h1>
          <p>
            Impress recipients with professionally designed certificates. We craft certificates that are elegant, formal, and customized for your events or programs.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1612040576515-90f01c9b2f0b?auto=format&fit=crop&w=800&q=80" alt="Certificates" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>High-Quality & Professional</h2>
          <p>
            Whether it’s for achievements, awards, or recognition programs, our certificate designs communicate prestige and professionalism.
          </p>
          <p>
            We pay attention to typography, layout, and finishing touches to ensure every certificate looks premium and impactful.
          </p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1612040576550-47a2b2d5c0f1?auto=format&fit=crop&w=800&q=80" alt="Award certificate" />
          <img src="https://images.unsplash.com/photo-1612040576540-23a1b2d3c1e7?auto=format&fit=crop&w=800&q=80" alt="Recognition certificate" />
        </div>
      </section>

      {/* CERTIFICATE TYPES */}
      <section className="types">
        <h2>Certificate Types</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Achievement Certificates</h3>
            <p>Recognize accomplishments in academic, sports, or professional settings.</p>
            <img src="https://images.unsplash.com/photo-1612040576571-1e3d9c7b8b8f?auto=format&fit=crop&w=400&q=80" alt="Achievement certificate" />
          </div>
          <div className="type-card">
            <h3>Participation Certificates</h3>
            <p>Encourage attendees and participants with attractive and formal certificates.</p>
            <img src="https://images.unsplash.com/photo-1612040576585-2f4d9b8d7c7a?auto=format&fit=crop&w=400&q=80" alt="Participation certificate" />
          </div>
          <div className="type-card">
            <h3>Completion Certificates</h3>
            <p>Celebrate the completion of courses, workshops, or training programs.</p>
            <img src="https://images.unsplash.com/photo-1612040576590-3f5d8c9e8d7b?auto=format&fit=crop&w=400&q=80" alt="Completion certificate" />
          </div>
          <div className="type-card">
            <h3>Custom Certificates</h3>
            <p>Fully personalized certificates tailored to your event or brand identity.</p>
            <img src="https://images.unsplash.com/photo-1612040576595-4f6d8d9f9d6c?auto=format&fit=crop&w=400&q=80" alt="Custom certificate" />
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="process">
        <h2>Our Certificate Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span>1</span>
            <h3>Consultation</h3>
            <p>We understand the event, purpose, and preferred style for the certificates.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Concept Design</h3>
            <p>We create multiple design concepts for selection.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Revision</h3>
            <p>Refine designs until it perfectly matches your vision.</p>
          </div>
          <div className="step">
            <span>4</span>
            <h3>Delivery</h3>
            <p>Provide high-resolution digital files ready for printing.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Certificate Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1612040576600-5f7d9e9a9e8f?auto=format&fit=crop&w=400&q=80" alt="Sample 1" />
          <img src="https://images.unsplash.com/photo-1612040576605-6f8d9f9b9f7c?auto=format&fit=crop&w=400&q=80" alt="Sample 2" />
          <img src="https://images.unsplash.com/photo-1612040576610-7f9da0a0a0b0?auto=format&fit=crop&w=400&q=80" alt="Sample 3" />
          <img src="https://images.unsplash.com/photo-1612040576615-8fa0b1b1b1c1?auto=format&fit=crop&w=400&q=80" alt="Sample 4" />
          <img src="https://images.unsplash.com/photo-1612040576620-9fb1c2c2c2d2?auto=format&fit=crop&w=400&q=80" alt="Sample 5" />
          <img src="https://images.unsplash.com/photo-1612040576625-afb2d3d3d3e3?auto=format&fit=crop&w=400&q=80" alt="Sample 6" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Get Your Custom Certificates Today</h2>
        <p>Contact us to create certificates that impress and inspire your audience.</p>
        <button className="btn-primary">Contact Us</button>
      </section>
    </div>
  );
}
