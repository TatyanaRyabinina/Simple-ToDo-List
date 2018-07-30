import {
  REQUEST_GET_TODO_SUCCESS,
  REQUEST_ADD_TODO_SUCCESS,
  REQUEST_DELETE_TODO_SUCCESS,
  REQUEST_COMPLETE_TODO_SUCCESS,
  REQUEST_DELETE_TODO_IN_CATEGORY,
  REQUEST_TODO_FAILED,
  GET_TODO
} from '../constants/todo.constants';

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case REQUEST_GET_TODO_SUCCESS:
      state = action.todo;
      return state;
    case REQUEST_ADD_TODO_SUCCESS:
      state = state.concat(action.todo);
      return state;
    case REQUEST_DELETE_TODO_SUCCESS:
      state = state.filter(item => {
        return item.id !== action.todo.id;
      });
      return state;
    case REQUEST_COMPLETE_TODO_SUCCESS:
      state = state.slice();
      state.forEach(item => {
        if (item.id === action.todo.id) {
          item.done = !item.done;
        }
      });
      return state;
    case REQUEST_DELETE_TODO_IN_CATEGORY:
      state = state.filter(item => {
        return item.categoryId !== action.category.categoryId;
      });
      return state;
    case REQUEST_TODO_FAILED:
      return state;
    case GET_TODO:
      state = [];
      return state;
    default:
      return state;
  }
};

export default TodoReducer;
