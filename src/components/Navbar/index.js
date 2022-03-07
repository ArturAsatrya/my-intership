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
        <img src={Menu} alt="menu" />
      </div>
      <div className="header">
        <a href="/" className="q">
          <p className="header1">Woodoo</p>
        </a>
      </div>
      <div className="signin">
        <Link
        to="/Login">
          <button className="signin1">Sign in</button>
        </Link>
      </div>
      <div className="signup">
        <button className="signup1">Sign up</button>
      </div>
      <div className="box">
        <p className="text">WooDoo</p>
      </div>
      <div className="box1">
        <p className="text1"> Design Studio</p>
      </div>
      <div className="box2">
        <pre>
          <p className="text2">
            Here you can order any type of
            <br />
            furniture making your space beautiful,
            <br />
            simple but significant.
          </p>
        </pre>
      </div>
      <div className="box3">
        <button className="button">EXPLORE</button>
      </div>
    </div>
  );
};

export default Navbar;
