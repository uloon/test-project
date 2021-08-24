<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWords" />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name:'Search',
    data(){
        return {
            keyWords:''
        }
    },
    methods:{
        searchUsers(){
            // 发送请求前更新List数据
            this.$bus.$emit('updateListData',{isFirstSearch:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
                response=>{
                    // 请求成功后给List返回的数据
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error=>{
                    // 请求失败后给List返回的数据
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
                }
            )
        }
    }
}
</script>