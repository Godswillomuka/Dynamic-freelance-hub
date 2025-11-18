import React from "react";
import "./EventPosters.css";

export default function EventPosters() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHwxfHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHwzfHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1497493292307-31c376b6e479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw2fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1503437313881-503a91226419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw4fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1564866657316-1c2f3dbb742c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHwyMHx8ZXZlbnQlMjBwb3N0ZXJzfHwwfHx8fDE2OTA2NTAwMDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw1fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw0fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw2fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1523885081948-8db7b5f2c8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw3fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw4fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHwxMHx8ZXZlbnQlMjBwb3N0ZXJzfHwwfHx8fDE2OTA2NTAwMDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzOTV8MHwxfGFsbHw5fHxldmVudCUyMHBvc3Rlcnh8fDB8fHx8MTY5MDY1MDAwMA&ixlib=rb-4.0.3&q=80&w=400"
  ];

  return (
    <div className="event-posters-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Event Posters That Captivate & Convert</h1>
          <p>
            Our event posters are designed to grab attention, convey your message clearly, and drive
            engagement. From music concerts to corporate events, we craft visual experiences that
            resonate with your target audience.
          </p>
          <p>
            Using high-quality graphics, impactful typography, and brand-aligned colors, our posters
            make your event unforgettable. Each design is tailored to your event’s theme, purpose,
            and audience.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1564866657310-8b0e7b0f4642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt="Event Posters Hero"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Our Event Poster Design</h2>
        <p>
          We understand that an event poster is more than just a print – it’s a marketing tool that
          drives attendance and creates excitement. Our team researches your event, audience, and
          competitors to craft a poster that not only looks amazing but also performs effectively.
          From layout and color selection to typography and imagery, we ensure every element is
          purposeful. Posters can be used digitally and in print for maximum reach and impact.
          <br />
          Our designs are scalable for multiple formats: A3, A2, A1, social media banners, flyers,
          and billboards. Each poster is optimized for legibility, branding, and audience retention.
        </p>
      </section>

      {/* DIFFERENCE SECTION */}
      <section className="difference">
        <h2>Why Choose Our Event Posters</h2>
        <div className="difference-grid">
          <div className="diff-box">
            <h3>🎨 Custom Design</h3>
            <p>
              Every poster is crafted from scratch. No templates. We focus on your brand, theme, and
              audience for a unique visual identity.
            </p>
          </div>
          <div className="diff-box">
            <h3>📈 Marketing Optimized</h3>
            <p>
              Designs are not just aesthetic; they are built to convert and drive engagement for
              event success.
            </p>
          </div>
          <div className="diff-box">
            <h3>🖨️ Print Ready</h3>
            <p>
              We deliver high-resolution files compatible with professional printing services, from
              small flyers to large banners.
            </p>
          </div>
          <div className="diff-box">
            <h3>💻 Digital Friendly</h3>
            <p>
              Posters are optimized for online platforms, including social media, email marketing,
              and event landing pages.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery">
        <h2>Event Poster Gallery</h2>
        <p>Here are examples of our past projects demonstrating creativity and diversity in design.</p>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Event Poster ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>Our Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Discovery & Research</h3>
            <p>
              Understanding your event, audience, goals, and competitors to inform design decisions.
            </p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Conceptualization</h3>
            <p>
              Developing multiple poster concepts focusing on aesthetics, hierarchy, and messaging.
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Design & Draft</h3>
            <p>
              Crafting the poster using professional tools, applying typography, imagery, and colors
              aligned with your brand.
            </p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Review & Refinement</h3>
            <p>
              Collaborating with you for feedback, making revisions, and ensuring the design matches
              your expectations.
            </p>
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <h3>Delivery & Formats</h3>
            <p>
              Final poster delivered in print-ready and digital formats, ready to be shared or printed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Create Stunning Event Posters?</h2>
        <p>
          Make your events memorable with our professional poster design services. Contact us today
          and let’s bring your vision to life.
        </p>
        <button className="btn-secondary">Contact Us</button>
      </section>
    </div>
  );
}
