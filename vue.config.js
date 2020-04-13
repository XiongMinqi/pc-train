module.exports = {
    devServer: {
        proxy: {
            '/apis':{
              target: 'http://120.78.91.153:8080/',  // 后台api
              changeOrigin: true,  //是否跨域
              // secure: true,
              pathRewrite: {
                '^/apis': ''   //需要rewrite的,
              }
            }
        }
    }
  };