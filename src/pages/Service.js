// src/pages/Service.js
import React, { useEffect, useState } from "react";
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
  const [activeMaterialCategory, setActiveMaterialCategory] = useState(0);

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
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {service.hero.headline}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {service.hero.subheadline}
              </motion.p>
              <motion.a 
                href={service.hero.ctaLink}
                className="cta-btn hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {service.hero.ctaButton}
                <i className="fas fa-arrow-right"></i>
              </motion.a>
            </div>
          </section>

          {/* Stats */}
          {service.stats && (
            <section className="stats-section">
              <div className="stats-grid">
                {service.stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

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
                <motion.img 
                  key={i} 
                  src={img} 
                  alt={`overview-${i}`} 
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="features">
            <h2>Key Applications</h2>
            <div className="features-grid">
              {service.features.map((f, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }} 
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="feature-icon">
                    <i className={`fas ${f.icon}`}></i>
                  </div>
                  <img src={f.image} alt={f.title} />
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Materials */}
          {service.materials && (
            <section className="materials-section">
              <h2>{service.materials.title}</h2>
              <p className="section-description">{service.materials.description}</p>
              
              <div className="material-categories">
                {service.materials.categories.map((category, index) => (
                  <div 
                    key={index} 
                    className={`material-category ${index === activeMaterialCategory ? 'active' : ''}`}
                    onClick={() => setActiveMaterialCategory(index)}
                  >
                    <h4>{category.name}</h4>
                  </div>
                ))}
              </div>
              
              <div className="material-items">
                {service.materials.categories[activeMaterialCategory].items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="material-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Technology */}
          {service.technology && (
            <section className="technology-section">
              <h2>{service.technology.title}</h2>
              <p className="section-description">{service.technology.description}</p>
              
              <div className="technology-grid">
                {service.technology.printers.map((printer, i) => (
                  <motion.div 
                    key={i} 
                    className="printer-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <img src={printer.image} alt={printer.name} />
                    <div className="printer-info">
                      <h3>{printer.name}</h3>
                      <p className="printer-type">{printer.type}</p>
                      <p className="printer-resolution">Resolution: {printer.resolution}</p>
                      <p className="printer-bestfor">Best for: {printer.bestFor}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Process */}
          <section className="process">
            <h2>{service.process.title}</h2>
            <div className="process-content">
              <div className="process-steps">
                {service.process.steps.map((s, i) => (
                  <motion.div 
                    key={i} 
                    className="step"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="step-icon">
                      <i className={`fas ${s.icon}`}></i>
                    </div>
                    <div className="step-content">
                      <h4>{s.step}</h4>
                      <p>{s.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.img 
                src={service.process.image} 
                alt="process" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />
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
                <motion.div 
                  key={i} 
                  className="industry-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="industry-icon">
                    <img src={sector.icon} alt={sector.name} />
                  </div>
                  <div className="industry-content">
                    <h3>{sector.name}</h3>
                    <p>{sector.description}</p>
                    {sector.examples && (
                      <div className="industry-examples">
                        <h4>Examples:</h4>
                        <ul>
                          {sector.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          {service.caseStudies && (
            <section className="case-studies">
              <h2>Success Stories</h2>
              <div className="case-studies-grid">
                {service.caseStudies.map((caseStudy, i) => (
                  <motion.div 
                    key={i} 
                    className="case-study-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <img src={caseStudy.image} alt={caseStudy.title} />
                    <div className="case-study-content">
                      <h3>{caseStudy.title}</h3>
                      <div className="case-study-challenge">
                        <h4>Challenge</h4>
                        <p>{caseStudy.challenge}</p>
                      </div>
                      <div className="case-study-solution">
                        <h4>Solution</h4>
                        <p>{caseStudy.solution}</p>
                      </div>
                      <div className="case-study-results">
                        <h4>Results</h4>
                        <ul>
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonials */}
          <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-grid">
              {service.testimonials.map((t, i) => (
                <motion.div 
                  key={i} 
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="testimonial-header">
                    <img src={t.image} alt={t.name} />
                    <div className="testimonial-rating">
                      {[...Array(t.rating)].map((_, idx) => (
                        <i key={idx} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p>"{t.feedback}"</p>
                  <h4>{t.name}</h4>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          {service.certifications && (
            <section className="certifications">
              <h2>{service.certifications.title}</h2>
              <div className="certifications-grid">
                {service.certifications.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="certification-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="certification-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <p>{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Pricing Options */}
          {service.pricingOptions && (
            <section className="pricing-options">
              <h2>{service.pricingOptions.title}</h2>
              <p className="section-description">{service.pricingOptions.description}</p>
              
              <div className="pricing-grid">
                {service.pricingOptions.plans.map((plan, i) => (
                  <motion.div 
                    key={i} 
                    className="pricing-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="pricing-header">
                      <h3>{plan.name}</h3>
                      <div className="price">{plan.price}</div>
                    </div>
                    <p className="plan-description">{plan.description}</p>
                    <ul className="plan-features">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="plan-bestfor">
                      <strong>Best for:</strong> {plan.bestFor}
                    </div>
                    <a href={service.callToAction.buttonLink} className="cta-btn">
                      {service.callToAction.buttonText}
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          <section className="faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {service.faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  className="faq-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="benefits">
            <h2>Why Choose Our 3D Printing Services?</h2>
            <div className="benefits-grid">
              {service.benefits.map((b, i) => (
                <motion.div 
                  key={i} 
                  className="benefit-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="benefit-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <p>{b}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="cta">
            <h2>{service.callToAction.headline}</h2>
            <p>{service.callToAction.subheadline}</p>
            <div className="cta-buttons">
              <a href={service.callToAction.buttonLink} className="cta-btn primary">
                {service.callToAction.buttonText}
              </a>
              {service.callToAction.secondaryButtonText && (
                <a href={service.callToAction.secondaryButtonLink} className="cta-btn secondary">
                  {service.callToAction.secondaryButtonText}
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}