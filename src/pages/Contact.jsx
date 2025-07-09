import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "EduJobMatch | Contact";
  }, []);

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>
        Have any questions, suggestions, or feedback? We'd love to hear from you!
      </p>

      <form>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" placeholder="you@example.com" />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" placeholder="Type your message here..."></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
