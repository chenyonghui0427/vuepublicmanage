import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: () => import('../views/Layout.vue'),
        children: [
            {
                path: '/',
                name: 'index',
                meta: {
                    title: "生成落地页",
                },
                component: () => import('../pages/index/index.vue')
            }, {
                path: '/pageCreate',
                name: 'pageCreate',
                meta: {
                    title: "生成落地页",
                },
                component: () => import('../pages/pageCreate/pageCreate.vue')
            },]
    }, {
        path: '*',
        name: "NotFound",
        component: () => import('../pages/NotFound/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
