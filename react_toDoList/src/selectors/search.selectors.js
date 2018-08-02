import { createSelector } from 'reselect';

const getSearch = state => state.search;

const SearchSelectors = createSelector([getSearch], search => {
  return search;
});

export default SearchSelectors;
