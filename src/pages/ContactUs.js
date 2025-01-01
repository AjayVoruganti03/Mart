import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/ContactUs.css'; 

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic input validation
    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!message) {
      setErrorMessage('Please enter your message.');
      return;
    }

    emailjs
      .sendForm(
        'service_3hz0fhs', 
        'template_xpkmgoe', 
        form.current,
        'kqqJ4qLUVlyPqTg8L' 
      )
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
          setErrorMessage(''); // Clear any previous errors
        },
        (error) => {
          console.error('FAILED...', error.text);
          setErrorMessage('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-us-container">
      <img src="./iramsha/visit.JPG" alt="Contact Us" className="banner-image" /> 
      <h1>Contact Us</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
