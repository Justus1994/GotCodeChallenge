<template>
  <div class="container">
    <div v-on:click="$emit('flip', id)" class="house-detail-card">
        <p> Words: </p>
        <h3>{{ house.words || `${house.name} has no Words :( `}} </h3>
        <p> Sworn Members: </p>
        <div v-if="loading" class="loader"></div>
        <div v-else class="members">
          <h3 v-if="!members.length"> {{ `${house.name} has no sworn member...` }} </h3>
          <h3 v-else v-for="(member, index) in members" :key="index"> {{ member }} </h3>
        </div>
    </div>
  </div>
</template>

<script>
import { gotFetch } from '../data-fetcher';

export default {
  name: 'House',
  props: {
    house: Object,
    id: Number,
  },
  data() {
    return {
      loading: true,
      members: [],
    };
  },
  created() {
    const {
      swornMembers,
    } = this.house;

    if (!swornMembers.length) {
      this.loading = false;
    }

    swornMembers.forEach((member) => {
      gotFetch(member).then((data) => {
        this.members.push(data.name);

        if (this.members.length === swornMembers.length) {
          this.loading = false;
        }
      });
    });
  },
};
</script>

<style scoped>

.container {
  width: 30rem;
  color: #e04f62;
  cursor: pointer;
}

.house-detail-card {
  display: flex;
  flex-direction: column;
  background: #eeeede;
  padding: 1rem;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: scroll;
  height: 12rem;
  border: solid 0.25rem #eeeede;
}

p {
  margin:0;
  text-transform: uppercase;
  font-size: .75rem;
}

.members > h3 {
  margin: 0;
}

.members > h3:first-child{
  margin-top: 1rem;
}

.house-detail-card:hover {
  transition: all 0.3s ease;
  cursor: pointer;
  border-color: #d7d0c0;
}

.loader{
  margin: auto;
  border: .25rem solid #d7d0c0;
  border-top: .25rem solid #314659;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
