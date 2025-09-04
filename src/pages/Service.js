// src/pages/Service.js
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../components/ServiceData";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import Sidebar from "../components/Sidebar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Service.css";

export default function Service() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ✅ Redirect to first service if none provided
  useEffect(() => {
    if (!slug && servicesData.length > 0) {
      navigate(`/services/${servicesData[0].slug}`, { replace: true });
    }
  }, [slug, navigate]);

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return <div className="service-page not-found">Service not found</div>;

  return (
    <>
      <Sidebar />
      {/* ✅ Wrap content inside .main-content so it respects sidebar width */}
      <div className="main-content">
        <div className="service-page">
          {/* Hero */}
          <section className="hero">
            <img src={service.hero.image} alt={service.title} className="hero-bg" />
            <div className="hero-content">
              <h1>{service.hero.headline}</h1>
              <p>{service.hero.subheadline}</p>
            </div>
          </section>

          {/* Overview */}
          <section className="overview">
            <div className="overview-text">
              <h2>{service.overview.title}</h2>
              <p>{service.overview.description}</p>
              <ul>
                {service.overview.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="overview-images">
              {service.overview.images.map((img, i) => (
                <img key={i} src={img} alt={`overview-${i}`} />
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="features">
            <h2>Features</h2>
            <div className="features-grid">
              {service.features.map((f, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="feature-card">
                  <img src={f.image} alt={f.title} />
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="process">
            <h2>{service.process.title}</h2>
            <div className="process-content">
              <div className="process-steps">
                {service.process.steps.map((s, i) => (
                  <div key={i} className="step">
                    <h4>{s.step}</h4>
                    <p>{s.detail}</p>
                  </div>
                ))}
              </div>
              <img src={service.process.image} alt="process" />
            </div>
          </section>

          {/* Gallery */}
          <section className="gallery">
            <h2>{service.gallery.title}</h2>
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {service.gallery.images.map((img, i) => (
                <div key={i}>
                  <img src={img.src} alt={`gallery-${i}`} />
                  <p className="legend">{img.caption}</p>
                </div>
              ))}
            </Carousel>
          </section>

          {/* Industries */}
          <section className="industries">
            <h2>{service.industries.title}</h2>
            <div className="industry-grid">
              {service.industries.sectors.map((sector, i) => (
                <div key={i} className="industry-card">
                  <img src={sector.icon} alt={sector.name} />
                  <div>
                    <h3>{sector.name}</h3>
                    <p>{sector.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="faqs">
            <h2>FAQs</h2>
            <div className="faq-list">
              {service.faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial-grid">
              {service.testimonials.map((t, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="testimonial-card">
                  <img src={t.image} alt={t.name} />
                  <p>"{t.feedback}"</p>
                  <h4>{t.name}</h4>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="benefits">
            <h2>Benefits</h2>
            <ul>
              {service.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="cta">
            <h2>{service.callToAction.headline}</h2>
            <p>{service.callToAction.subheadline}</p>
            <a href={service.callToAction.buttonLink} className="cta-btn">
              {service.callToAction.buttonText}
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
