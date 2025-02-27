import React from "react";
import "../Styles/Register.css";
import { TfiEmail } from "react-icons/tfi";
// import { MdWifiCalling3 } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
const Register = () => {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleForm =  async(e) => {
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
    
  }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div
              className="container grid grid-two-cols"
              style={{ paddingTop: "50px" }}
            >
              <div className="contact-left">
                <h1>Let's talk</h1>
                <div className="contact-details">
                  <div className="contact-detail">
                    <TfiEmail/>
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

              <div id="registration-form">
                <div className="register-heading">
                  <h2>registration form</h2>
                  <form onSubmit={handleForm} className="registration-form">
                    <div className="registration-form-group">
                      <label htmlFor="username">username</label>
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
                      <label htmlFor="email">Email</label>
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
                      <label htmlFor="phone">phone</label>
                      <input
                        type="number"
                        id="phone"
                        placeholder="enter your phone number"
                        required
                        autoComplete="off"
                        name="phone"
                        value={user.phone}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="registration-form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        required
                        autoComplete="off"
                        placeholder="enter your password"
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                      />
                    </div>
                    <button type="submit">SignUp</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
