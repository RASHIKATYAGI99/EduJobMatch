const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// ✅ API to confirm server is running
app.get('/api/status', (req, res) => {
  res.json({ status: 'Backend is working' });
});

// ✅ Contact form endpoint - Saves to contacts.json
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const newEntry = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  const filePath = path.join(__dirname, "contacts.json");

  let existingMessages = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    existingMessages = JSON.parse(data);
  }

  existingMessages.push(newEntry);

  fs.writeFileSync(filePath, JSON.stringify(existingMessages, null, 2));

  res.status(200).json({ message: "Message saved successfully!" });
});

// ✅ Mock eligibility data
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

// ✅ Eligibility API
app.get("/api/eligibility/:education", (req, res) => {
  const education = req.params.education;
  const data = eligibilityData[education] || [];
  res.json(data);
});

// ✅ Jobs API
const jobsData = [
  { title: "Software Engineer", education: "Graduation", deadline: "2025-08-15" },
  { title: "Research Assistant", education: "Post-Graduation", deadline: "2025-09-01" },
  { title: "Clerk", education: "12th", deadline: "2025-07-31" },
];

app.get("/api/jobs", (req, res) => {
  res.json(jobsData);
});

// ✅ Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
