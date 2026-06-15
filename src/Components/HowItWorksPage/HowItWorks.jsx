import "./HowItWorks.css";
import { FaUser, FaShieldAlt, FaBuilding, FaSignInAlt, FaUserCheck, FaClipboardList, FaBoxOpen, FaBell, FaPhoneAlt } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="how-container">
      {/* Header */}
      <section className="how-hero">
        <h1 className="how-title">How It Works</h1>
        <p className="how-subtitle">
          Simple steps for each role. One platform. Multiple benefits.
        </p>
      </section>

      {/* Roles Grid */}
      <section className="roles-grid">
        {/* Residents */}
        <div className="role-card">
          <FaUser className="role-icon" />
          <h2>For Residents</h2>
          <ol>
            <li><FaSignInAlt /> Login to the App</li>
            <li><FaUserCheck /> Invite Guest</li>
            <li><FaBoxOpen /> Approve Delivery</li>
            <li><FaClipboardList /> Raise Complaint</li>
            <li><FaBell /> View Notices</li>
            <li><FaPhoneAlt /> Call Security</li>
          </ol>
        </div>

        {/* Guards */}
        <div className="role-card">
          <FaShieldAlt className="role-icon" />
          <h2>For Guards</h2>
          <ol>
            <li><FaSignInAlt /> Login to the App</li>
            <li><FaUserCheck /> Verify Guest Invite</li>
            <li><FaUserCheck /> Check-in / Check-out Visitor</li>
            <li><FaBoxOpen /> Log Delivery</li>
            <li><FaClipboardList /> View Today’s Logs</li>
          </ol>
        </div>

        {/* Admins */}
        <div className="role-card">
          <FaBuilding className="role-icon" />
          <h2>For Admins</h2>
          <ol>
            <li><FaSignInAlt /> Login to Web Portal</li>
            <li><FaUser /> Manage Flats, Residents and Guards</li>
            <li><FaBell /> Publish Notices</li>
            <li><FaClipboardList /> Track Complaints</li>
            <li><FaBoxOpen /> View Visitor & Delivery Logs</li>
          </ol>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="how-cta">
        <p>
          Everything in one platform. Easy for everyone. <br />
          Improve security, save time and bring transparency.
        </p>
        <button className="btn-primary">Request Demo</button>
      </section>
    </div>
  );
}
