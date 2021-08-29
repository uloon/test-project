<template>
  <div class="count">
        <h1>当前和为:{{sum}}</h1>
        <h1>当前和放大十倍为:{{bigSum}}</h1>
        <h2>下方Student组件人数有{{persons.length}}人</h2>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(number)">+</button>
        <button @click="decrement(number)">-</button>
        <button @click="incrementOdd(number)">当前和为奇数再加</button>
        <button @click="incrementDelay(number)">等一等再加</button>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            number:1
        }
    },
    computed:{
        // 借助mapState生成计算属性（数组写法）
        ...mapState('countOptions',['sum']),
        ...mapState('personOptions',['persons']),
        // 借助mapGetters生成计算属性（数组写法）
        ...mapGetters('countOptions',['bigSum'])
    },
    methods:{
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法) 
        ...mapMutations('countOptions',{increment:'INCREMENT',decrement:'DECREMENT'}),
        // (数组写法) 
        ...mapActions('countOptions',['incrementOdd','incrementDelay'])
    },
}
</script>

<style>
    button{
        margin-left: 5px;
    }
    .count{
        background-color:bisque;
        width: 400px;
    }
</style>