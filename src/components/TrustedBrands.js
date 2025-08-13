import { motion } from "framer-motion";
import './TrustedBrands.css';

const brandsRow1 = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Safaricom_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Airtel_logo.svg", name: "Airtel", color: "#E41E26" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Toptal_logo.svg", name: "Toptal", color: "#00AEEF" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Netflix_2015_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Apple_logo_black.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/EY_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Little_Cab_logo.svg", name: "Little Cab", color: "#FF6F00" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kenya_Airways_logo.svg", name: null },
];

const brandsRow2 = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Absa_Group_Limited_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Optica_logo.svg", name: "Optica", color: "#0072C6" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Deloitte_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/NCBA_Bank_Logo.svg", name: "NCBA Bank", color: "#FF6F00" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Britam_logo.svg", name: "Britam", color: "#007A33" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/1/1f/BDO_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Prime_Bank_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Britam_logo.svg", name: "Britam", color: "#007A33" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Airtel_logo.svg", name: "Airtel", color: "#E41E26" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Safaricom_logo.svg", name: null },
];

const brandsRow3 = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/EY_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Little_Cab_logo.svg", name: "Little Cab", color: "#FF6F00" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kenya_Airways_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Absa_Group_Limited_logo.svg", name: null },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Optica_logo.svg", name: "Optica", color: "#0072C6" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Toptal_logo.svg", name: "Toptal", color: "#00AEEF" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/NCBA_Bank_Logo.svg", name: "NCBA Bank", color: "#FF6F00" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Deloitte_logo.svg", name: null },
];

export default function TrustedBrands() {
  const rows = [brandsRow1, brandsRow2, brandsRow3];

  return (
    <section className="trusted-brands">
      <h2 className="section-title">Our Trusted Brands</h2>

      {rows.map((row, rowIndex) => (
        <div className="brand-row" key={rowIndex}>
          <motion.div
            className="brand-track"
            animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 20 + rowIndex * 2, ease: "linear" }}
          >
            {[...row, ...row].map((brand, i) => (
              <div className="brand-item" key={i}>
                <img src={brand.src} alt={brand.name || `Brand ${i}`} />
                {brand.name && <p style={{ color: brand.color }}>{brand.name}</p>}
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
