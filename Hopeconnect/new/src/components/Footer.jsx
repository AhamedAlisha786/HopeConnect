import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Heart fill="currentColor" />
              </div>
              <span className="footer-logo-text">HopeConnect</span>
            </Link>
            <p className="footer-description">
              Connecting hearts, building futures. Join us in supporting orphanages and giving every child a brighter tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {[
                { path: "/explore", label: "Explore Needs" },
                { path: "/find-orphanages", label: "Find Orphanages" },
                { path: "/stories", label: "Success Stories" },
                { path: "/aboutus", label: "About Us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="footer-section-title">Get Involved</h4>
            <ul className="footer-links">
              {[
                { path: "/register", label: "Register Orphanage" },
                { path: "/login", label: "Donor Login" },
                { path: "/stories", label: "Share Your Story" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-section-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Mail />
                hello@hopeconnect.org
              </li>
              <li className="footer-contact-item">
                <Phone />
                +1 (555) 123-4567
              </li>
              <li className="footer-contact-item">
                <MapPin />
                123 Hope Street, Charity City, CC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} HopeConnect. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart fill="currentColor" /> for a better world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
