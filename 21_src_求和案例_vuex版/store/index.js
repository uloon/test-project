// 该文件用于创建Vuex中的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    increment(context, value) {
        context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    },
    incrementOdd(context, value) {
        if (context.state.sum % 2 !== 0) {
            context.commit('INCREMENT', value)
        }
    },
    incrementDelay(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500);
    },
}
// 准备mutations——用于操作数据
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    }
}
// 准备state——用于存储数据
const state = {
    sum: 0,
}

// 创建并暴露store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state
})