import React, { useState } from "react";
import "./Portfolio.css";

const allProjects = [
  {
    id: 1,
    title: "Brand Refresh — Olive & Co.",
    category: "Branding",
    desc:
      "Full brand identity refresh (logo, color system, stationery, packaging) for boutique food brand.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Restaurant Menu + Print",
    category: "Print",
    desc:
      "Seasonal menu design, print and tabletop materials for high-volume restaurant chain.",
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Event Billboard Campaign",
    category: "Outdoor",
    desc:
      "Large-format billboard campaign and city-wide banner system for conference launch.",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "E-commerce Packaging & Labels",
    category: "Packaging",
    desc:
      "Eco-friendly subscription box design with dielines and fulfillment-friendly inserts.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Corporate Annual Report",
    category: "Editorial",
    desc:
      "Complete magazine-style annual report with data viz, infographics, and print-ready spreads.",
    img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Vehicle Fleet Wrap",
    category: "Branding",
    desc:
      "Vehicle wrap system for delivery fleet with reflective-safe elements and brand consistency.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "T-Shirt Merch Drop",
    category: "Merch",
    desc:
      "Limited-edition merchandise concept, print-ready art, and fulfillment stickers for launch.",
    img: "https://images.unsplash.com/photo-1520975915374-8f3b8f18a6d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Interactive Product Catalogue",
    category: "Digital",
    desc:
      "Web-first product catalogue with downloadable assets and print-ready PDF export.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Invitation Suite — Wedding",
    category: "Print",
    desc:
      "Luxury paper invitation suite, envelopes, and RSVP web form to match wedding theme.",
    img: "https://images.unsplash.com/photo-1546549039-0f122cbf6e2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    title: "Infographic Series for Investors",
    category: "Digital",
    desc:
      "Investor-facing infographics and slide decks for fundraising round.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    title: "Retail Window Graphics",
    category: "Outdoor",
    desc:
      "Seasonal window campaigns with cut vinyl and applied finishes for retail outlets.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    title: "Logo & Identity — Tech Startup",
    category: "Branding",
    desc:
      "Logo system, iconography, and UI kit for new SaaS startup preparing launch.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = ["All", "Branding", "Print", "Outdoor", "Packaging", "Editorial", "Merch", "Digital"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(8);

  const filtered = allProjects
    .filter((p) => (activeFilter === "All" ? true : p.category === activeFilter))
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()))
    .slice(0, limit);

  return (
    <div className="portfolio-page">
      <header className="portfolio-hero">
        <div className="hero-text">
          <h1>Selected Works & Case Studies</h1>
          <p>
            A curated collection of projects across branding, print, packaging, digital, and large-format campaigns.
            Click a project for details, or filter by category to find relevant work.
          </p>
        </div>

        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=80" alt="Portfolio hero" />
        </div>
      </header>

      {/* FILTER BAR */}
      <div className="portfolio-controls">
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${activeFilter === c ? "active" : ""}`}
              onClick={() => { setActiveFilter(c); setLimit(8); }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="search-limit">
          <input
            placeholder="Search projects, e.g., 'menu', 'packaging'..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="limit-control">
            <label>Show</label>
            <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
            </select>
          </div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <section className="projects-grid">
        {filtered.map((p) => (
          <article key={p.id} className="project-card">
            <div className="thumb">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="category">{p.category}</p>
              <p className="desc">{p.desc}</p>
              <div className="project-actions">
                <a className="btn" href={`/portfolio/${p.id}`}>View Case</a>
                <a className="btn-outline" href="/get-quote">Get Quote</a>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="no-results">
            <p>No projects match your search. Try another term or category.</p>
          </div>
        )}
      </section>

      {/* SHOW MORE */}
      <div className="show-more">
        {limit < allProjects.length && (
          <button onClick={() => setLimit(limit + 4)} className="primary-btn">Show more projects</button>
        )}
      </div>

      {/* DETAILED CASE STUDIES (lightweight previews) */}
      <section className="case-studies">
        <h2>Featured Case Studies</h2>
        <div className="case-grid">
          <div className="case-card">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80" alt="Case 1" />
            <div className="case-body">
              <h3>Olive & Co. — Rebrand</h3>
              <p>
                We developed a full identity system for this artisanal food brand — logo lockups,
                packaging, and retail signage that increased shelf conversion by 38% (client metric).
              </p>
              <a className="btn" href="/portfolio/1">Read Full Case</a>
            </div>
          </div>

          <div className="case-card">
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80" alt="Case 2" />
            <div className="case-body">
              <h3>City Conference — Outdoor Campaign</h3>
              <p>
                Multi-format city wide banners and billboards with a cohesive creative system designed for high readability.
              </p>
              <a className="btn" href="/portfolio/3">Read Full Case</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="cta-inner">
          <h2>See a project you like?</h2>
          <p>Tell us about your idea and we’ll respond with a clear plan and timeframe.</p>
          <div className="cta-actions">
            <a className="primary-btn" href="/get-quote">Request a Quote</a>
            <a className="btn-outline" href="/contact-us">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
