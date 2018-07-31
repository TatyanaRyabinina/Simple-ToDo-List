import { createSelector } from 'reselect';

const getToDos = state => state.todos;

const ToDosSelectors = createSelector([getToDos], todos => {
  return todos.map(item => {
    return item;
  });
});

export default ToDosSelectors;
