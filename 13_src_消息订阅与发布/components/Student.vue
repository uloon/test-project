<template>
  <div class="student">
      <h2>学生姓名:{{myName}}</h2>
      <h2>年龄:{{myAge}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
        return{
            myName:'卖鱼强',
            myAge:'18'
        } 
    },
    methods:{
        sendStudentName(){
            // 发布消息
            pubsub.publish('getStudentName',this.myName)
        }
    }
}
</script>

<style>
    .student{
        background-color: #bfa;
    }
</style>