import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import categoryReducer from './category.reducer';
import searchReducer from './search.reducer';

const reducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  todos: todoReducer,
  categories: categoryReducer,
  search: searchReducer
});

export default reducer;
