<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <House name="House Bracken of Stone Hedge" region="The North"/>
</template>

<script>
import House from './components/House.vue';

export default {
  name: 'App',
  components: {
    House,
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=David+Libre:wght@400;500;700&display=swap');

body {
  display: flex;
  background: #314659;
  min-height: 100vh;
  margin: 0;
  line-height: 1.6;
  align-items: center;
  justify-content: center;
  text-rendering: optimizeLegibility;
}
#app {
  font-family: 'David Libre', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
