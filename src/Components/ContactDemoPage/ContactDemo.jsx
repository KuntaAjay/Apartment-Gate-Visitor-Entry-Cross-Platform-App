import React from "react";
import "./ContactDemo.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactDemoPage = () => {
  return (
    <div className="contact-demo-page">
      {/* Navigation Bar
      <nav className="navbar">
        <div className="brand">Brand Name</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>How It Works</li>
          <li>Roles</li>
          <li>Benefits</li>
          <li>Contact</li>
        </ul>
        <button className="nav-demo-btn">Request Demo</button>
      </nav> */}

      {/* Main Section */}
      <div className="main-section">
        {/* Request a Demo Form */}
        <div className="demo-form">
          <h2>Request a Demo</h2>
          <form>
            <input type="text" placeholder="Full Name*" required />
            <input type="text" placeholder="Apartment / Society Name*" required />
            <input type="tel" placeholder="Phone Number*" required />
            <input type="email" placeholder="Email Address*" required />
            <input type="text" placeholder="Number of Flats / Units*" required />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="blue-btn">Request Demo</button>
          </form>
        </div>

        {/* Contact Us Section */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>info@yourbrand.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>123, Green Avenue, Bangalore, Karnataka, India</span>
          </div>
          <div className="info-item">
            <FaWhatsapp className="icon" />
            <span>+91 98765 43210</span>
          </div>
          <button className="green-btn">Chat on WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default ContactDemoPage;
