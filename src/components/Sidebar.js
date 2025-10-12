import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const sidebarData = [
  {
    title: "Printing Solutions",
    links: [
      "Digital & Offset Printing",
      "Large Format Printing",
      "Custom Packaging & Labels",
      "Stationery Printing",
      "Special Finishes",
      "Security Printing",
      "3D Printing",
    ],
  },
  {
    title: "Graphic & Creative Design",
    links: [
      "Logo Design & Brand Identity",
      "Corporate Branding Materials",
      "Brand Strategy & Consultation",
      "Packaging Design & Engineering",
      "Motion Graphics & Video Branding",
      "Social Media Content Design",
    ],
  },
  {
    title: "Corporate & Promotional Merchandise",
    links: [
      "Custom Apparel",
      "Corporate Gifts",
      "Tech Merchandise",
      "Eco-Friendly Products",
      "Custom Gift & Hamper Packaging",
      "Seasonal Gift Bundles",
    ],
  },
  {
    title: "Signage & Outdoor Advertising",
    links: [
      "Indoor & Outdoor Signage",
      "LED & Neon Signs",
      "Billboards & Hoardings",
      "Vehicle Branding & Fleet Graphics",
      "Directional & Wayfinding Signage",
      "Retail & POS Displays",
    ],
  },
  {
    title: "Event Branding & Fabrication",
    links: [
      "Stage & Venue Branding",
      "Exhibition Booth Design",
      "Event Collateral",
      "Roadshow & Pop-Up Solutions",
      "Custom Event Giveaways",
      "Photo Booth & Interactive Installs",
    ],
  },
  {
    title: "Corporate & Office Branding",
    links: [
      "Reception & Lobby Branding",
      "Interior Graphics & Frosted Films",
      "Door Plates & Office Signage",
      "ID Solutions",
      "Uniform Design & Embroidery",
    ],
  },
  {
    title: "Digital & Website Solutions",
    links: [
      "Website Design & Development",
      "Hosting & Maintenance",
      "SEO",
      "Social Media Branding Kits",
      "Digital Marketing Collateral",
      "Analytics & Reports",
    ],
  },
  {
    title: "Photography & Videography",
    links: [
      "Product Photography",
      "Corporate Headshots",
      "Event Coverage",
      "Promotional Videos",
      "Drone & Aerial Photography",
    ],
  },
  {
    title: "Packaging Solutions",
    links: [
      "Product Packaging Design",
      "Eco-Friendly Options",
      "Subscription Boxes",
      "Labels & Stickers",
      "Luxury Packaging",
    ],
  },
  {
    title: "Marketing & Advertising Support",
    links: [
      "Campaign Concept & Strategy",
      "Social Media Content Planning",
      "Paid Ads Setup",
      "Email Marketing Templates",
      "Presentation & Pitch Decks",
    ],
  },
  {
    title: "Specialty & Custom Printing",
    links: [
      "Personalized Photo Gifts",
      "Custom QR Code Printing",
      "Holographic & Metallic Effects",
      "Limited Edition Packaging",
      "Small-Batch Giveaways",
    ],
  },
  {
    title: "Consultation & Brand Management",
    links: [
      "Brand Audits & Competitive Analysis",
      "Rebranding Strategies",
      "Budget Optimization",
      "Training Workshops",
      "Long-term Brand Management",
    ],
  },
];

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
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
                >
                  {link}
                </NavLink>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
