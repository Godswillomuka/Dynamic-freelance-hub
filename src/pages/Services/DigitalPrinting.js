import React from "react";
import printingMachinesImg from "../../assets/service-design.png";
import digitalPrintImg from "../../assets/service-branding.png";
import offsetPrintImg from "../../assets/service-packaging.png";
import print1Img from "../../assets/product-cap.png";
import print2Img from "../../assets/product-bag.png";
import print3Img from "../../assets/product-lanyard.png";
import print4Img from "../../assets/deskcalender.png";
import "./DigitalPrinting.css";

export default function DigitalOffsetPrinting() {
  return (
    <div className="printing-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Precision Printing, Every Time</h1>
          <p>
            Whether you need 50 business cards or 50,000 brochures, our digital and offset
            printing solutions bring your vision to life — with unmatched clarity, color, and care.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Crafted for Every Print Need</h2>
          <p>
            At <strong>YourPrint Studio</strong>, we combine modern digital printing with traditional
            offset expertise to offer flexible, high-quality solutions for every project size.
          </p>
          <p>
            Our precision technology ensures true-to-life color reproduction, crisp details, and
            premium finishing that helps your brand stand out — from flyers and catalogs to luxury
            packaging.
          </p>
          <p>
            We don’t just print; we help you create experiences your clients can feel, touch, and
            remember.
          </p>
        </div>
        <div className="about-image">
          <img src={printingMachinesImg} alt="Modern printing press" />
        </div>
      </section>

      {/* DIFFERENCE SECTION */}
      <section className="difference">
        <h2>The Perfect Print, Tailored to You</h2>
        <div className="difference-grid">
          <div className="diff-box">
            <img src={digitalPrintImg} alt="Digital printing" />
            <h3>Digital Printing</h3>
            <p>
              Fast, efficient, and flexible — perfect for short runs, personalized marketing
              materials, and tight deadlines. Enjoy vibrant results without setup costs.
            </p>
          </div>
          <div className="diff-box">
            <img src={offsetPrintImg} alt="Offset printing" />
            <h3>Offset Printing</h3>
            <p>
              Ideal for large quantities and color-critical projects. Offset printing ensures
              consistent, high-resolution quality that’s cost-effective at scale.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <h2>Why Businesses Trust Us</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>🌟 Premium Quality</h4>
            <p>Every print goes through strict quality checks for flawless color and detail.</p>
          </div>
          <div className="why-item">
            <h4>⚡ Fast Turnaround</h4>
            <p>Our efficient process means you meet your deadlines without compromise.</p>
          </div>
          <div className="why-item">
            <h4>🌿 Eco-Friendly Materials</h4>
            <p>We use sustainable papers and inks, keeping your brand green and responsible.</p>
          </div>
          <div className="why-item">
            <h4>🤝 Expert Support</h4>
            <p>Our experts guide you from design to finishing for professional results.</p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery">
        <h2>Our Work Speaks for Itself</h2>
        <p>
          Explore a few examples from our recent projects — from corporate stationery to vibrant
          marketing materials and packaging.
        </p>
        <div className="gallery-grid">
          <img src={print1Img} alt="Print sample 1" />
          <img src={print2Img} alt="Print sample 2" />
          <img src={print3Img} alt="Print sample 3" />
          <img src={print4Img} alt="Print sample 4" />
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Printing Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Consultation</h3>
            <p>
              We discuss your project goals, materials, and finishes to craft the perfect printing
              solution.
            </p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Design & Proofing</h3>
            <p>
              Our team reviews your files and provides color-accurate proofs for approval before
              printing.
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Production</h3>
            <p>
              We print, cut, and finish your materials using advanced offset and digital
              technologies.
            </p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Delivery</h3>
            <p>
              We package and deliver your project securely, on time, and ready to impress.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              “The quality is top-notch, and the team was incredibly helpful from start to finish!”
            </p>
            <h4>— Sarah L., Marketing Director</h4>
          </div>
          <div className="testimonial">
            <p>
              “We switched to this printer for all our catalogs — consistent color and on-time
              delivery every time.”
            </p>
            <h4>— Daniel R., Brand Manager</h4>
          </div>
          <div className="testimonial">
            <p>
              “Our business cards came out perfect. The team nailed the color exactly as in our
              brand guide.”
            </p>
            <h4>— Emily G., Entrepreneur</h4>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Print Something Beautiful?</h2>
        <p>
          Let’s bring your ideas to life with vivid, professional-quality printing. Get in touch for
          a free consultation today.
        </p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
