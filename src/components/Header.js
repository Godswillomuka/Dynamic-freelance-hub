import React, { useEffect } from "react";
import "./Header.css";

function Header() {
  // Optional: Add a scroll listener to add a "scrolled" class for styling
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-link">
          <img src="/logo.png" alt="Dynamic Freelance Hub Logo" />
          <div className="logo-text">
            <span className="logo-main">Dynamic</span>
            <span className="logo-sub">Freelance Hub</span>
          </div>
        </a>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          
          <li className="dropdown">
            <a href="#">Products <span className="arrow">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="/products/business-cards">Business Cards</a></li>
              <li><a href="/products/flyers">Flyers & Brochures</a></li>
              <li><a href="/products/posters">Posters</a></li>
              <li><a href="/products/banners">Banners</a></li>
              <li><a href="/products/apparel">T-Shirts & Apparel</a></li>
              <li><a href="/products/stickers">Stickers</a></li>
              <li><a href="/products/mugs">Mugs & Gifts</a></li>
              <li><a href="/products/promo">Promotional Items</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#">Services <span className="arrow">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="/services/graphic-design">Graphic Design</a></li>
              <li><a href="/services/printing">Printing</a></li>
              <li><a href="/services/branding">Branding</a></li>
              <li><a href="/services/packaging">Packaging Design</a></li>
              <li><a href="/services/social-media">Social Media Design</a></li>
              <li><a href="/services/logo-design">Logo Creation</a></li>
            </ul>
          </li>
          
          <li className="dropdown">
            <a href="#">Company <span className="arrow">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press</a></li>
            </ul>
          </li>
          
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>
          
          <li className="dropdown">
            <a href="#">Resources <span className="arrow">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/file-guidelines">Design Guidelines</a></li>
              <li><a href="/order-process">Order Process</a></li>
              <li><a href="/delivery">Delivery Info</a></li>
              <li><a href="/returns">Return Policy</a></li>
            </ul>
          </li>
          
          <li><a href="/contact">Contact</a></li>
          <li><a href="/track">Track Order</a></li>
        </ul>

        <a className="quote-btn" href="/quote">Get Quote</a>
      </nav>
    </header>
  );
}

export default Header;