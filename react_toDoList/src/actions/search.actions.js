import {
  GET_SEARCH_RESULT,
  CLEAR_SEARCH_RESULT
} from '../constants/search.constants';

export const search = search => {
  return {
    type: GET_SEARCH_RESULT,
    search: search || ''
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH_RESULT
  };
};
