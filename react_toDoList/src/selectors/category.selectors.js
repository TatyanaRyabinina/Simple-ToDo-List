import { createSelector } from 'reselect';

const getCategories = state => state.categories;
const getSearch = state => state.search;

const CategoriesSelectors = createSelector(
  [getCategories, getSearch],
  (categories, search) => {
    return categories.filter(category => {
      if (
        category.categoryName.toLowerCase().indexOf(search.toLowerCase()) >= 0
      ) {
        return category;
      }
    });
  }
);

export default CategoriesSelectors;
