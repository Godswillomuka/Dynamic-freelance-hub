import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const sidebarData = [
  {
    title: "Graphic & Creative Design",
    links: [
      "Logo Design",
      "Brand Identity Design",
      "Business Card Design",
      "Letterhead Design",
      "Company Profile Design",
      "Social Media Posters",
      "Event Posters",
      "Flyers & Brochure Design",
      "Menu Design",
      "Packaging & Label Design",
      "Banner & Billboard Layout Design",
      "Invitation Card Design",
      "Certificate Design",
      "T-Shirt Artwork Design",
      "Magazine & Book Layout",
      "Infographics Design",
      "Website UI Layout (optional)"
    ]
  },
  {
    title: "General & Digital Printing",
    links: [
      "Business Cards",
      "Flyers & Brochures",
      "Posters (A3/A2/A1/A0)",
      "Magazines & Books",
      "Company Profiles",
      "Stickers & Labels",
      "Receipt Books (NCR)",
      "Calendars",
      "Notebooks & Diaries",
      "Envelopes",
      "Letterheads",
      "Presentation Folders",
      "Staff ID Cards",
      "Certificates",
      "Menus"
    ]
  },
  {
    title: "Large Format & Outdoor Printing",
    links: [
      "PVC/Flex Banners",
      "Roll-Up Banners",
      "Pop-Up Banners",
      "Backdrops",
      "Billboards",
      "Shop Signage",
      "Window Graphics",
      "Wall Murals",
      "Vehicle Branding Stickers",
      "Floor Graphics"
    ]
  },
  {
    title: "Merchandise & Promotional Branding",
    links: [
      "T-Shirts (DTF/Screen)",
      "Hoodies",
      "Caps",
      "Mugs",
      "Water Bottles",
      "Keyholders",
      "Lanyards",
      "Corporate Gifts",
      "Pens",
      "Tote Bags",
      "Badges & Buttons"
    ]
  },
  {
    title: "Vehicle & Fleet Branding",
    links: [
      "Full Vehicle Wraps",
      "Racing $ Safarally cars",
      "Partial Wraps",
      "Reflective Stickers",
      "Motorcycle Branding",
      "Delivery Van Branding",
      "Roadshow Trucks"
      
    ]
  },
  {
    title: "Corporate Signage & Office Branding",
    links: [
      "Office Signage",
      "3D Acrylic Signs",
      "Lightbox Signs",
      "Door Signs",
      "Desk Nameplates",
      "Wayfinding Signage",
      "Safety Signage"
      
    ]
  },
  {
    title: "Event Branding & Printing Accessories",
    links: [
      "Stage & Venue Branding",
      "Exhibition Booth Design",
      "Event Collateral",
      "Pop-up/Roadshow Branding",
      "Event Giveaways",
      "Stands & Frames",
      "Roll-up Mechanisms",
      "Acrylic Holders",
      "Lamination & Finishing",
      "Mounting Boards",
      "Lightbox Panels"
    ]
  },
  {
    title: "Website Design & Coding",
    links: [
      "Website Design & Development",
      "Website Maintenance",
      "SEO",
      "Digital Marketing Collateral",
      "Social Media Branding Kits",
      "Product Mockups",
      "Brand Strategy Consulting"
    ]
  }
];

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  // add/remove body class so CSS can hide toggle while sidebar is open
  useEffect(() => {
    document.body.classList.toggle("sidebar-open", sidebarOpen);
    return () => document.body.classList.remove("sidebar-open");
  }, [sidebarOpen]);

  // close sidebar on route change (header nav, etc.)
  useEffect(() => {
    setSidebarOpen(false);
    // also collapse open sections for clarity
    setOpenIndex(null);
  }, [location]);

  // click outside to close (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef}>
        <h2 className="sidebar-title">Our Services</h2>

        {sidebarData.map((section, index) => (
          <div key={index}>
            <div
              className={`menu-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </div>

            <div className={`submenu ${openIndex === index ? "open" : ""}`}>
              {section.links.map((link, i) => {
                const slug = link
                  .replace(/[^a-zA-Z0-9\s]/g, "")
                  .trim()
                  .replace(/\s+/g, "-")
                  .toLowerCase();

                return (
                  <NavLink
                    to={`/services/${slug}`}
                    key={i}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    end
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Overlay appears only on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Toggle button for mobile (floating, bottom-right) */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((s) => !s)}
        aria-label="Toggle sidebar"
      >
        <span style={{ fontSize: "1.1rem", marginRight: 8 }}>☰</span>
        <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>Services</span>
      </button>
    </>
  );
}