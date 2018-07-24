import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  REQUEST_GET_TASK_SUCCESS,
  REQUEST_ADD_TASK_SUCCESS,
  REQUEST_DELETE_TASK_SUCCESS,
  REQUEST_COMPLETE_TASK_SUCCESS
} from '../constants/actionTypes';

const TaskReducer = (state = [] /*tasks*/, action) => {
  switch (action.type) {
    case REQUEST_GET_TASK_SUCCESS:
      state = action.task;
      return state;
    case REQUEST_ADD_TASK_SUCCESS:
      state = state.concat(action.task);
      return state;
    case REQUEST_DELETE_TASK_SUCCESS:
      state = state.filter(item => {
        return item.id !== action.task.id;
      });
      return state;
    case REQUEST_COMPLETE_TASK_SUCCESS:
      state = state.slice();
      state.forEach(item => {
        if (item.id === action.task.id) {
          item.done = !item.done;
        }
      });
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  form: reduxFormReducer,
  tasks: TaskReducer
});

export default reducer;
