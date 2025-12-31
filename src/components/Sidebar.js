import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const sidebarData = [
  {
    title: "Creative Graphic Design",
    links: ["Logo Design", "Brand Identity Design", "Marketing Materials Design", "Social Media Graphics", "Infographics Design", "Event Posters", "Product Mockups"],
  },
  {
    title: "Vehicle & Fleet Branding",
    links: ["Full Vehicle Wraps", "Partial Vehicle Wraps", "Roadshow Trucks Branding", "Delivery Van Branding", "Motorcycle Branding", "Racing & Safari Rally Cars", "Reflective Vehicle Stickers"],
  },
  {
    title: "Custom Merchandise & Apparel",
    links: ["T-Shirts Printing", "Hoodies Printing", "Caps Branding", "Corporate Gifts", "Promotional Products", "Tote Bags Printing", "Mugs & Water Bottles Printing"],
  },
  {
    title: "Business Identity & Stationery",
    links: ["Business Cards", "Letterheads", "Envelopes", "Presentation Folders", "Company Profiles", "Staff ID Cards", "Business Stationery Sets"],
  },
  {
    title: "Signage & Large Format Displays",
    links: ["PVC Flex Banners", "Roll-Up Banners", "Pop-Up Banners", "Backdrops", "Billboards", "Shop Signage", "Window Graphics", "Wall Murals", "Floor Graphics", "Exhibition Stands"],
  },
  {
    title: "Product Packaging & Labels",
    links: ["Packaging Design", "Product Labels", "Custom Boxes", "Stickers & Decals", "Adhesive Solutions", "Shelf Display Packaging"],
  },
  {
    title: "Marketing & Promotional Print",
    links: ["Flyers & Brochures", "Posters", "Calendars", "Menus", "Receipt Books", "Notebooks & Diaries", "Promotional Booklets"],
  },
  {
    title: "Corporate Branding & Strategy",
    links: ["Brand Strategy Consulting", "Corporate Identity Design", "Brand Guidelines", "Wayfinding Signage", "Office Branding", "Safety Signage", "Corporate Communication Materials"],
  },
  {
    title: "Web Design & Software Engineering",
    links: ["Website Design & Development", "Website UI Layout", "Website Maintenance", "Search Engine Optimization", "Digital Marketing Collateral", "Web Applications", "Responsive Website Design"],
  },
];

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  // Close when navigating
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef}>
        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>✕</button>
        <h2 className="sidebar-title">Our Services</h2>
        <nav className="sidebar-nav-container">
          {sidebarData.map((section, index) => (
            <div key={index}>
              <div
                className={`menu-item ${openIndex === index ? "active" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{section.title}</span>
                <span style={{ fontSize: '0.7rem' }}>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className={`submenu ${openIndex === index ? "open" : ""}`}>
                {section.links.map((link, i) => (
                  <NavLink
                    to={`/services/${generateSlug(link)}`}
                    key={i}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Floating Toggle Button at the TOP */}
      {!sidebarOpen && (
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(true)}>
          <span style={{ fontSize: '1.2rem' }}>☰</span>
          <span>Our Services</span>
        </button>
      )}
    </>
  );
}