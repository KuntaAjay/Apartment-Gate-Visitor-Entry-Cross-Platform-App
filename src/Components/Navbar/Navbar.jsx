import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Smart Apartment</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/user-roles">User Roles</Link></li>
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-cta">
        <Link to="/contact" className="btn-primary">Request Demo</Link>
      </div>
    </nav>
  );
}
