<template>
  <div class="student">
      <h2 @click="showName">学生姓名:{{name}}</h2>
      <h2>年龄:{{age}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin';

export default {
    name:'Student',
    data(){
        return{
            name:'空条承太郎',
            age:17
        } 
    },
    mixins:[mixin]
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