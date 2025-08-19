import React from "react";

function WhyChooseService({ benefits }) {
  return (
    <section className="why-choose-service">
      <h2>Why Choose This Service?</h2>
      <ul>
        {benefits.map((benefit, i) => (
          <li key={i}>
            <span className="check">✓</span> {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChooseService;