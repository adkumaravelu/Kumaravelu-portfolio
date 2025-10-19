import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs
      .sendForm(
        "service_7oaqiuu",        // ✅ Your Service ID
    "template_ni236os",       // ✅ Your actual Template ID
    form.current,
    "_VYsC8ggh95CxLIEM"          // ✅ Your Public Key
      ) 
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-description">
        I'm open to collaboration or job opportunities. Feel free to message me!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message ✉️</button>
      </form>
    </section>
  );
};

export default Contact;
