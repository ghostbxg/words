<template>
	  <div id="words">
			  <vue-drawer-layout
			   :drawer-width="180"
			       :drawable-distance="160"
			       :z-index="0"
			       :content-drawable="true"
				   ref="drawerLayout">
			    <div class="drawer" slot="drawer">
			      <div class="text">
				     <div class="text-center pt-4 pb-4">
						 <strong>{{username}}</strong>
				  </div>
				  <div class="text-center pt-4 pb-4">
				  		<li class="btn d-block" @click="update">修改密码</li>
						<li class="btn d-block" @click="exit">退出</li>
						<a href="javascript:void(0)" class="btn"
						           @click="handleToggleDrawer">返回</a>
				  </div>
			    </div>
				</div>
			    <div class="content" slot="content">
			      <div class="text">
					  <div class="text-light text-center" style="background:#49c998 ;padding: 10px;">
						  <a style="float: left;color: white;" href="#"
						  @click="handleToggleDrawer">主页</a>
						  我的单词本
						  <a style="float: right;color: white;" @click="add" href="#">添加单词</a>
					  </div>
					  
					  <div class="container">
					  <div class="py-2 mt-2 border shadow" v-for="(word,index) in words">
						                  <div class="row">
					  						 <div class="col-7 col-lg-10">
												  <p class="pl-2">{{word.word}}&nbsp;&nbsp;
												  {{word.pro}}</p>
												  <p class="pl-2">{{word.mean}}</p>
											  </div>
											 <div class="col">
											 <button class="btn btn-outline-primary my-1" type="submit" @click="update(word)">修改</button>
											  <button class="btn btn-outline-danger" type="submit" @click="deleteone(index,word.id)">删除</button>
											  </div>
					  						</div> 
											  
					  </div>
		             </div>
				  </div>
			    </div>
			  </vue-drawer-layout>


	  </div>
</template>

<style>
	li{
	padding-top: 20px;	
	}
</style>

<script>

                         
			
	
	
export default{

	data:function(){
		return {
			username:sessionStorage.getItem("loginuser"),
			words:[]
		}
	},methods:{
		 handleToggleDrawer() {
		        this.$refs.drawerLayout.toggle();
		      },
		exit(){
			sessionStorage.removeItem("loginuser");
			sessionStorage.removeItem("phone");
			sessionStorage.removeItem("id");
			sessionStorage.removeItem("password");
			this.$router.push("/login")
		},update(){
			this.$router.push("/update")
		},
		add(){
			this.$router.push("/addword")
		},selectAll(){
			var that=this
			var ps=new URLSearchParams()
			ps.append("userid",sessionStorage.getItem("id"))
			this.$http.post('/api/words/selectAll',ps)
			   .then(function (result) {
						that.words=result.data							
			   })	
			},deleteone(index,id){
				this.words.splice(index, 1)
				var ps=new URLSearchParams()
				ps.append("id",id)
				this.$http.post('/api/words/delete',ps).then(function (result) {
					   if(result){
							alert("删除成功！")			
							}else{
								alert("删除失败！")	
								}
				   })	
			},update(word){
				sessionStorage.setItem("word",word.word)
				sessionStorage.setItem("pro",word.pro)
				sessionStorage.setItem("wid",word.id)
				sessionStorage.setItem("mean",word.mean)
				this.$router.push("/updateword")
			}
	},created:function(){
		this.selectAll()
		},
	name:'words'
}
</script>

<style>
</style>
