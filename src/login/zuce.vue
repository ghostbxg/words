<template>
	<div id="zuce">
		<div style="padding-top: 100px; text-align: center;">
			<div>
					 <h2 style="background: white;color: #49c998;padding: 40px;">单词本</h2>
					 <h5 style="color: white;">用户注册</h5>
			</div>
			  </div>
		<form>
		  <div class="form-group" style="padding-top: 50px;">
		    <input type="text" class="form-control" id="username" name="username" placeholder="用户名" >
		  </div>
		  <div class="form-group" style="padding-top: 25px;padding-bottom: 25px;">
		    <input type="password" class="form-control" id="userpassword" placeholder="用户密码">
		  </div>
		  <div class="form-group" style="padding-bottom: 25px;">
		    <input type="text" class="form-control" id="phone" placeholder="手机号">
		  </div>
		  <button type="submit" class="btn btn-info btn-block" style="color: white;">注册</button>
		</form>
	</div>
</template>

<script>
	export default {
	  name: 'zuce'
	}
</script>

<style>
</style>
