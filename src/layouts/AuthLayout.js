import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Data = [
  {
    id:1,
    image:"../assets/Rectangle 15.png",
  },
  // {
  //   id:2,
  //   image:"",
  // },
  // {
  //   id:3,
  //   image:"",
  // }
]

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Card Data={Data} />
      <Footer />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
