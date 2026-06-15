import "./home.css";
import { FaBook, FaPhoneAlt, FaBoxOpen, FaClipboardList, FaBell, FaUserFriends, FaShieldAlt, FaBuilding } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-text">
          <h1 className="home-title">Smart Apartment Management Made Simple</h1>
          <p className="home-subtitle">
            Digitize guest entries, deliveries, complaints, notices, and security communication in one easy app.
          </p>
          <div className="home-buttons">
            <button className="btn-primary">Request Demo</button>
            <button className="btn-outline">View Features</button>
          </div>
        </div>
      </section>

      {/* Why Apartments Need a Smarter Solution */}
      <section className="why-section">
        <h2>Why Apartments Need a Smarter Solution</h2>
        <div className="why-grid">
          <div className="why-card"><FaBook className="icon" /><p>Visitor entries in notebooks</p></div>
          <div className="why-card"><FaPhoneAlt className="icon" /><p>Depend on calls and WhatsApp</p></div>
          <div className="why-card"><FaBoxOpen className="icon" /><p>Delivery approvals are confusing</p></div>
          <div className="why-card"><FaClipboardList className="icon" /><p>Complaints are hard to track</p></div>
          <div className="why-card"><FaBell className="icon" /><p>Notices are often missed</p></div>
        </div>
      </section>

      {/* Our Simple Solution */}
      <section className="solution-section">
        <h2>Our Simple Solution</h2>
        <div className="solution-grid">
          <div className="solution-card"><FaUserFriends className="icon" /><h3>Resident App</h3><p>Invite guests, approve deliveries, raise complaints, and more.</p></div>
          <div className="solution-card"><FaShieldAlt className="icon" /><h3>Guard App</h3><p>Verify guests, log deliveries, and manage gate operations.</p></div>
          <div className="solution-card"><FaBuilding className="icon" /><h3>Admin Portal</h3><p>Manage residents, guards, flats, notices, and reports.</p></div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="cta-section">
        <h2>
          Ready to modernize your apartment operations? <br />
          Let’s make your apartment safer, smarter and better connected.
        </h2>
        <button className="btn-primary">Contact Us</button>
      </section>
    </div>
  );
}
