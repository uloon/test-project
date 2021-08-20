<template>
  <div class="student">
      <h2>学生姓名:{{myName}}</h2>
      <h2>年龄:{{myAge}}</h2>
      <button @click="addAge">点击增加年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            myName:this.name,
            myAge:this.age
        } 
    },
    methods: {
        addAge(){
            this.myAge++
        }
    },
    // 1.简单声明接收
    props:['name','age']

    // 2.接收的同时对数据进行类型监测
    /*props:{
        name:String,
        age:Number
    }*/

    // 3.接收的同时对数据进行类型监测+默认值的指定
    /*props:{
        name:{
            type:String,
            // 属性是否必要输入
            required:true
        },
        age:{
            type:Number,
            // 默认值99
            default:99
        }
    }*/
}
</script>

<style>
    .student{
        background-color: #bfa;
        width: 300px;
        height: 150px;
        margin: 0 auto;
        text-align:center
    }
</style>