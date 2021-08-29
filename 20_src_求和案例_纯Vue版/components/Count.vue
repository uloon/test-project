<template>
  <div class="count">
        <h1>当前和为{{sum}}</h1>
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
            sum:0,
            number:1
        }
    },
    methods:{
        increment(){
            this.sum+=this.number
        },
        decrement(){
            this.sum-=this.number
        },
        incrementOdd(){
            if(this.sum%2!==0){
                this.sum+=this.number
            }
        },
        incrementDelay(){
            setTimeout(()=>{
                this.sum+=this.number
            },500)
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