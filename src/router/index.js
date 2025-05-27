import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreView from '../views/SobreView.vue'
import ContatoView from '../views/ContatoView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/sobre', component: SobreView },
  { path: '/contato', component: ContatoView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
