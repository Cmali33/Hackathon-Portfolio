import React from "react";
// import myphoto1 from '../../../public/img/myphoto1.jpg'
import myphoto1 from "../../public/img/myphoto1.jpg"

function Home() {
    return (
      <>
        <div id="Home" className="hero">
          <img src={myphoto1} alt="my photo" style={{width:"300px", height:"300px"}}/>
          <h1><span id="heading">I'm Chanchal Rathore </span>, MERN developer.</h1>
          <p>I am a fresher and have some basic knowledge of Frontend , Backend & Databases make  user-friends with smoothly
          </p>
          <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
          </div>
        </div>
      </>
    );
}
export default Home;