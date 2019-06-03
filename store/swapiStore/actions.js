import { SWAPI_ROOT } from '~/api/apiConstants';
import { GET_SWAPI_CATEGORIES, SET_CATEGORIES } from './types';

export default {
  async [GET_SWAPI_CATEGORIES]({ commit }) {
    const categories = await this.$axios.get(SWAPI_ROOT);
    commit(SET_CATEGORIES, categories.data);
  },
};
