<template>
	<div id="zuce">
		<div style="padding-top: 100px; text-align: center;">
			<div>
					 <h2 style="background: white;color: #49c998;padding: 40px;">单词本</h2>
					 <h5 style="color: white;">用户注册</h5>
			</div>
			  </div>
		
		  <div class="form-group" style="padding-top: 50px;">
		    <input type="text" class="form-control" id="username" name="username" v-model="username" placeholder="用户名" >
		  </div>
		  <div class="form-group" style="padding-top: 25px;padding-bottom: 25px;">
		    <input type="password" class="form-control" id="userpassword"  v-model="userpassword"  placeholder="用户密码">
		  </div>
		  <div class="form-group" style="padding-bottom: 25px;">
		    <input type="text" class="form-control" id="phone" v-model="phone" placeholder="手机号">
		  </div>
		  <button type="submit" class="btn btn-info btn-block" style="color: white;" @click="zc()">注册</button>
		   <button type="submit" class="btn  btn-block" style="color: white;" @click="rb()">返回</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				username: '',
				userpassword: '',
				phone:''
			}
		},
		methods: {
		zc() {
			if (this.username != '') {
				if ( this.userpassword != '') {
				if ( this.phone.length==11) {
				var that = this;
				var ps=new URLSearchParams()
				ps.append("name",this.username)
				ps.append("phone",this.phone)
				ps.append("password",this.userpassword)
				this.$http.post("/api/users/insert",ps).then(function(result){
					
					if(result){
						alert("注册成功，请登录")
						that.$router.push("/login")
					}else{
						alert("注册失败")
					}
					
				});
					
					}else {
						alert("请输入正确的电话号码！")
					}
					
					}else {
						alert("请输入密码！")
					}
				
				} else {
					alert("请输入用户名！")
				}
				
			},rb(){
				this.$router.push("/login")
				}
		},
	  name: 'zuce'
	}
</script>

<style>
</style>
