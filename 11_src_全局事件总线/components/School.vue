<template>
  <div class="school">
      <h2>学校名称:{{schoolName}}</h2>
      <h2>学校地址:{{schoolAddress}}</h2>
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
    mounted(){
        this.$bus.$on('getStudentName',(studentName)=>{
            console.log('我是School组件，收到了数据：',studentName);
        })
    },
    beforeDestroy(){
        this.$bus.$off('getStudentName')
    }
}
</script>

<style>
    .school{
        background-color: orange;
    }
</style>