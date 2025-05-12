// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjy6pre",    
        "template_inke3oj",    
        form.current,
        "2oZcyaZmgmIsLjIOJ"      
      )
      .then(() => {
        setMessageSent(true);
        form.current.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Phone Number</label>
        <input type="text" name="user_phone" required />

        <label>Budget</label>
        <input type="text" name="user_budget" required />

        <label>Message</label>
        <textarea name="message" rows="5" required />

        <button type="submit" className="submit-btn">
          <span>Send Message</span>
        </button>

        {messageSent && (
          <p className="success-msg">
            Thông tin của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
