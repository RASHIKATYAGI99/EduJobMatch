import React, { useEffect } from "react";

const Exams = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Exams";
  }, []);

  return (
    <div className="container">
      <style>
        {`
          .container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9fbfc;
            padding: 40px 30px;
            margin: 30px auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            max-width: 800px;
            color: #333;
          }

          h2 {
            font-size: 28px;
            color: #0078D7;
            margin-bottom: 15px;
            border-bottom: 2px solid #0078D7;
            display: inline-block;
            padding-bottom: 5px;
          }

          p {
            font-size: 17px;
            line-height: 1.6;
            margin-bottom: 20px;
            color: #555;
          }

          ul {
            list-style-type: disc;
            padding-left: 20px;
          }

          li {
            font-size: 16px;
            margin-bottom: 10px;
            color: #444;
          }

          strong {
            color: #000;
          }

          @media (max-width: 768px) {
            .container {
              padding: 20px;
              margin: 20px;
            }

            h2 {
              font-size: 24px;
            }

            p, li {
              font-size: 16px;
            }
          }
        `}
      </style>

      <h2>Upcoming Exams</h2>
      <p>Here are some major upcoming exams and details:</p>

      <ul>
        <li><strong>CTET 2025</strong> — Exam Date: 20th August 2025</li>
        <li><strong>SSC MTS</strong> — Exam Date: 5th September 2025</li>
        <li><strong>NEET UG</strong> — Exam Date: 10th May 2025</li>
        <li><strong>CUET</strong> — Exam Date: 25th June 2025</li>
      </ul>
    </div>
  );
};

export default Exams;