<template>
  <div id="app">
    <Nav/>
    
    <!-- <TopStories/><br>
    <Featured/> -->
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

// import TopStories from './components/TopStories.vue';
// import Featured from './components/Featured.vue';
 export default {
    name: "app",
    components: {
    Nav
}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  margin: 0%
}
</style>
