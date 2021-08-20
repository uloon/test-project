<template>
  <div>
      <Student name="岸边露伴" :age="20"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        Student
    },
}
</script>