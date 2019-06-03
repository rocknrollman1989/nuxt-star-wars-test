<template>
  <div>
    <v-layout row wrap>
      <v-flex v-for="(category, index) in categories" :key="index" md6 pa-3 class="category" @click="getApiToFetchData(category)">
        <v-card class="background: transparent">
          <v-img
            :src="`/images/categories/${index}.jpg`"
            :alt="index"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title style="justify-content: center">
            <div>
              <h3 class="headline mb-0">{{ index }}</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SWAPI_STORE } from '~/store/swapiStore/types';

export default {
  name: 'categories',
  computed: {
    ...mapState(SWAPI_STORE, ['categories']),
  },
  methods: {
    getApiToFetchData(api) {
      console.log(api);
    },
  },
};
</script>


<style scoped>
  h3 {
    color: #fff;
  }

  .category:hover {
    cursor: pointer;
  }
</style>
