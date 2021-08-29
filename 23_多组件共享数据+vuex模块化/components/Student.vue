<template>
  <div class="student">
      <h2>Count组件的和为{{sum}}</h2>
      <input type="text" placeholder="请添加姓名" v-model="studentName">
      <button @click="add">点击添加学生姓名</button>
      <button @click="addPersonServe">点击添加随机姓名</button>
      <ul>
          <li v-for="personObj in this.persons" :key="personObj.id">{{personObj.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapActions, mapState } from 'vuex'
export default {
    name:'Student',
    data(){
        return{
            studentName:''
        }
    },
    methods:{
        add(){
            const personObj={id:nanoid(),name:this.studentName}
            this.$store.commit('personOptions/ADDPERSON',personObj)
            this.studentName=''
        },
        addPersonServe(){
            this.$store.dispatch('personOptions/addPersonServer')
        }
    },
    computed:{
        ...mapState('personOptions',['persons']),
        ...mapState('countOptions',['sum'])
    }
}
</script>

<style>
    .student{
        margin-top: 20px;
        border:solid;
        width: 400px;
    }
</style>