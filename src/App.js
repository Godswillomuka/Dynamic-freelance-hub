import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Services from "./pages/Service"; 
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✅ Updated route to support nested routes inside ServicesPage */}
        <Route path="/services/*" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-quote" element={<GetQuote />} />
      </Routes>
      
    </>
  );
}

export default App;
