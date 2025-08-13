import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />

      {/* WhatsApp floating button */}
      <div className="floating-button whatsapp-button">
        <a
          href="https://wa.me/254729489713?text=Hi%20there!%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Can%20you%20assist%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" />
        </a>
        <div className="floating-card-tooltip">
          Have questions? <br /> Chat with us
        </div>
      </div>
    </div>
  );
}

export default App;
