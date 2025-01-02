import "./CSS/Home.css";
//import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //This is the audio button if we put a video in the background
  // const [isMuted, setIsMuted] = useState(true);

  // const toggleMute = () => {
  //   setIsMuted(!isMuted);
  // };

  return (
    <div className="home">
      {/* This is video section if we put a video in the background 
      
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
      </section> */}

      <section className="image-banner">
        <img
          src="/iramsha/Banner.jpeg"
          alt="Banner Placeholder"
          className="image-banner__image"
        />
        <div className="image-banner__text">
          {/* <h1>Welcome to RAMSHA Wholesale Mart</h1>
          <p>Your one-stop shop for all your wholesale needs!</p> */}
        </div>
      </section>

      <section className="about">
        <div className="about__content">
          <div className="about__text">
            <h2><b>About Ramsha Wholesale Mart</b></h2>
            <p>
              Ramsha Wholesale Mart is proud to be Wanaparthy's first and
              biggest wholesale supermarket, founded by Shri Kotra Ramakrishna
              under the banner of Shiva Traders. From everyday groceries and
              home essentials to furniture, luggage, and gift items, we bring
              together an extensive range of products under one roof—making us
              your true one-stop solution for daily shopping.
            </p>
            <p>
              Located near Sangam Function Hall on Kurnool Road in Wanaparthy,
              Ramsha Wholesale Mart is dedicated to delivering quality, value,
              and convenience to every customer. Our spacious multi-floor
              facility hosts thousands of items across categories such as
              groceries, home needs, fashion, kitchenware, and more. Whether
              you're stocking up for your household or sourcing bulk orders for
              your business, you can rely on our competitive wholesale prices
              and special offers.
            </p>
          </div>
          <div className="about__images">
            <img src="/iramsha/full_pic.jpeg" alt="Product 1" />
          </div>
        </div>
      </section>

      <section className="categories">
        <h1 className="categories_h2">
          Your one-stop shop for all your wholesale needs!
        </h1>
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
            <img src="iramsha/cereals.JPG" alt="High Quality Cereals" />
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
            <p>
              We also offer free home delivery for orders above ₹3000, accept
              all major credit and debit cards, and provide friendly in-store
              assistance to ensure a pleasant shopping experience. At Ramsha
              Wholesale Mart, we believe in making shopping affordable,
              convenient, and enjoyable—because meeting your needs is our
              priority. Come visit us today and discover why we are Wanaparthy
              District's premier supermarket destination.
            </p>
            <div class="offers__image">
              <img src="/iramsha/delivery.JPG" alt="Supermarket" />
            </div>
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
