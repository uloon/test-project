<template>
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="show">点我提示学校名</button>
    </div>
</template>

<script>
    export default{
        name:'School',
        data(){
            return {
                schoolName:'大聪明学校',
                address:'杜王町38号'
            }    
        },
        methods: {
            show(){
                alert(this.schoolName);
            }
        },
    }
</script>

<style>
    .demo{
        background-color:orange;
    }
</style>