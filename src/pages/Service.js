import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DigitalOffsetPrinting from "./Services/DigitalPrinting";
import "./Service.css";

/* --- Placeholder Component for Unbuilt Pages --- */
function ComingSoon({ title }) {
  return (
    <div className="coming-soon">
      <h2>{title || "Coming Soon"}</h2>
      <p>This service page is under construction.</p>
    </div>
  );
}

/* --- All Services from Sidebar --- */
const allServices = [
  // Printing Solutions
  "Digital & Offset Printing",
  "Large Format Printing",
  "Custom Packaging & Labels",
  "Stationery Printing",
  "Special Finishes",
  "Security Printing",
  "3D Printing",

  // Graphic & Creative Design
  "Logo Design & Brand Identity",
  "Corporate Branding Materials",
  "Brand Strategy & Consultation",
  "Packaging Design & Engineering",
  "Motion Graphics & Video Branding",
  "Social Media Content Design",

  // Corporate & Promotional Merchandise
  "Custom Apparel",
  "Corporate Gifts",
  "Tech Merchandise",
  "Eco-Friendly Products",
  "Custom Gift & Hamper Packaging",
  "Seasonal Gift Bundles",

  // Signage & Outdoor Advertising
  "Indoor & Outdoor Signage",
  "LED & Neon Signs",
  "Billboards & Hoardings",
  "Vehicle Branding & Fleet Graphics",
  "Directional & Wayfinding Signage",
  "Retail & POS Displays",

  // Event Branding & Fabrication
  "Stage & Venue Branding",
  "Exhibition Booth Design",
  "Event Collateral",
  "Roadshow & Pop-Up Solutions",
  "Custom Event Giveaways",
  "Photo Booth & Interactive Installs",

  // Corporate & Office Branding
  "Reception & Lobby Branding",
  "Interior Graphics & Frosted Films",
  "Door Plates & Office Signage",
  "ID Solutions",
  "Uniform Design & Embroidery",

  // Digital & Website Solutions
  "Website Design & Development",
  "Hosting & Maintenance",
  "SEO",
  "Social Media Branding Kits",
  "Digital Marketing Collateral",
  "Analytics & Reports",

  // Photography & Videography
  "Product Photography",
  "Corporate Headshots",
  "Event Coverage",
  "Promotional Videos",
  "Drone & Aerial Photography",

  // Packaging Solutions
  "Product Packaging Design",
  "Eco-Friendly Options",
  "Subscription Boxes",
  "Labels & Stickers",
  "Luxury Packaging",

  // Marketing & Advertising Support
  "Campaign Concept & Strategy",
  "Social Media Content Planning",
  "Paid Ads Setup",
  "Email Marketing Templates",
  "Presentation & Pitch Decks",

  // Specialty & Custom Printing
  "Personalized Photo Gifts",
  "Custom QR Code Printing",
  "Holographic & Metallic Effects",
  "Limited Edition Packaging",
  "Small-Batch Giveaways",

  // Consultation & Brand Management
  "Brand Audits & Competitive Analysis",
  "Rebranding Strategies",
  "Budget Optimization",
  "Training Workshops",
  "Long-term Brand Management",
];

/* --- Utility: Convert Service Name → Slug --- */
const slugify = (name) =>
  name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();

export default function ServicesPage() {
  return (
    <div className="services-layout">
      <Sidebar />

      <div className="service-display">
        {/* Service Routes */}
        <Routes>
          {/* Default Page */}
          <Route index element={<DigitalOffsetPrinting />} />

          {/* Dynamic Routes for All Services */}
          {allServices.map((service, i) => {
            const slug = slugify(service);
            const element =
              slug === "digital-offset-printing" ? (
                <DigitalOffsetPrinting />
              ) : (
                <ComingSoon title={service} />
              );
            return <Route key={i} path={slug} element={element} />;
          })}

          {/* Fallback Redirect */}
          <Route
            path="*"
            element={<Navigate to="digital-offset-printing" replace />}
          />
        </Routes>
      </div>
    </div>
  );
}
