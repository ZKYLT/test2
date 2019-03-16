let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let CleanWebpackPlugin=require('clean-webpack-plugin');
let CopyWebpackPlugin=require('copy-webpack-plugin');
let Webpack=require('webpack');
//webpack中的小插件
/* cleanWebpackPlugin 需要安装,重新打包之前把老的dist目录删掉重新生成
 * copyWebpackPlugin  需要安装,复制文件到dist目录下
 * bannerPlugin		    内置的，版权声明插件
 */
module.exports={
	entry:{
		home:'./src/index.js',
	},
	resolve:{ //解析，第三方包common
		modules:[path.resolve('node_modules')],
		extensions:['.js','.css','.json','.vue']//先找.js找不到的话找.css依次向下找
//		mainFields:['style','main']//先找style在找main
//		mainFiles:[],//入口文件的名字如index.js
//		alias:{ //别名 
//			bootstrap:'bootstrap/dist/css/bootstrap.css'
//		}
	},
	devServer:{
		//第一种情况
//		proxy:{
////			'/api':'http://localhost:3000' //配置了一个代理，解决跨域请求
//			'/api':{ //重写的方式，把请求代理到express服务器上
//				target:'http://localhost:3000',
//				pathRewrite:{'/api':''}
//			}
//		}
		//第二种情况，我们前端只想单纯模拟数据
//		before(app){ //提供的方法，钩子方法
//			app.get('/user',(req,res)=>{
//				res.json({name:'珠峰架构'})
//			})
//		}
		//第三种情况，有服务端，不用代理来处理，能不能再服务端中启动webpack端口用webpack端口
	},
//	mode:'production',
	//source-map:源码映射，会单独生成一个sourcemap文件，出错了会标识当前报错的列和行，大而全
	//eval-source-map,不会产生单独的文件，但是可以显示出错的行和列
	//cheap-module-source-map不会产生列但是是一个单独的映射文件,产生后你可以保留起来用于调试
	//cheap-module-eval-source-map不会产生文件也不会产生错误列
//	devtool:'eval-source-map',//增加映射文件，可以帮我们调试源代码
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.html',
			filename:'index.html',
		}),
		new Webpack.DefinePlugin({
//			DEV:"'production'"//相当于'dev'这样的dev,不加相当于变量,不推荐
			DEV:JSON.stringify('production'),
			FLAG:'true',
			EXPORESSION:'1+1'
		})
//		new CleanWebpackPlugin(),
//		new CopyWebpackPlugin([//拷贝插件
//			{from:'./doc',to:'./'}
//		]),
//		new Webpack.BannerPlugin('make 2019 by jw')
	]
}
