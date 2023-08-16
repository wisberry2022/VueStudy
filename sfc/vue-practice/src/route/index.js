import { createRouter, createWebHistory } from 'vue-router';
import loginPage from '@/components/pages/login-page.vue';


const AppRoute = createRouter({
  history:  createWebHistory(),
  routes: [
    {path:"/", component:loginPage},
    
  ]
});

export default AppRoute;