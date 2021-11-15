export default [
    {
        meta: {
            requiresAuth: true,
        },
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "modules" */'./views/Dashboard/Dashboard'),
    },
]