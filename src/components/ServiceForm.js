import React from "react"; 

function ServiceForm({ serviceName }) {
  return (
    <form className="form-box">
      <h3>Request a Quote – {serviceName}</h3>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Tell us about your project..." rows="4" required></textarea>
      <button type="submit" className="btn btn-primary-alt">Submit Request</button>
    </form>
  );
}

export default ServiceForm;