export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/customers",
        name: "customers",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Customers/Customers"
            ),
    },
];
