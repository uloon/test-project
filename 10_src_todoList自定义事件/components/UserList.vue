<template>
  <ul class="todo-main">
    <UserItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" :changeDone="changeDone" :deleteTodoObj="deleteTodoObj"></UserItem>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  name:'UserList',
  components: { UserItem },
  props:['todos','changeDone','deleteTodoObj']
}
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>