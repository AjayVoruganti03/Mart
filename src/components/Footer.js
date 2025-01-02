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
              <a href="mailto:customercare@gmail.com">nssmrk@gmail.com</a>
            </p>
          </div>
          <div className="footer__socials">
            <p>FOLLOW US</p>
            <a
              href="https://www.facebook.com/100063906291478/videos/please-visit-ramsha-wholesale-mart-pebbair-road-wanaparthy/397159573439527/ "
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/fblogo.png" alt="Facebook Icon" />
            </a>
            <a
              href="https://www.instagram.com/ramsha_wholesale_mart/?utm_source=qr&igsh=MWs2ODlpMmMxNHBodw%3D%3D"
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