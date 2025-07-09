import React, { useEffect, useState } from "react";

const eligibilityData = {
  "10th": [
    { exam: "NDA", criteria: "Age 16.5–19.5 years, 10th pass" },
    { exam: "Railway Group D", criteria: "10th pass or ITI" }
  ],
  "12th": [
    { exam: "SSC CHSL", criteria: "12th pass with basic computer knowledge" },
    { exam: "Indian Navy AA/SSR", criteria: "12th pass with 60% in PCM" }
  ],
  "Graduation": [
    { exam: "IBPS PO", criteria: "Graduate in any discipline" },
    { exam: "GATE", criteria: "Engineering graduate" }
  ],
  "Post-Graduation": [
    { exam: "UGC NET", criteria: "Post-graduation with 55%+" },
    { exam: "Research Fellowships", criteria: "Master's with relevant subject" }
  ]
};

const Eligibility = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Check Eligibility";
  }, []);

  const [education, setEducation] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedData = eligibilityData[education] || [];
    setResults(selectedData);
  };

  return (
    <div className="container">
      <h2>Check Your Eligibility</h2>
      <p>
        Select your education level and we’ll show you the exams or jobs you’re eligible for.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="education">Education Level:</label>
        <select
          id="education"
          name="education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="Graduation">Graduation</option>
          <option value="Post-Graduation">Post-Graduation</option>
        </select>

        <br />
        <button type="submit">Check Eligibility</button>
      </form>

      {results.length > 0 && (
        <div>
          <h3>Eligible Exams/Jobs:</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                <strong>{item.exam}:</strong> {item.criteria}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Eligibility;
