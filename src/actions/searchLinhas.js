export const searchLinhas = (query = null) => {
  return {
    type: 'SEARCH_LINHAS',
    payload: query
  };
};
