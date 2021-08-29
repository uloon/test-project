<template>
  <div class="count">
        <h1>当前和为:{{$store.state.sum}}</h1>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前和为奇数再加</button>
        <button @click="incrementDelay">等一等再加</button>
    </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return{
            number:1
        }
    },
    methods:{
        increment(){
            this.$store.dispatch('increment',this.number)
        },
        decrement(){
            this.$store.dispatch('decrement',this.number)
        },
        incrementOdd(){
            this.$store.dispatch('incrementOdd',this.number)
        },
        incrementDelay(){
            this.$store.dispatch('incrementDelay',this.number)
        },
    }
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