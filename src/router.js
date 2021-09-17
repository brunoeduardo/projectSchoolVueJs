import Vue from "vue";
import Router from 'vue-router';
import Students from './components/Student/Students';
import StudentDetail from './components/Student/StudentDetail';
import Theacher from './components/Teacher/Teacher';
import About from './components/About/About';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/teachers',
            name: 'Teachers',
            component: Theacher
        },
        {
            path: '/students/:teacher_id',
            name: 'Students',
            component: Students
        },
        {
            path: '/allstudents/',
            name: 'Students',
            component: Students
        },
        {
            path: '/studentDetail/:id',
            name: 'StudentDetail',
            component: StudentDetail
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})