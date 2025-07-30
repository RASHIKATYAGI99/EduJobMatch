const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const Contact = require('./models/Contact');

const app = express();

// ✅ CORS setup – allow the same origin as your server
app.use(cors({
  origin: 'http://localhost:5173', // Same origin as server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use('/api/jobs', jobRoutes);

// ✅ Connect to MongoDB
connectDB();

// ✅ Status check
app.get('/api/status', (req, res) => {
  res.json({ status: 'Backend is working' });
});

// ✅ Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newContact = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message saved to MongoDB!", data: newContact });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact message." });
  }
});

// ✅ Mock eligibility data
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

// ✅ Eligibility API
app.get("/api/eligibility/:education", (req, res) => {
  const education = req.params.education;
  const data = eligibilityData[education] || [];
  res.json(data);
});

// ✅ Start server on port 5173
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});