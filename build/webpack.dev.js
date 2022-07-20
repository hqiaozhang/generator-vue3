const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const config = require('./base.config')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')
module.exports = merge(common, {
  // 入口
  entry: {
    main:[
    　　'webpack-hot-middleware/client', // 热加载
    　　'./src/main.ts'
    　],
    },
  mode: 'development', // 开发环境
  devtool: 'inline-source-map', // 原始源代码
  devServer: {  
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ]
    },
     // 设置热替换
     hot: true,
     // 设置页面引入
    //  inline: true,
     // 一切服务都启用gzip 压缩：
     compress: true,  
     // 将运行进度输出到控制台
    //  progress: true,
     // 提供给外部访问地址、端口
     host: HOST || config.dev.host,
     port: PORT || config.dev.port,
    //  overlay: config.dev.errorOverlay
    //    ? { warnings: false, errors: true }
    //    : false,
     // 此路径下的打包文件可在浏览器中访问
     publicPath: config.dev.assetsPublicPath,
      // 如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。
     proxy: config.dev.proxyTable, 
     open: false
  },
  module: {
    rules: [ 
      {
        test: /\.(css|scss)(\?.*)?$/,
        use: [
          // { loader: 'vue-style-loader' },
          { loader: 'style-loader'},
          { loader: 'css-loader', options: { sourceMap: true } }, 
          { loader: 'sass-loader', options: { sourceMap: true } },  
          { loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                utils.resolve('src/assets/styles/_mixins.scss'),
                utils.resolve('src/assets/styles/_variables.scss')
              ]
            }
          }
        ]
      } 
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
		  filename: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(), //  // 启动HMR
    new webpack.NoEmitOnErrorsPlugin() // // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。
  ]
})
 

