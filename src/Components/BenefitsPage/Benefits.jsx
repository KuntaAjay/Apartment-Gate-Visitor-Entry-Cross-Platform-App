import "./Benefits.css";
import { FaBook, FaStopwatch, FaShieldAlt, FaSmile, FaClipboardList, FaFeatherAlt } from "react-icons/fa";

export default function Benefits() {
  return (
    <div className="benefits-container">
      {/* Header */}
      <section className="benefits-hero">
        <h1 className="benefits-title">Benefits</h1>
        <p className="benefits-subtitle">
          Why apartments love using our platform
        </p>
      </section>

      {/* Benefits Grid */}
      <section className="benefits-grid">
        <div className="benefit-card">
          <FaBook className="icon" />
          <h3>No More Paper Registers</h3>
          <p>Visitor and delivery logs become digital and easy to access.</p>
        </div>

        <div className="benefit-card">
          <FaStopwatch className="icon" />
          <h3>Faster Gate Operations</h3>
          <p>Guards can verify guests quickly and reduce waiting time.</p>
        </div>

        <div className="benefit-card">
          <FaShieldAlt className="icon" />
          <h3>Improved Security</h3>
          <p>Every entry is tracked and recorded for complete transparency.</p>
        </div>

        <div className="benefit-card">
          <FaSmile className="icon" />
          <h3>Better Resident Experience</h3>
          <p>Residents get simple app-based solutions for daily needs.</p>
        </div>

        <div className="benefit-card">
          <FaClipboardList className="icon" />
          <h3>Easy Admin Control</h3>
          <p>Admins get a powerful yet simple dashboard to manage everything.</p>
        </div>

        <div className="benefit-card">
          <FaFeatherAlt className="icon" />
          <h3>Affordable & Lightweight</h3>
          <p>Not a heavy ERP. Only the essential features you actually need.</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="benefits-cta">
        <p>
          Smart management. Stronger community. <br />
          Let’s build a better living experience for your residents.
        </p>
        <button className="btn-primary">Request Demo</button>
      </section>
    </div>
  );
}
