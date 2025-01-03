import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const whatsappNumber = "+919347870069";

  const closeMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/iramsha/logo.JPG" alt="Wholesale Mart Logo" />
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/images/menu_button.png" alt="Menu" className="menu-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories" onClick={closeMenu}>
                Categories
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link className="nav-link" to="/contact-us" onClick={closeMenu}>
                Contact Us
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2"
                title="Chat on WhatsApp"
              >
                <img
                  src="./images/whatsapplogo.jpeg"
                  alt="WhatsApp"
                  style={{ width: "24px", height: "24px", borderRadius: "25%" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
