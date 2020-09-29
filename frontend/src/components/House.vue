<template>
  <transition name="flip">
    <div class="container">
      <div v-on:click="$emit('flip', id)" class="house-card">
        <h3 class="label"> Name </h3>
        <div class="name">
          <h1>{{ house.name }}</h1>
        </div>
        <h3 class="label"> Region </h3>
        <div class="region">
          <h1>{{ house.region || "No Data" }}</h1>
        </div>
      </div>
    </div>
  </transition>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  padding: 0;
  margin: 0;
  font-weight: normal;
  text-align: left;
}

.container {
  width: 30rem;
}

.house-card {
  display: flex;
  flex-direction: column;
  background: #eeeede;
  padding: 1rem;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
  height: 12rem;
  border: solid 0.25rem #eeeede;
}

.name {
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 2rem 0 2rem 0;
}

.label {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  text-align: left;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid #314659;
}

.name > h1 {
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.house-card:hover {
  transition: all 0.3s ease;
  color: #e04f62;
  cursor: pointer;
  border-color: #d7d0c0;
}
.house-card:hover .label {
  transition: border-color 0.3s ease;
  border-color: #e04f62;
}

.region {
  font-size: 0.8rem;
  font-weight: 200;
}

</style>
