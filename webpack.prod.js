//不同环境分开，生产环境
let {smart}=require('webpack-merge');
let base=require('webpack.base.js');

module.exports=smart(base,{
	mode:'production',
	
})
