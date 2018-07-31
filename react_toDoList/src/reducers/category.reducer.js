import {
  REQUEST_GET_CATEGORY_SUCCESS,
  REQUEST_ADD_CATEGORY_SUCCESS,
  REQUEST_DELETE_CATEGORY_SUCCESS,
  REQUEST_CATEGORY_FAILED
} from '../constants/category.constants';

const CategoryReducer = (state = [], action) => {
  switch (action.type) {
    case REQUEST_GET_CATEGORY_SUCCESS:
      state = action.category;
      return state;
    case REQUEST_ADD_CATEGORY_SUCCESS:
      state = state.concat(action.category);
      return state;
    case REQUEST_DELETE_CATEGORY_SUCCESS:
      console.log(state);
      state = state.filter(item => {
        return item.categoryId !== action.category.categoryId;
      });
      return state;
    case REQUEST_CATEGORY_FAILED:
      return state;
    default:
      return state;
  }
};

export default CategoryReducer;
