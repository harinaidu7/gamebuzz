<template>
    <div>
        <div>
            <p>
                Fans don't just follow the sport, they feel it. We're one of you, and we strive to keep you on top of every possible sports trend by creating engaging and insightful content at lightning-quick speed.
                We are a Great Place to Work certified organization, with employees and contributors working from various corners of the globe.
            </p>
        </div>

        <TopStories/>
        <Featured/>
        <Categories/>
        
    </div>
</template>
<script>
import TopStories from "../components/TopStories.vue";
import Featured from "../components/Featured.vue";
import Categories from "../components/Categories.vue";
export default {
    name:'Home',
    components:{
    TopStories,
    Featured,
    Categories,
    
}
}
</script>
<style>
    
</style>