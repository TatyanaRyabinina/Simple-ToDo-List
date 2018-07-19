import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import tasks from './tasks';

const TaskReducer = (state = tasks, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      action.task.id = state.length > 0 ? state[state.length - 1].id + 1 : 0;
      state = state.concat(action.task);
      return state;
    case 'DELETE_TASK':
      state = state.filter(item => {
        return item.id !== action.task.id;
      });
      return state;
    case 'COMPLETE_TASK':
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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default store;
