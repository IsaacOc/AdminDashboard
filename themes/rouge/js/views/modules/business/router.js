export default [
    {
        path: "/business/business-group",
        name: "business-group",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/BusinessGroup/BusinessGroup"
            ),
    },

    {
        path: "/business/business-list",
        name: "business-list",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/BusinessList/BusinessList"
            ),
    },
];
