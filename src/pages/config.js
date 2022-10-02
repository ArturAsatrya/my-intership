import DefaultLayouts from "../layouts/DefaultLayouts";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "./HomePage";
import LogIn from "./LogIN";
import About from "./About";
import { Tools } from "./Tools";
import Add from "./Add";  
import SignUP from "./SignUP";
import { ProfilePage } from "./ProfilePage";
import Add from "./Add";


import SignUP from "./SignUP";

const config = [
  {
    component: HomePage,
    path: "/",
    secure: false,
    exact: true,
    layout: AuthLayout,
  },
  {
    component: LogIn,
    path: "/login",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
  {
    component: About,
    path: "/about",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
  {
    component: Tools,
    path: "/tools",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
  {
    component: SignUP,
    path: "/signUp",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
  {

    component: ProfilePage,
    path: "/profile",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  }
    component: Add,
    path: "/Add",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
];

export default config;
