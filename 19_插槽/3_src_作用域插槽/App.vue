<template>
    <div class="container">
        <Category title="游戏" >
            <template scope="listData">
                <ul>
                    <li v-for="(item,index) in listData.games" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏" >
            <template scope="listData">
                <ol>
                    <li v-for="(item,index) in listData.games" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏" >
            <template scope="listData">
                <h4 v-for="(item,index) in listData.games" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name:'App',  
    components: {Category},
}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>