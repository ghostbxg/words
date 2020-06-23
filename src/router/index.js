import Vue from 'vue'
import login from './../login/login.vue'
import words from './../words/words.vue'
import phonelogin from './../login/phonelogin.vue'
import VueRouter from 'vue-router'
import zuce from './../login/zuce.vue'
import addword from './../words/addword.vue'
import update from './../login/updateuser.vue'
import updateword from './../words/updateword.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	mode:"history",
	routes:[
		{path:"/",redirect:"/login"},
		{path:"/words",name:'单词本',component:words},
		{
			path:"/login",name:"登录",component:login
		},
		{
			path:"/updateword",component:updateword
		},
		{
			path:"/addword",component:addword,
		},
		{
			path:"/update",component:update,
		},
		{
			path:"/zuce",component:zuce
		},{
			path:"/phonelogin",component:phonelogin
		}
	]
});

router.beforeEach(function(to,from,next){
	
	if(to.path.indexOf("login")!=-1){
		if(sessionStorage.getItem("loginuser")){
			next("/words")
		}else{
			next()
		}
	}else{
		next()
	}
})


export default router