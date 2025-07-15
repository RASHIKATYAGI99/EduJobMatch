import React, { useEffect } from "react";

const Exams = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Exams";
  }, []);

  return (
    <div className="container">
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
