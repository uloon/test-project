<template>
    <div class="todo-wrap">
      <UserHeader @addTodo="addTodo"></UserHeader>
      <UserList :todos="todos" :changeDone="changeDone" :deleteTodoObj="deleteTodoObj"></UserList>
      <UserFooter :todos="todos" @checkAllDone="checkAllDone" @clearAllHaveDone="clearAllHaveDone"></UserFooter>
    </div>
</template>

<script>
import UserHeader from './components/UserHeader.vue'
import UserList from './components/UserList.vue'
import UserFooter from './components/UserFooter.vue'

export default {
    name:'App',
    components:{
        UserHeader,
        UserList,
        UserFooter
    },
    data(){
        return{
            todos:JSON.parse(localStorage.getItem('todos'))||[]
        }
    },
    methods:{
        // 添加一个todo对象
        addTodo(todoObj){
            this.todos.unshift(todoObj);
        },
        // 改变todo对象的done属性
        changeDone(id){
            this.todos.forEach((todoObj)=>{
                if(todoObj.id===id){
                    todoObj.done=!todoObj.done;
                }
            })
        },
        // 删除对应id项
        deleteTodoObj(id){
            this.todos=this.todos.filter((todo)=>{
                return todo.id!==id
            })
        },
        // 全选或取消全选
        checkAllDone(done){
            this.todos.forEach((todo)=>{
                todo.done=done
            })
        },
        // 删除已完成的任务
        clearAllHaveDone(){
            this.todos=this.todos.filter((todoObj)=>{
                return !todoObj.done
            })
        }
    },
    watch:{
        todos:{
            immediate:true,
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value));
            }
        }
    }
}
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-wrap {
    margin: 0 auto;
    width: 600px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>