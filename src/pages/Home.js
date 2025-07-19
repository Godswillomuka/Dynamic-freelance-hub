// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom'; // Keep this import
// import './Home.css'; // Your CSS file for this component

// const Home = () => {
//   const stats = [
//     { number: '500+', label: 'Projects Completed', icon: '🎯' },
//     { number: '200+', label: 'Happy Clients', icon: '😊' },
//     { number: '5+', label: 'Years Experience', icon: '⭐' },
//     { number: '24/7', label: 'Support Available', icon: '🚀' }
//   ];

//   const services = [
//     {
//       icon: '🖨️',
//       title: 'Digital Printing',
//       description: 'High-quality digital printing for business cards, flyers, and marketing materials.',
//       image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       icon: '🎨',
//       title: 'Brand Design',
//       description: 'Complete brand identity solutions including logos and corporate materials.',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       icon: '📦',
//       title: 'Packaging',
//       description: 'Custom packaging solutions that protect and promote your products.',
//       image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400'
//     }
//   ];

//   return (
//     <React.Fragment> {/* Use React.Fragment to return multiple elements */}
//       <main> {/* Semantic HTML for main content */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Hero Section */}
//           <section className="hero">
//             <div className="hero-background">
//               <div className="hero-shapes">
//                 <div className="shape shape-1"></div>
//                 <div className="shape shape-2"></div>
//                 <div className="shape shape-3"></div>
//               </div>
//             </div>
            
//             <div className="container">
//               <div className="hero-content">
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   className="hero-badge"
//                 >
//                   🎨 Kenya's Premier Printing & Branding Hub
//                 </motion.div>
                
//                 <motion.h1
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="hero-title"
//                 >
//                   Transform Your Brand with 
//                   <span className="highlight"> Professional Printing Solutions</span>
//                 </motion.h1>
                
//                 <motion.p
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   className="hero-subtitle"
//                 >
//                   From stunning business cards to eye-catching billboards, we deliver world-class printing 
//                   and branding solutions that elevate your business presence across Kenya and East Africa.
//                 </motion.p>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.8 }}
//                   className="hero-buttons"
//                 >
//                   <Link to="/services" className="btn btn-primary">
//                     Explore Services
//                   </Link>
//                   <Link to="/contact" className="btn btn-secondary">
//                     Get Free Quote
//                   </Link>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 1 }}
//                   className="hero-stats"
//                 >
//                   {stats.map((stat, index) => (
//                     <div key={index} className="stat">
//                       <span className="stat-icon">{stat.icon}</span>
//                       <span className="stat-number">{stat.number}</span>
//                       <span className="stat-label">{stat.label}</span>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
              
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1, delay: 1.2 }}
//                 className="hero-image"
//               >
//                 <div className="hero-visual">
//                   <img 
//                     src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600" 
//                     alt="Professional Printing Services"
//                     className="hero-main-image"
//                   />
//                   <div className="floating-cards">
//                     <div className="floating-card card-1">
//                       <img src="https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Business Cards" />
//                       <span>Business Cards</span>
//                     </div>
//                     <div className="floating-card card-2">
//                       <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Banners" />
//                       <span>Large Format</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* Services Preview */}
//           <section className="services-preview">
//             <div className="container">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="section-header"
//               >
//                 <h2>Our Core Services</h2>
//                 <p>Professional printing and branding solutions for your business</p>
//               </motion.div>

//               <div className="services-grid">
//                 {services.map((service, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.2 }}
//                     viewport={{ once: true }}
//                     className="service-card"
//                     whileHover={{ y: -10 }}
//                   >
//                     <div className="service-image">
//                       <img src={service.image} alt={service.title} />
//                       <div className="service-icon">{service.icon}</div>
//                     </div>
//                     <div className="service-content">
//                       <h3>{service.title}</h3>
//                       <p>{service.description}</p>
//                       <Link to="/services" className="btn btn-outline">Learn More</Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="services-cta">
//                 <Link to="/services" className="btn btn-primary">View All Services</Link>
//               </div>
//             </div>
//           </section>

//           {/* Industries We Serve */}
//           <section className="industries-section">
//             <div className="container">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="section-header"
//               >
//                 <h2>Industries We Serve</h2>
//                 <p>Trusted by businesses across various sectors in Kenya and East Africa</p>
//               </motion.div>

//               <div className="industries-grid">
//                 {[
//                   { name: 'Healthcare', icon: '🏥', description: 'Medical forms, patient materials, signage' },
//                   { name: 'Education', icon: '🎓', description: 'Academic materials, certificates, banners' },
//                   { name: 'Retail', icon: '🛍️', description: 'Point of sale materials, packaging, labels' },
//                   { name: 'Hospitality', icon: '🏨', description: 'Menus, room materials, promotional items' },
//                   { name: 'Corporate', icon: '🏢', description: 'Business stationery, presentations, reports' },
//                   { name: 'Events', icon: '🎉', description: 'Event materials, banners, promotional items' }
//                 ].map((industry, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="industry-card"
//                     whileHover={{ y: -5 }}
//                   >
//                     <div className="industry-icon">{industry.icon}</div>
//                     <h3>{industry.name}</h3>
//                     <p>{industry.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Process Section */}
//           <section className="process-section">
//             <div className="container">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="section-header"
//               >
//                 <h2>Our Proven Process</h2>
//                 <p>From concept to delivery, we ensure quality at every step</p>
//               </motion.div>

//               <div className="process-steps">
//                 {[
//                   { step: '01', title: 'Consultation', description: 'We understand your needs and provide expert recommendations' },
//                   { step: '02', title: 'Design & Proof', description: 'Our team creates designs and provides proofs for approval' },
//                   { step: '03', title: 'Production', description: 'State-of-the-art equipment brings your vision to life' },
//                   { step: '04', title: 'Quality Check', description: 'Rigorous quality control ensures perfect results' },
//                   { step: '05', title: 'Delivery', description: 'On-time delivery to your specified location' }
//                 ].map((process, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.2 }}
//                     viewport={{ once: true }}
//                     className="process-step"
//                   >
//                     <div className="step-number">{process.step}</div>
//                     <div className="step-content">
//                       <h3>{process.title}</h3>
//                       <p>{process.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Why Choose Us */}
//           <section className="why-choose-us">
//             <div className="container">
//               <div className="why-choose-content">
//                 <motion.div
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                   className="why-choose-text"
//                 >
//                   <h2>Why Choose Dynamic Freelance Hub?</h2>
//                   <p>We combine cutting-edge technology with creative expertise to deliver exceptional results.</p>
                  
//                   <div className="features-list">
//                     <div className="feature">
//                       <div className="feature-icon">⚡</div>
//                       <div>
//                         <h4>Fast Turnaround</h4>
//                         <p>Quick delivery without compromising quality</p>
//                       </div>
//                     </div>
//                     <div className="feature">
//                       <div className="feature-icon">🎯</div>
//                       <div>
//                         <h4>Premium Quality</h4>
//                         <p>State-of-the-art equipment and materials</p>
//                       </div>
//                     </div>
//                     <div className="feature">
//                       <div className="feature-icon">💡</div>
//                       <div>
//                         <h4>Creative Solutions</h4>
//                         <p>Innovative designs that make you stand out</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="why-choose-image"
//                 >
//                   <img 
//                     src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600" 
//                     alt="Our Modern Facility" 
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </section>
//         </motion.div>
//       </main>
//     </React.Fragment>
//   );
// };

// export default Home;
