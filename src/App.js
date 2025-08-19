import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no BrowserRouter here
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
