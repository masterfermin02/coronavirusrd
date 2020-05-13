import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import Collaborators from '@/components/Collaborators'
import DashboardProvince from '@/components/DashboardProvince'
import AllPost from '@/components/blog/AllPost'

Vue.use(Router);

const About = () => import('@/components/About')
const Feedback = () => import('@/components/Feedbacks')
const BadGateway = () => import('@/components/BadGateway')

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
      path: '/acerca',
      name: 'About',
      component: About,
      props: { page: 2 },
    },
    {
      path: '/sugerencias',
      name: 'Feedbacks',
      component: Feedback,
      props: { page: 3 },
    },

    {
      path: '/colaboradores',
      name: 'Collaborators',
      component: Collaborators,
      props: { page: 4 },
    },
    {
      path: '/province/:title',
      name: 'DashboardProvince',
      component: DashboardProvince,
      props: { page: 7 },
    },
    {
      path: '/posts',
      name: 'posts',
      component: AllPost,
      props: { page: 7 },
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 6 },
      redirect: '/404'
    }
  ]
})
