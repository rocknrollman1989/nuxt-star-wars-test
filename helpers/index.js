const clearAllSpacesInArray = (array) => {
  if (array.indexOf('') !== -1) {
    const index = array.indexOf('');
    array.splice(index, 1);
    return clearAllSpacesInArray(array);
  }
  return array;
};

export const findRouteApi = (route) => {
  const array = route.split('/');
  clearAllSpacesInArray(array);
  return array.slice(-1);
};

export const findRouteApiDetailsPage = (route) => {
  const array = route.split('/');
  clearAllSpacesInArray(array);
  return array.slice(-2).join('/');
};

export const pagesToView = (count, maxPageSize = 10) => {
  return Math.ceil(Number(count / maxPageSize));
};

const headerObjSettings = {
  align: 'left',
  sortable: false,
};

export const createTableHeaders = (list) => {
  const tableHeaders = [];
  if (list && list.length) {
    Object.keys(list[0]).forEach((key) => {
      if (key === 'name') {
        tableHeaders.push({ ...headerObjSettings, text: 'name' });
      }
      if (key === 'title') {
        tableHeaders.push({ ...headerObjSettings, text: 'title' });
      }
      if (key === 'release_date') {
        tableHeaders.push({ ...headerObjSettings, text: 'release_date' });
      }
      if (key === 'classification') {
        tableHeaders.push({ ...headerObjSettings, text: 'classification' });
      }
      if (key === 'manufacturer') {
        tableHeaders.push({ ...headerObjSettings, text: 'manufacturer' });
      }
      if (key === 'gender') {
        tableHeaders.push({ ...headerObjSettings, text: 'gender' });
      }
      if (key === 'climate') {
        tableHeaders.push({ ...headerObjSettings, text: 'climate' });
      }
      if (key === 'created') {
        tableHeaders.push({ ...headerObjSettings, text: 'created' });
      }
      if (key === 'url') {
        tableHeaders.push({ ...headerObjSettings, text: 'url' });
      }
    });
  }
  return tableHeaders;
};
