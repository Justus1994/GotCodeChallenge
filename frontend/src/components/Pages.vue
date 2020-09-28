<template>
  <div class="page-container">
    <div class="pager">
      <button v-on:click="$emit('last')">Prev</button>
      <button v-on:click="$emit('next')">Next</button>
    </div>
    <div class="page-number">
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  props: {
    page: Number,
  },
};
</script>

<style scoped>
.page-container {
    top: 5rem;
    position: relative;
}
.pager {
  display: flex;
  justify-content: space-around;
}

.page-number {
    color: #eeeede;
    font-size: 5rem;
    font-weight: bold;
}

button {
  border-radius: .25rem;
  border: none;
  font-family: inherit;
  color: #eeedde;
  font-size: 2rem;
  background: grey;
  padding: 1rem;
  font-weight: 700;
}
</style>
