<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <ul>
          <slot name="body">
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
          </slot>
          <slot name="footer"></slot>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title','listData']
}
</script>

<style>
.category{
    background-color: rgb(69, 165, 165);
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: bisque;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
li{
    color: white;
    margin-top: 10px;
}
</style>