// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : './',
    outputDir: "pc", // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    assetsDir: "assets", //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    // indexPath: "myIndex.html",//指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    filenameHashing: false, //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    lintOnSave: true, //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    // lintOnSave: process.env.NODE_ENV !== 'production',//如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
    // runtimeCompiler: false,//是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     * */
    productionSourceMap: false,
    devServer: { // 它支持webPack-dev-server的所有选项
        host: "0.0.0.0",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        // open: true, //配置自动启动浏览器
        proxy: 'http://39.104.70.60:8080/',
        // proxy: 'http://192.168.0.45:8080/',
    }
};