import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import DrawerLayout from 'vue-drawer-layout'
	
Vue.use(DrawerLayout)
Vue.config.productionTip = false

import axios from 'axios' 
axios.interceptors.response.use(function (response) {
		return response.data;
	}, function (error) {

	});

Vue.prototype.$http = axios;
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
