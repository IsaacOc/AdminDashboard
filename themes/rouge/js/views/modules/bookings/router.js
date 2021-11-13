export default [
    {
        path: "/bookings",
        name: "bookings",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Bookings/Bookings"
            ),
    },
];
