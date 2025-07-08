import React from "react";
import banner from "../assets/banner.png"; 

const Home = () => {
  return (
    <div>
      <img src={banner} alt="Banner" style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }} />
      <h2 className="text-3xl font-bold text-center text-blue-600 mt-4">
  Welcome to EduJobMatch
</h2>

      <p className="text-lg text-gray-700 text-center mt-2">
  Check your eligibility for exams and apply directly!
</p>

    </div>
  );
};

export default Home;
