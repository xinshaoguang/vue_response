<template>
  <div id="app">
     <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
// const vHeader = () => import("./components/header/header");
// const vContent = () => import("./components/content/content");
// const vFooter = () => import("./components/footer/footer");
import  vHeader from  "./components/header/header"
import  vContent from  "./components/content/content"
import  vFooter from  "./components/footer/footer"
export default {
   components: {
    vHeader,
    vContent,
    vFooter,
  },
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
