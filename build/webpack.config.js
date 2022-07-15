const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
	mode: "production",
	entry: path.resolve(__dirname, "../src/main.js"),
	output: {
		path: path.resolve(__dirname, "../lib"),
		publicPath: "/",
		filename: "index.js",
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: "vue-loader",
		},
		{
			test: /\.(ts|js)x?$/,
			exclude: /node_modules/,
			loader: "babel-loader",
		}, 
		{
			test: /\.(png|jpe?g|gif)$/i,
			loader: "file-loader",
			options: {
				name: "images/[name].[ext]"
			},
		},
    {
      test: /\.(css|scss)(\?.*)?$/,
      use: [ 
        { loader: 'style-loader'},
        { loader: 'css-loader', options: { sourceMap: true } }, 
        { loader: 'sass-loader', options: { sourceMap: true } },   
      ]
    }
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
	},
	plugins: [new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "../public/index.html"),
		filename: "./index.html",
	}), new VueLoaderPlugin(), ],
};
module.exports = config;