// Importing required styles and images
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Reference to the form element
  const form = useRef();

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on submit

    emailjs.sendForm(
      'service_13gep2c',       // Your EmailJS service ID
      'template_evh2b36',      // Your EmailJS template ID
      form.current,            // Form reference
      '3q_YIl3FuJ85JT4or'      // Your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      e.target.reset();       // Reset form fields
      alert('Email Sent !');  // Show alert
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div id='contactPage'>
      {/* Clients Section */}
      <div id="clients">
        <h1 className="contactPageTitle">My clients</h1>
        <span className="clientDesc">
          I have had the opportunity to work with a diverse group of companies. 
          Some of the notable companies I have worked with include:
        </span>

        {/* Client Logos */}
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>

        {/* Contact Form */}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="text" className="email" placeholder="Your Email" name="from_email" />
          <textarea name="message" placeholder="Your Message" rows={5} className="msg"></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button>

          {/* Social Links */}
          <div className="links">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rohit-singh-pokhariya-24742a220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="link"
                style={{
                  borderRadius: "50%",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rohitpokhariya10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="link"
                style={{
                  borderRadius: "50%",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rohitpokhariya07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="link"
                style={{
                  borderRadius: "50%",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
