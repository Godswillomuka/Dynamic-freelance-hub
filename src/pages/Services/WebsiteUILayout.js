import React from "react";
import "./WebsiteUILayout.css";

export default function WebsiteUILayout() {
  const gallery = [
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1526378721663-fd6f93d3e8b3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80"
  ];

  return (
    <div className="ui-layout-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Website UI Layouts — Clean, Usable & Brand-Driven</h1>
          <p>
            We design thoughtful, user-focused UI layouts that turn ideas into intuitive digital products.
            From wireframes to final pixel-perfect screens, our UI layouts prioritize clarity, accessibility,
            and conversion — for web apps, marketing sites, dashboards, and e-commerce storefronts.
          </p>
          <p>
            Our layouts are delivered in modular, reusable sections so your development team (or ours) can implement them quickly.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Request a Quote</button>
            <button className="btn-outline">View Portfolio</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1000&q=80"
            alt="Website UI mockups"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>What is a UI Layout and Why It Matters</h2>
        <p>
          A UI layout is the visual arrangement of elements on a page — navigation, content blocks, forms, images, and calls-to-action.
          A good layout reduces friction, guides users to take action, and reflects your brand personality.
        </p>
        <p>
          We build layouts with a focus on responsive behavior, accessibility standards, and component reusability. The result: faster builds, fewer design-developer handoffs,
          and interfaces that feel natural on any device.
        </p>
      </section>

      {/* SERVICES & DELIVERABLES */}
      <section className="services">
        <h2>Deliverables & Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Wireframes</h3>
            <p>Low-fidelity layouts to agree on structure, hierarchy, and user flow before visual design.</p>
          </div>
          <div className="service-card">
            <h3>High-Fidelity UI Screens</h3>
            <p>Pixel-perfect screens in Figma (or XD), ready for handoff and prototyping.</p>
          </div>
          <div className="service-card">
            <h3>Design Systems</h3>
            <p>Reusable components, tokens (colors/typography), and documentation to scale your product.</p>
          </div>
          <div className="service-card">
            <h3>Responsive Variants</h3>
            <p>Layouts optimized for desktop, tablet, and mobile breakpoints with prioritized content stacks.</p>
          </div>
          <div className="service-card">
            <h3>Prototypes</h3>
            <p>Clickable prototypes for usability testing and stakeholder demos.</p>
          </div>
          <div className="service-card">
            <h3>Handoff Package</h3>
            <p>Exportable assets, measurements, CSS snippets, and developer notes to speed implementation.</p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach">
        <h2>Our UI Layout Approach</h2>
        <div className="approach-grid">
          <div className="approach-step">
            <h4>Research & Goals</h4>
            <p>We begin by defining business goals, user personas, and success metrics to inform structure and content priorities.</p>
          </div>
          <div className="approach-step">
            <h4>Information Architecture</h4>
            <p>Organize content into clear sections so users can find what they need quickly and with minimal clicks.</p>
          </div>
          <div className="approach-step">
            <h4>Interaction Design</h4>
            <p>Define behavior for navigation, modals, dropdowns, and dynamic elements with accessibility in mind.</p>
          </div>
          <div className="approach-step">
            <h4>Visual Design</h4>
            <p>Apply brand colors, iconography, and motion to create delightful, consistent screens.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Typical Project Workflow</h2>
        <ol className="process-list">
          <li><strong>Kickoff:</strong> Stakeholder interviews and brief gathering.</li>
          <li><strong>Wireframes:</strong> Low-fi layouts for core flows and components.</li>
          <li><strong>UI Screens:</strong> High-fi designs for key pages and responsive breakpoints.</li>
          <li><strong>Prototype & Test:</strong> Clickable prototype for quick usability checks.</li>
          <li><strong>Handoff:</strong> Deliver Figma files, assets, and implementation notes.</li>
          <li><strong>Support:</strong> Optional dev support during frontend build and QA.</li>
        </ol>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>UI Layout & Mockup Gallery</h2>
        <p>Real examples and inspiration — layouts designed for conversion, clarity, and brand expression.</p>
        <div className="gallery-grid">
          {gallery.map((src, i) => (
            <figure className="gallery-item" key={i}>
              <img src={src} alt={`UI sample ${i + 1}`} />
              <figcaption>UI sample {i + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Ship Better Interfaces?</h2>
        <p>
          Share your brief — we’ll propose a layout strategy with delivery timeline, sample screens, and a clear cost estimate.
        </p>
        <div className="cta-actions">
          <button className="btn-primary">Start Project</button>
          <button className="btn-secondary">Request Design Audit</button>
        </div>
      </section>
    </div>
  );
}
