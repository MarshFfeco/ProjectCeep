import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/IndexView.vue'
import Student from '../views/StudentView.vue'
import Professor from '../views/ProfessorView.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Index
    },
    {
        path: '/student',
        name: 'student',
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