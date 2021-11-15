export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: "/accounting",
        name: "accounting",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/Accounting/Accounting"
            ),
    },

    // Accounting Statement routes
    {
        meta: {
            requiresAuth: true,
        },
        path: "/accounting-statement/app",
        name: "accounting-statement-app",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/AccountingStatement/views/app/App"
            ),
    },

    {
        meta: {
            requiresAuth: true,
        },   
        path: "/accounting-statement/customer",
        name: "accounting-statement-customer",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/AccountingStatement/views/customer/Customer"
            ),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/accounting-statement/operator",
        name: "accounting-statement-operator",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/AccountingStatement/views/operator/Operator"
            ),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/accounting-statement/pg",
        name: "accounting-statement-pg",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/AccountingStatement/views/pg/PG"
            ),
    },

    {
        meta: {
            requiresAuth: true,
        },
        path: "/accounting-statement/provider",
        name: "accounting-statement-provider",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/AccountingStatement/views/provider/Provider"
            ),
    },
];
