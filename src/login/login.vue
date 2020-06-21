<template>
	<div id="login">
		<div style="padding-top: 100px; text-align: center;">
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
				this.$router.push("/phonelogin")
			},
			zuce() {
				this.$router.push("/zuce")
			},
			dr() {
				if (this.username != null && this.username != '') {
					if (this.userpassword != null && this.userpassword != '') {
					axios.post("/api/login",{name:this.username,word:this.userpassword}).then(function(result){
						console.log(result);
						/* that.$router.push("/words") */
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
