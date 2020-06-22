<template>
	<div id="update">
			<div class="text-light text-center" style="background:#49c998 ;padding: 10px;">
									  修改密码
									   <a href="#" style="float: left;color: white;" @click="reback">&lt;</a>
									 
			</div>
	
			<div class="form-group" style="padding-top: 25px;">
				<input type="text" class="form-control" id="username" placeholder="用户名" v-model="username">
			</div>
			<div class="form-group" style="padding-top: 25px;">
				<input type="text" class="form-control" id="phone" name="phone" v-model="phone" placeholder="手机号">
			</div>
			<div class="form-group" style="padding-top: 25px;padding-bottom: 25px;">
				<input type="text" class="form-control" id="userpassword" placeholder="用户密码" v-model="userpassword">
			</div>
			<button type="submit" class="btn btn-info btn-block" style="color: white;" @click="update">修改</button>
	</div>
</template>

<script>
	export default{
		data: function() {
			return {
				id:sessionStorage.getItem("id"),
				username: sessionStorage.getItem("loginuser"),
				userpassword: sessionStorage.getItem("password"),
				phone: sessionStorage.getItem("phone")
			}
		},
		methods: {
			update(){
				
					if (this.username != '') {
						if ( this.userpassword != '') {
						if ( this.phone.length==11) {
						var that = this;
						var ps=new URLSearchParams()
						ps.append("id",this.id)
						ps.append("name",this.username)
						ps.append("phone",this.phone)
						ps.append("password",this.userpassword)
						this.$http.post("/api/users/update",ps).then(function(result){
							if(result){
								alert("修改成功，请重新登录")
								sessionStorage.removeItem("loginuser");
								sessionStorage.removeItem("phone");
								sessionStorage.removeItem("id");
								sessionStorage.removeItem("password");
								that.$router.push("/login")
							}else{
								alert("修改失败")
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
						
					
			},reback(){
				this.$router.push("/words")
				}
			
			},
		name:'update'
		}
</script>

<style>
</style>
