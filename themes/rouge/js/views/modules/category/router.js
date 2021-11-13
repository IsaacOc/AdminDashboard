export default [
    {
        path: "/category",
        name: "category",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Category/Category"
            ),
    },
    {
        path: "/sub-category",
        name: "sub-category",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/SubCategory/SubCategory"
            ),
    },
];
