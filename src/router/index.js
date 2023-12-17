import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";

import auth from "../auth";

const routes = [

    
    {
        path: '/api/allposts',
        name: 'AllPosts',
        component: () =>
        import ("../views/AllPosts.vue"),
        beforeEnter: async(to, from, next) => {
            console.log("Allposts authenitcate")
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/api/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/api/login",
        name: "LogIn",
        component: LogIn,
    },

    {
        path: '/:catchAll(.*)',
        name: 'AllPosts',
        component: () =>
            import ("../views/AllPosts.vue"),
            beforeEnter: async(to, from, next) => {
                console.log("Allposts authenitcate")
                let authResult = await auth.authenticated();
                if (!authResult) {
                    next('/api/login')
                } else {
                    next();
                }
            }
        },
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router