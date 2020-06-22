import Vue from 'vue'
import App from './App.vue'
import DrawerLayout from 'vue-drawer-layout'
Vue.use(DrawerLayout)
import router from './router/index.js'

Vue.config.productionTip = false
import axios from 'axios' 
Vue.prototype.$http = axios;
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
