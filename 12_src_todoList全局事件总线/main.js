// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 阻止生产提示
Vue.config.productionTip=false;
// 创建vm实例
new Vue({
    // 绑定容器
    el:'#app',
    // 使用render函数
    render: h=>h(App),
    // 安装全局事件总线
    beforeCreate(){
        Vue.prototype.$bus=this
    },
})
