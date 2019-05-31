import { SWAPI_ROOT } from '~/api/apiConstants';
import { GET_SWAPI_CATEGORIES } from './types';

export default {
  async [GET_SWAPI_CATEGORIES]() {
    console.log('this', axios);

    const categories = await $axios.get(SWAPI_ROOT);
    // console.log('is Done?', categories)
  },
};
