"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3001";
const PORT_PROXY = "3002";


// global css
loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});

/*
// local scss modules
loaders.push({
	test: /\.scss$/,
	exclude: /(node_modules|bower_components|public)/,
	loaders: [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
		'sass'
	]
});
*/

loaders.push({
	test: /\.scss$/,
  exclude: /node_modules/,
  loader: "style-loader!css-loader!sass-loader"
});


// local css modules
loaders.push({
	test: /[\/\\]docs[\/\\].*\.css/,
	exclude: /(node_modules|bower_components|public)/,
	loaders: [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
	]
});

module.exports = {
	entry: [
		`webpack-dev-server/client?http://${HOST}:${PORT}`,
		`webpack/hot/only-dev-server`,
		`./docs/index.js` // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'inline-source-map',
	output: {
		path: path.join(__dirname, 'docs'),
		filename: '/bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
      'materialistic': path.resolve(__dirname, './src')
    }
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./docs",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST,
		proxy: {
      '/restapi/*': {
        target: `http://${HOST}:${PORT_PROXY}`,
        secure: false
      }
    }
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './docs/docs-template.html'
		}),
	]
};
