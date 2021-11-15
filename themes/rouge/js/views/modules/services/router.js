export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/services",
        name: "services",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Services/Services"
            ),
    },
];
