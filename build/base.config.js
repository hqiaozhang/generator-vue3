'use strict'

const path = require('path')
//项目编译输出目录
const projectName = 'generator-vue3'

module.exports = {
  projectName: projectName,
  // 开发环境配置项
  dev: {
    // 用来指明开发环境
    env: 'development',
    assetsSubDirectory: projectName + '/static/',
    assetsPublicPath: '/' ,
    // 跨域代理设置代理表，建一个虚拟api服务器用来代理本机的请求，只能用于开发模式
    proxyTable: {
      '/pm': { 
        target: 'http://192.168.3.2:11012', // 联调环境 
        changeOrigin: true, //如果接口跨域，需要进行这个参数配置
        secure: false,  // 如果是https接口，需要配置这个参数
      } 
    },
    // dev-server的端口号，可以自行更改
    port: 8092,
    devtool: 'cheap-module-eval-source-map', 
  },
  // 线上环境配置项
  build: {
    // 只要用来指定当前环境（生产环境）
    env: 'production',
    // Template for index.html
    // 相对路径的拼接，假如当前跟目录是config，那么下面配置的index属性的属性值就是dist/index.html
    index: path.resolve(__dirname, `./dist/${projectName}/index.html`), // html入口文件
    // 定义的是静态资源的根目录 也就是dist目录
    assetsRoot: path.resolve(__dirname, `./dist/${projectName}/`), // 打包后的目录设置
    // 定义的是静态资源根目录的子目录static，也就是dist目录下面的static
    assetsSubDirectory: 'static/', // 打后的静态资源
    // 下面定义的是静态资源的公开路径，也就是真正的引用路径(服务器路径)
    assetsPublicPath: `/${projectName}/`,
    //项目名称
    outputPath: 'dist/'+projectName
  }
}
