import React, { useEffect, useState } from "react";

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
    if (!education) return;

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await fetch(`http://localhost:5000/api/eligibility/${education}`);
      if (!res.ok) throw new Error("Failed to fetch eligibility data");
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError("Error fetching data. Please try again later.");
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
