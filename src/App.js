import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Services from "./pages/Service"; 
import Products from "./pages/Product";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✅ Updated route to support nested routes inside ServicesPage */}
        <Route path="/services/*" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </>
  );
}

export default App;
