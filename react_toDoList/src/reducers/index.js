import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import categoryReducer from './category.reducer';
import searchReducer from './search.reducer';
import currentCategoryReducer from './currentCategory.reducer';

const reducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  todos: todoReducer,
  categories: categoryReducer,
  search: searchReducer,
  currentCategory: currentCategoryReducer
});

export default reducer;
