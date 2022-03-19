import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Card />
      <Footer />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
