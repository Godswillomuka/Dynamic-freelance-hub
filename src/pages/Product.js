// src/pages/Products.js
import React from "react";
import { motion } from "framer-motion";
import "./Product.css";
// import aboutTeam from '../assets/about-team.png';
import businessCard from '../assets/bussinescard.png';
import flyer from '../assets/flyer.png';
import tshirts from '../assets/t-shirts.png';
import customMugs from '../assets/mug.png';
// import designImg from '../assets/service-design.png';     
// import printImg from '../assets/service-print.png';        
// import brandingImg from '../assets/service-branding.png';  
// import signageImg from '../assets/service-signage.png';    
// import packagingImg from '../assets/service-packaging.png';
// import promoImg from '../assets/service-promo.png';        
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
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const products = [
  { title: "Business Cards", desc: "Premium custom cards...", img: businessCard },
  { title: "Event Flyers", desc: "Eye-catching flyers...", img: flyer },
  { title: "Branded Shirts", desc: "Quality team shirts...", img: tshirts },
  { title: "Custom Mugs", desc: "Personalized mugs...", img: customMugs },
  { title: "Branded Caps", desc: "Stylish caps...", img: capImg },
  { title: "Custom Pens", desc: "Affordable branded pens...", img: penImg },
  { title: "Branded Bags", desc: "Tote bags with logo...", img: bagImg },
  { title: "Stickers & Labels", desc: "Custom stickers...", img: stickerImg },
  { title: "Notebooks", desc: "Professional notebooks...", img: notebookImg },
  { title: "Lanyards", desc: "Custom event lanyards...", img: lanyardImg },
  { title: "Desk Calendars", desc: "Year-round visibility...", img: deskcalender },
  { title: "Gift Vouchers", desc: "Personalized vouchers...", img: giftvoucher },
];

const Products = () => {
  return (
    <main className="products-page">
      {/* Hero */}
      <section className="products-hero">
        <motion.h1 initial="hidden" animate="show" variants={fadeInUp}>
          Our Products
        </motion.h1>
        <motion.p initial="hidden" animate="show" variants={fadeInUp}>
          Discover our wide selection of branded merchandise and promotional
          products designed to make your business stand out.
        </motion.p>
      </section>

      {/* Products Grid */}
      <motion.section
        className="products-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {products.map((product, idx) => (
          <motion.div className="product-card" key={idx} variants={fadeInUp}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <a href="/get-quote" className="btn btn-secondary-alt">
              Request Quote
            </a>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
};

export default Products;
