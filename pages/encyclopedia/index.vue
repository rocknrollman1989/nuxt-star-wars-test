<template>
  <div>
    <v-layout row wrap>
      <v-flex v-for="(category, index) in categories" :key="index" md6 pa-3 class="category" @click="getApiToFetchData(category, index)">
        <v-card class="background: transparent">
          <v-img
            v-if="fetchingCategory !== index"
            :src="`/images/categories/${index}.jpg`"
            :alt="index"
            aspect-ratio="2.75"
          ></v-img>
          <div v-else class="text-xs-center">
            <v-progress-circular
              indeterminate
              color="amber"
            ></v-progress-circular>
          </div>
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
import { SWAPI_STORE, GET_SWAPI_LIST } from '~/store/swapiStore/types';

export default {
  name: 'categories',
  data() {
    return {
      fetchingCategory: null,
    };
  },
  computed: {
    ...mapState(SWAPI_STORE, ['categories']),
  },
  methods: {
    async getApiToFetchData(api, index) {
      this.fetchingCategory = index;
      try {
        await this.$store.dispatch(SWAPI_STORE + GET_SWAPI_LIST, api);
        await this.$router.push(`/encyclopedia/${index}`);
        this.fetchingCategory = null;
      } catch {
        this.fetchingCategory = null;
      }
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

  .text-xs-center {
    margin: 77px 0px 77px 0;
  }
</style>
