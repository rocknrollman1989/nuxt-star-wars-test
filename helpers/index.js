export const findRouteApi = (route) => {
  return route.split('/').slice(-1);
};

const headerObjSettings = {
  align: 'center',
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

export const createColumnToView = (objToView, params) => {
  console.log(objToView, params);
  // params.forEach((param) => {
  //   return Object.keys(objToView).forEach((key) => {
  //     if (param.text === key) {
  //       // console.log(objToView[key]);
  //       return objToView[key];
  //     }
  //     return 'null';
  //   });
  // });
};
