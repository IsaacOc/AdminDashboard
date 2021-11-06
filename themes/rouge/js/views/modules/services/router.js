export default [
    {
        path: "/services",
        name: "services",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Services/Services"
            ),
    },
];
