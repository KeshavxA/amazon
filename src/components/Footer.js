import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        Back to top
      </div>
      <div className="footer__links">
        <div className="footer__linkCol">
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
        </div>
        <div className="footer__linkCol">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
        </div>
        <div className="footer__linkCol">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="footer__linkCol">
          <h3>Let Us Help You</h3>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
