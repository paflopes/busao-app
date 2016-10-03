import linhas from './../../linhas.json';

export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_LINHAS':
      return action.payload;
  }
  return linhas;
};
