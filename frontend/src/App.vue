<template>
  <div class="header">
    <h1> GOT Code Challenge </h1>
  </div>
  <div class="grid-container">
      <House v-for="house in houses"
        :name="house.name"
        :region="house.region"
        v-bind:key="house.url"
      ></House>
  </div>
  <Pages
    :page="page"
    v-on:next="page += 1"
    v-on:last="page -=1"
  ></Pages>
</template>

<script>
import gotFetcher from './data-fetcher';
import House from './components/House.vue';
import Pages from './components/Pages.vue';

export default {
  name: 'App',
  components: {
    House,
    Pages,
  },
  data() {
    return {
      houses: [],
      page: 0,
    };
  },
  created() {
    this.page = 1;
  },
  watch: {
    page(val) {
      gotFetcher('houses', val).then((data) => {
        this.houses = data;
      });
    },
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=David+Libre:wght@400;500;700&display=swap');

@font-face {
  font-family: "Game of Thrones";
  src: local("Game of Thrones"),
   url(./assets/fonts/Game_of_Thrones.ttf) format("truetype");
}

.header {
  font-family: 'Game of Thrones', serif;
  color: #eeeede;
  margin: 0 0 5rem 0;
  letter-spacing: 0.15rem;
}

body {
  display: flex;
  background: #314659;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  text-rendering: optimizeLegibility;
}
#app {
  font-family: 'David Libre', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #314659;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  align-items: center;
}

</style>
