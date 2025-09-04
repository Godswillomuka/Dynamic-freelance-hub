import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no BrowserRouter here
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";




function App() {
  return (
    <>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
