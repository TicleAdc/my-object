import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
// import Show from '../view/Show.vue'
import Login from '../view/Login.vue'
import Books from '../view/Books.vue'
import AddBooks from "../view/AddBooks.vue"
import Users from '../view/Users.vue'
import AddUsers from '../view/AddUsers.vue'
import LendBook from '../view/LendBook.vue'
import Information from '../view/Information.vue'
import Manager from '../view/Manager.vue'
import AddManager from '../view/AddManager.vue'

Vue.use(Router)

const routes = [
    {
        name: 'login',
        path: '/',
        component: Login
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        redirect:'/books',
        children: [
            {
                path: '/books',
                name: 'books',
                component: Books
            },
            {
                path: '/addbook',
                name: 'addbook',
                component: AddBooks
            },
            {
                path:'/users',
                name:'users',
                component:Users
            },
            {
                path:'/adduser',
                name:'adduser',
                component:AddUsers
            },
            {
                path:'/lendbook',
                name:'lendbook',
                component:LendBook
            },
            {
                path:'/information',
                name:'information',
                component:Information
            },
            {
                path:'/manager',
                name:'manager',
                component:Manager
            },
            {
                path:'/addmanager',
                name:'addmanager',
                component:AddManager
            }
        ]
    }
]

const router = new Router({
    // code:history,
    routes,
})

export default router