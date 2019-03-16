//express

let express=require('express');

let webpack=require('webpack');//加载webpack和其配置文件，后端前端启动一个端口

//中间件
let middle=require('webpack-dev-middleware');

let config=require('./webpack.config.js');

let compiler=webpack(config);



let app=express();



app.get('/user',(req,res)=>{
	res.json({name:'珠峰架构1'})
})
app.use(middle(compiler));
app.listen(3000);
