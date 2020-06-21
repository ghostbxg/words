<template>
	<div id="login">
		<div style="padding-top: 100px;">
			<div>
				<h2 style="background: white;color: #49c998;padding: 40px;">单词本</h2>
				<h5 style="color: white;">English Word Book</h5>
			</div>
		</div>
		<form>
			<div class="form-group" style="padding-top: 50px;">
				<input type="text" class="form-control" id="username" name="username" v-model="username" placeholder="用户名">
			</div>
			<div class="form-group" style="padding-top: 25px;padding-bottom: 25px;">

				<input type="password" class="form-control" id="userpassword" placeholder="用户密码" v-model="userpassword">
			</div>
			<button type="submit" class="btn btn-info btn-block" style="color: white;" @click="dr">登录</button>
		</form>
		<div class="form-row">
			<div class="col-6 text-center" style="padding-top: 20px;padding-bottom: 10px;">
				<a style="color: white;" @click="phonelogin" href="#">手机号登录</a>
			</div>
			<div class="col text-center" style="padding-top: 20px;padding-bottom: 10px;">
				<a style="color: white;" @click="zuce" href="#">注册</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				username: '',
				userpassword: ''
			}
		},
		methods: {
			phonelogin() {
				this.$router.push("/zuce")
			},
			zuce() {
				this.$router.push("/zuce")
			},
			dr() {
				if (this.username != null && this.username != '') {
					if (this.userpassword != null && this.userpassword != '') {
					
					var that = this;
					this.$http.post("/api/login",{username:this.username,password:this.password}).then(function(result){
						
						if(result.stateCode==200){
							//保存当前登陆用户的信息
							//sessionStorage:可以在当前浏览器范围内保存信息，当浏览器关闭后数据清空
							//localStorage: 与cookie类似可以保存得更久
							sessionStorage.setItem("loginuser",result.data.name)
							that.$router.push("/words")
						}else{
							console.log("登陆失败！");
						}
						
					});
						
						
						}else {
							alert("请输入密码！")
						}

					} else {
						alert("请输入用户名！")
					}

				}
			},
			name: 'login'
		}
</script>

<style>
</style>
