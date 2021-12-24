export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/cities",
        name: "cities",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Cities/City"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/city/create",
        name: "CityCreate",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Cities/CityCreate"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/storeFront",
        name: "storeFront",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Storefront/storefront"
            ),
    },
];
