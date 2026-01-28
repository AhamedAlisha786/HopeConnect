import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Navbar.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/explore", label: "Explore Needs" },
  { path: "/find-orphanages", label: "Find Orphanages" },
  { path: "/stories", label: "Success Stories" },
  { path: "/aboutus", label: "About Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">
            <Heart fill="currentColor" />
          </div>
          <span className="navbar-logo-text">HopeConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
      <div className="navbar-auth">
  <div className="dropdown">
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setOpen(!open)}
    >
      Log In
    </Button>

    {open && (
      <div className="dropdown-menu">
        <Link
          to="/user-login"
          className="dropdown-item"
          onClick={() => setOpen(false)}
        >
          User Login
        </Link>
        <Link
          to="/login"
          className="dropdown-item"
          onClick={() => setOpen(false)}
        >
          Orphanage Login
        </Link>
      </div>
    )}
  </div>
</div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-mobile-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-menu-container">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`navbar-mobile-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="navbar-mobile-auth">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>
              {/* <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Register Orphanage</Button>
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
