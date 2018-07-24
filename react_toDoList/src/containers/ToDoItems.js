import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  completeTask as completeTaskActionCreator,
  deleteTask as deleteTaskActionCreator
} from '../actions/todo.actions';

const ToDoItems = props => {
  const { id, task } = props;
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td style={task.done ? { textDecoration: 'line-through' } : {}}>
          {task.name}
        </td>
        <td>
          <input
            type="checkbox"
            onChange={() =>
              props.completeTask({ id: task.id, done: task.done })
            }
            checked={task.done}
          />
        </td>
        <td>
          <input
            type="button"
            value="Delete"
            onClick={() => props.deleteTask({ id: task.id })}
          />
        </td>
      </tr>
    </tbody>
  );
};

ToDoItems.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    name: PropTypes.string
  }).isRequired,
  id: PropTypes.number.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(
  mapStateToProps,
  {
    completeTask: completeTaskActionCreator,
    deleteTask: deleteTaskActionCreator
  }
)(ToDoItems);
