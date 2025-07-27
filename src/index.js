import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this
import App from "./App";
import "./index.css"; // if you use global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> {/* ✅ Wrap App with Router */}
    <App />
  </BrowserRouter>
);
