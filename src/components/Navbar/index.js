import React from "react";
import "./index.scss";
import Menu from "../../assets/Group 2.png";
import Kahuyq from "../../assets/HomePage.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="all">
      <img src={Kahuyq} alt="kk" className="glav" />
      <div className="menu">
        <button type="button" className="btn-menu">
          <Link to="/Menu">
            <img src={Menu} alt="menu" />
          </Link>
        </button>
      </div>
      <div className="header">
        <a href="/" className="q">
          <p className="header1">Woodoo</p>
        </a>
      </div>
      <div className="signin">
        <Link to="/Login">
          <button className="signin1">Sign in</button>
        </Link>
      </div>
      <div className="signup">
        <Link to="/Signup">
          <button className="signup1">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
