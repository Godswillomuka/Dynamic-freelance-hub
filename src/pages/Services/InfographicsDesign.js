import React from "react";
import "./InfographicsDesign.css";

export default function InfographicsDesign() {
  const gallery = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1532619675605-00a79b2b2b65?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526378721663-fd6f93d3e8b3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523475496153-3b1be88e0b36?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="infographics-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Infographics Design — Tell Stories with Data</h1>
          <p>
            Data is powerful — but only when it’s understood. Our infographics turn complex
            information into clear, engaging visuals that educate, persuade, and convert.
            From investor decks and annual reports to social posts and explainer pages,
            we craft infographics that simplify ideas and elevate your brand voice.
          </p>
          <p>
            We focus on clarity, hierarchy, and visual storytelling. Every chart, icon,
            and layout choice is deliberate — designed to guide the viewer and highlight
            the most important insights at a glance.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
            alt="Infographics hero"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Our Infographic Services</h2>
        <p>
          We design infographics for marketing, internal communications, education, and product documentation.
          Our work covers data visualization, timeline infographics, process diagrams, comparison graphics,
          anatomy/exploded views, and social-friendly vertical posts.
        </p>
        <p>
          We begin by understanding your audience and goals: what should the viewer remember,
          what action should they take, and which data points are critical. That informs the
          visual hierarchy and the choice of charts, icons, and narrative flow.
        </p>
      </section>

      {/* TYPES */}
      <section className="types">
        <h2>Infographic Types We Create</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Data Visualizations</h3>
            <p>Bar charts, line charts, pie charts, heat maps — visually accurate and branded.</p>
          </div>
          <div className="type-card">
            <h3>Process & Workflow</h3>
            <p>Step-by-step diagrams and flowcharts that clarify operations or user journeys.</p>
          </div>
          <div className="type-card">
            <h3>Timelines & Roadmaps</h3>
            <p>Clear timelines for product launches, milestones, and historical overviews.</p>
          </div>
          <div className="type-card">
            <h3>Explainer Graphics</h3>
            <p>Visual storytelling for product features, policy summaries, or educational content.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <h2>Why Use Professional Infographics</h2>
        <ul>
          <li><strong>Faster comprehension:</strong> Visuals let viewers grasp complex ideas quicker than text alone.</li>
          <li><strong>Better retention:</strong> Well-designed infographics increase recall and sharing.</li>
          <li><strong>Brand alignment:</strong> We design infographics to match your visual identity and tone.</li>
          <li><strong>Multi-channel use:</strong> Deliverables include print-ready, web-friendly, and social-optimized formats.</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Our Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span>1</span>
            <h3>Discovery & Data Audit</h3>
            <p>We review your data sources, key metrics, and communication objectives.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Information Architecture</h3>
            <p>We map the story — choosing which facts to highlight and the logical flow.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Wireframes & Sketches</h3>
            <p>Low-fidelity layouts to align on structure before final visual design.</p>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Visual Design</h3>
            <p>Apply brand colors, icons, charts, and typography to create the final infographic.</p>
          </div>

          <div className="step">
            <span>5</span>
            <h3>Review & Handoff</h3>
            <p>Revisions, final export (SVG/PNG/PDF) and documentation for reuse.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Infographic Gallery</h2>
        <p>Examples, variations, and formats we deliver — suitable for reports, presentations, and social posts.</p>

        <div className="gallery-grid">
          {gallery.map((src, i) => (
            <figure className="gallery-item" key={i}>
              <img src={src} alt={`Infographic sample ${i + 1}`} />
              <figcaption>Sample infographic {i + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Turn Data into Insightful Visuals?</h2>
        <p>Contact us to brief your project and we’ll propose the best infographic approach with timeline and cost estimate.</p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
