import React from "react";
import { BiUser } from "react-icons/bi";
function Footer() {
  return <>
    <div id="footer"  className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
           <div className="nav">
        <h1>
          Chan<span>chal</span>
            </h1>
            </div>
          <p>I am a MERN developer, skills like HTML5 , CSS3 ,JS , REACT , NODE , EXPRESS , MONGODB , C++ ,Python</p>
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
        <p className="footer-bottom-left"> 2024 Chanchal Rathore . All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  </>
}
export default Footer;