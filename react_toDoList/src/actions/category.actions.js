import {
  ADD_CATEGORY,
  REQUEST_ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY,
  REQUEST_DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY,
  REQUEST_GET_CATEGORY_SUCCESS,
  REQUEST_CATEGORY_FAILED
} from '../constants/category.constants';

export const getCategory = () => {
  return {
    type: GET_CATEGORY
  };
};

export const requestGetCategorySuccess = category => {
  return {
    type: REQUEST_GET_CATEGORY_SUCCESS,
    category
  };
};

export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    category: {
      categoryName: category.newCategory
    }
  };
};

export const requestAddCategorySuccess = category => {
  return {
    type: REQUEST_ADD_CATEGORY_SUCCESS,
    category: category
  };
};

export const deleteCategory = category => {
  return {
    type: DELETE_CATEGORY,
    category
  };
};

export const requestDeleteCategorySuccess = category => {
  return {
    type: REQUEST_DELETE_CATEGORY_SUCCESS,
    category: category
  };
};

export const requestCategoryFailed = error => {
  return {
    type: REQUEST_CATEGORY_FAILED,
    error
  };
};
