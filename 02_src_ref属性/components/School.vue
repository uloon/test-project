<template>
  <div class="school">
      <h2>学校名称:{{schoolName}}</h2>
      <h2>学校地址:{{schoolAddress}}</h2>
      <button @click="show">点击显示学校名</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
            schoolName:'天堂制造大学',
            schoolAddress:'中山北路01号'
        } 
    },
    methods: {
        show(){
            alert(this.schoolName);
        }
    },
}
</script>

<style>
    .school{
        background-color: orange;
    }
</style>