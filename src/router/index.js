import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {

    path:'/logon',// href="/logon" 
    name:'logonUser',
    component: () => import('@/views/logonView.vue')
  },
  {

    path:'/ProdutoVenda',// href="/logon" 
    name:'ProdutoVenda',
    component: () => import('@/components/pages/produto/produtovenda.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
