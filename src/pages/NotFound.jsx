import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Page Not Found";
  }, []);

  return (
    <div className="container" style={{ textAlign: "center", padding: "50px 20px" }}>
      <h2 style={{ fontSize: "3rem", color: "#e74c3c" }}>404</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={{
        padding: "10px 20px",
        backgroundColor: "#2c3e50",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px"
      }}>
        Go back Home
      </Link>
    </div>
  );
};

export default NotFound;
