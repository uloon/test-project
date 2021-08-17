<template>
    <div class="demo">
        <h2>学生姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return {
                name:'吉良吉影',
                age:33
            }    
        },
    }
</script>