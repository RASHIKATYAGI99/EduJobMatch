const Contact = require('./models/Contact');

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const connectDB = require("./config/db"); // ✅ MongoDB connection

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// ✅ Connect to MongoDB
connectDB();

// ✅ API to confirm server is running
app.get('/api/status', (req, res) => {
  res.json({ status: 'Backend is working' });
});

// ✅ Contact form endpoint - Saves to MongoDB
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Step 1: Validate the form fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Step 2: Save to MongoDB using Mongoose
    const newContact = await Contact.create({ name, email, message });

    // Step 3: Send back success response
    res.status(201).json({ message: "Message saved to MongoDB!", data: newContact });
  } catch (error) {
    // Step 4: Handle error if something goes wrong
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact message." });
  }
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
