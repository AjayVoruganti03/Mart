//import React from "react";
import "./CSS/Home.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="home">
      <section className="video-banner">
        <video autoPlay loop muted={isMuted} className="video-banner__video">
          <source src="/images/iramsha.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-banner__text">
          <h1>Welcome to RAMSHA Wholesale Mart</h1>
          <p>Your one-stop shop for all your wholesale needs!</p>
        </div>
        <button onClick={toggleMute} className="video-banner__mute-button">
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </section>

      <section className="about">
        <div className="about__content">
          <div className="about__text">
            <h2>About Wholesale Mart</h2>
            <p>
              At Wholesale Mart, we pride ourselves on offering the best deals
              on quality products. From groceries to household essentials, we
              cater to all your needs with unbeatable prices and unparalleled
              service.
            </p>
            <p>
              Our mission is to provide our customers with a wide selection of
              products at the lowest prices possible. We believe that everyone
              deserves access to quality goods without breaking the bank.
            </p>
            <p>
              With years of experience in the retail industry, our dedicated
              team is committed to ensuring your shopping experience is
              enjoyable and efficient. We constantly update our inventory to
              include the latest products and trends, so you can always find
              what you need.
            </p>
            <p>
              Join our community of satisfied customers and discover the
              Wholesale Mart difference today!
            </p>
          </div>
          <div className="about__images">
            <img src="/iramsha/full_pic.jpeg" alt="Product 1" />
          </div>
        </div>
      </section>

      <section className="categories">
        <h2 className="categories_h2">
          Your one-stop shop for all your wholesale needs!
        </h2>
        <div className="categories__grid">
          <div className="category">
            <img src="/iramsha/1drinks.jpg" alt="Soft Drinks" />
            <div className="category__text">Soft Drinks</div>
          </div>
          <div className="category">
            <img src="iramsha/groceries.jpg" alt="Frozen Foods" />
            <div className="category__text">Frozen Foods</div>
          </div>
          <div className="category">
            <img
              src="iramsha/cereals.JPG"
              alt="High Quality Cereals"
            />
            <div className="category__text">High Quality Cereals</div>
          </div>
          <div className="category">
            <img src="iramsha/4cat.JPG" alt="Many More..." />
            <div className="category__text">Many More...</div>
          </div>
        </div>
        <div className="categories__button">
          <Link to="/categories" className="button">
            View More
          </Link>
        </div>
      </section>

      <section class="offers">
        <div class="offers__content">
          <div class="offers__text">
            <h2>Special Offers</h2>
            <ul>
              <li>Buy 1 Get 1 Free on Select Items</li>
              <li>Up to 50% Off on MRP Rates</li>
              <li>Exclusive Deals for Members</li>
              <li>Flash Sale: Extra 20% Off on Your First Purchase!</li>
              <li>Weekend Specials: Additional Discounts on Fresh Produce</li>
              <li>Free Shipping on Orders Over Rs.3000</li>
            </ul>
            <p>
              Don't miss out on our limited-time offers! Stock up on your
              favorite products and enjoy incredible savings. Whether you're
              shopping for groceries, household essentials, or special treats,
              we have something for everyone!
            </p>
            <p>
              Hurry, these offers won't last long! Visit us in-store to take
              advantage of these amazing deals.
            </p>
          </div>
          <div class="offers__image">
            <img src="/iramsha/offers.JPG" alt="Supermarket" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
