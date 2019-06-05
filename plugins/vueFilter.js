import Vue from 'vue';

export const changeToNormalView = (filterValue, typeOfColumn) => {
  if (typeOfColumn === 'created') {
    filterValue = new Date(filterValue).toLocaleString();
  }
  return filterValue;
};


const filters = {
  changeToNormalView,
};

export default Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
