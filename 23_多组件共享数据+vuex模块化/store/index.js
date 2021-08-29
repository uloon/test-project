// 该文件用于创建Vuex中的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入axios
import axios from 'axios'
import { nanoid } from 'nanoid'
// 使用插件
Vue.use(Vuex)

// 求和功能相关配置
const countOptions={
    namespaced:true,
    actions:{
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
    },
    mutations:{
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    },
    state:{
        sum: 0,
    },
}

// Student组件相关配置
const personOptions={
    namespaced:true,
    actions:{
        addPersonServer(state){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    state.commit('ADDPERSON',{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADDPERSON(state, value) {
            state.persons.unshift(value)
        },
    },
    getters:{},
    state:{
        persons:[
            {name:'张三',id:'001'}
        ]
    },
}

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})