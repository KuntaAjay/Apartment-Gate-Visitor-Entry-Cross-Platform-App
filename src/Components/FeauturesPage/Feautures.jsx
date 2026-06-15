import "./Feautures.css";
import { FaUserPlus, FaBoxOpen, FaHeadset, FaClipboard, FaPhoneAlt, FaTachometerAlt } from "react-icons/fa";

export default function Features() {
  return (
    <div className="features-container">
      {/* Header */}
      <section className="features-hero">
        <h1 className="features-title">Features</h1>
        <p className="features-subtitle">
          Everything you need to manage your apartment operations in one place.
        </p>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <FaUserPlus className="icon" />
          <h3>Guest Invite</h3>
          <p>Residents can invite guests in advance. Guards can verify and check them in/out.</p>
        </div>

        <div className="feature-card">
          <FaBoxOpen className="icon" />
          <h3>Delivery Management</h3>
          <p>Guards log deliveries. Residents can allow, reject, or ask to leave at gate.</p>
        </div>

        <div className="feature-card">
          <FaHeadset className="icon" />
          <h3>Help Desk</h3>
          <p>Residents raise complaints. Admin tracks, updates, and closes tickets.</p>
        </div>

        <div className="feature-card">
          <FaClipboard className="icon" />
          <h3>Notice Board</h3>
          <p>Admins publish notices. Residents receive and view important updates.</p>
        </div>

        <div className="feature-card">
          <FaPhoneAlt className="icon" />
          <h3>Call Security</h3>
          <p>Residents can quickly call security in case of any emergency.</p>
        </div>

        <div className="feature-card">
          <FaTachometerAlt className="icon" />
          <h3>Admin Dashboard</h3>
          <p>Admins get a clean dashboard with all important operations and logs.</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="features-cta">
        <p>All the essential tools. One simple platform. Built for modern apartments and communities.</p>
        <button className="btn-primary">Request Demo</button>
      </section>
    </div>
  );
}
