import React, { useRef } from "react";
import "./Nav.css";
import Mywork from "./Mywork";
import About from "./About";
import Contact from "./Contact";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
// import me1 from '../../../public/img/me1.jpg'
function Nav() {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <>
      <div className="nav">
        <h1>
          Chan<span>chal</span>
        </h1>
        <IoReorderThreeOutline
          onClick={openMenu}
          className="nav-mob-open"
        ></IoReorderThreeOutline>
        <ul ref={menuRef} className="nav-menu">
          <RxCross1 onClick={closeMenu} className="nav-mob-close"></RxCross1>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#mywork">My Work</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="nav-connect">
          <a href="#Contact">Connect with us</a>
        </div>
      </div>
    </>
  );
}
export default Nav;
