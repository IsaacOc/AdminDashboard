export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/provider-ratings",
        name: "provider-ratings",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/ProviderRatings/ProviderRatings"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/customer-ratings",
        name: "customer-ratings",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/CustomerRatings/CustomerRatings"
            ),
    },
];
