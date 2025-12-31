// src/components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TrustedBrands from '../components/TrustedBrands';
import Reviews from '../components/Review';
import WhatsApp from '../components/WhatsApp';
import Footer from '../components/Footer'; 
import './Home.css';

// images 
import aboutTeam from '../assets/about-team.png';
import businessCard from '../assets/bussinescard.png';
import flyer from '../assets/flyer.png';
import tshirts from '../assets/t-shirts.png';
import customMugs from '../assets/mug.png';
import designImg from '../assets/service-design.png';     
import printImg from '../assets/service-print.png';        
import brandingImg from '../assets/service-branding.png';  
import signageImg from '../assets/service-signage.png';    
import packagingImg from '../assets/service-packaging.png';
import promoImg from '../assets/service-promo.png';        
import capImg from '../assets/product-cap.png';            
import penImg from '../assets/product-pen.png';           
import bagImg from '../assets/product-bag.png';            
import stickerImg from '../assets/product-sticker.png';    
import notebookImg from '../assets/product-notebook.png';  
import lanyardImg from '../assets/product-lanyard.png';
import deskcalender from '../assets/deskcalender.png' 
import giftvoucher from '../assets/giftvoucher.png' 



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


const HeroClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000); 
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  const timeString = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = time.toLocaleDateString('en-US', options);
  const romanNumerals = ['XII','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

  return (
    <div className="home-hero-clock-container">
      <div className="home-hero-clock">
        <div className="home-hero-clock-face">
          {romanNumerals.map((numeral, index) => {
            const angle = (index * 30) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.sin(angle);
            const y = 50 - radius * Math.cos(angle);
            return (
              <div
                className="home-hero-clock-numeral"
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
            className="home-hero-clock-hand home-hero-clock-hour-hand"
            style={{ transform: `rotate(${hourDegrees}deg)` }}
          ></div>
          {/* Minute Hand */}
          <div
            className="home-hero-clock-hand home-hero-clock-minute-hand"
            style={{ transform: `rotate(${minuteDegrees}deg)` }}
          ></div>
          {/* Second Hand */}
          <div
            className="home-hero-clock-hand home-hero-clock-second-hand"
            style={{ transform: `rotate(${secondDegrees}deg)` }}
          ></div>
          {/* Center Dot */}
          <div className="home-hero-clock-center"></div>
        </div>
      </div>
      {/* Combined Time and Date Display */}
      <div className="home-hero-clock-time-date">
        <div className="home-hero-clock-time">{timeString}</div>
        <div className="home-hero-clock-date">{dateString}</div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Creative Design",
    desc: "We create unique logos, marketing materials, and brand assets that make your business stand out and connect with your audience. Every design is tailored to your goals.",
    img: designImg,
    link: "/services"
  },
  {
    title: "Merchandise Printing",
    desc: "Get your brand on t-shirts, apparel, and promo items. We deliver quality prints that leave a lasting impression everywhere, using the best materials and vibrant colors.",
    img: printImg,
    link: "/services"
  },
  {
    title: "Business Branding",
    desc: "From strategy to visuals, we build a strong, consistent identity for your business across all platforms and materials. Stand out and grow with a professional brand.",
    img: brandingImg,
    link: "/services"
  },
  {
    title: "Signage & Displays",
    desc: "We design and produce banners, pop-ups, and event displays to help your business get noticed at any venue or location. Make your message visible and memorable.",
    img: signageImg,
    link: "/services"
  },
  {
    title: "Packaging & Labels",
    desc: "Enhance your product with custom packaging and labels that reflect your brand's quality and attract customers. Creative solutions for every industry.",
    img: packagingImg,
    link: "/services"
  },
  {
    title: "Promo Products",
    desc: "Branded gifts and giveaways for events and marketing. Boost your brand visibility with memorable promo products your clients and partners will love.",
    img: promoImg,
    link: "/services"
  }
];

const products = [
  {
    title: "Business Cards",
    desc: "Premium custom cards to make a strong first impression and promote your brand identity.",
    img: businessCard,
    link: "/portfolio"
  },
  {
    title: "Event Flyers",
    desc: "Vibrant, eye-catching flyers designed to attract attention and promote your events.",
    img: flyer,
    link: "/portfolio"
  },
  {
    title: "Branded Shirts",
    desc: "Quality custom shirts for your team or event, printed with your logo or message.",
    img: tshirts,
    link: "/portfolio"
  },
  {
    title: "Custom Mugs",
    desc: "Personalized mugs for your brand, perfect for gifts, staff, or daily use.",
    img: customMugs,
    link: "/portfolio"
  },
  {
    title: "Branded Caps",
    desc: "Stylish logo caps for staff, events, or giveaways to boost your brand.",
    img: capImg,
    link: "/portfolio"
  },
  {
    title: "Custom Pens",
    desc: "Affordable branded pens for promotion, events, and everyday business use.",
    img: penImg,
    link: "/portfolio"
  },
  {
    title: "Branded Bags",
    desc: "Tote and event bags with your logo, ideal for conferences and promotions.",
    img: bagImg,
    link: "/portfolio"
  },
  {
    title: "Stickers & Labels",
    desc: "Custom stickers and labels for packaging, branding, and creative marketing.",
    img: stickerImg,
    link: "/portfolio"
  },
  {
    title: "Notebooks",
    desc: "Branded notebooks for meetings, gifts, and professional note-taking.",
    img: notebookImg,
    link: "/portfolio"
  },
  {
    title: "Lanyards",
    desc: "Custom event lanyards for staff, guests, and promotional branding.",
    img: lanyardImg,
    link: "/portfolio"
  },
  {
    title: "Desk Calendars",
    desc: "Custom branded desk calendars for year-round visibility.",
    img: deskcalender,
    link: "/portfolio"
  },
  {
    title: "Gift Vouchers",
    desc: "Personalized gift vouchers to reward and engage your customers.",
    img: giftvoucher,
    link: "/portfolio"
  }
];

const isMobile = window.innerWidth <= 576;

const Home = () => {

  return (
    <>
    <main className="home-page">
      {/* --- Hero Section --- */}
      <section className="home-hero-section">
        <div className="home-hero-content-container">
          {/* Text Content on the Left */}
          <motion.div
            className="home-hero-content-text"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1 className="home-hero-title" variants={fadeInUp}>
              Transform Your Brand with Premium Design & Print
            </motion.h1>
            <motion.p className="home-hero-subtitle" variants={fadeInUp}>
              From Dynamic Freelance Hub, we are a passionate team of designers, creators, and branding experts committed to helping businesses grow.
            </motion.p>
            <motion.div className="home-hero-ctas" variants={fadeInUp}>
              <a href="/get-quote" className="home-btn home-btn-primary-alt">
                Get Started
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/downloads/company_profile.pdf`}
                className="home-btn home-btn-secondary-alt"
                download
              >
                Download Company Profile
              </a>
            </motion.div>
          </motion.div>
          {/* Live Clock on the Right */}
          <motion.div
            className="home-hero-clock-wrapper"
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
        className="home-about-us-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="home-section-container">
          <div className="home-about-us-grid">
            <motion.div className="home-about-us-image" variants={fadeInUp}>
              <img
                src={aboutTeam}
                alt="Our creative team collaborating"
                className="home-team-image"
              />
            </motion.div>
            <motion.div className="home-about-us-text" variants={fadeInUp}>
              <h2 className="home-section-title">Who We Are</h2>
              <p className="home-section-description">
                <strong>Dynamic Freelance Hub</strong> is more than just a printing service,we specialize in crafting compelling visual identities and producing high-quality printed materials that help businesses:
                  <li>Grow their visibility in competitive markets</li>
                  <li>Enhance credibility with professional, polished designs</li>
                  <li>Strengthen brand consistency across every platform</li>
                  From business cards and branded merchandise to large-scale prints and corporate branding, we ensure every detail reflects your brand's quality and professionalism.Using modern design tools and state-of-the-art printing, we deliver results that build trust, attract customers, and drive success.
              </p>
              <a href="/about" className="home-btn home-btn-primary-alt">
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Core Services Section --- */}
      <motion.section
        className="home-core-services-section"
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="home-section-container">
          <motion.h2 className="home-section-title" variants={fadeInUp}>Our Core Services</motion.h2>
          <div className="home-services-grid">
            {services.map((service, idx) => (
              <motion.div className="home-service-card home-overlay-card" variants={fadeInUp} key={idx} style={{padding: 0, border: 'none', minHeight: '420px'}}>
                <div
                  className="home-overlay-card-image"
                  style={{
                    backgroundImage: `url(${service.img})`,
                    width: '100%',
                    height: '100%',
                    minHeight: '420px',
                    margin: 0,
                    borderRadius: '16px',
                  }}
                >
                  <div
                    className="home-overlay-card-content"
                    style={{
                      paddingLeft: 0,
                      paddingRight: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <h3 className="home-service-title" style={{textAlign: 'center', width: '100%', marginBottom: 6}}>{service.title}</h3>
                    <p className="home-service-description" style={{textAlign: 'center', width: '100%', marginTop: 0}}>{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- Popular Products Section --- */}
      <motion.section
        className="home-popular-products-section"
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="home-section-container">
          <motion.h2 className="home-section-title" variants={fadeInUp}>Popular Products</motion.h2>
          <div className="home-products-grid home-even-products-grid">
            {products.map((product, idx) => (
              <motion.div className="home-product-card home-overlay-card" variants={fadeInUp} key={idx} style={{padding: 0, border: 'none', minHeight: '320px'}}>
                <div
                  className="home-overlay-card-image"
                  style={{
                    backgroundImage: `url(${product.img})`,
                    width: '100%',
                    height: '100%',
                    minHeight: '320px',
                    margin: 0,
                    borderRadius: '16px',
                  }}
                >
                  <div
                    className="home-overlay-card-content"
                    style={{
                      paddingLeft: 0,
                      paddingRight: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <h3 className="home-product-title" style={{textAlign: 'center', width: '100%', marginBottom: 6}}>{product.title}</h3>
                    <p className="home-product-description" style={{textAlign: 'center', width: '100%', marginTop: 0}}>{product.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <TrustedBrands />
      

      {/* --- Why Choose Us Section --- */}
      <motion.section
        className="home-why-choose-us-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="home-section-container">
          <motion.h2 className="home-section-title" variants={fadeInUp}>Why Choose Us</motion.h2>
          <div className="home-reasons-grid">
            <motion.div className="home-reason" variants={fadeInUp}>
              <span className="home-checkmark">&#10003;</span>
              <div>
                <h3>Premium Quality Guarantee</h3>
                <p>We use top-tier materials and state-of-the-art equipment to ensure every product meets our high standards.</p>
              </div>
            </motion.div>
            <motion.div className="home-reason" variants={fadeInUp}>
              <span className="home-checkmark">&#10003;</span>
              <div>
                <h3>Fast & Reliable Turnaround</h3>
                <p>We understand deadlines. Our efficient processes deliver your projects quickly without compromising quality.</p>
              </div>
            </motion.div>
            <motion.div className="home-reason" variants={fadeInUp}>
              <span className="home-checkmark">&#10003;</span>
              <div>
                <h3>Expert Consultation</h3>
                <p>Get expert guidance tailored to your specific needs. We're here to help you make the best choices for your brand.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Reviews />
      <WhatsApp />
    </main>
    <Footer />
    </>
  );
};

export default Home;