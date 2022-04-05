// createRouter crea la instancia del enrutador y pasa la opción routes
// Existe una opción history nos permite elegir diferentes modos de historial. createWebHashHistory - createWebHistory (HTML5)

import {createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registro from './views/Register.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Registro},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;