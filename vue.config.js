module.exports={
	devServer: {
	    proxy: {
		//在当前的项目中如果输入了/api这个路径，那么就相当于请求了target的目录路径
	      '/api': {
			  //被代理的目标服务器
	        target: 'http://localhost:80', 
	        changeOrigin: true,  //运行跨域
			//路径重写
			pathRewrite: {
				'^/api': '/'
			}
	      }
	    }
	  }
}