<template>
  <div class="grid-container">

      <House v-for="house in houses"
        :name="house.name"
        :region="house.region"
        v-bind:key="house.url"
      ></House>

  </div>
  <div>
    <Pages
      :page="page"
      v-on:next="page += 1"
      v-on:last="page -=1"
    ></Pages>
  </div>
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
  grid-gap: 1.5rem;
  align-items: center;
}

</style>
