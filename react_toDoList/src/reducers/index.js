import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import categoryReducer from './category.reducer';

const reducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  todos: todoReducer,
  categories: categoryReducer
});

export default reducer;
