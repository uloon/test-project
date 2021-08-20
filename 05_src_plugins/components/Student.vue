<template>
  <div class="student">
      <h2>学生姓名:{{name}}</h2>
      <h2>年龄:{{age}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'空条承太郎',
            age:17
        } 
    },
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