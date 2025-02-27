import React from 'react'
import '../Styles/Register.css'
const Login = () => {
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
  
    const handleForm = async(e) => {
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
          <div className="section-registration" style={{width:"100%",height:'500px'}}>
            <div className="container grid grid-two-cols" style={{paddingTop:"50px"}}>
              <div className="registration-content">
                <div className="registration-heading">
                  <h3>Come join us!</h3>
                </div>
                <div className="registration-para">
                  <p>
                    We are so excited to have you here if you haven't already
                    ,create an account to get access to exclusive offers,
                    rewards, and discounts.{" "}
                  </p>
                </div>
              </div>

              <div id="registration-form" style={{height:"400px" ,paddingLeft:"70px",paddingTop:"50px"}}>
                <div className="register-heading">
                  <h2>Login Form</h2>
                  <form onSubmit={handleForm} className="registration-form">
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
                    <button type="submit">Register Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login
