import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeVue.vue';
import Favorites from '../views/FavoritesVue.vue';
import About from '../views/AboutVue.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;