export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/order",
        name: "order",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/orders/orders"
            ),
    },
];
