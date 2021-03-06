import {
  ADD_TODO,
  REQUEST_ADD_TODO_SUCCESS,
  DELETE_TODO,
  REQUEST_DELETE_TODO_SUCCESS,
  REQUEST_DELETE_TODO_IN_CATEGORY,
  COMPLETE_TODO,
  REQUEST_COMPLETE_TODO_SUCCESS,
  GET_TODO,
  REQUEST_GET_TODO_SUCCESS,
  REQUEST_TODO_FAILED
} from '../constants/todo.constants';

export const getToDo = categoryId => {
  return {
    type: GET_TODO,
    todo: {
      categoryId: categoryId
    }
  };
};

export const requestGetToDoSuccess = todo => {
  return {
    type: REQUEST_GET_TODO_SUCCESS,
    todo
  };
};

export const addToDo = todo => {
  return {
    type: ADD_TODO,
    todo: { ...todo, done: false }
  };
};

export const requestAddToDoSuccess = todo => {
  return {
    type: REQUEST_ADD_TODO_SUCCESS,
    todo
  };
};

export const deleteToDo = todo => {
  return {
    type: DELETE_TODO,
    todo
  };
};

export const requestDeleteToDoSuccess = todo => {
  return {
    type: REQUEST_DELETE_TODO_SUCCESS,
    todo
  };
};

export const requestDeleteToDoInCategory = category => {
  return {
    type: REQUEST_DELETE_TODO_IN_CATEGORY,
    category
  };
};

export const completeToDo = todo => {
  return {
    type: COMPLETE_TODO,
    todo
  };
};

export const requestCompleteToDoSuccess = todo => {
  return {
    type: REQUEST_COMPLETE_TODO_SUCCESS,
    todo
  };
};

export const requestToDoFailed = error => {
  return {
    type: REQUEST_TODO_FAILED,
    error
  };
};
