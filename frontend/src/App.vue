<template>
  <div class="header">
    <h1> GOT Code Challenge </h1>
  </div>
  <div class="grid-container">
    <div v-for="(house, index) in houses" v-bind:key="house.url">
      <transition name="component-fade" mode="out-in">
        <component
          v-bind:is="house.view"
          :house="house"
          :id="index"
          v-on:flip="onFlip"
        ></component>
      </transition>
    </div>
  </div>
  <Pages
    :page="page"
    v-on:next="page += 1"
    v-on:last="page -=1"
  ></Pages>
</template>

<script>
import { gotHouseFetcher } from './data-fetcher';
import House from './components/House.vue';
import HouseDetail from './components/HouseDetail.vue';
import Pages from './components/Pages.vue';

export default {
  name: 'App',
  components: {
    basic: House,
    detail: HouseDetail,
    Pages,
  },
  data() {
    return {
      houses: [],
      page: 0,
    };
  },
  created() {
    // Set Page to 1 to trigger Watcher
    this.page = 1;
  },
  watch: {
    page(val) {
      if (val === 0) {
        this.page = 1;
        return;
      }

      gotHouseFetcher(val).then((data) => {
        this.houses = data.map((el) => ({
          ...el,
          view: 'basic',
        }));
      });
    },
  },
  methods: {
    onFlip(id) {
      const viewType = (type) => (type === 'basic' ? 'detail' : 'basic');
      this.houses[id].view = viewType(this.houses[id].view);
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

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .25s ease;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

</style>
