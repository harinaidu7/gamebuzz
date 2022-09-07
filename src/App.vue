<template>
  <div id="app">
    <Home/>
    <TopStories/>
    <router-view/>
  </div>
</template>

<script>
import Home from './components/home.vue';
import TopStories from './components/topStories.vue';
 export default {
    name: "app",
    components: { Home, TopStories }
}
</script>

<style>
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
