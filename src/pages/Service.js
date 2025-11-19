import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LogoDesign from "./Services/LogoDesign";
import BrandIdentityDesign from "./Services/BrandIdentityDesign";
import BusinessCardDesign from "./Services/BusinessCardDesign";
import LetterheadDesign from "./Services/LetterheadDesign";
import CompanyProfileDesign from "./Services/CompanyProfileDesign";
import SocialMediaPosters from "./Services/SocialMediaPosters";
import EventPosters from "./Services/EventPosters";
import FlyersBrochureDesign from "./Services/FlyersBrochureDesign";
import MenuDesign from "./Services/MenuDesign";
import PackagingLabelDesign from "./Services/PackagingLabelDesign"; 
import BannerBillboardDesign from "./Services/BannerBillboardDesign"; 
import InvitationCardDesign from "./Services/InvitationCardDesign";
import CertificateDesign from "./Services/CertificateDesign";
import TShirtArtworkDesign from "./Services/TShirtArtworkDesign";
import WebsiteUILayout from "./Services/WebsiteUILayout";
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
  // Graphic & Creative Design
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
  "Website UI Layout (optional)",

  // General & Digital Printing
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
  "ID Cards",
  "Certificates",
  "Menus",

  // Large Format & Outdoor Printing
  "PVC/Flex Banners",
  "Roll-Up Banners",
  "Pop-Up Banners",
  "Backdrops",
  "Billboards",
  "Shop Signage",
  "Window Graphics",
  "Wall Murals",
  "Vehicle Branding Stickers",
  "Floor Graphics",

  // Merchandise & Promotional Branding
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
  "Badges & Buttons",

  // Vehicle & Fleet Branding
  "Full Vehicle Wraps",
  "Partial Wraps",
  "Reflective Stickers",
  "Motorcycle Branding",
  "Delivery Van Branding",

  // Corporate Signage & Office Branding
  "Office Signage",
  "3D Acrylic Signs",
  "Lightbox Signs",
  "Door Signs",
  "Desk Nameplates",
  "Wayfinding Signage",
  "Safety Signage",
  "Custom Wall Art",

  // Event Branding & Printing Accessories
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
  "Lightbox Panels",

  // Packaging & Product Branding
  "Product Packaging Design",
  "Eco-Friendly Packaging Options",
  "Subscription Boxes",
  "Labels & Stickers",
  "Luxury Packaging",
  "Custom Gift & Hamper Packaging",
  "Seasonal Gift Bundles",

  // Website Design & Coding
  "Website Design & Development",
  "Website Maintenance",
  "SEO",
  "Digital Marketing Collateral",
  "Social Media Branding Kits",
  "Product Mockups",
  "Brand Strategy Consulting",
];

/* --- Utility: Convert Service Name → Slug --- */
const slugify = (name) =>
  name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();

/* --- Map specific slugs to real page components --- */
const slugToComponent = {
  "logo-design": LogoDesign,
  "brand-identity-design": BrandIdentityDesign,
  "business-card-design": BusinessCardDesign,
  "letterhead-design": LetterheadDesign,
  "company-profile-design": CompanyProfileDesign,
  "social-media-posters": SocialMediaPosters,
  "event-posters": EventPosters,
  "flyers-brochure-design": FlyersBrochureDesign,
  "menu-design": MenuDesign,
  "packaging-label-design": PackagingLabelDesign,
  "banner-billboard-layout-design": BannerBillboardDesign,
  "invitation-card-design": InvitationCardDesign,
  "certificate-design": CertificateDesign,
  [slugify("T-Shirt Artwork Design")]: TShirtArtworkDesign,
  [slugify("Website UI Layout (optional)")]: WebsiteUILayout,
  [slugify("Website UI Layout")]: WebsiteUILayout,
  // add more overrides as needed:
};

/* --- Service Content Wrapper --- */
function ServiceContent() {
  const { serviceSlug } = useParams();
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    if (serviceSlug) {
      const service = allServices.find((s) => slugify(s) === serviceSlug);
      setCurrentService(service || allServices[0]);
    } else {
      setCurrentService(allServices[0]);
    }
  }, [serviceSlug]);

  if (!currentService) return <div>Loading...</div>;

  // If the route slug maps to a real page component, render it
  if (serviceSlug && slugToComponent[serviceSlug]) {
    const Page = slugToComponent[serviceSlug];
    return <Page />;
  }

  // Otherwise render ComingSoon with resolved title
  return <ComingSoon title={currentService} />;
}

export default function ServicesPage() {
  return (
    <div className="services-layout" style={{ display: "flex" }}>
      <Sidebar />
      <div className="service-display" style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<ServiceContent />} />
          <Route path=":serviceSlug" element={<ServiceContent />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
