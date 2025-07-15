const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Mock eligibility data
const eligibilityData = {
  "10th": [
    { exam: "NDA", criteria: "Age 16.5–19.5 years, 10th pass" },
    { exam: "Railway Group D", criteria: "10th pass or ITI" },
  ],
  "12th": [
    { exam: "SSC CHSL", criteria: "12th pass with basic computer knowledge" },
    { exam: "Indian Navy AA/SSR", criteria: "12th pass with 60% in PCM" },
  ],
  "Graduation": [
    { exam: "IBPS PO", criteria: "Graduate in any discipline" },
    { exam: "GATE", criteria: "Engineering graduate" },
  ],
  "Post-Graduation": [
    { exam: "UGC NET", criteria: "Post-graduation with 55%+" },
    { exam: "Research Fellowships", criteria: "Master's with relevant subject" },
  ],
};

// Eligibility API
app.get("/api/eligibility/:education", (req, res) => {
  const education = req.params.education;
  const data = eligibilityData[education] || [];
  res.json(data);
});

// Jobs API
const jobsData = [
  { title: "Software Engineer", education: "Graduation", deadline: "2025-08-15" },
  { title: "Research Assistant", education: "Post-Graduation", deadline: "2025-09-01" },
  { title: "Clerk", education: "12th", deadline: "2025-07-31" },
];

app.get("/api/jobs", (req, res) => {
  res.json(jobsData);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
