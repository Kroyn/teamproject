import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/views/Home.vue';
import TourEquipment from '../components/views/Equipment.vue';
import UserProfile from '../components/views/UserProfile.vue';
import UserLogin from '../components/views/UserLogin.vue'; 
import UserRegister from '../components/views/UserRegister.vue'; 

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/equipment', name: 'equipment', component: TourEquipment },
  { path: '/profile', name: 'profile', component: UserProfile },
  { path: '/login', name: 'login', component: UserLogin },
  { path: '/register', name: 'register', component: UserRegister },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
