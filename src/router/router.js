import Home from '@/pages/Home'
import { createWebHistory } from 'vue-router/dist/vue-router'

const routes = [
    {
        path: '/',
        component: Home
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router