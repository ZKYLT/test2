//不同环境分开，开发环境
let {smart}=require('webpack-merge');
let base=require('webpack.base,js');

module.exports=smart(base,{
	mode:'development'
})
