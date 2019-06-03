<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="list"
      dark
      class="elevation-1"
      style="margin: 0 20px 0 20px"
      :rows-per-page-items="[10]"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
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

export default {
  name: 'people',
  data() {
    return {
      headers: [
        { text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Gender',
          align: 'center',
          sortable: false,
        },
        { text: 'Created',
          align: 'center',
          sortable: false,
        },
        { text: 'Url',
          align: 'center',
          sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(SWAPI_STORE, ['list']),
  },
  fetch({ store }) {
    store.dispatch(SWAPI_STORE + GET_SWAPI_LIST, `${SWAPI_ROOT}people/`);
  },
};

</script>
