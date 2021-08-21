<template>
  <div class="school">
      <h2>学校名称:{{schoolName}}</h2>
      <h2>学校地址:{{schoolAddress}}</h2>
      <button @click="sendSchoolName">点我向App发送学校名</button>
      <button @click="unbind">点我解绑事件</button>
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
    methods:{
        sendSchoolName(){
            // 触发School组件实例身上的showName事件
            this.$emit('showName',this.schoolName)
        },
        unbind(){
            this.$off('showName')//解绑一个事件
            // this.$off(['showName','xxx'])//解绑多个事件
            // this.$off() //解绑所有事件
        }
    }
}
</script>

<style>
    .school{
        background-color: orange;
    }
</style>