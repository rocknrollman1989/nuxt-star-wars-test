<template>
  <div style="color: #fff">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <v-layout fluid column>
              <v-flex v-for="detail in details" :key="detail.key" d-flex>
                <v-flex md6><h4>{{ detail }}</h4></v-flex>
                <v-flex md6><p>dfgege</p></v-flex>
              </v-flex>
            </v-layout>
            <!-- <h3>{{details}}</h3> -->
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SWAPI_ROOT } from '~/api/apiConstants';
import { SWAPI_STORE, GET_DETAILS_INFO } from '~/store/swapiStore/types';
import { findRouteApiDetailsPage } from '~/helpers';

export default {
  name: 'category_id',
  data() {
    return {
      apiRoute: null,
    };
  },
  computed: {
    ...mapState(SWAPI_STORE, ['details']),
  },
  async fetch({ store, route }) {
    const apiRoute = findRouteApiDetailsPage(route.path);
    await store.dispatch(SWAPI_STORE + GET_DETAILS_INFO, `${SWAPI_ROOT}${apiRoute}/`);
  },
  created() {
    this.apiRoute = findRouteApiDetailsPage(this.$route.path);
  },
};
</script>
