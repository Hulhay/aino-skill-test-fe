import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/HomeComponent.vue'),
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next({ name: 'Login' })
            } else {
                next()
            }
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/LoginComponent.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/components/RegisterComponent.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router