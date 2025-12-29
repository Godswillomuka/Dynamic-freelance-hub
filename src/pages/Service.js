// src/pages/Service.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesContent } from '../pages/servicesContent';
import './Service.css';

const Service = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesContent[slug];

  // Redirect to 404 if service doesn't exist
  useEffect(() => {
    if (!service && slug) {
      navigate('/404');
    }
  }, [service, slug, navigate]);

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-intro">{service.heroIntro}</p>
        </div>
        {service.heroImage && (
          <div className="hero-image">
            <img 
              src={service.heroImage} 
              alt={`${service.title} - Hero`}
              onError={(e) => {
                e.target.src = '/assets/services/default-hero.jpg';
                e.target.alt = 'Default service image';
              }}
            />
          </div>
        )}
      </section>

      {/* About Section */}
      <section className="service-about">
        <div className="section-header">
          <h2>About This Service</h2>
          <p className="section-subtitle">Understanding our approach to {service.title.toLowerCase()}</p>
        </div>
        <div className="about-grid">
          {service.about.map((item, index) => (
            <div key={index} className="about-item">
              {item.image && (
                <div className="about-image">
                  <img 
                    src={item.image} 
                    alt={`About ${service.title} - ${index + 1}`}
                    onError={(e) => {
                      e.target.src = '/assets/services/default-about.jpg';
                      e.target.alt = 'Default about image';
                    }}
                  />
                </div>
              )}
              <div className="about-text">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="service-why-choose">
        <div className="section-header">
          <h2>Why Choose Our {service.title}</h2>
          <p className="section-subtitle">What sets our approach apart</p>
        </div>
        <div className="why-choose-grid">
          {service.whyChoose.map((item, index) => (
            <div key={index} className="why-choose-card">
              <div className="why-choose-icon">
                {item.icon ? (
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = '/assets/icons/default-icon.svg';
                      e.target.alt = 'Default icon';
                    }}
                  />
                ) : (
                  <div className="icon-placeholder">
                    <span>{index + 1}</span>
                  </div>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="section-header">
          <h2>Our Process</h2>
          <p className="section-subtitle">How we deliver exceptional {service.title.toLowerCase()}</p>
        </div>
        <div className="process-timeline">
          {service.process.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-header">
                <div className="step-number">
                  <span>{step.step}</span>
                </div>
                <h3>{step.title}</h3>
              </div>
              <div className="step-content">
                <p>{step.text}</p>
                {step.image && (
                  <div className="step-image">
                    <img 
                      src={step.image} 
                      alt={`Step ${step.step}: ${step.title}`}
                      onError={(e) => {
                        e.target.src = '/assets/services/default-process.jpg';
                        e.target.alt = 'Default process image';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      {service.gallery && (
        <section className="service-gallery">
          <div className="section-header">
            <h2>{service.gallery.title || 'Our Work'}</h2>
            <p className="section-subtitle">See examples of our {service.title.toLowerCase()} in action</p>
          </div>
          <div className="gallery-grid">
            {service.gallery.images.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-container">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    onError={(e) => {
                      e.target.src = '/assets/services/default-portfolio.jpg';
                      e.target.alt = 'Default portfolio image';
                    }}
                  />
                </div>
                {image.caption && (
                  <div className="gallery-caption">
                    <p>{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-cta">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your {service.title.toLowerCase()} needs and get a free consultation.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => window.location.href = '/contact'}
            >
              Request a Quote
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => window.location.href = '/services'}
            >
              Browse All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;