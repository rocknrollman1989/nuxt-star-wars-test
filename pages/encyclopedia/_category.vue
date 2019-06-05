<template>
  <div>
    <v-data-table
      :headers="tableHeaders"
      :items="list"
      dark
      class="elevation-1"
      style="margin: 0 20px 0 20px"
      :rows-per-page-items="[10]"
    >
      <template v-slot:items="list">
        <td v-for="header in tableHeaders" :key="header.id">
          <span v-if="header.text !== 'url'">{{ list.item[header.text] | changeToNormalView(header.text) }}</span>
          <span
            v-if="header.text === 'url'"
            class="span_link"
            @click="goToDetails(list.item[header.text])"
          >
            View
          </span>
        </td>
      </template>
    </v-data-table>
    <div class="text-xs-center  mt-3">
      <v-pagination
        v-model="currentPage"
        :length="amountOfPages"
      ></v-pagination>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import { SWAPI_ROOT } from '~/api/apiConstants';
import { SWAPI_STORE, GET_SWAPI_LIST } from '~/store/swapiStore/types';
import { findRouteApi, createTableHeaders } from '~/helpers';

export default {
  name: 'category',
  data() {
    return {
      currentPage: 1,
      apiRoute: null,
    };
  },
  computed: {
    ...mapState(SWAPI_STORE, ['list', 'amountOfPages']),
    tableHeaders() {
      return createTableHeaders(this.list);
    },
  },
  watch: {
    currentPage(currentPage) {
      const { apiRoute } = this;
      this.$store.dispatch(SWAPI_STORE + GET_SWAPI_LIST, `${SWAPI_ROOT}${apiRoute}/?page=${currentPage}`);
    },
  },
  async fetch({ store, route }) {
    const apiRoute = findRouteApi(route.path);
    await store.dispatch(SWAPI_STORE + GET_SWAPI_LIST, `${SWAPI_ROOT}${apiRoute}/`);
  },
  created() {
    this.apiRoute = findRouteApi(this.$route.path);
  },
  methods: {
    goToDetails(api) {
      this.$router.push(`${this.$route.path}/${findRouteApi(api)}`);
    },
  },
};

</script>

<style>
  .span_link {
    color: red;
    text-decoration: underline;
  }
  .span_link:hover {
    cursor: pointer;
    color:  black;
  }
</style>
