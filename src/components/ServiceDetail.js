import React from "react";

function ServiceDetails({ service }) {
  return (
    <section className="service-details">
      <h1>{service.title}</h1>
      <p className="service-desc">{service.desc}</p>
    </section>
  );
}

export default ServiceDetails;