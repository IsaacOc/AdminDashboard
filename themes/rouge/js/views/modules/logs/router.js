export default [
    {
        path: "/email",
        name: "email",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Email/Email"
            ),
    },
    {
        path: "/notifications",
        name: "notifications",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Notifications/Notifications"
            ),
    },

    {
        path: "/sms",
        name: "sms",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Sms/Sms"
            ),
    },
];
