<template>
  <div class="grid-container">
      <House v-for="house in houses"
        :name="house.name"
        :region="house.region"
        v-bind:key="house.url"
      ></House>
  </div>
</template>

<script>
import gotFetcher from './data-fetcher';
import House from './components/House.vue';

export default {
  name: 'App',
  components: {
    House,
  },
  data() {
    return {
      houses: [],
    };
  },
  created() {
    gotFetcher('houses', 1).then((data) => {
      this.houses = data;
      console.log(this.houses);
    });
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 250px;
  grid-gap: 10px;
  align-items: center;
}

</style>
