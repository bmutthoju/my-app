// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My React App</h1>
      <p>This is the Home page.</p>
      <Link to="/about">Go to About Page →</Link>
      <br />
      <Link to="/contact">Go to Contact Page →</Link>
    </div>
  );
};

export default Home;
