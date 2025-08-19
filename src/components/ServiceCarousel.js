import React, { useState } from "react";

function ServiceCarousel({ images, title }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="service-carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prev}>&#10094;</button>
      <button className="carousel-btn next" onClick={next}>&#10095;</button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ServiceCarousel;