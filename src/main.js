import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-161659874-1',
  router
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
