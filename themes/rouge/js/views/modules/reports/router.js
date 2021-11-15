export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/reports/app-earning",
        name: "reports-app-earning",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/AppEarning/AppEarning"
            ),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/reports/boooking",
        name: "reports-booking",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/Booking/Booking"),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/reports/customer",
        name: "reports-customer",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/Customer/Customer"),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/reports/payment-gateway",
        name: "reports-payment-gateway",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/PaymentGateway/PaymentGateway"),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/reports/provider",
        name: "reports-provider",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/Provider/Provider"),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/reports/provider-earning",
        name: "reports-provider-earning",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/ProviderEarning/ProviderEarning"),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/reports/revenue-received",
        name: "reports-revenue-received",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/RevenueReceived/RevenueReceived"),
    },
];
