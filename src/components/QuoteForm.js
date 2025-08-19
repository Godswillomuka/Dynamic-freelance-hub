// src/pages/GetQuotePage.js
import React, { useState } from "react";


export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="quote-page">
      <div className="quote-container">
        <h1>Get a Free Quote</h1>
        <p>Tell us about your project and we’ll send you a custom quote within 24 hours.</p>

        <form onSubmit={handleSubmit} className="quote-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option>Branding & Logo Design</option>
            <option>Business Card Printing</option>
            <option>Custom Merchandise</option>
            <option>Flyer & Brochure Printing</option>
          </select>
          <textarea
            name="message"
            rows="5"
            placeholder="Project details, quantity, timeline..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn-primary-alt">Send Request</button>
        </form>
      </div>
    </div>
  );
}