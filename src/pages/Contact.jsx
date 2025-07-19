import React, { useState, useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Simple Validation
  if (!formData.name || !formData.email || !formData.message) {
    toast.error("All fields are required!");
    return;
  }

  try {
    setLoading(true); // start loading
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    const data = await response.json();
    console.log("Server Response:", data);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Submission Error:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setLoading(false); // stop loading
  }
};

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or suggestions — feel free to reach out!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text" id="name" name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name" required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email" id="email" name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com" required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message" name="message" rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..." required
        ></textarea>

        <button
  type="submit"
  disabled={loading}
  className={`px-4 py-2 rounded text-white ${
    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {loading ? "Sending..." : "Send Message"}
</button>

      </form>

      {responseMsg && <p style={{ color: "green", marginTop: "10px" }}>{responseMsg}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default Contact;
