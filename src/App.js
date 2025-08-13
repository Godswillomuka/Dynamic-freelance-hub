import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Import global styles

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/254729489713?text=Hi%20I%20came%20from%20your%20website%2C%20can%20you%20help%20me?"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </a>
       <div className="ai-chat-float" onClick={() => alert('Open AI chat widget')}>
        <img src="/ai-icon.png" alt="AI Chat" />
      </div>
    </div>
  );
}

export default App;
