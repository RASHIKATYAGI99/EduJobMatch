import React, { useEffect, useState } from "react";
import "./Eligibility.css"; // Importing custom styles

const Eligibility = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Check Eligibility";
  }, []);

  const [education, setEducation] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await fetch(`http://localhost:5000/api/eligibility/${education}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError("Unable to fetch eligibility data.");
    } finally {
      setLoading(false);
    }
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
          required
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

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.length > 0 && (
        <div>
          <h3>Eligible Exams/Jobs:</h3>
          <div className="grid-container">
            {results.map((item, index) => (
              <div className="grid-card" key={index}>
                <h4>{item.exam}</h4>
                <p>{item.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Eligibility;