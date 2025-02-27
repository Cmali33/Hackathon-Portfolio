import Logo from "../../assets/images/logo.png";
import React from "react";
import "../Styles/Nav.css";
import { useRef} from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" style={{ width: "100px", height: "60px" }} />
      </div>
      <div className="col-sm-5">
        <div className="InputSearch d-flex align-items-center">
          <div className="selectDrop">All Categories</div>
          <div className="search">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <FaSearch className="searchIcon" />
          </div>
        </div>
      </div>
      <IoReorderThreeOutline
        onClick={openMenu}
        className="nav-mob-open"
      ></IoReorderThreeOutline>
      <ul ref={menuRef} className="nav-menu navbar-links ">
        <RxCross1 onClick={closeMenu} className="nav-mob-close"></RxCross1>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/service">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
