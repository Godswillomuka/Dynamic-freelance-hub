import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServicesContent } from './ServicesContent';
import Sidebar from '../components/Sidebar';
import './Service.css';

const Service = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Debug: Check if ServicesContent is imported correctly
  console.log("🔍 Service Component Mounted");
  console.log("ServicesContent imported:", !!ServicesContent);
  console.log("Type of ServicesContent:", typeof ServicesContent);
  
  if (ServicesContent) {
    console.log("ServicesContent keys:", Object.keys(ServicesContent).slice(0, 5), "...");
  }

  // Find the service by slug
  useEffect(() => {
    console.log("🔍 Service useEffect Running");
    console.log("Current slug from URL:", slug);

    if (!slug) {
      // If no slug, redirect to first service
      console.log("No slug provided, redirecting to first service");
      const firstServiceSlug = Object.keys(ServicesContent)[0];
      navigate(`/services/${firstServiceSlug}`, { replace: true });
      return;
    }

    // Check if ServicesContent exists
    if (!ServicesContent) {
      console.error("❌ CRITICAL ERROR: ServicesContent is undefined or not imported!");
      console.error("Check the import path and file location");
      console.error("Current import: import { ServicesContent } from './ServicesContent'");
      setLoading(false);
      return;
    }

    console.log("✅ ServicesContent loaded successfully");
    console.log("Total services available:", Object.keys(ServicesContent).length);
    
    // First try exact match
    let foundService = ServicesContent[slug];
    
    if (foundService) {
      console.log("✅ Exact match found for slug:", slug);
      console.log("Service title:", foundService.title);
      setService(foundService);
      setLoading(false);
      return;
    }

    // If not found, try to find by case-insensitive match
    console.log("⚠️ No exact match, trying case-insensitive search...");
    const lowercaseSlug = slug.toLowerCase();
    
    for (const [key, serviceData] of Object.entries(ServicesContent)) {
      if (key.toLowerCase() === lowercaseSlug) {
        console.log(`🔄 Found case-insensitive match: "${key}" for requested slug: "${slug}"`);
        console.log(`Service title: ${serviceData.title}`);
        console.log(`Redirecting to correct slug: ${key}`);
        navigate(`/services/${key}`, { replace: true });
        return;
      }
    }

    // If still not found
    console.log("❌ No service found for slug:", slug);
    console.log("Available slugs (first 10):");
    Object.keys(ServicesContent).slice(0, 10).forEach((key, index) => {
      console.log(`${index + 1}. ${key} - ${ServicesContent[key].title}`);
    });

    // Check if there are any slugs similar to what was requested
    const similarSlugs = Object.keys(ServicesContent).filter(key => 
      key.toLowerCase().includes(lowercaseSlug) || 
      lowercaseSlug.includes(key.toLowerCase())
    );
    
    if (similarSlugs.length > 0) {
      console.log("Similar slugs found:", similarSlugs);
    }

    setLoading(false);
  }, [slug, navigate]);

  // Loading state
  if (loading) {
    return (
      <div className="service-page">
        <Sidebar />
        <div className="service-loading">
          <div className="loading-spinner"></div>
          <p>Loading service details...</p>
          <div className="debug-info">
            <p><strong>Debug Info:</strong></p>
            <p>Loading slug: "{slug}"</p>
            <p>ServicesContent loaded: {ServicesContent ? "YES" : "NO"}</p>
            <p>Please wait while we load the service information.</p>
          </div>
        </div>
      </div>
    );
  }

  // Service not found
  if (!service) {
    return (
      <div className="service-page">
        <Sidebar />
        <div className="service-not-found">
          <h1>Service Not Found</h1>
          <p>The service "{slug}" doesn't exist in our system.</p>
          <div className="debug-info">
            <p><strong>Debug Details:</strong></p>
            <p>Total services available: {Object.keys(ServicesContent).length}</p>
            <p>First few services:</p>
            <ul>
              {Object.keys(ServicesContent).slice(0, 5).map(key => (
                <li key={key}>{key} - {ServicesContent[key].title}</li>
              ))}
            </ul>
          </div>
          <button 
            onClick={() => navigate('/services')}
            className="back-to-services"
          >
            Back to All Services
          </button>
        </div>
      </div>
    );
  }

  // Service found - render the service page
  return (
    <div className="service-page">
      <Sidebar />
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
                console.error(`Failed to load hero image: ${service.heroImage}`);
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
                      console.error(`Failed to load about image ${index + 1}: ${item.image}`);
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
                      console.error(`Failed to load icon: ${item.icon}`);
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
                        console.error(`Failed to load process image step ${step.step}: ${step.image}`);
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
                      console.error(`Failed to load gallery image ${index + 1}: ${image.src}`);
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
              onClick={() => navigate('/services')}
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