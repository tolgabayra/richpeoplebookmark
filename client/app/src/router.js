import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        props: true,
        component: () => import("/src/views/Dashboard.vue")
    },
    {
        name: "Personprofile",
        path: "/personprofile",
        component: () => import("/src/views/Personprofile.vue")
    },
    {
        name: "Personlist",
        path: "/personlist",
        component: () => import("/src/views/Personlist.vue")
    },
    
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router