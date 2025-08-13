import { motion } from "framer-motion";
import './TrustedBrands.css';

// Row 1 logos
const brandsRow1 = [
  "https://via.placeholder.com/120x60?text=Google",
  "https://via.placeholder.com/120x60?text=Microsoft",
  "https://via.placeholder.com/120x60?text=Apple",
  "https://via.placeholder.com/120x60?text=Amazon",
  "https://via.placeholder.com/120x60?text=Facebook",
  "https://via.placeholder.com/120x60?text=Netflix",
  "https://via.placeholder.com/120x60?text=Tesla",
  "https://via.placeholder.com/120x60?text=Adobe",
  "https://via.placeholder.com/120x60?text=Intel",
  "https://via.placeholder.com/120x60?text=Nvidia"
];

// Row 2 logos
const brandsRow2 = [
  "https://via.placeholder.com/120x60?text=Airbnb",
  "https://via.placeholder.com/120x60?text=Uber",
  "https://via.placeholder.com/120x60?text=Spotify",
  "https://via.placeholder.com/120x60?text=PayPal",
  "https://via.placeholder.com/120x60?text=Slack",
  "https://via.placeholder.com/120x60?text=Dropbox",
  "https://via.placeholder.com/120x60?text=Shopify",
  "https://via.placeholder.com/120x60?text=Snapchat",
  "https://via.placeholder.com/120x60?text=Twitter",
  "https://via.placeholder.com/120x60?text=LinkedIn"
];

// Row 3 logos
const brandsRow3 = [
  "https://via.placeholder.com/120x60?text=Intel",
  "https://via.placeholder.com/120x60?text=AMD",
  "https://via.placeholder.com/120x60?text=Oracle",
  "https://via.placeholder.com/120x60?text=IBM",
  "https://via.placeholder.com/120x60?text=Cisco",
  "https://via.placeholder.com/120x60?text=Samsung",
  "https://via.placeholder.com/120x60?text=Sony",
  "https://via.placeholder.com/120x60?text=LG",
  "https://via.placeholder.com/120x60?text=Panasonic",
  "https://via.placeholder.com/120x60?text=Huawei"
];

export default function TrustedBrands() {
  return (
    <section className="trusted-brands">
      <h2 className="section-title">Our Trusted Brands</h2>

      {/* Row 1 - scroll left */}
      <div className="brand-row">
        <motion.div
          className="brand-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...brandsRow1, ...brandsRow1].map((src, i) => (
            <img src={src} alt={`Brand ${i}`} key={`r1-${i}`} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="brand-row">
        <motion.div
          className="brand-track"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...brandsRow2, ...brandsRow2].map((src, i) => (
            <img src={src} alt={`Brand ${i}`} key={`r2-${i}`} />
          ))}
        </motion.div>
      </div>

      {/* Row 3 - scroll left */}
      <div className="brand-row">
        <motion.div
          className="brand-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {[...brandsRow3, ...brandsRow3].map((src, i) => (
            <img src={src} alt={`Brand ${i}`} key={`r3-${i}`} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
