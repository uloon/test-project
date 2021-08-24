module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
      },
    },
    lintOnSave:false,//关闭语法检查

    // 开启代理服务器
    // 方式一
        // devServer:{
        //     proxy:'http://localhost:5000'
        // }
    
    // 方式二
    devServer:{
        proxy:{
            '/get-student':{
                target:'http://localhost:5000',
                pathRewrite:{'^/get-student':''},
                ws:true,//用于支持websocket
                changeOrigin:true,//是否伪装
            },
            '/get-car':{
                target:'http://localhost:5001',
                pathRewrite:{'^/get-car':''},
                ws:true,//用于支持websocket
                changeOrigin:true,//是否伪装
            }

        }
    }
  }