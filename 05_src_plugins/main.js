// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件
import plugins from './plugins'

// 阻止生产提示
Vue.config.productionTip=false;
// 应用插件
Vue.use(plugins);
// 创建vm实例
new Vue({
    // 绑定容器
    el:'#app',
    // 使用render函数
    render: h=>h(App)
})
