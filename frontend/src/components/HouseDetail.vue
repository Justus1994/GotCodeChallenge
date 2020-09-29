<template>
<div v-on:click="$emit('flip', id)" class="container">
  {{ house.name }}
</div>
</template>

<script>
export default {
  name: 'House',
  props: {
    house: Object,
    id: Number,
  },
};
</script>

<style scoped>

.container {
  width: 30rem;
  height: 13.625rem;
  color: #e04f62;
  background: white;
}
</style>
