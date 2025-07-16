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
    setResponseMsg("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResponseMsg(data.message);
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (err) {
      setError(err.message);
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

        <button type="submit">Send Message</button>
      </form>

      {responseMsg && <p style={{ color: "green", marginTop: "10px" }}>{responseMsg}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default Contact;
