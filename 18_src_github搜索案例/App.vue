<template>
    <div class="container">
        <Search />
        <List />
    </div>
</template>

<script>
import List from './components/List'
import Search from './components/Search'
// import axios from 'axios'
export default {
    name:'App',  
    components: {Search,List},
}
</script>