// src/components/About.js
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>About Page</h1>
      <p>This route was lazy-loaded by Webpack!</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default About;
