import Fuse from 'fuse.js';

import linhas from './../../linhas.json';

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

export const searchLinhas = (query = null) => {
  if (!fuse) {
    fuse = new Fuse(linhas, options);
  }

  let payload = linhas;

  if (query && query !== '') {
    payload = fuse.search(query);
  }

  return {
    type: 'SEARCH_LINHAS',
    payload
  };
};
