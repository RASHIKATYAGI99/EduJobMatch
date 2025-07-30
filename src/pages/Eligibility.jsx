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
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data based on education level
      const mockData = {
        "10th": [
          { exam: "SSC CHSL", criteria: "10th pass with minimum 45% marks" },
          { exam: "Indian Army Soldier", criteria: "10th pass with age 17.5-21 years" }
        ],
        "12th": [
          { exam: "NDA", criteria: "12th pass with Physics and Mathematics" },
          { exam: "Bank Clerk", criteria: "12th pass with minimum 50% marks" }
        ],
        "Graduation": [
          { exam: "UPSC Civil Services", criteria: "Graduate in any discipline" },
          { exam: "SBI PO", criteria: "Graduate with minimum 60% marks" }
        ],
        "Post-Graduation": [
          { exam: "UGC NET", criteria: "Post Graduate with minimum 55% marks" },
          { exam: "College Professor", criteria: "Post Graduate with NET qualification" }
        ]
      };

      setResults(mockData[education] || []);
    } catch (err) {
      setError("Unable to fetch eligibility data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="eligibility-container">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }

          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          .eligibility-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            animation: fadeIn 0.8s ease-out;
          }

          .eligibility-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .eligibility-header h2 {
            font-size: 2.5rem;
            color: #0078D7;
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
          }

          .eligibility-header h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #0078D7, #00A0E9);
            border-radius: 2px;
          }

          .eligibility-header p {
            font-size: 1.1rem;
            color: #666;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .eligibility-form {
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            max-width: 600px;
            margin: 0 auto 40px;
            animation: pulse 3s ease-in-out infinite;
            border: 1px solid rgba(0, 120, 215, 0.1);
          }

          .form-group {
            margin-bottom: 25px;
          }

          .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #444;
            font-size: 1rem;
          }

          .form-group select {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 1em;
          }

          .form-group select:focus {
            outline: none;
            border-color: #0078D7;
            box-shadow: 0 0 0 3px rgba(0, 120, 215, 0.2);
          }

          .submit-btn {
            background: linear-gradient(135deg, #0078D7, #00A0E9);
            color: white;
            border: none;
            padding: 14px 30px;
            font-size: 1rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            width: 100%;
            box-shadow: 0 4px 6px rgba(0, 120, 215, 0.2);
          }

          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 120, 215, 0.3);
          }

          .submit-btn:active {
            transform: translateY(0);
          }

          .loading-state {
            text-align: center;
            padding: 20px;
          }

          .loading-animation {
            display: inline-block;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #f0f0f0, #0078D7, #f0f0f0);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite linear;
            border-radius: 2px;
          }

          .error-message {
            color: #e74c3c;
            background: rgba(231, 76, 60, 0.1);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            margin: 20px auto;
            max-width: 600px;
            border-left: 4px solid #e74c3c;
          }

          .results-container {
            margin-top: 40px;
            animation: fadeIn 0.8s ease-out;
          }

          .results-header {
            text-align: center;
            margin-bottom: 30px;
          }

          .results-header h3 {
            font-size: 1.8rem;
            color: #0078D7;
            position: relative;
            display: inline-block;
          }

          .results-header h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #0078D7, #00A0E9);
            border-radius: 2px;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 20px;
          }

          .grid-card {
            background: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            border-left: 4px solid #0078D7;
            position: relative;
            overflow: hidden;
          }

          .grid-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(0, 120, 215, 0.1), rgba(0, 120, 215, 0));
            z-index: 0;
          }

          .grid-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .grid-card h4 {
            font-size: 1.3rem;
            color: #0078D7;
            margin-bottom: 10px;
            position: relative;
          }

          .grid-card p {
            color: #666;
            line-height: 1.6;
            position: relative;
          }

          .no-results {
            text-align: center;
            padding: 30px;
            color: #666;
            font-size: 1.1rem;
          }

          @media (max-width: 768px) {
            .eligibility-header h2 {
              font-size: 2rem;
            }
            
            .eligibility-header p {
              font-size: 1rem;
            }
            
            .eligibility-form {
              padding: 20px;
            }
            
            .grid-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="eligibility-header">
        <h2>Check Your Eligibility</h2>
        <p>
          Select your education level to discover exams and career opportunities that match your qualifications.
          Our system will show you the best options available for your education level.
        </p>
      </div>

      <form className="eligibility-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="education">Education Level</label>
          <select
            id="education"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          >
            <option value="">-- Select Your Education Level --</option>
            <option value="10th">10th Standard/High School</option>
            <option value="12th">12th Standard/Intermediate</option>
            <option value="Graduation">Bachelor's Degree</option>
            <option value="Post-Graduation">Master's Degree or Higher</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          {loading ? "Checking..." : "Check Eligibility"}
        </button>
      </form>

      {loading && (
        <div className="loading-state">
          <div className="loading-animation"></div>
          <p>Searching for matching opportunities...</p>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {results.length > 0 ? (
        <div className="results-container">
          <div className="results-header">
            <h3>Eligible Exams & Career Opportunities</h3>
          </div>
          <div className="grid-container">
            {results.map((item, index) => (
              <div className="grid-card" key={index}>
                <h4>{item.exam}</h4>
                <p>{item.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        !loading && education && (
          <div className="no-results">
            No specific opportunities found for this education level. Try another option or check back later.
          </div>
        )
      )}
    </div>
  );
};

export default Eligibility;