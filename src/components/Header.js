import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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

      {/* Hamburger */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav ref={navRef} className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
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
            <a href="#">Resources <span className="arrow">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/file-guidelines">Design Guidelines</a></li>
              <li><a href="/order-process">Order Process</a></li>
              <li><a href="/delivery">Delivery Info</a></li>
              <li><a href="/returns">Return Policy</a></li>
            </ul>
          </li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a className="quote-btn" href="/quote">Get Quote</a>
      </nav>
    </header>
  );
}

export default Header;
