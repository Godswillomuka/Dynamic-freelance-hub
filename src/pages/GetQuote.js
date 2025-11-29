import React, { useState, useEffect } from "react";
import "./GetQuote.css";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    company: "",
    
    // Project Details
    projectType: "",
    projectDescription: "",
    timeline: "",
    budget: "",
    
    // Service Requirements
    services: [],
    quantity: "",
    specifications: "",
    
    // Additional Requirements
    referenceFiles: null,
    specialRequirements: "",
    howFoundUs: ""
  });

  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Branding & Logo Design",
    "Business Cards & Stationery",
    "Flyers & Brochures",
    "Packaging Design",
    "Signage & Large Format Printing",
    "Vehicle Wraps & Graphics",
    "Promotional Products",
    "Web Design & Development",
    "Social Media Graphics",
    "Other"
  ];

  const projectTypes = [
    "New Business Launch",
    "Brand Refresh",
    "Marketing Campaign",
    "Event Materials",
    "Product Launch",
    "Regular Business Needs",
    "Other"
  ];

  const timelineOptions = [
    "Urgent (Within 1 week)",
    "Standard (2-3 weeks)",
    "Flexible (1 month+)",
    "Not Sure"
  ];

  const budgetRanges = [
    "Under KES 10,000",
    "KES 10,000 - 25,000",
    "KES 25,000 - 50,000",
    "KES 50,000 - 100,000",
    "KES 100,000+",
    "Need consultation first"
  ];

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem('quoteFormDraft', JSON.stringify(formData));
  }, [formData]);

  // Load draft on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('quoteFormDraft');
    if (savedDraft) {
      const draftData = JSON.parse(savedDraft);
      // Check if draft has any data
      const hasData = Object.values(draftData).some(value => 
        value !== "" && value !== null && (!Array.isArray(value) || value.length > 0)
      );
      
      if (hasData) {
        setTimeout(() => {
          if (window.confirm("We found a previously saved draft. Would you like to restore it?")) {
            setFormData(draftData);
          }
        }, 1000);
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.projectType) newErrors.projectType = "Project type is required";
    if (!formData.projectDescription.trim()) newErrors.projectDescription = "Project description is required";
    if (formData.services.length === 0) newErrors.services = "At least one service is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === "checkbox") {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          services: [...prev.services, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          services: prev.services.filter(service => service !== value)
        }));
      }
    } else if (type === "file") {
      handleFileChange(files[0]);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleFileChange = (file) => {
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setFileError("File size must be less than 10MB");
        return;
      }
      
      // Check file type
      const allowedTypes = [
        'image/jpeg', 
        'image/jpg', 
        'image/png', 
        'application/pdf', 
        'application/postscript',
        'image/vnd.adobe.photoshop'
      ];
      
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf', 'ai', 'psd', 'doc', 'docx'];
      
      if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
        setFileError("Please upload JPG, PNG, PDF, AI, or PSD files only");
        return;
      }
      
      setFileError("");
      setFormData(prev => ({
        ...prev,
        referenceFiles: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const element = document.getElementById(firstError);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Quote request submitted:", formData);
      
      // Show success message
      alert("Thank you for your quote request! We'll review your project and get back to you within 24 hours with a detailed proposal.");
      
      // Reset form and clear localStorage
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        projectDescription: "",
        timeline: "",
        budget: "",
        services: [],
        quantity: "",
        specifications: "",
        referenceFiles: null,
        specialRequirements: "",
        howFoundUs: ""
      });
      
      localStorage.removeItem('quoteFormDraft');
      setErrors({});
      setFileError("");
      
    } catch (error) {
      alert("There was an error submitting your request. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateProgress = () => {
    const requiredFields = [
      'fullName', 'email', 'phone', 'projectType', 
      'projectDescription', 'services'
    ];
    
    const filledFields = requiredFields.filter(field => {
      if (field === 'services') return formData[field].length > 0;
      return formData[field].trim() !== '';
    });
    
    return Math.round((filledFields.length / requiredFields.length) * 100);
  };

  const CharacterCounter = ({ text, maxLength }) => {
    return (
      <div className={`character-counter ${text.length > maxLength * 0.9 ? 'character-counter-warning' : ''}`}>
        {text.length}/{maxLength}
      </div>
    );
  };

  const clearDraft = () => {
    if (window.confirm("Are you sure you want to clear your current progress?")) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        projectDescription: "",
        timeline: "",
        budget: "",
        services: [],
        quantity: "",
        specifications: "",
        referenceFiles: null,
        specialRequirements: "",
        howFoundUs: ""
      });
      localStorage.removeItem('quoteFormDraft');
      setErrors({});
      setFileError("");
    }
  };

  return (
    <div className="quote-page">
      {/* HERO SECTION */}
      <section className="quote-hero">
        <div className="quote-hero-content">
          <div className="quote-hero-text">
            <h1 className="quote-hero-title">Get Your Project Quote</h1>
            <p className="quote-hero-subtitle">
              Ready to bring your creative vision to life? Fill out this detailed form and 
              we'll provide you with a comprehensive quote within 24 hours.
            </p>
            <div className="quote-benefits">
              <div className="quote-benefit">
                <span className="benefit-icon">⚡</span>
                <div>
                  <h4>24-Hour Response</h4>
                  <p>Get your detailed quote within one business day</p>
                </div>
              </div>
              <div className="quote-benefit">
                <span className="benefit-icon">💎</span>
                <div>
                  <h4>No Hidden Costs</h4>
                  <p>Transparent pricing with itemized breakdown</p>
                </div>
              </div>
              <div className="quote-benefit">
                <span className="benefit-icon">🤝</span>
                <div>
                  <h4>Free Consultation</h4>
                  <p>Expert advice included with every quote</p>
                </div>
              </div>
            </div>
          </div>
          <div className="quote-hero-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
              alt="Professional design and printing services"
            />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="quote-form-section">
        <div className="quote-section-container">
          <div className="quote-form-wrapper">
            <div className="quote-form-header">
              <h2 className="quote-section-title">Project Quote Request</h2>
              <p className="quote-section-description">
                Please provide as much detail as possible to help us understand your requirements 
                and deliver an accurate quote. All information is kept confidential.
              </p>
              
              {/* Progress Indicator */}
              <div className="form-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
                <div className="progress-info">
                  <span className="progress-text">
                    {calculateProgress()}% Complete
                  </span>
                  <button 
                    type="button" 
                    className="clear-draft-btn"
                    onClick={clearDraft}
                  >
                    Clear Form
                  </button>
                </div>
              </div>
            </div>

            <form className="quote-form" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <span className="section-number">01</span>
                  Personal Information
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className={errors.fullName ? 'error' : ''}
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company name (if applicable)"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <span className="section-number">02</span>
                  Project Details
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className={errors.projectType ? 'error' : ''}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && <span className="error-message">{errors.projectType}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Desired Timeline *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="projectDescription">Project Description *</label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Please describe your project in detail. Include your goals, target audience, and any specific requirements..."
                    rows="4"
                    maxLength={1000}
                    required
                    className={errors.projectDescription ? 'error' : ''}
                  ></textarea>
                  <CharacterCounter 
                    text={formData.projectDescription} 
                    maxLength={1000} 
                  />
                  {errors.projectDescription && <span className="error-message">{errors.projectDescription}</span>}
                </div>
              </div>

              {/* Service Requirements */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <span className="section-number">03</span>
                  Service Requirements
                </h3>
                <div className="form-group">
                  <label>Services Needed *</label>
                  {errors.services && <span className="error-message">{errors.services}</span>}
                  <div className="checkbox-grid">
                    {serviceOptions.map(service => (
                      <label key={service} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                        {service}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity (if applicable)</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 500 business cards, 1000 flyers"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specifications">Size/Dimensions</label>
                    <input
                      type="text"
                      id="specifications"
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleChange}
                      placeholder="e.g., A4, 3x6ft banner, custom size"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <span className="section-number">04</span>
                  Additional Information
                </h3>
                <div className="form-group full-width">
                  <label htmlFor="specialRequirements">Special Requirements</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Any special materials, finishes, colors, or other specific requirements..."
                    rows="3"
                    maxLength={500}
                  ></textarea>
                  <CharacterCounter 
                    text={formData.specialRequirements} 
                    maxLength={500} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="referenceFiles">Reference Files (Optional)</label>
                  <input
                    type="file"
                    id="referenceFiles"
                    name="referenceFiles"
                    onChange={handleChange}
                    accept=".jpg,.jpeg,.png,.pdf,.ai,.psd,.doc,.docx"
                    className="file-input"
                  />
                  {formData.referenceFiles && (
                    <div className="file-preview">
                      <span>Selected: {formData.referenceFiles.name}</span>
                      <button 
                        type="button" 
                        className="remove-file-btn"
                        onClick={() => setFormData(prev => ({ ...prev, referenceFiles: null }))}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  {fileError && <span className="error-message">{fileError}</span>}
                  <small>You can upload logos, images, or documents (Max 10MB)</small>
                </div>
                <div className="form-group">
                  <label htmlFor="howFoundUs">How did you hear about us?</label>
                  <select
                    id="howFoundUs"
                    name="howFoundUs"
                    value={formData.howFoundUs}
                    onChange={handleChange}
                  >
                    <option value="">Please select...</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Portfolio">Our Portfolio</option>
                    <option value="Previous Client">Previous Client</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit Section */}
              <div className="form-submit-section">
                <div className="privacy-notice">
                  <p>
                    📝 <strong>Your information is secure</strong><br />
                    We respect your privacy and will never share your information with third parties. 
                    All project details are kept confidential.
                  </p>
                </div>
                <button 
                  type="submit" 
                  className="quote-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </button>
                <p className="submit-note">
                  We'll review your request and get back to you within 24 hours with a detailed quote and project timeline.
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="quote-sidebar">
            <div className="sidebar-card">
              <h3>💡 Need Help?</h3>
              <p>Not sure about your requirements? We can help!</p>
              <div className="contact-options">
                <a href="tel:+254746808099" className="contact-option">
                  <span>📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <p>+254 746 808 099</p>
                  </div>
                </a>
                <a href="mailto:freelancehub3@gmail.com" className="contact-option">
                  <span>✉️</span>
                  <div>
                    <strong>Email Us</strong>
                    <p>freelancehub3@gmail.com</p>
                  </div>
                </a>
                <a href="/contact" className="contact-option">
                  <span>💬</span>
                  <div>
                    <strong>Live Chat</strong>
                    <p>Available 8AM-6PM</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>🎯 What's Included?</h3>
              <ul className="included-list">
                <li>✅ Detailed itemized quote</li>
                <li>✅ Project timeline</li>
                <li>✅ Material recommendations</li>
                <li>✅ Design concepts (if needed)</li>
                <li>✅ Free expert consultation</li>
                <li>✅ No obligation to proceed</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>⏱️ Our Process</h3>
              <div className="process-steps">
                <div className="process-step">
                  <span>1</span>
                  <p>Submit your quote request</p>
                </div>
                <div className="process-step">
                  <span>2</span>
                  <p>We review within 24 hours</p>
                </div>
                <div className="process-step">
                  <span>3</span>
                  <p>Receive detailed proposal</p>
                </div>
                <div className="process-step">
                  <span>4</span>
                  <p>Discuss & finalize project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="quote-cta">
        <div className="quote-section-container">
          <div className="quote-cta-content">
            <h2 className="quote-section-title">Still Have Questions?</h2>
            <p className="quote-section-description">
              Prefer to discuss your project in person? Schedule a free consultation with our experts.
            </p>
            <div className="quote-cta-actions">
              <a href="/contact" className="quote-cta-btn quote-cta-primary">
                Schedule Consultation
              </a>
              <a href="/portfolio" className="quote-cta-btn quote-cta-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}