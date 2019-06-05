import { SET_CATEGORIES, SET_LIST, SET_AMOUNT_OF_PAGES, SET_DETAILS_INFO } from './types';

export default {
  [SET_CATEGORIES](state, payload) {
    state.categories = { ...payload };
  },
  [SET_LIST](state, payload) {
    state.list = [...payload];
  },
  [SET_AMOUNT_OF_PAGES](state, payload) {
    state.amountOfPages = payload;
  },
  [SET_DETAILS_INFO](state, payload) {
    state.details = { ...payload };
  },
};
