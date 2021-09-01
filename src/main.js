// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'


// 阻止生产提示
Vue.config.productionTip=false;

// 使用VueRouter插件
Vue.use(VueRouter)

// 创建vm实例
new Vue({
    // 绑定容器
    el:'#app',
    // 使用render函数
    render: h=>h(App),
    router:router
})
