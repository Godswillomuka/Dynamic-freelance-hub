import React from "react";
import "./PackagingLabelDesign.css";

export default function PackagingLabelDesign() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Creative Packaging & Label Design</h1>
          <p>
            Transform your products into memorable experiences with innovative packaging and
            label design. Our solutions combine aesthetics, brand identity, and functionality to
            make your products stand out on the shelf.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1580894894512-5a9f5ecf4d53?auto=format&fit=crop&w=800&q=80" alt="Creative packaging design" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Why Packaging Matters</h2>
          <p>
            Packaging is more than just a box or label—it’s the first touchpoint between your
            product and your customer. Good design communicates your brand values, attracts
            attention, and encourages purchase decisions.
          </p>
          <p>
            Our team blends design expertise and industry knowledge to create packaging solutions
            that are visually striking, functional, and aligned with your brand strategy.
          </p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1585238342026-5d8b0f77f08b?auto=format&fit=crop&w=800&q=80" alt="Product labels" />
          <img src="https://images.unsplash.com/photo-1580910051074-6a0b8d6dc657?auto=format&fit=crop&w=800&q=80" alt="Custom boxes" />
        </div>
      </section>

      {/* TYPES OF PACKAGING SECTION */}
      <section className="types">
        <h2>Types of Packaging & Labels We Offer</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Product Boxes</h3>
            <p>Custom boxes for retail and shipping, designed to protect and impress.</p>
            <img src="https://images.unsplash.com/photo-1572401510551-0c22f3b07f9d?auto=format&fit=crop&w=400&q=80" alt="Product boxes" />
          </div>
          <div className="type-card">
            <h3>Bottle & Jar Labels</h3>
            <p>Eye-catching labels that convey brand story and product information clearly.</p>
            <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=400&q=80" alt="Bottle labels" />
          </div>
          <div className="type-card">
            <h3>Eco-Friendly Packaging</h3>
            <p>Sustainable materials and minimalistic designs for environmentally conscious brands.</p>
            <img src="https://images.unsplash.com/photo-1589927986089-35812389fc8a?auto=format&fit=crop&w=400&q=80" alt="Eco packaging" />
          </div>
          <div className="type-card">
            <h3>Luxury Packaging</h3>
            <p>High-end packaging for premium products, with elegant textures and finishes.</p>
            <img src="https://images.unsplash.com/photo-1600181954391-49b96d55aa9b?auto=format&fit=crop&w=400&q=80" alt="Luxury packaging" />
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
            <p>Understand your brand, product, and audience to define packaging goals.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Concept Design</h3>
            <p>Create multiple design concepts including layout, colors, and typography.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Feedback & Refinement</h3>
            <p>Collaborate with you to refine the design for optimal impact.</p>
          </div>
          <div className="step">
            <span>4</span>
            <h3>Final Delivery</h3>
            <p>Provide print-ready files and optional production assistance for your packaging.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Our Recent Packaging Work</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1581090700227-7f5d24b8922d?auto=format&fit=crop&w=400&q=80" alt="Sample 1" />
          <img src="https://images.unsplash.com/photo-1581092337822-fd798a6de3a8?auto=format&fit=crop&w=400&q=80" alt="Sample 2" />
          <img src="https://images.unsplash.com/photo-1581092337874-c25d7ff832a2?auto=format&fit=crop&w=400&q=80" alt="Sample 3" />
          <img src="https://images.unsplash.com/photo-1581092337900-f7a6c1e76c5a?auto=format&fit=crop&w=400&q=80" alt="Sample 4" />
          <img src="https://images.unsplash.com/photo-1581092337920-987fefc8c9a3?auto=format&fit=crop&w=400&q=80" alt="Sample 5" />
          <img src="https://images.unsplash.com/photo-1581092337930-9a7a84e7b7b3?auto=format&fit=crop&w=400&q=80" alt="Sample 6" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Elevate Your Product Packaging?</h2>
        <p>Let's create designs that leave a lasting impression and enhance your brand value.</p>
        <button className="btn-primary">Contact Us</button>
      </section>
    </div>
  );
}
