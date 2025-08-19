import React from "react";

function Sidebar({ services, selectedId, onSelect }) {
  return (
    <nav className="service-sidebar">
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <button
              className={selectedId === service.id ? "active" : ""}
              onClick={() => onSelect(service.id)}
            >
              {service.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;