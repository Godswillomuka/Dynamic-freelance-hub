import React, { useState } from "react";
import "./Portfolio.css";

const allProjects = [
  {
    id: 1,
    title: "Olive & Co. Brand Refresh",
    category: "Branding",
    desc: "Complete brand transformation with new logo, color palette, and comprehensive guidelines that increased brand recognition by 45%.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
    duration: "6 weeks",
    likes: 42
  },
  {
    id: 2,
    title: "Restaurant Menu Design",
    category: "Print",
    desc: "Seasonal menu system with tabletop materials that reduced printing costs by 28% while improving durability.",
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80",
    duration: "3 weeks",
    likes: 38
  },
  {
    id: 3,
    title: "City Billboard Campaign",
    category: "Outdoor",
    desc: "25 high-traffic billboards that achieved 3.2M impressions and increased event registration by 187%.",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
    duration: "8 weeks",
    likes: 56
  },
  {
    id: 4,
    title: "E-commerce Packaging",
    category: "Packaging",
    desc: "Eco-friendly packaging using recycled materials that reduced shipping damage by 92%.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    duration: "10 weeks",
    likes: 29
  },
  {
    id: 5,
    title: "Annual Report Design",
    category: "Editorial",
    desc: "Award-winning report with sophisticated data visualization and sustainable printing.",
    img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=400&q=80",
    duration: "12 weeks",
    likes: 31
  },
  {
    id: 6,
    title: "Vehicle Fleet Branding",
    category: "Branding",
    desc: "50+ vehicle wrap system generating 5,000+ daily brand impressions per vehicle.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
    duration: "5 weeks",
    likes: 47
  },
  {
    id: 7,
    title: "Limited Edition Merch",
    category: "Merch",
    desc: "Strategic merchandise collection that sold out in 72 hours with 350% ROI.",
    img: "https://images.unsplash.com/photo-1520975915374-8f3b8f18a6d1?auto=format&fit=crop&w=400&q=80",
    duration: "4 weeks",
    likes: 63
  },
  {
    id: 8,
    title: "Product Catalogue Platform",
    category: "Digital",
    desc: "Interactive catalogue reducing support inquiries by 65% and boosting conversions by 42%.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    duration: "14 weeks",
    likes: 34
  },
  {
    id: 9,
    title: "Wedding Stationery Suite",
    category: "Print",
    desc: "Bespoke invitation suite with hand-crafted paper and custom calligraphy.",
    img: "https://images.unsplash.com/photo-1546549039-0f122cbf6e2d?auto=format&fit=crop&w=400&q=80",
    duration: "6 weeks",
    likes: 58
  },
  {
    id: 10,
    title: "Investor Presentation",
    category: "Digital",
    desc: "Pitch deck that secured $2.5M funding with compelling data visualization.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    duration: "5 weeks",
    likes: 27
  },
  {
    id: 11,
    title: "Retail Window Display",
    category: "Outdoor",
    desc: "Seasonal window graphics increasing foot traffic by 28% and sales by 19%.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
    duration: "4 weeks",
    likes: 41
  },
  {
    id: 12,
    title: "Tech Startup Identity",
    category: "Branding",
    desc: "Complete brand foundation establishing strong market differentiation.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80",
    duration: "8 weeks",
    likes: 39
  },
];

const categories = ["All", "Branding", "Print", "Outdoor", "Packaging", "Editorial", "Merch", "Digital"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(8);
  const [likedProjects, setLikedProjects] = useState({});
  const [enlargedImage, setEnlargedImage] = useState(null);

  const filtered = allProjects
    .filter((p) => (activeFilter === "All" ? true : p.category === activeFilter))
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()))
    .slice(0, limit);

  const handleLike = (projectId) => {
    setLikedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const handleEnlarge = (project) => {
    setEnlargedImage(project);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="portfolio-page">
      {/* HERO SECTION */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <div className="portfolio-hero-text">
            <h1 className="portfolio-hero-title">Our Portfolio</h1>
            <p className="portfolio-hero-subtitle">
              Discover our successful projects across branding, print, packaging, and digital media. 
              Click on any image to view it in full size.
            </p>
            <div className="portfolio-stats">
              <div className="portfolio-stat">
                <h3>200+</h3>
                <p>Projects</p>
              </div>
              <div className="portfolio-stat">
                <h3>98%</h3>
                <p>Satisfaction</p>
              </div>
              <div className="portfolio-stat">
                <h3>15+</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>
          <div className="portfolio-hero-image">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
              alt="Our creative portfolio showcase"
            />
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="portfolio-controls-section">
        <div className="portfolio-section-container">
          <div className="portfolio-controls">
            <div className="portfolio-filters">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`portfolio-filter-btn ${activeFilter === c ? "portfolio-filter-active" : ""}`}
                  onClick={() => { setActiveFilter(c); setLimit(8); }}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="portfolio-search-limit">
              <input
                className="portfolio-search-input"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="portfolio-limit-control">
                <label>Show:</label>
                <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                  <option value={16}>16</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="portfolio-projects-section">
        <div className="portfolio-section-container">
          <div className="portfolio-projects-grid">
            {filtered.map((p) => (
              <article key={p.id} className="portfolio-project-card">
                <div className="portfolio-project-thumb">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    loading="lazy" 
                    onClick={() => handleEnlarge(p)}
                    className="portfolio-project-image"
                  />
                  <div className="portfolio-project-overlay">
                    <span className="portfolio-project-category">{p.category}</span>
                    <span className="portfolio-project-duration">{p.duration}</span>
                  </div>
                  <div className="portfolio-project-actions">
                    <button 
                      className={`portfolio-like-btn ${likedProjects[p.id] ? 'liked' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(p.id);
                      }}
                    >
                      ♥
                    </button>
                    <button 
                      className="portfolio-enlarge-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnlarge(p);
                      }}
                    >
                      🔍
                    </button>
                  </div>
                </div>
                <div className="portfolio-project-body">
                  <h3 className="portfolio-project-title">{p.title}</h3>
                  <p className="portfolio-project-desc">{p.desc}</p>
                  <div className="portfolio-project-likes">
                    <span className="likes-count">
                      {p.likes + (likedProjects[p.id] ? 1 : 0)} likes
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="portfolio-no-results">
                <h3>No projects found</h3>
                <p>Try adjusting your search or filters</p>
                <button 
                  className="portfolio-reset-btn"
                  onClick={() => { setActiveFilter("All"); setSearch(""); }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* SHOW MORE */}
          <div className="portfolio-show-more">
            {limit < allProjects.length && (
              <button onClick={() => setLimit(limit + 8)} className="portfolio-load-more">
                Load More Projects
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ENLARGED IMAGE MODAL */}
      {enlargedImage && (
        <div className="portfolio-modal" onClick={handleCloseEnlarged}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="portfolio-modal-close" onClick={handleCloseEnlarged}>
              ✕
            </button>
            <img src={enlargedImage.img} alt={enlargedImage.title} />
            <div className="portfolio-modal-info">
              <h3>{enlargedImage.title}</h3>
              <p>{enlargedImage.category} • {enlargedImage.duration}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}