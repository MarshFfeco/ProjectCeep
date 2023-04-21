import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/IndexView.vue'
import Student from '../views/Student.vue'
import Professor from '../views/Professor.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Index
    },
    {
        path: '/aluno',
        name: 'aluno',
        component: Student
    },
    {
        path: '/professor',
        name: 'professor',
        component: Professor
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router