export default [
    {
        path: "/customers",
        name: "customers",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Customers/Customers"
            ),
    },
];
