import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "#00aced", textDecoration: "underline" }}>Go back to Home</Link>
    </div>
  );
};

export default NotFound;
