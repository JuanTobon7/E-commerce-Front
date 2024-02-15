import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import activities from '../views/Actividades.vue'
import aboutMe from '../views/QuienesSomos.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            name: 'TheHome',
            path: '/',
            component: home,
        },
        {
            name: 'Activity',
            path: '/actividades',
            component: activities
        },
        {
            name: 'AboutMe',
            path: '/nosotros',
            component: aboutMe
        }
    ]
})

export default router