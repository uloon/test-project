<template>
  <div class="school">
      <h2>学校名称:{{schoolName}}</h2>
      <h2>学校地址:{{schoolAddress}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return{
            schoolName:'天堂制造大学',
            schoolAddress:'中山北路01号'
        } 
    },
    mounted(){
        // 订阅消息
        this.pubId=pubsub.subscribe('getStudentName',(msgName,data)=>{
            console.log('有人发布了getStudentName消息，getStudentName的回调执行了',msgName,data)
        })
    },
    beforeDestroy(){
        // School组件销毁时，取消订阅
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style>
    .school{
        background-color: orange;
    }
</style>