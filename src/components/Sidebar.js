import React, { useState, useRef, useEffect } from "react";
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

  // Close sidebar on click outside (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleSection(index);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Toggle button for mobile */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
        aria-expanded={sidebarOpen}
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <nav
        ref={sidebarRef}
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        role="menu"
        aria-label="Sidebar Navigation"
      >
        <h2 className="sidebar-title">Our Services</h2>

        {sidebarData.map((section, index) => {
          // Highlight parent if any child is active
          const isActiveSection = section.links.some((link) =>
            location.pathname.includes(
              link.replace(/[^a-zA-Z0-9\s]/g, "").trim().replace(/\s+/g, "-").toLowerCase()
            )
          );

          return (
            <div key={index}>
              <div
                className={`menu-item ${openIndex === index || isActiveSection ? "active" : ""}`}
                onClick={() => toggleSection(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                role="menuitem"
                aria-expanded={openIndex === index}
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
                      role="menuitem"
                      tabIndex={0}
                    >
                      {link}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </>
  );
}
