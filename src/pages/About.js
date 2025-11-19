import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <header className="about-hero">
        <div className="hero-text">
          <h1>About Dynamic Freelance Hub</h1>
          <p>
            We are a team of passionate professionals committed to helping businesses 
            bring their creative ideas to life. From branding to printing solutions, we provide expert services with precision and care.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Our Team at Work"
          />
        </div>
      </header>

      {/* COMPANY STORY */}
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, Dynamic Freelance Hub began as a small creative studio and quickly grew into a full-service hub for digital design, printing, branding, and web solutions.
        </p>
        <p>
          Our mission is to empower businesses and individuals to express themselves effectively through design and print. We combine modern technology with a personal touch to deliver results that make an impact.
        </p>
        <div className="story-images">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Creative Workspace" />
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Design Team Brainstorming" />
          <img src="https://images.unsplash.com/photo-1504384308090-1f0eb2e1e2b2?auto=format&fit=crop&w=400&q=80" alt="Office Environment" />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality creative and print solutions that help our clients stand out, achieve their goals, and inspire their audience.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be recognized as the go-to creative and printing hub for businesses and entrepreneurs seeking innovation, reliability, and exceptional results.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Our talented professionals are experts in design, branding, web development, and printing. Each member brings creativity and technical skills to deliver exceptional work.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80" alt="Team Member" />
            <h4>Jane Doe</h4>
            <p>Creative Director</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=300&q=80" alt="Team Member" />
            <h4>John Smith</h4>
            <p>Lead Designer</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80" alt="Team Member" />
            <h4>Mary Johnson</h4>
            <p>Project Manager</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" alt="Team Member" />
            <h4>Michael Brown</h4>
            <p>Brand Strategist</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Partner with Us</h2>
        <p>
          Whether you’re a startup or an established business, Dynamic Freelance Hub is here to elevate your brand and creative projects.
        </p>
        <a href="/contact" className="primary-btn">Contact Us</a>
      </section>
    </div>
  );
}
