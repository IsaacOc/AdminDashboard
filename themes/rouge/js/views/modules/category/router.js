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
        path: "/category/create",
        name: "CategoryCreate",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Category/CategoryCreate"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/category/:id",
        name: "SingleCategory",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Category/SingleCategory"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/sub-category/:id",
        name: "SingleSubCategory",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/SubCategory/SingleSubCategory"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/sub-category/create",
        name: "SubCategoryCreate",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/SubCategory/SubCategoryCreate"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/category/update/:id",
        name: "CategoryUpdate",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Category/CategoryUpdate"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/sub-category/update/:id",
        name: "SubCategoryUpdate",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/SubCategory/SubCategoryUpdate"
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
