import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import About from '@/components/About'
import BadGateway from '@/components/BadGateway'
import Feedback from '@/components/Feedbacks'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/#acerca',
      name: 'About',
      component: About,
      props: { page: 2 },
    },
    {
      path: '/#sugerencias',
      name: 'Feedbacks',
      component: Feedback,
      props: { page: 3 },
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})
