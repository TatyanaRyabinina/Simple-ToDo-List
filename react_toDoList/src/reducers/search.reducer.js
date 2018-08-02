import {
  GET_SEARCH_RESULT,
  CLEAR_SEARCH_RESULT
} from '../constants/search.constants';

const SearchReducer = (state = '', action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      state = action.search;
      return state;
    case CLEAR_SEARCH_RESULT:
      state = '';
      return state;
    default:
      return state;
  }
};

export default SearchReducer;
