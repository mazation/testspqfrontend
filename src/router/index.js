import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import ConfirmEmail from "../views/ConfirmEmail.vue";
import Profile from "../views/Profile.vue"
import Logout from "../components/Logout.vue"
import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/confirm/:confirmToken",
        name: "ConfirmEmail",
        component: ConfirmEmail,
        props: true
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
export default router