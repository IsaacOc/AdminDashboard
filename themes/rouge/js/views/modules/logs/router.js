export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/email",
        name: "email",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Email/Email"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/notifications",
        name: "notifications",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Notifications/Notifications"
            ),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/sms",
        name: "sms",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Sms/Sms"
            ),
    },
];
