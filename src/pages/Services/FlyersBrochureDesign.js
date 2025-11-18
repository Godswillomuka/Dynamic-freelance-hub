import React from "react";
import "./FlyersBrochureDesign.css";

export default function FlyersBrochureDesign() {
  return (
    <div className="flyers-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Engaging Flyers & Brochures that Captivate</h1>
          <p>
            From concept to print, we design high-impact flyers and brochures that communicate your brand's message effectively and leave a lasting impression.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1581092795363-5ec6c110bfb5?auto=format&fit=crop&w=800&q=80" alt="Flyers and brochures design" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>Why Our Flyers & Brochures Stand Out</h2>
        <p>
          We specialize in visually striking, professionally designed flyers and brochures. Each piece is tailored to your audience, whether for corporate branding, event promotion, or product marketing.
        </p>
        <p>
          Our designers combine creativity with market research to ensure your materials are compelling, readable, and aligned with your brand identity. High-quality print, precise color matching, and engaging layouts help your message shine.
        </p>
      </section>

      {/* DIFFERENCE SECTION */}
      <section className="difference">
        <h2>What Makes Us Unique</h2>
        <div className="difference-grid">
          <div className="diff-box">
            <h3>Custom Design</h3>
            <p>Every flyer and brochure is uniquely designed for your campaign, ensuring originality and creativity.</p>
          </div>
          <div className="diff-box">
            <h3>High-Quality Print</h3>
            <p>We use premium printing techniques for vibrant colors, crisp images, and durable materials.</p>
          </div>
          <div className="diff-box">
            <h3>Targeted Communication</h3>
            <p>Designed to communicate your key message effectively to your audience, ensuring engagement and results.</p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery">
        <h2>Portfolio Highlights</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1573164574390-9b6f9c9bfb6f?auto=format&fit=crop&w=400&q=80" alt="Flyer 1"/>
          <img src="https://images.unsplash.com/photo-1616628189934-21ff3f187c70?auto=format&fit=crop&w=400&q=80" alt="Brochure 1"/>
          <img src="https://images.unsplash.com/photo-1587574293340-0e02214a0b1a?auto=format&fit=crop&w=400&q=80" alt="Flyer 2"/>
          <img src="https://images.unsplash.com/photo-1601597105560-b5a0d97c9e1f?auto=format&fit=crop&w=400&q=80" alt="Brochure 2"/>
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80" alt="Flyer 3"/>
          <img src="https://images.unsplash.com/photo-1596496050115-61d7db16f47c?auto=format&fit=crop&w=400&q=80" alt="Brochure 3"/>
          <img src="https://images.unsplash.com/photo-1602526213268-5b2b8fa6b5e1?auto=format&fit=crop&w=400&q=80" alt="Flyer 4"/>
          <img src="https://images.unsplash.com/photo-1616628128473-5b5f1760cf31?auto=format&fit=crop&w=400&q=80" alt="Brochure 4"/>
          <img src="https://images.unsplash.com/photo-1625910111642-84a1f88a5f04?auto=format&fit=crop&w=400&q=80" alt="Flyer 5"/>
          <img src="https://images.unsplash.com/photo-1620322086418-798ab0da5f2e?auto=format&fit=crop&w=400&q=80" alt="Brochure 5"/>
          <img src="https://images.unsplash.com/photo-1616628306316-3a4f3d86c3a5?auto=format&fit=crop&w=400&q=80" alt="Flyer 6"/>
          <img src="https://images.unsplash.com/photo-1616628407254-2f3e3e5a1f4f?auto=format&fit=crop&w=400&q=80" alt="Brochure 6"/>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Consultation</h3>
            <p>We discuss your campaign goals, target audience, and messaging requirements.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Design Drafts</h3>
            <p>Our team creates multiple design concepts tailored to your objectives.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Review & Revisions</h3>
            <p>You provide feedback, and we refine the designs until perfect.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Finalization & Delivery</h3>
            <p>We provide print-ready files or handle printing and delivery with precision.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Get Noticed?</h2>
        <p>Let’s create flyers and brochures that truly capture attention. Contact us for a free consultation today.</p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
