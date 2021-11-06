export default [
    {
        path: "/reports/app-earning",
        name: "reports-app-earning",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/AppEarning/AppEarning"
            ),
    },

    {
        path: "/reports/boooking",
        name: "reports-booking",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/Booking/Booking"),
    },

    {
        path: "/reports/customer",
        name: "reports-customer",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/Customer/Customer"),
    },

    {
        path: "/reports/payment-gateway",
        name: "reports-payment-gateway",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/PaymentGateway/PaymentGateway"),
    },

    {
        path: "/reports/provider",
        name: "reports-provider",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/Provider/Provider"),
    },

    {
        path: "/reports/provider-earning",
        name: "reports-provider-earning",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/ProviderEarning/ProviderEarning"),
    },

    {
        path: "/reports/revenue-received",
        name: "reports-revenue-received",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/RevenueReceived/RevenueReceived"),
    },
];
