import React from 'react';
import './CSS/AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Ramsha Wholesale Mart</h1>
      </header>
      <main className="about-us-main">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Ramsha Wholesale Mart, our mission is to provide our customers with a
            convenient and enjoyable shopping experience, offering a wide
            selection of high-quality products at competitive prices. We strive
            to create a welcoming atmosphere where customers feel valued and
            appreciated.
          </p>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <p>Our core values are the foundation of everything we do.</p>
          <ul>
            <li>
              <strong>Honesty:</strong> We are transparent and truthful in our
              dealings with customers and partners.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with the highest ethical
              standards and uphold a strong moral compass.
            </li>
            <li>
              <strong>Trust:</strong> We build lasting relationships based on
              trust and reliability.
            </li>
            <li>
              <strong>Customer Focus:</strong> We prioritize customer
              satisfaction and strive to exceed expectations.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace new ideas and
              technologies to enhance the shopping experience.
            </li>
          </ul>
        </section>
        <section className="history">
          <h2>Our Story</h2>
          <p>
            Ramsha Wholesale Mart was founded with a simple vision: to make grocery shopping
            easier and more accessible for everyone. We started with a single
            store and have since grown into a trusted name in the supermarket
            industry. Our commitment to quality, customer service, and
            community has been key to our success.
          </p>
        </section>
        
      </main>
      <footer className="about-us-footer"></footer>
    </div>
  );
}

export default AboutUs;
