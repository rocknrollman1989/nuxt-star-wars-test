// import { SWAPI_ROOT } from '~/api/apiConstants';
// import axios from 'axios';
import { SWAPI_STORE, GET_SWAPI_CATEGORIES } from '~/store/swapiStore/types';


export const state = () => ({

});

export const mutations = {

};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch(SWAPI_STORE + GET_SWAPI_CATEGORIES);
  },
};
