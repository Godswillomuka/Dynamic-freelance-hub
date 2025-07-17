import React, { useState } from "react";
import "./Navbar.css"; // Assuming you’ll style with external CSS

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>

        <li className="dropdown">
          <button onClick={() => handleDropdown("services")}>Services</button>
          {openDropdown === "services" && (
            <ul className="dropdown-menu">
              <li><a href="/services/web-design">Web Design</a></li>
              <li><a href="/services/branding">Branding</a></li>
              <li><a href="/services/writing">Writing</a></li>
            </ul>
          )}
        </li>

        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>

        <li className="dropdown">
          <button onClick={() => handleDropdown("about")}>About</button>
          {openDropdown === "about" && (
            <ul className="dropdown-menu">
              <li><a href="/about/company">Our Company</a></li>
              <li><a href="/about/team">Our Team</a></li>
            </ul>
          )}
        </li>

        <li><a href="/faq">FAQ</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
