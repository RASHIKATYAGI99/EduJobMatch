import React from "react";
import banner from "../assets/banner.png"; 

const Home = () => {
  return (
    <div>
      <img src={banner} alt="Banner" style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }} />
      <h2>Welcome to EduJobMatch</h2>
      <p>Check your eligibility for exams and apply directly!</p>
    </div>
  );
};

export default Home;
