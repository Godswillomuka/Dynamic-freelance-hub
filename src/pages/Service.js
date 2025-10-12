import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DigitalOffsetPrinting from "./Services/DigitalPrinting";


function ComingSoon() {
  return (
    <div style={{ padding: "60px 0", textAlign: "center", color: "#ff7b00", fontSize: "1.5rem" }}>
      <h2>Coming Soon</h2>
      <p>This service page is under construction.</p>
    </div>
  );
}

export default function ServicesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="services-layout">
      <Sidebar search={search} setSearch={setSearch} />
      <div className="service-display">
        {/* Search Bar */}
        <div style={{ marginBottom: "24px", width: "100%", maxWidth: 400 }}>
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 16px",
              borderRadius: "6px",
              border: "1px solid #e2e8f0",
              fontSize: "1rem",
              marginTop: "12px"
            }}
          />
        </div>
        <Routes>
          {/* Always show DigitalOffsetPrinting for /services and /services/ */}
          <Route path="/" element={<DigitalOffsetPrinting />} />
          <Route index element={<DigitalOffsetPrinting />} />
          <Route path="digital-&-offset-printing" element={<DigitalOffsetPrinting />} />
          {/* Add all sidebar routes here, using ComingSoon for not-yet-created pages */}
          <Route path="large-format-printing" element={<ComingSoon />} />
          <Route path="custom-packaging-&-labels" element={<ComingSoon />} />
          <Route path="stationery-printing" element={<ComingSoon />} />
          <Route path="special-finishes" element={<ComingSoon />} />
          <Route path="security-printing" element={<ComingSoon />} />
          <Route path="3d-printing" element={<ComingSoon />} />
          <Route path="logo-design-&-brand-identity" element={<ComingSoon />} />
          <Route path="corporate-branding-materials" element={<ComingSoon />} />
          <Route path="brand-strategy-&-consultation" element={<ComingSoon />} />
          <Route path="packaging-design-&-engineering" element={<ComingSoon />} />
          <Route path="motion-graphics-&-video-branding" element={<ComingSoon />} />
          <Route path="social-media-content-design" element={<ComingSoon />} />
          {/* ...add all other sidebar links as needed, matching the NavLink "to" values... */}
          {/* Fallback for invalid paths */}
          <Route path="*" element={<Navigate to="digital-&-offset-printing" replace />} />
        </Routes>
      </div>
    </div>
  );
}


