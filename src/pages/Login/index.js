import React from "react";
import "./index.scss";
import Menu from "../../assets/Group 2.png";
import Kahuyq from "../../assets/HomePage.png";
import Search from "../../assets/Vector (11).png";
import pinterest from "../../assets/Vector (12).png";
import telegram from "../../assets/Vector (13).png";
import instagram from "../../assets/1298747_instagram_brand_logo_social media_icon (1) 1.png";
import facebook from "../../assets/Facebook icon.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      window.localStorage.setItem("people", JSON.stringify(data));
    } catch (error) {
      alert("your login is not correct", error);
    }
  };
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
      <div>
        <div className="all-sign">
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <input
              {...register("email")}
              type="email"
              className="email"
              placeholder="email"
            />
         
            <input
              {...register("password")}
              type="password"
              className="password"
              placeholder="password"
            />
            <button type="submit" className="loggin">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="footer-pp"></div>
      <div className="div-add">
        <p className="address">Address: Dzoraxbyur, Barekamutyan 7 st.</p>
        <p className="phone-n">
          Phone numbers: +374 98 900 309, +374 430977373
        </p>
      </div>
      <div className="wodo-div">
        <p className="wodo-txt"> WooDoo </p>
      </div>
      <div>
        <p className="txt4">Terms of Use Privacy Policy</p>
        <p className="txt5"> © 2022 WooDoo</p>
      </div>
      <div className="search-div">
        <input type="text" className="search" />
        <img src={Search} alt="Search" className="search-icon" />
      </div>
      <div className="div5">
        <p className="txt4">Find us in social media</p>
      </div>
      <div className="all-logos">
        <a href="https://www.pinterest.com/">
          <img src={pinterest} alt="pin" className="logo1" />
        </a>
        <a href="https://web.telegram.org/k/">
          <img src={telegram} alt="tel" className="logo2" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="insta" className="logo3" />
        </a>
        <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1557999833&extra_1=s%7Cc%7C294720964991%7Ce%7Cfacebook%27%7C&placement=&creative=294720964991&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1557999833%26adgroupid%3D58741202323%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9070054%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAyPyQBhB6EiwAFUuakow7uKONw00FWciA3bkuLPf1Zi1ntOkW-aMfJUn-zGlbffpDYHjfmxoCF_EQAvD_BwE">
          <img src={facebook} alt="face" className="logo4" />
        </a>
      </div>
    </>
  );
};

export default Login;
