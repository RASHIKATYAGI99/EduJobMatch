import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "EduJobMatch | About";
  }, []);

  return (
    <div className="container">
      <style>
        {`
          .container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f9fa;
            padding: 40px 30px;
            margin: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            color: #333;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          h2 {
            font-size: 28px;
            margin-bottom: 20px;
            color: #0078D7;
            border-bottom: 2px solid #0078D7;
            display: inline-block;
            padding-bottom: 5px;
          }

          p {
            font-size: 17px;
            line-height: 1.6;
            margin-bottom: 15px;
          }

          @media (max-width: 768px) {
            .container {
              padding: 20px;
              margin: 20px;
            }

            h2 {
              font-size: 24px;
            }

            p {
              font-size: 16px;
            }
          }
        `}
      </style>

      <h2>About EduJobMatch</h2>
      <p>
        EduJobMatch is a platform that helps students of all education levels—
        10th, 12th, graduation, and post-graduation—to check eligibility for
        various exams and job opportunities.
      </p>
      <p>
        We aim to simplify your journey toward a better career by bringing the
        latest exam criteria and application details all in one place.
      </p>
    </div>
  );
};

export default About;