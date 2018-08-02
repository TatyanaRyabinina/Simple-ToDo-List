import { createSelector } from 'reselect';

const getToDos = state => state.todos;
const getSearch = state => state.search;

const ToDosSelectors = createSelector(
  [getToDos, getSearch],
  (todos, search) => {
    return todos.filter(todo => {
      if (todo.todoName.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
        return todo;
      }
    });
  }
);

export default ToDosSelectors;
