var webpack             =      require('webpack');
var Ex                  =      require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量的配置
var WEBPACK_ENV			=  process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);
//获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name,title){
	return{
		template : './src/view/'+name+'.html',
		filename : 'view/'+name+'.html',
		inject   : true,
		title    : title,
		hash     : true,
		chunks   : ['common',name]
	};

};
//webpackcofig
var config = {
	entry: {
		'common'     		: ['./src/page/common/index.js','webpack-dev-server/client?http://localhost:8088/'],
		'index'      		: ['./src/page/index/index.js'],
		'user-login' 		: ['./src/page/user-login/index.js'],
		'result'     		: ['./src/page/result/index.js'],
		'user-register'     : ['./src/page/user-register/index.js'],
		'user-pass-reset'   : ['./src/page/user-pass-reset/index.js'],
		'user-center'       : ['./src/page/user-center/index.js'],
		'user-center-update': ['./src/page/user-center-update/index.js'],
		'user-pass-update'  : ['./src/page/user-pass-update/index.js'],
		'list'              : ['./src/page/list/index.js'],
		'detail'            : ['./src/page/detail/index.js'],
		'news'              : ['./src/page/news/index.js'],
		'life'              : ['./src/page/life/index.js'],
        

        
        
        
        

	},
	output: {
		path : './dist',
		publicPath:'/dist',
		filename : 'js/[name].js'
	},
	externals : {
		'jquery' : 'window.jQuery'
	},
	module: {
    	loaders: [
      	{ test: /\.css$/, loader:  Ex.extract('style-loader', 'css-loader','less-loader')  },
      	{ test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader:  'url-loader?limit=100&name=resource/[name].[ext]' },
      	{ test: /\.string$/, loader: 'html-loader'}
    	]
  	},
  	resolve : {
  		alias : {
  			node_modules    : __dirname + '/node_modules',
  			util    		: __dirname + '/src/util',
  			page    		: __dirname + '/src/page',
  			service 		: __dirname + '/src/service',
  			image   		: __dirname + '/src/image',

  		}
  	},
	plugins : [
		//独立通用模块到js/base.js
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'js/base.js'
		}),
		//css单独打包到文件里
		new Ex("css/[name].css"),
		//html模板的处理
		new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
		new HtmlWebpackPlugin(getHtmlConfig('login','用户登录')),
		new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
		new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
		new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
		new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
		new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
		new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
		new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
		new HtmlWebpackPlugin(getHtmlConfig('list', '课程列表')),
		new HtmlWebpackPlugin(getHtmlConfig('detail', '课程页面')),
		new HtmlWebpackPlugin(getHtmlConfig('news', '新闻页面')),
		new HtmlWebpackPlugin(getHtmlConfig('life', '活动页面')),

        
        
        
        
        
        
	]
};

if('dev'===WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
}

module.exports = config;