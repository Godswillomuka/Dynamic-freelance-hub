// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Transform Your Brand with Premium Design & Print</h1>
          <p>
            From bold ideas to brilliant products, we craft brand experiences that last. Design. Print. Impact. Whether you're launching a startup, rebranding an established business, or preparing for a major campaign, our team of creative experts and printing specialists is here to bring your vision to life.
          </p>
          <p>
            At Dynamic Freelance Hub, we believe that every brand has a story — and we’re here to help you tell yours in the most compelling, memorable way. With top-tier designs, vibrant print finishes, and unmatched attention to detail, we make sure your brand stands out in a crowded marketplace.
          </p>
          <p>
            From business cards, brochures, and banners to custom merchandise like branded t-shirts, mugs, and notebooks — we deliver quality and consistency across every product. Let us help you build credibility, spark engagement, and leave a lasting impression with every piece you share.
          </p>
          <div className="hero-buttons">
          <a href="/quote" className="hero-btn">Get Started</a>
          <a href="/profile.pdf" className="hero-btn" target="_blank" rel="noopener noreferrer">Download company profile</a>
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/heroimage.png" alt="Dynamic Freelance Hub" />
        </motion.div>
      </section>
      
      {/* --- */}

      {/* About Section */}
      <section className="about-preview">
        <motion.div
          className="about-image"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/about-team.png" alt="Creative branding team at work" />
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Who We Are</h2>
          <p>
            At <strong>Dynamic Freelance Hub</strong>, we are more than a design and print agency — we are a passionate team of visionaries, creators, and branding experts committed to helping businesses grow and thrive.
          </p>
          <p>
            Our strength lies in translating your ideas into powerful visuals that connect, inspire, and drive results. From logo creation and brand identity development to promotional materials and corporate merchandise, we provide solutions tailored to your unique goals.
          </p>
          <p>
            With cutting-edge tools, a deep understanding of design trends, and a heart for creativity, we turn every concept into a compelling experience. Whether you're a startup building your brand or a large company looking to elevate your image, we’ve got the tools, talent, and tenacity to deliver.
          </p>
          <a href="/about" className="learn-more">Learn More</a>
        </motion.div>
      </section>

      {/* --- */}

      {/* Service Highlights */}
      <section className="services">
        <h2>Our Core Services</h2>
        <div className="service-list">
          <motion.div className="service-item" whileHover={{ scale: 1.05 }}>
            <i className="fas fa-lightbulb"></i>
            <h3>Creative Design</h3>
            <p>
              Our design team turns ideas into stunning visuals. Whether it's logos, flyers, posters, or social media content, we craft each asset to captivate and communicate your brand message with precision and flair.
            </p>
          </motion.div>

          <motion.div className="service-item" whileHover={{ scale: 1.05 }}>
            <i className="fas fa-tshirt"></i>
            <h3>Merchandise Printing</h3>
            <p>
              Showcase your brand on everyday items with our premium merchandise printing services. From T-shirts and mugs to notebooks, pens, and caps — we ensure every product is vibrant, durable, and impactful.
            </p>
          </motion.div>

          <motion.div className="service-item" whileHover={{ scale: 1.05 }}>
            <i className="fas fa-tags"></i>
            <h3>Business Branding</h3>
            <p>
              Build a cohesive and memorable brand presence. We design logos, packaging, signage, and brand guides that help your business stand out in a competitive market and stay top-of-mind with your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- */}

      {/* Featured Products */}
      <section className="products">
        <h2>Popular Products</h2>
        <div className="product-list">
          <motion.div className="product-card" whileHover={{ scale: 1.03 }}>
            <img src="/bussinescard.png" alt="Business Cards" />
            <h4>Business Cards</h4>
            <p>Premium, double-sided cards with bold designs and crisp finishes to leave a lasting impression.</p>
          </motion.div>

          <motion.div className="product-card" whileHover={{ scale: 1.03 }}>
            <img src="/flyer.png" alt="Event Flyers" />
            <h4>Event Flyers</h4>
            <p>Eye-catching promotional flyers printed in full color on high-quality stock for maximum visibility.</p>
          </motion.div>

          <motion.div className="product-card" whileHover={{ scale: 1.03 }}>
            <img src="/t-shirts.png" alt="Branded Shirts" />
            <h4>Branded Shirts</h4>
            <p>Stylish, custom-printed apparel ideal for teams, events, and promotional giveaways.</p>
          </motion.div>

          <motion.div className="product-card" whileHover={{ scale: 1.03 }}>
            <img src="/mug.png" alt="Custom Mugs" />
            <h4>Custom Mugs</h4>
            <p>Personalized mugs perfect for branding or gifting — printed with long-lasting color.</p>
          </motion.div>
        </div>
      </section>

      {/* --- */}

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <ul>
          <li><strong>Quality First:</strong> We use top-tier materials and professional techniques to ensure perfection in every piece.</li>
          <li><strong>Speedy Turnaround:</strong> From concept to delivery, we meet tight deadlines without sacrificing quality.</li>
          <li><strong>Personalized Support:</strong> Our team listens, advises, and customizes every solution around your vision.</li>
          <li><strong>Corporate-Ready:</strong> Trusted by startups, SMEs, and top-tier enterprises across diverse industries.</li>
        </ul>
      </section>
      
      {/* --- */}

      {/* Final Call To Action */}
      <motion.section
        className="cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Let’s Bring Your Ideas to Life</h2>
        <p>
          Whether you're a business owner, event planner, or creative visionary — we help you make your mark through brilliant design and bold print. Let’s collaborate and bring your ideas into stunning reality.
        </p>
        <a href="/contact" className="cta-btn">Request a Free Quote</a>
      </motion.section>
    </div>
  );
}

export default Home;