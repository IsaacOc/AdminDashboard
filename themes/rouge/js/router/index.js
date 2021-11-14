import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";
import dashboard from "../views/modules/dashboard";
import reports from "../views/modules/reports";
import business from "../views/modules/business";
import bookings from "../views/modules/bookings";
import services from "../views/modules/services";
import financial from "../views/modules/financial";
import marketing from "../views/modules/marketing";
import customers from "../views/modules/customers";
import ServiceProviders from "../views/modules/ServiceProviders";
import logs from "../views/modules/logs";
import category from "../views/modules/category";
import ratings from "../views/modules/ratings";

const routes = [
    {
        // Document title tag
        // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
        meta: {
            title: "Dashboard",
        },
        path: "/",
        name: "home",
        component: Home,
    },
    {
        meta: {
            title: "Tables",
        },
        path: "/tables",
        name: "tables",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "tables" */ "../views/Tables"),
    },
    {
        meta: {
            title: "Forms",
        },
        path: "/forms",
        name: "forms",
        component: () =>
            import(/* webpackChunkName: "forms" */ "../views/Forms"),
    },
    {
        meta: {
            title: "Profile",
        },
        path: "/profile",
        name: "profile",
        component: () =>
            import(/* webpackChunkName: "profile" */ "../views/Profile"),
    },
    {
        meta: {
            title: "Ui",
        },
        path: "/ui",
        name: "ui",
        component: () => import(/* webpackChunkName: "ui" */ "../views/Ui"),
    },
    {
        meta: {
            title: "Responsive layout",
        },
        path: "/responsive",
        name: "responsive",
        component: () =>
            import(/* webpackChunkName: "responsive" */ "../views/Responsive"),
    },
    {
        meta: {
            title: "Login",
            fullScreen: true,
        },
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Login"),
    },
    {
        meta: {
            title: "Register",
            fullScreen: true,
        },
        path: "/register",
        name: "register",
        component: () => import("../views/Register"),
        // component: () =>
        //     import(/* webpackChunkName: "register" */ "../views/Register"),
    },
    {
        meta: {
            title: "Error",
            fullScreen: true,
        },
        path: "/error",
        name: "error",
        component: () =>
            import(/* webpackChunkName: "error" */ "../views/Error"),
    },
    ...dashboard.router,
    ...reports.router,
    ...business.router,
    ...bookings.router,
    ...services.router,
    ...financial.router,
    ...marketing.router,
    ...customers.router,
    ...ServiceProviders.router,
    ...logs.router,
    ...category.router,
    ...ratings.router,
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

export default router;
