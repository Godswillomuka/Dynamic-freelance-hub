import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const allProjects = [
  { title: "Corporate Branding", category: "Branding", image: "/images/portfolio1.jpg" },
  { title: "E-commerce Website", category: "Web Development", image: "/images/portfolio2.jpg" },
  { title: "Product Packaging", category: "Packaging", image: "/images/portfolio3.jpg" },
  { title: "Event Booth Fabrication", category: "Events", image: "/images/portfolio4.jpg" },
  { title: "Promotional Merchandise", category: "Marketing", image: "/images/portfolio5.jpg" },
  { title: "Corporate Photography", category: "Photography", image: "/images/portfolio6.jpg" },
  { title: "Billboard Printing", category: "Printing", image: "/images/portfolio7.jpg" },
  { title: "Restaurant Menu Design", category: "Design", image: "/images/portfolio8.jpg" },
];

const categories = ["All", "Branding", "Web Development", "Packaging", "Events", "Marketing", "Photography", "Printing", "Design"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <header className="portfolio-hero">
        <h1>Our Creative Portfolio</h1>
        <p>
          From branding and packaging to large-scale events and web solutions,
          our portfolio is a reflection of creativity, innovation, and impact.
        </p>
      </header>

      {/* Filter */}
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            className="portfolio-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
                <a href="#" className="view-btn">View Project</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
