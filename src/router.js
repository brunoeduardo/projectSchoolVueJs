import Vue from "vue";
import Router from 'vue-router'
import Students from './components/Student/Students';
import Theacher from './components/Teacher/Teacher'
import About from './components/About/About'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/teachers',
            name: 'Teachers',
            component: Theacher
        },
        {
            path: '/students',
            name: 'Students',
            component: Students
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})