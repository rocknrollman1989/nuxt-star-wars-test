import { SWAPI_ROOT } from '~/api/apiConstants';
import { GET_SWAPI_CATEGORIES, SET_CATEGORIES, GET_SWAPI_LIST, SET_LIST } from './types';

export default {
  async [GET_SWAPI_CATEGORIES]({ commit }) {
    const categories = await this.$axios.get(SWAPI_ROOT);
    commit(SET_CATEGORIES, categories.data);
  },

  async [GET_SWAPI_LIST]({ commit }, api) {
    const list = await this.$axios.get(api);
    commit(SET_LIST, list.data.results);
    // console.log(list.data.results);
  },
};
