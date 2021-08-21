<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="isALLDone" @change="checkAll"/>
    </label>
    <span>
      <span>已完成{{haveDone}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="clearHaveDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'UserFooter',
  props:['todos'],
  computed:{
    haveDone(){
      return this.todos.reduce((pre,todo)=>{
        return pre +(todo.done?1:0);
      },0)
    },
    isALLDone(){
      return this.haveDone===this.todos.length&& this.haveDone>0;
    }
  },
  methods:{
    // 全选或取消全选
    checkAll(e){
      // 触发checkAllDone事件
      this.$emit('checkAllDone',e.target.checked)
    },
    // 清除所有完成的
    clearHaveDone(){
      // 通知App删除已经完成的任务
      if(confirm('确定清除吗？')){
        this.$emit('clearAllHaveDone')
      }
    }
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>