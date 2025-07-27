// src/components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
// --- Ensure these image paths are correct for your project structure ---
// The hero image import is removed as it's replaced by the clock
import aboutTeam from '../images/about-team.png';
import businessCard from '../images/bussinescard.png'; // Note: Check filename typo (bussinescard vs. businesscard)
import flyer from '../images/flyer.png';
import tshirts from '../images/t-shirts.png';
import customMugs from '../images/mug.png';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- Hero Clock Component ---
const HeroClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Calculate rotation degrees for clock hands
  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;

  // Format time like "12:00 PM"
  const timeString = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  // Format date like "Wednesday, October 27, 2023"
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = time.toLocaleDateString('en-US', options);

  // Roman numerals for the clock face
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

  return (
    <div className="hero-clock-container">
      <div className="hero-clock">
        <div className="hero-clock-face">
          {/* Roman Numerals */}
          {romanNumerals.map((numeral, index) => {
            const angle = (index * 30) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.sin(angle);
            const y = 50 - radius * Math.cos(angle);
            return (
              <div
                className="hero-clock-numeral"
                key={index}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {numeral}
              </div>
            );
          })}
          {/* Hour Hand */}
          <div
            className="hero-clock-hand hero-clock-hour-hand"
            style={{ transform: `rotate(${hourDegrees}deg)` }}
          ></div>
          {/* Minute Hand */}
          <div
            className="hero-clock-hand hero-clock-minute-hand"
            style={{ transform: `rotate(${minuteDegrees}deg)` }}
          ></div>
          {/* Second Hand */}
          <div
            className="hero-clock-hand hero-clock-second-hand"
            style={{ transform: `rotate(${secondDegrees}deg)` }}
          ></div>
          {/* Center Dot */}
          <div className="hero-clock-center"></div>
        </div>
      </div>
      {/* Combined Time and Date Display */}
      <div className="hero-clock-time-date">
        <div className="hero-clock-time">{timeString}</div>
        <div className="hero-clock-date">{dateString}</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className="home-page">
      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-content-container">
          {/* Text Content on the Left */}
          <motion.div
            className="hero-content-text"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Transform Your Brand with Premium Design & Print
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              From Dynamic Freelance Hub, we are a passionate team of designers, creators, and branding experts committed to helping businesses grow.
            </motion.p>
            <motion.div className="hero-ctas" variants={fadeInUp}>
              {/* Updated buttons using the new green color classes */}
              <a href="/get-started" className="btn btn-primary-alt">
                Get Started
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/downloads/company_profile.pdf`}
                className="btn btn-secondary-alt"
                download
              >
                Download Company Profile
              </a>
            </motion.div>
          </motion.div>
          {/* Live Clock on the Right */}
          <motion.div
            className="hero-clock-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <HeroClock />
          </motion.div>
        </div>
      </section>

      {/* --- About Us Section --- */}
      <motion.section
        className="about-us-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="section-container">
          <div className="about-us-grid">
            <motion.div className="about-us-image" variants={fadeInUp}>
              <img
                src={aboutTeam}
                alt="Our creative team collaborating"
                className="team-image"
              />
            </motion.div>
            <motion.div className="about-us-text" variants={fadeInUp}>
              <h2 className="section-title">Who We Are</h2>
              <p className="section-description">
                Dynamic Freelance Hub is more than just a printing service. We are a team of dedicated designers, creators, and branding experts. Our mission is to empower businesses by crafting compelling visual identities and high-quality printed materials that drive growth, enhance credibility, and boost competitiveness in the market.
              </p>
              <a href="/about" className="btn btn-primary-alt">
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Core Services Section --- */}
      <motion.section
        className="core-services-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="section-container">
          <motion.h2 className="section-title" variants={fadeInUp}>Our Core Services</motion.h2>
          <div className="services-grid">
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                {/* Creative Design Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.5 2a7.5 7.5 0 0 1 7.5 7.5c0 2.5 -1.5 4.5 -3.5 5.5l-1.5 3.5l-4 -1l-1.5 1l-1.5 -3.5c-2 -1 -3.5 -3 -3.5 -5.5a7.5 7.5 0 0 1 7.5 -7.5z"/><path d="M12.5 6a2 2 0 0 1 2 2"/><path d="M10.5 9h4"/></svg>
              </div>
              <h3 className="service-title">Creative Design</h3>
              <p className="service-description">
                Transform your ideas into stunning visuals. Our design team crafts logos, marketing materials, and brand assets that capture your unique identity and resonate with your audience.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                {/* Merchandise Printing Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="7" y1="12" x2="17" y2="12"/></svg>
              </div>
              <h3 className="service-title">Merchandise Printing</h3>
              <p className="service-description">
                Showcase your brand on a wide range of products. From custom t-shirts and apparel to promotional items, we deliver high-quality prints that make a lasting impression.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
               {/* Business Branding Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>
              </div>
              <h3 className="service-title">Business Branding</h3>
              <p className="service-description">
                Build a strong, cohesive brand presence. We help you develop a complete brand identity, from strategy and visual elements to consistent application across all touchpoints.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Popular Products Section --- */}
      <motion.section
        className="popular-products-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="section-container">
          <motion.h2 className="section-title" variants={fadeInUp}>Popular Products</motion.h2>
          <div className="products-grid">
            <motion.div className="product-card" variants={fadeInUp}>
              <div className="product-image-wrapper">
                <img
                  src={businessCard}
                  alt="Premium Business Cards"
                  className="product-image"
                />
              </div>
              <h3 className="product-title">Business Cards</h3>
              <p className="product-description">
                Make a professional first impression with our high-quality, customizable business cards.
              </p>
            </motion.div>
            <motion.div className="product-card" variants={fadeInUp}>
              <div className="product-image-wrapper">
                <img
                  src={flyer}
                  alt="Eye-catching Event Flyers"
                  className="product-image"
                />
              </div>
              <h3 className="product-title">Event Flyers</h3>
              <p className="product-description">
                Promote your events effectively with vibrant, attention-grabbing flyers designed to convert.
              </p>
            </motion.div>
            <motion.div className="product-card" variants={fadeInUp}>
              <div className="product-image-wrapper">
                <img
                  src={tshirts}
                  alt="Custom Branded T-Shirts"
                  className="product-image"
                />
              </div>
              <h3 className="product-title">Branded Shirts</h3>
              <p className="product-description">
                Create team unity or promote your brand with comfortable, custom-printed apparel.
              </p>
            </motion.div>
            <motion.div className="product-card" variants={fadeInUp}>
              <div className="product-image-wrapper">
                <img
                  src={customMugs}
                  alt="Personalized Custom Mugs"
                  className="product-image"
                />
              </div>
              <h3 className="product-title">Custom Mugs</h3>
              <p className="product-description">
                Perfect for corporate gifts or daily use, our personalized mugs keep your brand visible.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Why Choose Us Section --- */}
      <motion.section
        className="why-choose-us-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="section-container">
          <motion.h2 className="section-title" variants={fadeInUp}>Why Choose Us</motion.h2>
          <div className="reasons-grid">
            <motion.div className="reason" variants={fadeInUp}>
              <span className="checkmark">&#10003;</span>
              <div>
                <h3>Premium Quality Guarantee</h3>
                <p>We use top-tier materials and state-of-the-art equipment to ensure every product meets our high standards.</p>
              </div>
            </motion.div>
            <motion.div className="reason" variants={fadeInUp}>
              <span className="checkmark">&#10003;</span>
              <div>
                <h3>Fast & Reliable Turnaround</h3>
                <p>We understand deadlines. Our efficient processes deliver your projects quickly without compromising quality.</p>
              </div>
            </motion.div>
            <motion.div className="reason" variants={fadeInUp}>
              <span className="checkmark">&#10003;</span>
              <div>
                <h3>Expert Consultation</h3>
                <p>Get expert guidance tailored to your specific needs. We're here to help you make the best choices for your brand.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;