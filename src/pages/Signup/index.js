import React from "react";
import "./index.scss";
import Menu from "../../assets/Group 2.png";
import Kahuyq from "../../assets/HomePage.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
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
      <div className="all-inputs">
        <div>
          <input type="email" placeholder="email" className="in1" />
        </div>
        <div>
          <input type="text" placeholder="first_name" className="in2" />
        </div>
        <div>
          <input type="text" placeholder="last_name" className="in3" />
        </div>
        <div>
          <input type="number" placeholder="age" className="in4" />
        </div>
        <div>
          <input type="password" placeholder="password" className="in5" />
        </div>
        <div className="input-btn">
          <button className="register-btn">Register</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
