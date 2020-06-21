import Vue from 'vue'
import login from './../login/login.vue'
import VueRouter from 'vue-router'
import zuce from './../login/zuce.vue'
Vue.use(VueRouter)

var router = new VueRouter({
	mode:"history",
	routes:[
		{path:"/",redirect:"/login"},
		{path:"/words",component:()=>import("./../words/words.vue"),},{
			path:"/login",component:login
		},
		{
			path:"/zuce",component:zuce
		}
	]
});

router.beforeEach(function(to,from,next){
	console.log(to.path)
	if(to.path.indexOf("login")!=-1){
		if(sessionStorage.getItem("loginuser")){
			next("/main")
		}else{
			next()
		}
	}else{
		next()
	}
})


export default router