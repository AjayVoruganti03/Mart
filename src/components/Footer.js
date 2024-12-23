import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__info">
            <img src="/images/logo.jpg" alt="Supermarket Logo" />
            <address>
              Near Sangam Function Hall<br />
              Kurnool Road<br />
              Wanaparthy - 509103, T.G.
            </address>
          </div>
          <div className="footer__center">
            <p>GET IN TOUCH:</p>
            <p>
              Phone: <a href="tel:+919848185671">+91 98481 85671</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:customercare@gmail.com">customercare@gmail.com</a>
            </p>
          </div>
          <div className="footer__socials">
            <p>FOLLOW US</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/fblogo.png" alt="Facebook Icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/instalogo.jpeg" alt="Instagram Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;