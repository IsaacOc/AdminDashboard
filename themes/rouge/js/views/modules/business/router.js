export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/business/business-group",
        name: "business-group",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/BusinessGroup/BusinessGroup"
            ),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/business/business-list",
        name: "business-list",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/BusinessList/BusinessList"
            ),
    },
];
