import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import About from '@/components/About'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/acerca',
      name: 'About',
      component: About,
      props: { page: 2 },
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})