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
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .home-container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding: 40px 20px;
            background-color: #f4f7fc;
            min-height: 100vh;
          }

          .home-banner {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            margin-bottom: 30px;
            animation: fadeIn 1s ease-out, pulse 3s ease-in-out infinite 1s;
          }

          .home-title {
            font-size: 32px;
            color: #0078D7;
            margin-bottom: 10px;
            animation: fadeIn 0.8s ease-out;
          }

          .home-subtitle {
            font-size: 18px;
            color: #333;
            margin-bottom: 25px;
            animation: fadeIn 1s ease-out;
          }

          .features-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 40px 0;
            animation: fadeIn 1.2s ease-out;
          }

          .feature-card {
            background: white;
            border-radius: 10px;
            padding: 25px;
            width: 280px;
            margin: 15px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
          }

          .feature-icon {
            font-size: 40px;
            margin-bottom: 15px;
            color: #0078D7;
          }

          .feature-title {
            font-size: 20px;
            margin-bottom: 10px;
            color: #333;
          }

          .feature-desc {
            font-size: 14px;
            color: #666;
          }

          .cta-section {
            background: #0078D7;
            color: white;
            padding: 40px 20px;
            border-radius: 10px;
            margin: 40px auto;
            max-width: 800px;
            animation: fadeIn 1.4s ease-out;
          }

          .cta-title {
            font-size: 28px;
            margin-bottom: 15px;
          }

          .cta-button {
            background: white;
            color: #0078D7;
            border: none;
            padding: 12px 30px;
            font-size: 16px;
            border-radius: 30px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            margin-top: 15px;
          }

          .cta-button:hover {
            background: #f0f0f0;
            transform: scale(1.05);
          }

          .stats-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 40px 0;
          }

          .stat-item {
            margin: 15px;
          }

          .stat-number {
            font-size: 36px;
            font-weight: bold;
            color: #0078D7;
            margin-bottom: 5px;
          }

          .stat-label {
            font-size: 14px;
            color: #666;
          }

          @media (max-width: 768px) {
            .home-title {
              font-size: 26px;
            }
            .home-subtitle {
              font-size: 16px;
              padding: 0 10px;
            }
            
            .features-container {
              flex-direction: column;
              align-items: center;
            }
            
            .cta-section {
              padding: 30px 15px;
            }
            
            .cta-title {
              font-size: 22px;
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
        Connecting education with career opportunities seamlessly
      </p>

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3 className="feature-title">Exam Eligibility</h3>
          <p className="feature-desc">
            Quickly check your eligibility for various professional exams and certifications.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Fast Applications</h3>
          <p className="feature-desc">
            Apply directly to multiple institutions with a single profile.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3 className="feature-title">Career Matching</h3>
          <p className="feature-desc">
            Discover career paths that match your education and skills.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">10,000+</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Institutions</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">95%</div>
          <div className="stat-label">Success Rate</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2 className="cta-title">Ready to take the next step in your career?</h2>
        <p>Join thousands of successful professionals who found their path with EduJobMatch</p>
        <button className="cta-button">Get Started Now</button>
      </div>

      {/* Server Status */}
      <ServerStatus />
    </div>
  );
};

export default Home;