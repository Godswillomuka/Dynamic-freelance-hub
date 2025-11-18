import React from "react";
import "./MenuDesign.css";

export default function MenuDesign() {
  return (
    <div className="menu-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Designs for Your Menu</h1>
          <p>
            Your menu is more than a list of dishes—it’s an experience. Our custom Menu Design
            services help restaurants, cafés, and catering businesses showcase their offerings
            with style, clarity, and brand identity. From classic printed menus to interactive
            digital menus, we craft visuals that whet the appetite before the first bite.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1574744159363-34e23b32b159?auto=format&fit=crop&w=800&q=80" alt="Menu Design Hero"/>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Custom Menu Designs That Reflect Your Brand</h2>
          <p>
            At <strong>Dynamic Freelance Hub</strong>, we specialize in menus that tell your
            story. Each menu is thoughtfully designed to reflect your cuisine, ambiance, and
            brand personality. From typography choices to layout and imagery, we ensure every
            detail enhances the dining experience.
          </p>
          <p>
            Our team uses a combination of traditional design principles and modern trends to
            create menus that are visually appealing, easy to read, and aligned with your
            marketing strategy. Whether it’s a seasonal menu, a special event menu, or a full
            restaurant catalog, we provide solutions tailored to your unique needs.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1604908177527-7b83cd97b71c?auto=format&fit=crop&w=800&q=80" alt="Menu Design Examples"/>
        </div>
      </section>

      {/* DIFFERENCE SECTION */}
      <section className="difference">
        <h2>Why Choose Our Menu Design Services</h2>
        <div className="difference-grid">
          <div className="diff-box">
            <h3>📖 Intuitive Layouts</h3>
            <p>
              Menus designed to guide your customers’ eyes naturally, making ordering a breeze.
            </p>
          </div>
          <div className="diff-box">
            <h3>🎨 Brand Consistency</h3>
            <p>
              Every menu aligns with your brand colors, typography, and style, ensuring
              cohesive branding across print and digital.
            </p>
          </div>
          <div className="diff-box">
            <h3>🍽️ Visual Appeal</h3>
            <p>
              Use of appetizing food photography, icons, and illustrations to increase
              customer engagement and orders.
            </p>
          </div>
          <div className="diff-box">
            <h3>🖥️ Multi-Format Design</h3>
            <p>
              Print-ready designs and digital-friendly versions, suitable for websites and QR-code menus.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery">
        <h2>Menu Design Portfolio</h2>
        <p>
          Browse a selection of menu designs we’ve created for cafés, restaurants, and catering services.
        </p>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 1"/>
          <img src="https://images.unsplash.com/photo-1543779509-8e7b5aef51a5?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 2"/>
          <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 3"/>
          <img src="https://images.unsplash.com/photo-1617196030660-0dc7d3e1c3c3?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 4"/>
          <img src="https://images.unsplash.com/photo-1565299624946-8a2292e48554?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 5"/>
          <img src="https://images.unsplash.com/photo-1575293449016-6dfb8c879228?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 6"/>
          <img src="https://images.unsplash.com/photo-1562967916-eb82221dfb38?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 7"/>
          <img src="https://images.unsplash.com/photo-1581089781785-8c2ee02d891e?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 8"/>
          <img src="https://images.unsplash.com/photo-1617196030680-1a97e3d2d3d9?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 9"/>
          <img src="https://images.unsplash.com/photo-1582574096701-2e75b1e2c1f3?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 10"/>
          <img src="https://images.unsplash.com/photo-1589308078053-1c452d4d5a4d?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 11"/>
          <img src="https://images.unsplash.com/photo-1617196030660-0df9c3a5c8e1?auto=format&fit=crop&w=400&q=80" alt="Menu Sample 12"/>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Menu Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Consultation</h3>
            <p>We discuss your restaurant concept, target audience, and menu goals to craft the ideal design.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Design Drafts</h3>
            <p>Our team creates initial menu layouts, typography, and imagery tailored to your brand style.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Review & Refinement</h3>
            <p>You review the drafts and provide feedback. We iterate until the menu perfectly aligns with your vision.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Final Design</h3>
            <p>Receive print-ready and digital-ready files for use in your restaurant or online ordering platforms.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Elevate Your Menu?</h2>
        <p>Let us craft a menu that entices your customers and reinforces your brand identity.</p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
