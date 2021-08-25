<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img slot="body" src="./assets/烧烤.jpg">
            <a slot="footer" href="https://www.bilibili.com/v/food">点击发现更多美食</a>
        </Category>
        <Category title="游戏" :listData="games">
            <a slot="footer" href="https://www.bilibili.com/v/game">更多游戏</a>
        </Category>
        <Category  title="电影" :listData="films">
            <video slot="body" controls src="./assets/skating.mp4"></video>
            <a slot="footer" href="https://www.bilibili.com/v/cinephile">点击观看更多电影</a>
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