import React from "react";
import "./InvitationCardDesign.css";

export default function InvitationCardDesign() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Invitation Card Design</h1>
          <p>
            Make every event memorable with beautifully designed invitation cards. Our designs reflect your style, theme, and occasion perfectly.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1600566751554-33b7b4d61ee4?auto=format&fit=crop&w=800&q=80" alt="Invitation cards" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Personalized & Elegant Designs</h2>
          <p>
            Every event deserves invitations that leave a lasting impression. Our team crafts cards that are elegant, thematic, and highly customizable.
          </p>
          <p>
            From weddings to corporate events, birthdays, and anniversaries, we design invitations that reflect your personality and brand identity.
          </p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1600566751497-5c5b6e7e918b?auto=format&fit=crop&w=800&q=80" alt="Wedding invitation" />
          <img src="https://images.unsplash.com/photo-1600566751501-7d1f0c8d4824?auto=format&fit=crop&w=800&q=80" alt="Corporate invitation" />
        </div>
      </section>

      {/* DESIGN TYPES */}
      <section className="types">
        <h2>Invitation Types We Design</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Wedding Invitations</h3>
            <p>Elegant, thematic, and highly customizable wedding invitations.</p>
            <img src="https://images.unsplash.com/photo-1600566751514-5df5b621e5f2?auto=format&fit=crop&w=400&q=80" alt="Wedding invitation design" />
          </div>
          <div className="type-card">
            <h3>Birthday Invitations</h3>
            <p>Creative, colorful, and fun designs for birthday celebrations.</p>
            <img src="https://images.unsplash.com/photo-1600566751510-d0f6f9b5db8a?auto=format&fit=crop&w=400&q=80" alt="Birthday invitation design" />
          </div>
          <div className="type-card">
            <h3>Corporate Invitations</h3>
            <p>Professional invitations suitable for corporate events and launches.</p>
            <img src="https://images.unsplash.com/photo-1600566751498-6cb1b0c8c7c4?auto=format&fit=crop&w=400&q=80" alt="Corporate invitation design" />
          </div>
          <div className="type-card">
            <h3>Event Invitations</h3>
            <p>Custom invitations for any event or special occasion.</p>
            <img src="https://images.unsplash.com/photo-1600566751507-8e4b7f6e9a1b?auto=format&fit=crop&w=400&q=80" alt="Event invitation" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Our Invitation Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span>1</span>
            <h3>Consultation</h3>
            <p>Understand your event, theme, and preferences for the invitation design.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Concept Creation</h3>
            <p>We provide multiple design concepts for you to choose from.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Refinement</h3>
            <p>Iterative revisions to achieve the perfect invitation design.</p>
          </div>
          <div className="step">
            <span>4</span>
            <h3>Final Delivery</h3>
            <p>High-quality print-ready files or digital invitations delivered promptly.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Invitation Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1600566751496-4b7c8e6d4f8c?auto=format&fit=crop&w=400&q=80" alt="Sample 1" />
          <img src="https://images.unsplash.com/photo-1600566751499-2c9f7b8f3d1b?auto=format&fit=crop&w=400&q=80" alt="Sample 2" />
          <img src="https://images.unsplash.com/photo-1600566751502-5c3b7e6d4b9f?auto=format&fit=crop&w=400&q=80" alt="Sample 3" />
          <img src="https://images.unsplash.com/photo-1600566751503-6c4b7e5d4a8c?auto=format&fit=crop&w=400&q=80" alt="Sample 4" />
          <img src="https://images.unsplash.com/photo-1600566751505-7c5b7d6d4a7b?auto=format&fit=crop&w=400&q=80" alt="Sample 5" />
          <img src="https://images.unsplash.com/photo-1600566751506-8c6b7d5d4a6a?auto=format&fit=crop&w=400&q=80" alt="Sample 6" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Designing Your Invitations Today</h2>
        <p>Contact us to create invitations that wow your guests and make your event unforgettable.</p>
        <button className="btn-primary">Contact Us</button>
      </section>
    </div>
  );
}
