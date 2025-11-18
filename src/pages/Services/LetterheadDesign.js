import React from "react";
import "./LetterheadDesign.css";

export default function LetterheadDesign() {
  return (
    <div className="letterhead-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Letterhead Design for Your Brand</h1>
          <p>
            Make a strong first impression with our custom letterhead designs. Every document your business sends becomes a reflection of your brand’s professionalism and identity.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1581090700227-1c23e94f4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dGVyaGVhZHxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=400" alt="Letterhead example" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Custom Letterheads that Reflect Your Brand</h2>
          <p>
            At <strong>Dynamic Freelance Hub</strong>, we craft letterheads that reinforce your corporate identity. Each design is tailored to match your logo, color palette, and overall branding.
          </p>
          <p>
            Whether for formal communications, proposals, or everyday office use, our letterheads help maintain consistency and professionalism across all your printed and digital correspondence.
          </p>
          <p>
            We ensure your letterhead not only looks great but also enhances readability, making your documents clear, structured, and visually appealing.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1601582580210-50a9e29f5f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Corporate stationery" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why Choose Our Letterhead Designs?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Custom Designs</h3>
            <p>Every letterhead is uniquely designed for your brand, ensuring it stands out in professional communications.</p>
          </div>
          <div className="feature-box">
            <h3>Professional Typography</h3>
            <p>We choose fonts and layouts that enhance readability while maintaining a professional look and feel.</p>
          </div>
          <div className="feature-box">
            <h3>Perfect Layout</h3>
            <p>Margins, spacing, and alignment are meticulously crafted to deliver a polished, clean, and professional document.</p>
          </div>
          <div className="feature-box">
            <h3>Brand Consistency</h3>
            <p>Our letterheads incorporate your logo, colors, and brand identity guidelines for consistent branding across all documents.</p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery">
        <h2>Our Letterhead Work</h2>
        <p>Explore some of our recent letterhead designs for businesses across industries.</p>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1581093448791-2b32bb6f4d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 1" />
          <img src="https://images.unsplash.com/photo-1554774853-d42b1f4d5b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 2" />
          <img src="https://images.unsplash.com/photo-1526406915893-0e3b0e3dc007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 3" />
          <img src="https://images.unsplash.com/photo-1591696331113-72a16e404b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 4" />
          <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 5" />
          <img src="https://images.unsplash.com/photo-1612831811691-59b8ec676a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 6" />
          <img src="https://images.unsplash.com/photo-1612831455544-58e0a7b6250f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 7" />
          <img src="https://images.unsplash.com/photo-1601582580353-1a0f68018ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 8" />
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 9" />
          <img src="https://images.unsplash.com/photo-1600854949271-74c3327a32f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 10" />
          <img src="https://images.unsplash.com/photo-1581090700285-7a03c0a9d6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 11" />
          <img src="https://images.unsplash.com/photo-1581091215363-045ee42b2b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300" alt="Letterhead 12" />
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Consultation</h3>
            <p>We understand your brand identity, target audience, and design preferences.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Design Concept</h3>
            <p>Our designers create multiple letterhead concepts tailored to your brand guidelines.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Review & Revision</h3>
            <p>You review the designs and we refine them based on your feedback for perfection.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Final Delivery</h3>
            <p>Receive print-ready and digital files optimized for all your business communications.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Elevate Your Brand with Custom Letterheads</h2>
        <p>Get professionally designed letterheads that communicate your brand’s credibility and style.</p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
