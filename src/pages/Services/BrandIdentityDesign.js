import React from "react";
import "./BrandIdentityDesign.css";

export default function BrandIdentityDesign() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Craft Your Brand Identity</h1>
          <p>
            Your brand is more than just a logo; it’s the story, the personality, and the promise you deliver.
            Our expert team helps you define a consistent, memorable identity that resonates with your audience.
          </p>
          <button className="btn-primary">Get a Consultation</button>
        </div>
        <div className="hero-images">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Branding mockup 1" />
          <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4433c0" alt="Branding mockup 2" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>What is Brand Identity?</h2>
          <p>
            Brand identity is the visible elements of a brand—such as color, design, and logo—that identify and distinguish the brand in consumers’ minds.
            It’s a complete package that communicates your values, vision, and mission consistently across all platforms.
          </p>
          <p>
            At <strong>Dynamic Freelance Hub</strong>, we craft unique brand identities that tell your story, engage your audience, and
            build trust and recognition. We consider typography, color palettes, visual imagery, and tone of voice.
          </p>
          <p>
            A strong brand identity is not just visual; it’s emotional. It creates connection, loyalty, and memorable experiences for your clients.
          </p>
        </div>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Corporate branding" />
        </div>
      </section>

      {/* BRAND ELEMENTS */}
      <section className="elements">
        <h2>Key Elements We Design</h2>
        <div className="elements-grid">
          <div className="element-box">
            <h3>Logo & Symbols</h3>
            <p>Create versatile, memorable logos that reflect your brand personality and values.</p>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Logo design" />
          </div>
          <div className="element-box">
            <h3>Color Palette</h3>
            <p>We select colors that evoke the right emotions and strengthen recognition across platforms.</p>
            <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64" alt="Color palette" />
          </div>
          <div className="element-box">
            <h3>Typography</h3>
            <p>Custom font choices that enhance readability and match your brand personality.</p>
            <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514" alt="Typography" />
          </div>
          <div className="element-box">
            <h3>Imagery & Icons</h3>
            <p>Consistent visual assets that make your brand instantly recognizable.</p>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Imagery & icons" />
          </div>
          <div className="element-box">
            <h3>Brand Guidelines</h3>
            <p>Detailed manuals that ensure consistent use of brand elements across all media.</p>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Brand guidelines" />
          </div>
          <div className="element-box">
            <h3>Packaging & Collateral</h3>
            <p>Designs for physical products, business cards, brochures, and more.</p>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Packaging design" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Brand Identity Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Research & Discovery</h3>
            <p>Understand your business, competitors, audience, and vision.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Strategy & Concept</h3>
            <p>Develop brand concepts, tone, messaging, and visual direction.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Design & Iteration</h3>
            <p>Create logos, colors, typography, and collateral, refining through feedback.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Delivery & Guidelines</h3>
            <p>Provide all assets, brand guidelines, and templates for consistent application.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Build a Brand That Stands Out</h2>
        <p>Contact us today to create a unique and memorable identity for your business.</p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
