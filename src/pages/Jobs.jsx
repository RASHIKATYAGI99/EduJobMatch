// src/pages/Jobs.jsx

import React, { useEffect } from "react";

const Jobs = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Jobs";
  }, []);

  const jobs = [
    {
      title: "Junior Engineer - Indian Railways",
      eligibility: "Diploma/B.Tech in relevant stream",
      location: "Pan India",
      lastDate: "August 15, 2025",
    },
    {
      title: "Bank Clerk - IBPS",
      eligibility: "Graduate in any discipline",
      location: "All India",
      lastDate: "September 5, 2025",
    },
    {
      title: "Research Assistant - DRDO",
      eligibility: "M.Sc or M.Tech",
      location: "Delhi",
      lastDate: "August 25, 2025",
    },
    {
      title: "Customer Support Executive - Infosys",
      eligibility: "12th pass / Any graduate",
      location: "Remote",
      lastDate: "Rolling Basis",
    },
  ];

  return (
    <div className="container">
      <h2>Latest Job Openings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> <br />
            Eligibility: {job.eligibility} <br />
            Location: {job.location} <br />
            Last Date to Apply: {job.lastDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
