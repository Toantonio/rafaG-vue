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
    path: '/ProdutoAdd',
    name: 'ProAdd',  
    component: () => import(/* webpackChunkName: "about" */ '@/views/ProdutoAddView.vue')
  },
  {

    path:'/logon',// href="/logon" 
    name:'logonUser',
    component: () => import('@/views/logonView.vue')
  },
  {

    path:'/logonCadas',// href="/logon" 
    name:'LogonCadastro',
    component: () => import('@/views/logonCadastroView.vue')
  },
  {

    path:'/ProdutoVenda',// href="/logon" 
    name:'ProdutoVenda',
    component: () => import('@/views/produtovendaView.vue')
  },
  {

    path:'/ProdutoCadastro',// href="/logon" 
    name:'ProdutoCadastro',
    component: () => import('@/views/produtovendaView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
