<template>
  <ul>
      <li >消息编号:{{id}}</li>
      <li >消息内容:{{title}}</li>
  </ul>
</template>

<script>
export default {
    name:'DetailMessage',
    props:['id','title']
}
</script>
