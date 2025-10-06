// src/components/Contact.js
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contact Page</h1>
      <p>This route was lazy-loaded by Webpack!</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default Contact;
