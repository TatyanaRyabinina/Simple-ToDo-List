import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import ToDoItems from './ToDoItems';
import { addTask as addTaskActionCreator } from './actions';
import style from './style.css';

const ToDoForm = props => {
  const { tasks, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          component="input"
          type="text"
          name="newToDo"
          placeholder="Enter a todo item..."
          required
        />
        <input type="submit" value="Add New ToDo Item" />
      </form>
      <table className="table">
        {tasks.map(function(task, index) {
          return <ToDoItems key={task.id} id={index + 1} task={task} />;
        })}
      </table>
    </div>
  );
};

ToDoForm.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      name: PropTypes.string
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const ToDoForms = reduxForm({
  form: 'todo',
  onSubmit: (values, _, { addTask, reset }) => {
    addTask(values);
    reset('todo');
  }
})(ToDoForm);

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(
  mapStateToProps,
  { addTask: addTaskActionCreator }
)(ToDoForms);

// const x = (obj, dispatch) => Object.keys(obj).reduce((acc, actionCreatorFnName) => ({ [actionCreatorFnName]: (...args) => dispatch(obj[actionCreatorFnName](...args)) }), {})
