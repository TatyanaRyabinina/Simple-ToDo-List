import { createSelector } from 'reselect';

const getCategories = state => state.categories;

const CategoriesSelectors = createSelector([getCategories], categories => {
  return categories.map(item => {
    return item;
  });
});

export default CategoriesSelectors;
