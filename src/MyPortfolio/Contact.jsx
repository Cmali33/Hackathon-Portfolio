import React from "react";
import "./Nav.css";
import { TfiEmail } from "react-icons/tfi";
// import { MdWifiCalling3 } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function Contact() {

   const onSubmit = async (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);

     formData.append("access_key", "dfa76f37-0d52-407b-965c-56da3fca8915");

     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);

     const res = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: json,
     }).then((res) => res.json());

     if (res.success) {
       alert(res.message);
       console.log("Success", res);
     }
   };


  return (
    <>
      <div id="Contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I"m currently avaliable to take on new projects , so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <TfiEmail />
                <p>malicanchal@gmail.com</p>
              </div>
              <div className="contact-detail">
                <MdAddCall />
                <p>+7470-XYZ-XY</p>
              </div>
              <div className="contact-detail">
                <MdLocationOn />
                <p>Mandsour,Madhya Pradesh</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name:</label>
            <input type="text" placeholder="Enter your name..." required />
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              placeholder="Enter your email..."
              name="email"
              required
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              name="message"
              cols="10"
              rows="8"
              placeholder="type here.."
            ></textarea>
            <button type="submit" className="contact-submit ">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;