export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/bookings",
        name: "bookings",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Bookings/Bookings"
            ),
    },
];
