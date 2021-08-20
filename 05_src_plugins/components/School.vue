<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    export default{
        name:'School',
        data(){
            return {
                name:'大聪明学校',
                address:'杜王町38号'
            }    
        },
    }
</script>

<style>
    .school{
        background-color: rgb(211, 211, 149);
        width: 300px;
        height: 150px;
        margin: 0 auto;
        text-align:center
    }
</style>