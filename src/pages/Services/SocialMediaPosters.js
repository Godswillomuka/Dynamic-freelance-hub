import React from "react";
import "./SocialMediaPosters.css";

export default function SocialMediaPosters() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Social Media Poster Design</h1>
          <p>
            Capture attention and boost engagement with visually stunning social media posters. 
            Our designs communicate your brand message effectively, helping you stand out across platforms.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
        <div className="hero-images">
          <img src="https://images.unsplash.com/photo-1605902711622-cfb43c443bc7?auto=format&fit=crop&w=800&q=80" alt="Social Media Posters" />
          <img src="https://images.unsplash.com/photo-1590608897129-79e54ae3129d?auto=format&fit=crop&w=800&q=80" alt="Marketing Design" />
        </div>
      </section>

      {/* WHY SOCIAL MEDIA POSTERS */}
      <section className="why-section">
        <h2>Why Social Media Posters Are Important</h2>
        <p>
          Social media posters are your brand’s visual voice online. They engage audiences, drive traffic, and boost brand awareness. 
          Consistent, creative visuals help your business leave a lasting impression on your followers.
        </p>
        <p>
          We combine trendy designs, clear messaging, and brand alignment to craft posters that convert viewers into loyal customers.
        </p>
        <div className="why-images">
          <img src="https://images.unsplash.com/photo-1581091870622-34f0f8468f1d?auto=format&fit=crop&w=800&q=80" alt="Social Media Content" />
          <img src="https://images.unsplash.com/photo-1601597118393-c8e9d219ad8a?auto=format&fit=crop&w=800&q=80" alt="Creative Designs" />
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" alt="Branding Visuals" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <h2>Benefits of Professionally Designed Posters</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>✅ Boost Engagement</h3>
            <p>Visually appealing content increases likes, shares, and comments on social media.</p>
          </div>
          <div className="benefit">
            <h3>✅ Brand Consistency</h3>
            <p>Maintain consistent visuals across platforms, reinforcing your brand identity.</p>
          </div>
          <div className="benefit">
            <h3>✅ Increase Reach</h3>
            <p>Eye-catching posters attract attention and expand your audience online.</p>
          </div>
          <div className="benefit">
            <h3>✅ Marketing Support</h3>
            <p>Posters complement campaigns, promotions, and social media strategies effectively.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Our Design Process</h2>
        <div className="process-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Consultation</h3>
            <p>Understand your goals, target audience, and desired social media platform style.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Content Strategy</h3>
            <p>We plan messaging, call-to-actions, and design layout for maximum engagement.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Visual Design</h3>
            <p>Our team creates visually compelling posters aligned with your brand colors and fonts.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Review & Revision</h3>
            <p>We share drafts and adjust designs based on your feedback.</p>
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <h3>Final Delivery</h3>
            <p>Receive high-quality posters optimized for all social media platforms.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Our Poster Portfolio</h2>
        <p>Check out a variety of posters we have designed for clients across industries.</p>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&w=800&q=80" alt="Poster Example 1" />
          <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&w=800&q=80" alt="Poster Example 2" />
          <img src="https://images.unsplash.com/photo-1554774853-64c98b180d1e?auto=format&w=800&q=80" alt="Poster Example 3" />
          <img src="https://images.unsplash.com/photo-1564869732886-2ad6c3d1e18f?auto=format&w=800&q=80" alt="Poster Example 4" />
          <img src="https://images.unsplash.com/photo-1598300058345-ff7480b80b43?auto=format&w=800&q=80" alt="Poster Example 5" />
          <img src="https://images.unsplash.com/photo-1581092795361-f8f8f5b79d8f?auto=format&w=800&q=80" alt="Poster Example 6" />
          <img src="https://images.unsplash.com/photo-1601597118393-5ebd12b2c52c?auto=format&w=800&q=80" alt="Poster Example 7" />
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=800&q=80" alt="Poster Example 8" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Boost Your Social Media Presence?</h2>
        <p>Get custom-designed posters that grab attention and convert viewers into customers.</p>
        <button className="btn-primary">Get Started</button>
      </section>
    </div>
  );
}
