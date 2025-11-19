import React from "react";
import "./MagazineBookLayout.css";

export default function MagazineBookLayout() {
  return (
    <div className="service-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Magazine & Book Layout Design</h1>
          <p>
            Professional, elegant, and well-structured layouts tailored for magazines, books, annual reports, catalogs, and publications. 
            We ensure perfect readability, balanced composition, high-quality typography, and polished layouts ready for print or digital use.
          </p>
          <button className="btn-primary">Get a Custom Layout</button>
        </div>

        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
            alt="Magazine Layout" 
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-text">
          <h2>Clean, Professional & Modern Editorial Layouts</h2>
          <p>
            Your publication deserves a clean and visually appealing layout. Our editorial design process focuses on consistency, hierarchy, and aesthetics.
            Whether it’s a corporate magazine, lifestyle publication, or book, we create layouts that communicate clearly and attractively.
          </p>
          <p>
            We meticulously apply spacing, grids, typography rules, and visual flow to produce a publication that meets global design standards.
          </p>
        </div>

        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="Layout example" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="types">
        <h2>We Design for All Types of Publications</h2>

        <div className="types-grid">

          <div className="type-card">
            <h3>Magazines</h3>
            <p>Corporate magazines, lifestyle magazines, school magazines, and newsletters.</p>
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80" alt="Magazine" />
          </div>

          <div className="type-card">
            <h3>Books</h3>
            <p>Fiction, non-fiction, educational books, poetry books, autobiographies, and more.</p>
            <img src="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&fit=crop&w=400&q=80" alt="Books" />
          </div>

          <div className="type-card">
            <h3>Annual Reports</h3>
            <p>Modern layouts that highlight data, sections, messages, and achievements effectively.</p>
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80" alt="Annual report" />
          </div>

          <div className="type-card">
            <h3>Product Catalogs</h3>
            <p>Clean catalog layouts showcasing products with pricing, descriptions, and categories.</p>
            <img src="https://images.unsplash.com/photo-1504712598893-24159a89200e?auto=format&fit=crop&w=400&q=80" alt="Catalog" />
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Our Editorial Design Process</h2>

        <div className="process-grid">

          <div className="step">
            <span>1</span>
            <h3>Content Analysis</h3>
            <p>We evaluate your text, images, chapters, and structure needs.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Grid & Typography Setup</h3>
            <p>A structured framework is built for consistent alignment and readability.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Layout Drafting</h3>
            <p>We design sample spreads and interior pages to match your style.</p>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Full Publication Layout</h3>
            <p>Every page is designed cleanly and ready for printing or digital export.</p>
          </div>

          <div className="step">
            <span>5</span>
            <h3>Final Review & Export</h3>
            <p>You receive print-ready PDF, web version, and source files where needed.</p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Sample Magazine & Book Layouts</h2>

        <div className="gallery-grid">

          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=80" alt="Sample 1"/>
          <img src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=500&q=80" alt="Sample 2"/>
          <img src="https://images.unsplash.com/photo-1512254454012-01aa0c5febb4?auto=format&fit=crop&w=500&q=80" alt="Sample 3"/>
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80" alt="Sample 4"/>
          <img src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=500&q=80" alt="Sample 5"/>
          <img src="https://images.unsplash.com/photo-1511974212900-b42a18e19eb8?auto=format&fit=crop&w=500&q=80" alt="Sample 6"/>
          <img src="https://images.unsplash.com/photo-1523810958797-6e0fd518b4a7?auto=format&fit=crop&w=500&q=80" alt="Sample 7"/>
          <img src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=500&q=80" alt="Sample 8"/>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80" alt="Sample 9"/>
          <img src="https://images.unsplash.com/photo-1530030422938-45b75b3f878b?auto=format&fit=crop&w=500&q=80" alt="Sample 10"/>
          <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80" alt="Sample 11"/>
          <img src="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=500&q=80" alt="Sample 12"/>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need a Professional Book or Magazine Layout?</h2>
        <p>We turn your raw content into a stunning publication—structured, elegant, and print-ready.</p>
        <button className="btn-primary">Start Your Project</button>
      </section>

    </div>
  );
}
