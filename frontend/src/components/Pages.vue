<template>
  <div class="page-container">
    <div class="pager">
      <button v-on:click="$emit('last')">Prev</button>
      <div class="page-number">
        {{ page }}
      </div>
      <button v-on:click="$emit('next')">Next</button>
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
    top: 4rem;
    position: relative;
}
.pager {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.page-number {
    color: #eeeede;
    font-size: 2.5rem;
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
