<template>
  <div class="student">
      <h2>学生姓名:{{myName}}</h2>
      <h2>年龄:{{myAge}}</h2>
      <button @click="sendStuName()">点我将学生姓名发生给App</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    props:['getStuName'],
    data(){
        return{
            myName:'卖鱼强',
            myAge:'18'
        } 
    },
    methods: {
        sendStuName(){
            this.getStuName(this.myName);
        }
    },
}
</script>

<style>
    .student{
        background-color: #bfa;
    }
</style>