<template>
  <div>
      <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
      <Student :getStuName="getStuName" />

      <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据（第一种写法，使用@或v-on） -->
      <!-- <School v-on:showName="getSchoolName"/> -->

       <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据（第二种写法，使用ref） -->
      <School ref="school"/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        Student,
        School,
    },
    methods:{
        // 接收学生姓名的函数
        getStuName(stuName){
            console.log('App收到学生姓名了 ',stuName);
        },
        getSchoolName(schoolName){
            console.log('App收到学校了 ',schoolName);
        }
    },
    mounted(){
        this.$refs.school.$on('showName',this.getSchoolName)
    }
}
</script>