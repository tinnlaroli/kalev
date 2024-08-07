import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Grupos from '../components/Grupos.vue'; // Asegúrate de que la ruta sea correcta

const routes = [
  { path: '/', component: App },
  { path: '/grupos', component: Grupos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;