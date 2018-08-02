import {
  GET_SEARCH_RESULT,
  CLEAR_SEARCH_RESULT
} from '../constants/search.constants';
import { GET_TODO } from '../constants/todo.constants';
import { GET_CATEGORY } from '../constants/category.constants';

const SearchReducer = (state = '', action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      state = action.search;
      return state;
    case CLEAR_SEARCH_RESULT:
      state = '';
      return state;
    case GET_TODO:
      state = '';
      return state;
    case GET_CATEGORY:
      state = '';
      return state;
    default:
      return state;
  }
};

export default SearchReducer;
