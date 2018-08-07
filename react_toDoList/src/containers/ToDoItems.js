import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToDosSelectors from '../selectors/todo.selectors';
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
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                onChange={() => props.completeToDo(todo)}
                checked={todo.done}
              />
              <span className="checkbox-decorator">
                <span className="check" />
              </span>
            </label>
          </div>
        </td>
        <td>
          <button
            type="button"
            className="btn"
            onClick={() => props.deleteToDo(todo)}
          >
            Delete
          </button>
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
    todos: ToDosSelectors(state)
  };
}

export default connect(
  mapStateToProps,
  {
    completeToDo: completeToDoActionCreator,
    deleteToDo: deleteToDoActionCreator
  }
)(ToDoItems);
