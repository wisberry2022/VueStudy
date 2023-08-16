import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/vue-home.vue';
import About from '@/pages/vue-about.vue';
import Members from '@/pages/vue-members.vue';
import Root from '@/pages/vue-root.vue';
import Member from '@/pages/member-info.vue';
import NotFound from '@/pages/not-found.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:"/", component:Root},
    {path:"/about", component:About},
    {
      path:"/members", 
      component:Members,
      children: [
        {path:"/members/:id", component:Member}
      ]
    },
    
    {path:"/home", component:Home},
    {path:"/:paths(.*)*", name: "NotFound", component: NotFound}
  ]
})

export default router;