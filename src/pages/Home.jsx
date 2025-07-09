import React, { useEffect } from "react";
import banner from "../assets/banner.png";

const Home = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Home";
  }, []);

  return (
    <div className="home-container">
      <img 
        src={banner} 
        alt="Banner" 
        className="home-banner"
      />
      <h2 className="home-title">
        Welcome to EduJobMatch
      </h2>
      <p className="home-subtitle">
        Check your eligibility for exams and apply directly!
      </p>
    </div>
  );
};

export default Home;
