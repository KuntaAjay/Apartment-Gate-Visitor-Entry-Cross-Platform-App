import "./UserRoles.css";
import { FaUserTie, FaUserFriends, FaShieldAlt, FaClipboardList, FaBell, FaBoxOpen, FaHome, FaUserCheck } from "react-icons/fa";

export default function UserRoles() {
  return (
    <div className="roles-container">
      {/* Header */}
      <section className="roles-hero">
        <h1 className="roles-title">User Roles</h1>
        <p className="roles-subtitle">
          Different roles. Different access. One connected community.
        </p>
      </section>

      {/* Roles Grid */}
      <section className="roles-grid">
        {/* Apartment Admin */}
        <div className="role-card">
          <FaUserTie className="role-icon" />
          <h2>Apartment Admin</h2>
          <ul>
            <li><FaHome /> Manage Flats & Blocks</li>
            <li><FaUserFriends /> Manage Residents</li>
            <li><FaShieldAlt /> Manage Guards</li>
            <li><FaBell /> Publish Notices</li>
            <li><FaClipboardList /> Manage Help Desk Tickets</li>
            <li><FaBoxOpen /> View Guest & Delivery Logs</li>
            <li><FaClipboardList /> Dashboard Overview</li>
          </ul>
        </div>

        {/* Resident */}
        <div className="role-card">
          <FaUserFriends className="role-icon" />
          <h2>Resident</h2>
          <ul>
            <li><FaUserCheck /> Invite Guests</li>
            <li><FaBoxOpen /> Approve / Reject Deliveries</li>
            <li><FaClipboardList /> Raise Complaints</li>
            <li><FaBell /> View Notices</li>
            <li><FaShieldAlt /> Call Security</li>
            <li><FaHome /> View Profile & Flat Details</li>
          </ul>
        </div>

        {/* Guard / Security */}
        <div className="role-card">
          <FaShieldAlt className="role-icon" />
          <h2>Guard / Security</h2>
          <ul>
            <li><FaUserCheck /> Verify Guest Invites</li>
            <li><FaUserCheck /> Check-in / Check-out Visitors</li>
            <li><FaBoxOpen /> Update Delivery Status</li>
            <li><FaClipboardList /> View Today’s Logs</li>
            <li><FaBell /> Receive Security Alerts</li>
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="roles-cta">
        <p>
          One platform. Connected Community. <br />
          Smart apartment management for a better living experience.
        </p>
        <button className="btn-primary">Request Demo</button>
      </section>
    </div>
  );
}
