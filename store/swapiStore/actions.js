import { SWAPI_ROOT } from '~/api/apiConstants';
import { GET_SWAPI_CATEGORIES, SET_CATEGORIES, GET_SWAPI_LIST, SET_LIST, SET_AMOUNT_OF_PAGES, GET_DETAILS_INFO, SET_DETAILS_INFO } from './types';
import { pagesToView } from '~/helpers';

export default {
  async [GET_SWAPI_CATEGORIES]({ commit }) {
    const categories = await this.$axios.get(SWAPI_ROOT);
    commit(SET_CATEGORIES, categories.data);
  },

  async [GET_SWAPI_LIST]({ commit }, api) {
    const list = await this.$axios.get(api);
    commit(SET_LIST, list.data.results);
    return commit(SET_AMOUNT_OF_PAGES, pagesToView(list.data.count));
  },

  async [GET_DETAILS_INFO]({ commit }, api) {
    const details = await this.$axios.get(api);
    console.log(details.data);
    commit(SET_DETAILS_INFO, details.data);
  },
};
