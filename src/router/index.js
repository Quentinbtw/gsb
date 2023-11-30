import { createRouter, createWebHashHistory } from 'vue-router'
import PageLogin from '../views/PageLogin.vue'
import AccueilView from '../views/AccueilView.vue'
import MedecinView from '../views/MedecinView.vue'
import RapportsView from '../views/RapportsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageLogin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/medecins',
    name: 'medecins',
    component: MedecinView
  },
  {
    path: '/rapports',
    name: 'rapports',
    component: RapportsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
