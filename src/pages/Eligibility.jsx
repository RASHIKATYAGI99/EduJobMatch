import React, { useEffect } from "react";

const Eligibility = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Check Eligibility";
  }, []);

  return (
    <div className="container">
      <h2>Check Your Eligibility</h2>
      <p>
        Select your education level and we’ll show you the exams or jobs you’re eligible for.
      </p>

      <form>
        <label htmlFor="education">Education Level:</label>
        <select id="education" name="education">
          <option value="">--Select--</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="graduation">Graduation</option>
          <option value="post-graduation">Post-Graduation</option>
        </select>

        {/* Later we'll add logic here */}
      </form>
    </div>
  );
};

export default Eligibility;
