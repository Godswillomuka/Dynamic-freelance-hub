import React from "react";
import "./BannerBillboardDesign.css";

export default function BannerBillboardDesign() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Banner & Billboard Layout Design</h1>
          <p>
            Capture attention in a big way with our professionally designed banners and billboards.
            We specialize in layouts that communicate your message clearly while creating visual impact.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800&q=80" alt="Banner design example" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Why Large Format Design Matters</h2>
          <p>
            Banners and billboards are your brand’s voice in public spaces. A well-crafted layout
            ensures your message is visible, readable, and leaves a lasting impression.
          </p>
          <p>
            Our designers combine typography, color theory, and imagery to create visually appealing
            layouts that suit any size—from small banners to large outdoor billboards.
          </p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1581091870622-cf5aa0b3b0d7?auto=format&fit=crop&w=800&q=80" alt="Billboard design" />
          <img src="https://images.unsplash.com/photo-1581092337802-5a6d0e1b84e7?auto=format&fit=crop&w=800&q=80" alt="Banner advertising" />
        </div>
      </section>

      {/* DESIGN TYPES */}
      <section className="types">
        <h2>Types of Banners & Billboards We Design</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Outdoor Banners</h3>
            <p>Durable banners for events, promotions, and store fronts.</p>
            <img src="https://images.unsplash.com/photo-1571802822533-9c3f6aa5a2c3?auto=format&fit=crop&w=400&q=80" alt="Outdoor banners" />
          </div>
          <div className="type-card">
            <h3>Vinyl Banners</h3>
            <p>High-quality vinyl banners for long-lasting visibility.</p>
            <img src="https://images.unsplash.com/photo-1573164574393-51e7c36ebf92?auto=format&fit=crop&w=400&q=80" alt="Vinyl banner" />
          </div>
          <div className="type-card">
            <h3>Billboards</h3>
            <p>Large-scale designs optimized for readability and brand impact.</p>
            <img src="https://images.unsplash.com/photo-1543340713-1ccfbf7f203f?auto=format&fit=crop&w=400&q=80" alt="Billboard" />
          </div>
          <div className="type-card">
            <h3>Event Backdrops</h3>
            <p>Custom layouts for exhibitions, trade shows, and live events.</p>
            <img src="https://images.unsplash.com/photo-1600181954460-f1511689ecff?auto=format&fit=crop&w=400&q=80" alt="Event backdrop" />
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="process">
        <h2>Our Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span>1</span>
            <h3>Consultation</h3>
            <p>Learn your goals, message, and target audience to create impactful designs.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Concept Development</h3>
            <p>We create multiple layout options that combine creativity with clarity.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Refinement</h3>
            <p>Collaborate to refine designs for maximum readability and brand alignment.</p>
          </div>
          <div className="step">
            <span>4</span>
            <h3>Delivery</h3>
            <p>Final print-ready files or coordination with your printing provider.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Recent Banner & Billboard Projects</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80" alt="Sample 1" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Sample 2" />
          <img src="https://images.unsplash.com/photo-1599058917212-4e61d3b2ef4b?auto=format&fit=crop&w=400&q=80" alt="Sample 3" />
          <img src="https://images.unsplash.com/photo-1581091870620-234f13cf5f01?auto=format&fit=crop&w=400&q=80" alt="Sample 4" />
          <img src="https://images.unsplash.com/photo-1581092337844-43b0a46a39e5?auto=format&fit=crop&w=400&q=80" alt="Sample 5" />
          <img src="https://images.unsplash.com/photo-1581092337852-b3d3f5dfca88?auto=format&fit=crop&w=400&q=80" alt="Sample 6" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Make a Big Impression?</h2>
        <p>Let’s design banners and billboards that captivate and engage your audience.</p>
        <button className="btn-primary">Contact Us</button>
      </section>
    </div>
  );
}
