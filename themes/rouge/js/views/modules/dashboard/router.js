export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "modules" */'./views/Dashboard/Dashboard'),
    },
]