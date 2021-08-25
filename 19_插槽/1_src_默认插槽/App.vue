<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img src="./assets/烧烤.jpg">
        </Category>
        <Category title="游戏" :listData="games"></Category>
        <Category title="电影" :listData="films">
            <video controls src="./assets/skating.mp4"></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name:'App',  
    components: {Category},
    data(){
        return{
            foods:['火锅','烧烤','牛排','龙虾'],
            games:['炉石传说','英雄联盟','守望先锋','cs:go'],
            films:['阿甘正传','肖申克的救赎','楚门的世界','天堂电影院']
        }
    }
}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
    img,video{
        width: 100%;
    }
</style>