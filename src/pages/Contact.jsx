import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or suggestions — feel free to reach out!</p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Type your message..." required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
