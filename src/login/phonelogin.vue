<template>
	<div id="phonelogin">
		<div style="padding-top: 100px; text-align: center;">
			<div>
				<h2 style="background: white;color: #49c998;padding: 40px;">单词本</h2>
				<h5 style="color: white;">手机号码登录</h5>
			</div>
		</div>
	
			<div class="form-group" style="padding-top: 150px;">
				<input type="text" class="form-control" id="phone" name="phone" v-model="phone" placeholder="手机号">
			</div>
			<div class="form-group" style="padding-top: 25px;padding-bottom: 25px;">
		
				<input type="password" class="form-control" id="userpassword" placeholder="用户密码" v-model="userpassword">
			</div>
			<button type="submit" class="btn btn-info btn-block" style="color: white;" @click="dr">登录</button>
			<button type="submit" class="btn  btn-block" style="color: white;" @click="rb()">返回</button>
		
	</div>
</template>

<script>
	export default{
		data: function() {
			return {
				phone: '',
				userpassword: ''
			}
		},
		methods: {

			dr() {
				if (this.phone.length==11) {
					if (this.userpassword != null && this.userpassword != '') {
					var that = this;
					var ps=new URLSearchParams()
					ps.append("phone",this.phone)
					ps.append("password",this.userpassword)
					this.$http.post("/api/users/login",ps).then(function(result){
						if(result.data.code==0){
							sessionStorage.setItem("loginuser",result.data.data.name)
							sessionStorage.setItem("password",result.data.data.password)
							sessionStorage.setItem("id",result.data.data.id)
							sessionStorage.setItem("phone",result.data.data.phone)
							that.$router.push("/words") 
							}else{
								alert("登录失败，请检查其手机号和密码是否输入正确！")
							}
						
					});
						
						
						}else {
							alert("请输入密码！")
						}
		
					} else {
						alert("请输入正确的手机号码！")
					}
		
				},rb(){
				this.$router.push("/login")
				}
			},
			name: 'phonelogin'
	}
</script>

<style>
</style>
