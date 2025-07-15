// src/pages/Jobs.jsx
import React, { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    document.title = "EduJobMatch | Latest Jobs";

    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h2>Latest Job Opportunities</h2>
      {jobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> <br />
              <span>Education: {job.education}</span><br />
              <span>Deadline: {job.deadline}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jobs;
