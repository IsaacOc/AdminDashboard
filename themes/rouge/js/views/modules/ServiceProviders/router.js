export default [
    {
        path: "/service-provider-list",
        name: "provider-list",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/ProviderList/ProviderList"
            ),
    },
    {
        path: "/provider-plans",
        name: "provider-plans",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/ProviderPlans/ProviderPlans"
            ),
    },
];
