<template>
    <div class="container">
        <Count></Count>
        <Student></Student>
    </div>
</template>

<script>
import Count from './components/Count'
import Student from './components/Student'
export default {
    name:'App',  
    components: {Count,Student},
}
</script>

<style>
    .container{
        /* display: flex; */
        justify-content:space-around
    }
</style>