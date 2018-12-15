import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Goals from './components/goals/Goals.vue';

export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/goals', component: Goals },
    { path: '*', redirect: '/' }
  ]
});