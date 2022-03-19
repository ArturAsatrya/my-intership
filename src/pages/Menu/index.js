import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Menu = () => {
  return (
    <div className="all-menu">
      <p className="menu-txt1">Woodoo</p>
      <Link to="/" className="x">
        <p className="menu-x">×</p>
      </Link>
      <hr className="menu-hr" />
      <div>
        <Link to="/Login">
          <button className="menu-signin">Sign in</button>
        </Link>
      </div>
      <div>
        <Link to="/Signup">
          <button className="menu-signup">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
