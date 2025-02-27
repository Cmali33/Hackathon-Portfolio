import React from "react";
import Logo from "../../assets/images/logo.png";

import "../Styles/Nav.css";
import { BiUser } from "react-icons/bi";
function Footer() {
  return (
    <>
      <div id="footer" className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <h1>Let's talk</h1>

            <p>
              NEST,ndia’s no. 1 online fashion destination justifies its fashion
              relevance by bringing something new and chic to the table on the
              daily.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <BiUser></BiUser>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            {" "}
            2024 NEST. All rights reserved
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;