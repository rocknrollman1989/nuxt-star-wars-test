import { SET_CATEGORIES, SET_LIST } from './types';

export default {
  [SET_CATEGORIES](state, payload) {
    state.categories = { ...payload };
  },
  [SET_LIST](state, payload) {
    state.list = [...payload];
  },
};
