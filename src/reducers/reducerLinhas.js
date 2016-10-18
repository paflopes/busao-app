import Fuse from 'fuse.js';

import linhas from './../../linhas.json';

export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_LINHAS':
      return searchLinhas(action.payload);
  }
  return linhas;
};

let fuse = null;

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  keys: [
    {name: "numero", weight: 0.4},
    {name: "nome", weight: 0.4},
    {name: "caminho.ida", weight: 0.1},
    {name: "caminho.volta", weight: 0.1},
  ]
};

const searchLinhas = (query = null) => {
  if (!fuse) {
    fuse = new Fuse(linhas, options);
  }

  let result = linhas;

  if (query && query !== '') {
    result = fuse.search(query);
  }

  return result;
};
