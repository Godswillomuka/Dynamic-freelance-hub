import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
      <div className="header-container">
        {/* === Logo Section === */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="Dynamic Freelance Hub Logo" />
            <div className="logo-text">
              <span className="logo-main">Dynamic</span>
              <span className="logo-sub">Freelance Hub</span>
            </div>
          </Link>
        </div>

        {/* === Hamburger Button === */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* === Navigation Links === */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} ref={navRef}>
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
          <Link to="/get-quote">
            <button className="quote-btn">Get Quote</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
