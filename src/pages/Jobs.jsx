import React, { useEffect } from "react";

const Jobs = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Jobs";
  }, []);

  return (
    <div className="container">
      <h2>Available Jobs & Exams</h2>
      <p>Explore a curated list of current government exams and job vacancies.</p>

      <ul>
        <li><strong>SSC CGL 2025</strong> — Last Date: 30th July 2025</li>
        <li><strong>UPSC Civil Services</strong> — Last Date: 18th August 2025</li>
        <li><strong>RRB NTPC</strong> — Last Date: 15th September 2025</li>
        <li><strong>IBPS Clerk</strong> — Last Date: 5th August 2025</li>
      </ul>
    </div>
  );
};

export default Jobs;
