<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @click="change(todoObj.id)"/>
      <span >{{todoObj.title}}</span>
    </label>
    <button class="btn btn-danger" :style="this.btnStyle" @click="deleteTodoObjGetId(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name:'UserItem',
  props:['todoObj'],
  data(){
    return{
      btnStyle:'display:none'
    }
  },
  methods:{
    change(id){
      // 触发changeDone事件
      this.$bus.$emit('changeDone',id);
    },
    // 删除，首先获取id
    deleteTodoObjGetId(id){
      if(confirm('确定删除吗？')){
        // 触发deleteTodoObj事件
        this.$bus.$emit('deleteTodoObj',id);
      }
    }
  },
  watch:{
    'todoObj.done':{
      immediate:true,
      handler(newValue){
        if(newValue){
          this.btnStyle='display:inline-block'
        }else{
          this.btnStyle='display:none'
        }
      }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: rgb(173, 173, 173);
  }
</style>