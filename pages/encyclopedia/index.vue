<template>
  <v-container grid-list-xs>
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        color="primary"
      >
      </v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import { FETCH_DATA_STORE, FETCH_DATA_PROCESS, FETCH_DATA_PROCESS_IS_OVER } from '~/store/fetchProcessStore/types'
import { SWAPI_STORE, GET_SWAPI_CATEGORIES } from '~/store/swapiStore/types'

  export default {
    async fetch({ store, params }) {
          await store.commit(FETCH_DATA_STORE + FETCH_DATA_PROCESS);
        try {
          await store.dispatch(SWAPI_STORE + GET_SWAPI_CATEGORIES);
          await store.commit(FETCH_DATA_STORE + FETCH_DATA_PROCESS_IS_OVER);
        }
        catch{
          await store.commit(FETCH_DATA_STORE + FETCH_DATA_PROCESS_IS_OVER);
        }
    }
  }
</script>

<style>

</style>

