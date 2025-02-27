import React, { useState } from "react";
import "../Styles/Register.css";
const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);
       try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {
      console.log("register",error);
    }
    
  };
  return (
    <section>
      <main>
        <div className="section-contact" >
          <div className="contact-form">
            <div id="registration-form" style={{width:"600px",marginLeft:"200px"}}>
              <div className="register-heading">
                <h2>Contact Form</h2>
                <form onSubmit={handleForm} className="registration-form">
                  <div className="registration-form-group">
                    <label htmlFor="username">name</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="enter your name"
                      required
                      autoComplete="off"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="registration-form-group">
                    <label htmlFor="email">Email </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="enter your email"
                      autoComplete="off"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="registration-form-group">
                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea
                      type="message"
                      id="message"
                      required
                      autoComplete="off"
                      placeholder="type here.."
                      name="message"
                      cols="40"
                      rows="8"
                      value={user.message}
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
