import { SET_CATEGORIES } from './types';

export default {
  [SET_CATEGORIES](state, payload) {
    state.categories = { ...payload };
  },
};
