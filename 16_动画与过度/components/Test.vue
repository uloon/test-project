<template>
  <div>
      <button @click="show">显示/隐藏</button>
      <transition name="hello1" appear>
        <h1 class="title" v-show="isShow">你好1</h1>
      </transition>
      <!-- 多个元素过度 -->
      <transition-group name="hello2" appear>
        <h1 class="title" v-show="isShow" key="1">你好2</h1>
        <h1 class="title" v-show="isShow" key="2">你好2</h1>
      </transition-group>
      <!-- 使用第三方库 -->
      <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__zoomInUp"
        leave-active-class="animate__zoomOutUp"
      >
        <h1 class="title" v-show="isShow">你好1</h1>
      </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    },
    methods:{
        show(){
            this.isShow=!this.isShow
        }
    }
}
</script>

<style scoped>
    .title{
        background-color: #bfa;
        width: 100px;
    }

    /* 动画效果实现 */
    .hello1-enter-active{
        animation: show 0.5s linear;
    }

    .hello1-leave-active{
        animation: show 0.5s linear reverse;
    }

    /* 过度效果实现 */
    /* 进入的起点 ，离开的终点*/
    .hello2-enter,.hello2-leave-to{
        transform: translateX(-100%);
    }
    /* 进入过程，离开过程 */
    .hello2-enter-active,.hello2-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的终点 ，离开的起点 */
    .hello2-enter-to,.hello2-leave{
        transform: translateX(0);
    }

    @keyframes show {
        from{
            transform: translateX(-100px);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>