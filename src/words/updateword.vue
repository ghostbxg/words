<template>
	<div id="updateword">
		<div class="text-light text-center" style="background:#49c998 ;padding: 10px;">
									  修改单词
									  <a href="#" style="float: left;color: white;" @click="reback"><strong>&lt;返回</strong></a>
									 
			</div>
			
			<div class="py-5"></div>
		
		<div class="form-group row text-light py-3">
		  <label for="word" class="col-2 col-form-label">单词</label>
		  <div class="col-8">
		    <input type="text" class="form-control" id="word"v-model="word"  placeholder="请输入一个单词">
		  </div>
		</div>
		
			  <div class="form-group row text-light py-3">
			    <label for="mean" class="col-2 col-form-label">发音</label>
			    <div class="col-8">
			      <input type="text" class="form-control" id="pro" v-model="pro" placeholder="请输入此单词的发音">
			    </div>
			  </div>
			  <div class="form-group row py-3">
			    <label for="pro" class="col-2 col-form-label text-light">中文</label>
			    <div class="col-8">
			      <input type="text" class="form-control" id="mean"v-model="mean" placeholder="请输入汉语意思">
			    </div>
			  </div>
			  <div class="col text-center" style="padding-top: 150px;padding-bottom: 50px;">
			  <button type="submit" class="btn btn-info btn-block" style="color: white;" @click="updateword">确认修改</button>
			  </div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				word: sessionStorage.getItem("word"),
				mean: sessionStorage.getItem("mean"),
				pro:sessionStorage.getItem("pro"),
				id:sessionStorage.getItem("wid"),
				flag:true
			}
		},	methods: {
			
			updateword(){
			
					
				var that = this;
				var ps=new URLSearchParams()
				ps.append("id",this.id)
				ps.append("word",this.word)
				ps.append("mean",this.mean)
				ps.append("pro",this.pro)
				ps.append("userid",sessionStorage.getItem("id"))
				
				if(this.word!=''&&this.mean!=''&&this.pro!=''){
					
				
				
				this.$http.post("/api/words/update",ps).then(function(result){
					
					if(result){
						alert("修改成功")
						that.$router.push("/words")
					}else{
						alert("修改失败")
					}
					
				});
				}else{
					alert("单词数据不得为空！！")
				}
				
				
			},
			reback(){
				this.$router.push("/words")
				}
			},
		name:'updateword'
	}
</script>

<style>
</style>
