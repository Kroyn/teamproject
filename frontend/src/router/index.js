import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/views/Home.vue';
import UserProfile from '../components/views/UserProfile.vue';
import UserLogin from '../components/views/UserLogin.vue';
import UserRegister from '../components/views/UserRegister.vue';
import ServiceCategory from '../components/views/ServiceCategory.vue'; 

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/profile', name: 'profile', component: UserProfile },
  { path: '/login', name: 'login', component: UserLogin },
  { path: '/register', name: 'register', component: UserRegister },
  { path: '/category/:categoryName', name: 'category', component: ServiceCategory } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
