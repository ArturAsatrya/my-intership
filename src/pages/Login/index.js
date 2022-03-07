import React from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Link to="/" className="linkkk">
        <p className="txt-back">Back</p>
      </Link>
      <div className="all-sign">
        <p className="txt-sign-in">Sign in</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="txt-email">EMAIL ADDRESS:</p>
          <input {...register("email")} type="email " className="email" />
          <p className="txt-password">PASSWORD:</p>
          <input
            {...register("password")}
            type="password"
            className="password"
          />
          <button className="loggin">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
