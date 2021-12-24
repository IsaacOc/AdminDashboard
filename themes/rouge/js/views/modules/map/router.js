export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/maps",
        name: "maps",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/maps/maps"
            ),
    },
];
