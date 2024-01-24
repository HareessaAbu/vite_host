// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue'; // Import your views/components

const routes = [
    {
        path: '',
        component: () => import('@/layouts/Index'),
    },
    {
        path: '/',
        component: () => import('@/layouts/Auth'),
        meta: {
            guest: true,
        },
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/auth/Login'),
            },
            // {
            //     path: 'forgot-password',
            //     name: 'ForgotPassword',
            //     component: () => import('@/views/auth/ForgotPassword'),
            // },
            // {
            //     path: 'reset-password',
            //     name: 'ResetPassword',
            //     component: () => import('@/views/auth/ResetPassword'),
            //     props: route => ({ token: route.query.token, email: route.query.email }),
            // },
            // {
            //     path: 'activate-account',
            //     name: 'ActivateAccount',
            //     component: () => import('@/views/auth/ActivateAccount'),
            // },
        ],
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
