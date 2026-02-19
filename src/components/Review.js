import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award, ThumbsUp, Share2, Copy, Check } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [shareStatus, setShareStatus] = useState('');

  const reviews = [
  {
    id: 1,
    name: 'Brian Mwangi',
    company: 'BluePeak Technologies',
    role: 'Marketing Manager',
    rating: 5,
    text: 'Dynamic Freelance Hub created a strong logo and brand identity that made our business look more professional and trustworthy.',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg', // African male
    service: 'Creative Graphic Design',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Kevin Otieno',
    company: 'SwiftHaul Logistics',
    role: 'Operations Manager',
    rating: 5,
    text: 'Our vehicle fleet branding was excellent. Our vans now promote our business and attract customers everywhere.',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg', // African male
    service: 'Vehicle & Fleet Branding',
    date: '2024-02-03'
  },
  {
    id: 3,
    name: 'Faith Wanjiku',
    company: 'Urban Threads Apparel',
    role: 'Owner',
    rating: 5,
    text: 'The branded apparel quality was outstanding. Our customers love the designs and our brand visibility increased.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', // African female
    service: 'Custom Merchandise & Apparel',
    date: '2024-01-28'
  },
  {
    id: 4,
    name: 'Samuel Kariuki',
    company: 'Kariuki Consulting Group',
    role: 'Director',
    rating: 5,
    text: 'Professional business cards and stationery improved our image and helped us win client confidence quickly.',
    image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg', // African male
    service: 'Business Identity & Stationery',
    date: '2024-02-10'
  },
  {
    id: 5,
    name: 'Mercy Njeri',
    company: 'GreenLeaf Organics',
    role: 'Founder',
    rating: 5,
    text: 'The signage and shop branding made our store stand out and attract more walk-in customers.',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg', // African female
    service: 'Signage & Large Format Displays',
    date: '2024-01-20'
  },
  {
    id: 6,
    name: 'Dennis Mutua',
    company: 'PureGlow Cosmetics',
    role: 'Product Manager',
    rating: 5,
    text: 'Our product packaging now looks premium and professional. Customers immediately notice the difference.',
    image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg', // African male
    service: 'Product Packaging & Labels',
    date: '2024-02-05'
  },
  {
    id: 7,
    name: 'Esther Achieng',
    company: 'Premier Events Co.',
    role: 'Event Planner',
    rating: 5,
    text: 'The brochures and posters were high quality and helped us promote events successfully.',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg', // African female
    service: 'Marketing & Promotional Print',
    date: '2024-02-12'
  },
  {
    id: 8,
    name: 'Joseph Kiptoo',
    company: 'SummitCore Holdings',
    role: 'CEO',
    rating: 5,
    text: 'Their corporate branding services transformed our company image and professionalism completely.',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg', // African male
    service: 'Corporate Branding & Strategy',
    date: '2024-02-01'
  },
  {
    id: 9,
    name: 'Aisha Mohammed',
    company: 'Savanna Style Boutique',
    role: 'Owner',
    rating: 5,
    text: 'Our website looks modern and professional. Customers can easily find and contact us online.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg', // African female
    service: 'Web Design & Software Engineering',
    date: '2024-02-14'
  }
];


  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: ThumbsUp, value: '99%', label: 'Satisfaction Rate' }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrevReview = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handleReviewSelect = (index) => {
    setIsAutoPlaying(false);
    setCurrentReview(index);
  };

  const handleShareReview = async (review) => {
    const shareText = `"${review.text}" - ${review.name}, ${review.role} at ${review.company}`;
    const shareUrl = window.location.href;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Dynamic Freelance Hub Client Review',
          text: shareText,
          url: shareUrl,
        });
        setShareStatus('shared');
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(`${shareText}\n\nRead more reviews at: ${shareUrl}`);
        setShareStatus('copied');
      }
      
      // Reset status after 2 seconds
      setTimeout(() => setShareStatus(''), 2000);
    } catch (error) {
      console.log('Sharing failed:', error);
      setShareStatus('error');
      setTimeout(() => setShareStatus(''), 2000);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`review-star ${i < rating ? 'filled' : ''}`}
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="reviews__header"
        > 
          <h2 className="reviews__title">
            What Our <span className="reviews__title-highlight">Clients Say</span>
          </h2>
          
          <p className="reviews__description">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Dynamic Freelance Hub.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reviews__stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="reviews__stat"
            >
              <div className="reviews__stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="reviews__stat-value">{stat.value}</div>
              <div className="reviews__stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Review Display */}
        <div className="reviews__main">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevReview}
            className="reviews__nav reviews__nav--prev"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="reviews__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="reviews__card"
              >
                <div className="reviews__quote-icon">
                  <Quote size={32} />
                </div>
                
                <div className="reviews__rating">
                  {renderStars(reviews[currentReview]?.rating || 5)}
                </div>
                
                <blockquote className="reviews__text">
                  "{reviews[currentReview]?.text}"
                </blockquote>
                
                <div className="reviews__author">
                  <div className="reviews__author-image">
                    <img 
                      src={reviews[currentReview]?.image} 
                      alt={reviews[currentReview]?.name}
                    />
                  </div>
                  <div className="reviews__author-info">
                    <div className="reviews__author-name">
                      {reviews[currentReview]?.name}
                    </div>
                    <div className="reviews__author-role">
                      {reviews[currentReview]?.role}
                    </div>
                    <div className="reviews__author-company">
                      {reviews[currentReview]?.company}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleShareReview(reviews[currentReview])}
                    className={`reviews__share-btn ${shareStatus ? `reviews__share-btn--${shareStatus}` : ''}`}
                    title="Share this review"
                  >
                    <AnimatePresence mode="wait">
                      {shareStatus === 'copied' || shareStatus === 'shared' ? (
                        <motion.div
                          key="success"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check size={20} />
                        </motion.div>
                      ) : shareStatus === 'error' ? (
                        <motion.div
                          key="error"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Share2 size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
                
                <div className="reviews__service">
                  <span>Service: {reviews[currentReview]?.service}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextReview}
            className="reviews__nav reviews__nav--next"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Review Indicators */}
        <div className="reviews__indicators">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleReviewSelect(index)}
              className={`reviews__indicator ${
                index === currentReview ? 'active' : ''
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="reviews__controls">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`reviews__autoplay ${isAutoPlaying ? 'active' : ''}`}
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;