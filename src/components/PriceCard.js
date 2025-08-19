
import React from "react";

function PriceCard({ service, quantity, getPrice }) {
  return (
    <div className="price-card">
      <h3>Estimate: <span className="price">${getPrice()}</span></h3>
      <p>
        <strong>Service:</strong> {service.title}<br />
        {service.id !== "branding" && <><strong>Quantity:</strong> {quantity}<br /></>}
      </p>
      <p className="disclaimer">*Final price may vary based on materials and design complexity.</p>
    </div>
  );
}


export default PriceCard;