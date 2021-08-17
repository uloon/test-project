<template>
  <div>
      <h2 ref="title">欢迎来到大学!</h2>
      <School ref="sch"></School>
      <button ref="btn" @click="getDom">点击获取DOM元素</button>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name:'App',
    components:{
        School
    },
    methods: {
        getDom(){
            console.log(this.$refs);
        }
    },
}
</script>