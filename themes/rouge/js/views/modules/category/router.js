export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/category",
        name: "category",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Category/Category"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/sub-category",
        name: "sub-category",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/SubCategory/SubCategory"
            ),
    },
];
