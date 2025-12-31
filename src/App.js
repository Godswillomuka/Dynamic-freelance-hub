import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import './styles/Variables.css';

function App() {
  // debug: confirm App is rendering and show current path/env
  console.debug("App render", { pathname: window.location.pathname, NODE_ENV: process.env.NODE_ENV });

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:slug" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
