import {createRouter, createWebHistory} from 'vue-router'
import mostarUsuarios from '../components/mostrarUsuarios.vue'
import administrarUsuarios from '../components/administrarUsuarios.vue'

const routes = [
    {
        path: '/mostrarUsuarios',
        name: 'mostarUsuarios',
        component: mostarUsuarios
    },
    {
        path: '/administrarUsuarios',
        name: 'administrarUsuarios',
        component: administrarUsuarios
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
