import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  completeToDo as completeToDoActionCreator,
  deleteToDo as deleteToDoActionCreator
} from '../actions/todo.actions';

const ToDoItems = props => {
  const { id, todo } = props;
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td className={todo.done ? 'done' : ''}>{todo.todoName}</td>
        <td>
          <input
            type="checkbox"
            onChange={() =>
              props.completeToDo({ id: todo.id, done: todo.done })
            }
            checked={todo.done}
          />
        </td>
        <td>
          <input
            type="button"
            value="Delete"
            onClick={() => props.deleteToDo({ id: todo.id })}
          />
        </td>
      </tr>
    </tbody>
  );
};

ToDoItems.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    todoName: PropTypes.string
  }).isRequired,
  id: PropTypes.number.isRequired,
  completeToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  {
    completeToDo: completeToDoActionCreator,
    deleteToDo: deleteToDoActionCreator
  }
)(ToDoItems);
