import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Loading.vue'),
      props: {msg: 'Olá caralho'}
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path:'/library',
      name: 'library',
      component: () => import('../components/Library.vue')
    },
    {
      path:'/loadingLibrary',
      name: 'loadingLibrary',
      component: () => import('../components/LoadingLibrary.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/auth/Register.vue')
    },
    {
      path: '/addSong',
      name: 'addSong',
      component: () => import('../components/AddSong.vue')
    }
  ]
})

export default router
