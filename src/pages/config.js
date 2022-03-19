import AuthLayout from "../layouts/AuthLayout";
import DefaultLayouts from "../layouts/DefaultLayouts";
import HomePage from "./HomePage";
import About from "./About";
import Kitchen from "./Kitchen";
import Login from "./Login";
import Signup from "./Signup";
import Menu from "./Menu";

const config = [
    {
        component: HomePage,
        path: '/',
        secure: false,
        exact: true,
        layout: AuthLayout,
    },
    {
        component: About,
        path: '/about',
        secure: false,
        exact: true,
        layout: AuthLayout,
    },
    {
        component: Kitchen,
        path: '/kitchen',
        secure: false,
        exact: true,
        layout: DefaultLayouts,
    },
    {
        component: Login,
        path: '/Login',
        secure: false,
        exact: true,
        layout: DefaultLayouts,
    },
    {
        component: Signup,
        path: '/Signup',
        secure: false,
        exact: true,
        layout: DefaultLayouts,
    },
    {
        component: Menu,
        path: '/Menu',
        secure: false,
        exact: true,
        layout: DefaultLayouts,
    },
]

export default config;