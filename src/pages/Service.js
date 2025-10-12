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
      <Sidebar />
      <div className="service-display">
        {/* Search Bar */}
        <div style={{ marginBottom: "24px", width: "100%", maxWidth: 400 }}>
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 16px",
              borderRadius: "6px",
              border: "1px solid #e2e8f0",
              fontSize: "1rem",
              marginTop: "12px",
            }}
          />
        </div>

        <Routes>
          {/* Default page */}
          <Route index element={<DigitalOffsetPrinting />} />

          {/* Printing Solutions */}
          <Route path="digital-offset-printing" element={<DigitalOffsetPrinting />} />
          <Route path="large-format-printing" element={<ComingSoon />} />
          <Route path="custom-packaging-labels" element={<ComingSoon />} />
          <Route path="stationery-printing" element={<ComingSoon />} />
          <Route path="special-finishes" element={<ComingSoon />} />
          <Route path="security-printing" element={<ComingSoon />} />
          <Route path="3d-printing" element={<ComingSoon />} />

          {/* Add other sections similarly */}
          <Route path="*" element={<Navigate to="digital-offset-printing" replace />} />
        </Routes>
      </div>
    </div>
  );
}
