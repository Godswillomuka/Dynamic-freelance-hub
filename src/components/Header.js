import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    const handleClickOutside = (event) => {
      // Check if click is outside both hamburger and nav menu
      if (navRef.current && !navRef.current.contains(event.target) && 
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* === Logo Section === */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Dynamic Freelance Hub Logo" />
            <div className="logo-text">
              <span className="logo-main">Dynamic</span>
              <span className="logo-sub">Freelance Hub</span>
            </div>
          </Link>
        </div>

        {/* === Hamburger Button === */}
        <button
          ref={hamburgerRef}
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* === Navigation Links === */}
        <nav 
          className={`nav-links ${menuOpen ? "open" : ""}`} 
          ref={navRef}
        >
          <ul>
            <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/products" className="nav-link" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/portfolio" className="nav-link" onClick={closeMenu}>Design Online</Link></li>
            <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
            <li><Link to="/blog" className="nav-link" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <div className="quote-btn-wrapper">
            <Link to="/get-quote" onClick={closeMenu}>
              <button className="quote-btn">Quote Request</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;