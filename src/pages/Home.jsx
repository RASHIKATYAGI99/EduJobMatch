import React, { useEffect } from "react";
import banner from "../assets/banner.png";
import ServerStatus from "../components/ServerStatus";

const Home = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Home";
  }, []);

  return (
    <div className="home-container">
      <style>
        {`
          .home-container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding: 40px 20px;
            background-color: #f4f7fc;
          }

          .home-banner {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            margin-bottom: 30px;
          }

          .home-title {
            font-size: 32px;
            color: #0078D7;
            margin-bottom: 10px;
          }

          .home-subtitle {
            font-size: 18px;
            color: #333;
            margin-bottom: 25px;
          }

          @media (max-width: 768px) {
            .home-title {
              font-size: 26px;
            }
            .home-subtitle {
              font-size: 16px;
              padding: 0 10px;
            }
          }
        `}
      </style>

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

      {/* ✅ Show server status */}
      <ServerStatus />
    </div>
  );
};

export default Home;