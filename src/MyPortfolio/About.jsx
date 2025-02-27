import React from "react";
import myphoto1 from "../../public/img/myphoto1.jpg";
import "./Nav.css";
function About() {
  return (
    <>
      <div id="About" className="about">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img
              src={myphoto1}
              alt="my photo"
              style={{ width: "400px", height: "700px" }}
            />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I am a fresher MERN Stack Developer, strongly passionate for
                building scalable web applications.I have had the privilege of
                collaborating with prestigious organisations contributing to
                their success and growth.
              </p>
              <p>
                My passion for frontend development and also Proficient in
                Backend & Databases technologies like Node.js,Express & MongoDB
              </p>
            </div>

            <div className="about-skills">
              <div className="about-skill">
                <p>Html & Css</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>React.Js</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Node & Express.js</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>MongoDB</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>C++</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Python</p>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>E-Comm</h1>
            <p>Html,CSS,Js,React</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>Myntra</h1>
            <p>Html,Css,Js</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>Creative-EduHub</h1>
            <p>Html,Css</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
