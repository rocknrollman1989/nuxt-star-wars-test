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
      <template v-slot:items="props">
        <td>{{ columnToView(props) }}</td>
        <td class="text-xs-center">{{ props.item.gender }}</td>
        <td class="text-xs-center">{{ props.item.created }}</td>
        <td class="text-xs-center">{{ props.item.url }}</td>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import { SWAPI_ROOT } from '~/api/apiConstants';
import { SWAPI_STORE, GET_SWAPI_LIST } from '~/store/swapiStore/types';
import { findRouteApi, createTableHeaders } from '~/helpers';

export default {
  name: 'people',
  data() {
    return {

    };
  },
  computed: {
    ...mapState(SWAPI_STORE, ['list']),
    tableHeaders() {
      return createTableHeaders(this.list);
    },
  },
  async fetch({ store, route }) {
    const apiRoute = findRouteApi(route.path);
    await store.dispatch(SWAPI_STORE + GET_SWAPI_LIST, `${SWAPI_ROOT}${apiRoute}/`);
  },
  methods: {
    columnToView(objToView) {
      console.log(objToView);
      // console.log(createColumnToView(objToView, header)); header createColumnToView
    },
  },
};

</script>
