export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/service-provider-list",
        name: "provider-list",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/ProviderList/ProviderList"
            ),
    },
    {
        meta: {
            requiresAuth: true,
        },
        path: "/provider-plans",
        name: "provider-plans",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/ProviderPlans/ProviderPlans"
            ),
    },
];
