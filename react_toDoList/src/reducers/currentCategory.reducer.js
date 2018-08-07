import { REQUEST_GET_CURRENT_CATEGORY_SUCCESS } from '../constants/category.constants';

const CurrentCategoryReducer = (state = '', action) => {
  switch (action.type) {
    case REQUEST_GET_CURRENT_CATEGORY_SUCCESS:
      state = action.category.categoryName;
      return state;
    default:
      return state;
  }
};

export default CurrentCategoryReducer;
