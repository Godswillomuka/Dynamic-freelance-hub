import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION - Match home page structure */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">Crafting Brands That Make an Impact</h1>
            <p className="about-hero-subtitle">
              At Dynamic Freelance Hub, we're more than just a design and print agency - we're your strategic partners in building memorable brands that drive real business results. With over 8 years of expertise, we've helped hundreds of businesses transform their visual identity and amplify their market presence.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Industry Awards</p>
              </div>
            </div>
          </div>
          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Our creative team collaborating in modern workspace"
            />
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-company-story">
        <div className="about-section-container">
          <h2 className="about-section-title">Our Journey of Creative Excellence</h2>
          <div className="about-story-content">
            <p className="about-section-description">
              Founded in 2016 by a team of passionate designers and marketing experts, Dynamic Freelance Hub began as a small studio with a big vision: to bridge the gap between exceptional design and practical business results. What started as a three-person operation working from a shared coworking space has evolved into a full-service creative powerhouse serving clients across multiple industries.
            </p>
            
            <div className="about-milestones">
              <div className="milestone">
                <div className="milestone-year">2016</div>
                <div className="milestone-content">
                  <h4>Humble Beginnings</h4>
                  <p>Started with just 3 team members, focusing on logo design and business cards for local businesses in Nairobi.</p>
                </div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2018</div>
                <div className="milestone-content">
                  <h4>Expanding Horizons</h4>
                  <p>Expanded our services to include full branding packages and launched our first large-scale corporate client project.</p>
                </div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2020</div>
                <div className="milestone-content">
                  <h4>Digital Transformation</h4>
                  <p>Integrated digital marketing services and web development to offer comprehensive brand solutions in the digital age.</p>
                </div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2024</div>
                <div className="milestone-content">
                  <h4>Industry Leadership</h4>
                  <p>Recognized as one of East Africa's leading creative agencies with a team of 25+ experts and international clients.</p>
                </div>
              </div>
            </div>

            <p className="about-section-description">
              Today, we operate from our state-of-the-art studio equipped with cutting-edge printing technology and design tools. Our commitment to quality and innovation has earned us recognition in the industry, but our true success lies in the growth and satisfaction of our clients.
            </p>
          </div>

          <div className="about-story-images">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Our modern creative workspace with team collaboration" />
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Team brainstorming session in our design studio" />
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80" alt="High-quality printing equipment in our production facility" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-mission-vision">
        <div className="about-section-container">
          <div className="about-mission-vision-grid">
            <div className="about-mission">
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-section-description">
                To empower businesses of all sizes with transformative design and printing solutions that elevate their brand presence, drive growth, and create lasting impressions. We believe that every brand has a unique story to tell, and we're committed to bringing those stories to life through innovative design, strategic thinking, and impeccable execution.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <span className="point-icon">🎯</span>
                  <span>Deliver exceptional quality in every project</span>
                </div>
                <div className="mission-point">
                  <span className="point-icon">💡</span>
                  <span>Foster creativity and innovation</span>
                </div>
                <div className="mission-point">
                  <span className="point-icon">🤝</span>
                  <span>Build lasting client partnerships</span>
                </div>
                <div className="mission-point">
                  <span className="point-icon">🌱</span>
                  <span>Drive sustainable business growth</span>
                </div>
              </div>
            </div>
            <div className="about-vision">
              <h2 className="about-section-title">Our Vision</h2>
              <p className="about-section-description">
                To be the leading creative partner for businesses across Africa, recognized for our ability to transform brands through cutting-edge design, strategic marketing, and superior printing solutions. We envision a future where African businesses compete globally with world-class branding that reflects their unique identity and potential.
              </p>
              <div className="vision-goals">
                <h4>Our 2025 Goals:</h4>
                <ul>
                  <li>Expand our services to 5 new African countries</li>
                  <li>Launch our sustainable printing initiative</li>
                  <li>Develop our proprietary brand strategy framework</li>
                  <li>Mentor 100+ young African designers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-values">
        <div className="about-section-container">
          <h2 className="about-section-title">Our Core Values</h2>
          <p className="about-section-description">
            These principles guide everything we do and define how we work with our clients and each other.
          </p>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="value-icon">✨</div>
              <h3>Excellence</h3>
              <p>We never settle for mediocre. Every project receives our full attention to detail and commitment to the highest standards of quality.</p>
            </div>
            <div className="about-value-card">
              <div className="value-icon">💫</div>
              <h3>Innovation</h3>
              <p>We stay ahead of industry trends and continuously explore new technologies and creative approaches to solve client challenges.</p>
            </div>
            <div className="about-value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe the best results come from true partnership. We work closely with clients, listening and adapting to their needs.</p>
            </div>
            <div className="about-value-card">
              <div className="value-icon">⚡</div>
              <h3>Efficiency</h3>
              <p>We respect deadlines and budgets while maintaining quality. Our streamlined processes ensure timely delivery without compromise.</p>
            </div>
            <div className="about-value-card">
              <div className="value-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>We're committed to environmentally responsible practices, from eco-friendly printing materials to digital solutions that reduce waste.</p>
            </div>
            <div className="about-value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>We genuinely love what we do. Our enthusiasm for design and branding shines through in every project we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team-section">
        <div className="about-section-container">
          <h2 className="about-section-title">Meet Our Creative Family</h2>
          <p className="about-section-description">
            Our diverse team of designers, strategists, and printing experts brings together decades of combined experience across various industries. We're united by our passion for creativity and our commitment to delivering exceptional results.
          </p>
          <div className="about-team-grid">
            <div className="about-team-member">
              <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80" alt="Sarah Chen - Creative Director" />
              <h4>Sarah Chen</h4>
              <p className="role">Creative Director</p>
              <p className="bio">With 12 years in brand strategy, Sarah leads our creative vision and ensures every project aligns with client objectives.</p>
              <div className="expertise">
                <span>Brand Strategy</span>
                <span>Art Direction</span>
                <span>Client Relations</span>
              </div>
            </div>
            <div className="about-team-member">
              <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=300&q=80" alt="Marcus Johnson - Lead Designer" />
              <h4>Marcus Johnson</h4>
              <p className="role">Lead Designer</p>
              <p className="bio">Marcus specializes in visual identity systems and has won multiple awards for his innovative design solutions.</p>
              <div className="expertise">
                <span>Logo Design</span>
                <span>Typography</span>
                <span>UI/UX</span>
              </div>
            </div>
            <div className="about-team-member">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80" alt="Amina Patel - Project Manager" />
              <h4>Amina Patel</h4>
              <p className="role">Project Manager</p>
              <p className="bio">Amina ensures seamless project execution and maintains our 98% on-time delivery record across all client projects.</p>
              <div className="expertise">
                <span>Project Planning</span>
                <span>Quality Control</span>
                <span>Team Coordination</span>
              </div>
            </div>
            <div className="about-team-member">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" alt="David Kim - Print Production Head" />
              <h4>David Kim</h4>
              <p className="role">Print Production Head</p>
              <p className="bio">David oversees our printing operations with 15 years of experience in both digital and offset printing technologies.</p>
              <div className="expertise">
                <span>Color Management</span>
                <span>Print Technology</span>
                <span>Quality Assurance</span>
              </div>
            </div>
          </div>

        
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="about-process">
        <div className="about-section-container">
          <h2 className="about-section-title">Our Creative Process</h2>
          <p className="about-section-description">
            We follow a structured yet flexible approach to ensure every project achieves its objectives while allowing for creative exploration.
          </p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery & Strategy</h3>
              <p>We dive deep into your business, audience, and goals to develop a comprehensive understanding and strategic direction.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Concept & Design</h3>
              <p>Our creative team develops concepts and designs that align with your strategy and resonate with your target audience.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Refinement & Feedback</h3>
              <p>We collaborate closely with you, incorporating feedback and refining designs until they perfectly capture your vision.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Production & Delivery</h3>
              <p>Our production team executes the final designs with precision, ensuring quality across all deliverables and platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-section-container">
          <h2 className="about-section-title">Ready to Transform Your Brand?</h2>
          <p className="about-section-description">
            Whether you're launching a new business, refreshing your brand, or need consistent marketing materials, we have the expertise and passion to bring your vision to life. Let's create something remarkable together.
          </p>
          <div className="about-cta-buttons">
            <a href="/contact" className="home-btn home-btn-primary-alt">Start Your Project</a>
            <a href="/portfolio" className="home-btn home-btn-secondary-alt">View Our Work</a>
          </div>
          <div className="about-cta-info">
            <p>📞 <strong>Schedule a consultation:</strong> Get expert advice tailored to your specific needs</p>
            <p>💼 <strong>Project estimate:</strong> Receive a detailed quote within 24 hours</p>
            <p>🎯 <strong>Strategy session:</strong> Let's map out your brand's journey to success</p>
          </div>
        </div>
      </section>
    </div>
  );
}