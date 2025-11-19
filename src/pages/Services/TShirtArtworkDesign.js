import React from "react";
import "./TShirtArtworkDesign.css";

export default function TShirtArtworkDesign() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>T-Shirt Artwork Design</h1>
          <p>
            Create eye-catching t-shirt designs that reflect your brand, event, or personal style. Our designs are unique, professional, and print-ready.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1590608897129-79e1e86c4b4d?auto=format&fit=crop&w=800&q=80" alt="T-Shirt Design" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Creative & Trendy Designs</h2>
          <p>
            We craft t-shirt artwork that stands out. Each design is tailored to your vision, whether for corporate, events, merchandise, or personal projects.
          </p>
          <p>
            Using vibrant colors, balanced composition, and modern design principles, our artworks translate beautifully on any fabric.
          </p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1590608897180-f1f3c8c1f5e3?auto=format&fit=crop&w=800&q=80" alt="T-Shirt Print Example 1" />
          <img src="https://images.unsplash.com/photo-1590608897155-9e5e1a4d4f6f?auto=format&fit=crop&w=800&q=80" alt="T-Shirt Print Example 2" />
          <img src="https://images.unsplash.com/photo-1590608897199-2d4e5b3c6f6a?auto=format&fit=crop&w=800&q=80" alt="T-Shirt Print Example 3" />
        </div>
      </section>

      {/* DESIGN TYPES */}
      <section className="types">
        <h2>Our T-Shirt Artwork Types</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Corporate & Team Shirts</h3>
            <p>Perfect for branding, events, or team uniforms, maintaining a professional yet fun look.</p>
            <img src="https://images.unsplash.com/photo-1590608897175-8f4c7d2f5e6b?auto=format&fit=crop&w=400&q=80" alt="Corporate T-Shirt" />
          </div>
          <div className="type-card">
            <h3>Event & Promotional Shirts</h3>
            <p>Designs that make your event memorable and visually appealing.</p>
            <img src="https://images.unsplash.com/photo-1590608897132-7e5c8b4d2f5f?auto=format&fit=crop&w=400&q=80" alt="Event T-Shirt" />
          </div>
          <div className="type-card">
            <h3>Personal & Custom Designs</h3>
            <p>Unique t-shirts tailored for gifts, hobbies, or creative expression.</p>
            <img src="https://images.unsplash.com/photo-1590608897111-6e4c7b3c1f5e?auto=format&fit=crop&w=400&q=80" alt="Custom T-Shirt" />
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="process">
        <h2>Our T-Shirt Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span>1</span>
            <h3>Consultation</h3>
            <p>We discuss your requirements, audience, and preferred style.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Concept Creation</h3>
            <p>We create several concepts with varied design directions.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Revision</h3>
            <p>Refine your preferred design until it's perfect and print-ready.</p>
          </div>
          <div className="step">
            <span>4</span>
            <h3>Final Delivery</h3>
            <p>High-resolution files ready for printing on multiple materials and sizes.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1590608897100-5f3c7d2f6e5f?auto=format&fit=crop&w=400&q=80" alt="Sample 1" />
          <img src="https://images.unsplash.com/photo-1590608897105-6f4c8e3d5e6b?auto=format&fit=crop&w=400&q=80" alt="Sample 2" />
          <img src="https://images.unsplash.com/photo-1590608897110-7f5d9f4f6e6c?auto=format&fit=crop&w=400&q=80" alt="Sample 3" />
          <img src="https://images.unsplash.com/photo-1590608897115-8f6eaf5f7f7d?auto=format&fit=crop&w=400&q=80" alt="Sample 4" />
          <img src="https://images.unsplash.com/photo-1590608897120-9f7faf6f8f8e?auto=format&fit=crop&w=400&q=80" alt="Sample 5" />
          <img src="https://images.unsplash.com/photo-1590608897125-af8faf7f9f9f?auto=format&fit=crop&w=400&q=80" alt="Sample 6" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Get Your Custom T-Shirt Designs</h2>
        <p>Let’s create designs that impress and represent your brand or event perfectly.</p>
        <button className="btn-primary">Contact Us</button>
      </section>
    </div>
  );
}
